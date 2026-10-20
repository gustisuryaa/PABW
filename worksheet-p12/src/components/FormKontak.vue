<script setup>
import { ref } from 'vue'
import { aturanKolom } from '../data.js'

// Keadaan form hanya dipakai di komponen ini, jadi cukup ref lokal (bukan state bersama).
const kolomForm = Object.keys(aturanKolom)
const isiKosong = () => ({ nama: '', email: '', nim: '', pesan: '' })

const formulir = ref(null) // elemen <form>, dipasang lewat ref="formulir"
const isi = ref(isiKosong())
const galat = ref({ nama: false, email: false, nim: false, pesan: false })
const tombolNonaktif = ref(false)
const pesanStatus = ref('')

// nilai dinilai tanpa spasi di pinggir, sama seperti P11
const kolomSah = (nama) => aturanKolom[nama].sah(isi.value[nama].trim())
const semuaKolomSah = () => kolomForm.every(kolomSah)

// teks galat dikosongkan saat tidak ada galat, supaya aria-describedby tidak membaca pesan lama
const pesanGalat = (nama) => (galat.value[nama] ? aturanKolom[nama].pesan : '')
const tandaGalat = (nama) => (galat.value[nama] ? 'true' : null)

// satu pendengar di <form> untuk keempat kolom (event input dan focusout menggelembung)
const kolomDariEvent = (event) => event.target.closest('input, textarea')

function saatMengetik(event) {
  const kolom = kolomDariEvent(event)
  if (!kolom) return
  // galat yang sudah tampil dikoreksi saat mengetik; galat baru hanya muncul saat kolom ditinggalkan
  if (galat.value[kolom.name]) galat.value[kolom.name] = !kolomSah(kolom.name)
  tombolNonaktif.value = !semuaKolomSah()
  pesanStatus.value = ''
}

function saatKolomDitinggalkan(event) {
  const kolom = kolomDariEvent(event)
  if (kolom) galat.value[kolom.name] = !kolomSah(kolom.name)
}

function saatKirim() {
  kolomForm.forEach((nama) => { galat.value[nama] = !kolomSah(nama) })

  const kolomBermasalah = kolomForm.find((nama) => galat.value[nama])
  if (kolomBermasalah) {
    formulir.value.elements[kolomBermasalah].focus()
    return
  }

  pesanStatus.value = `Terima kasih, ${isi.value.nama.trim()}. Pesan Anda sudah dicatat (simulasi: belum ada server yang menerimanya).`
  isi.value = isiKosong()
  tombolNonaktif.value = false
  // reset() juga menghapus penanda :user-invalid peramban, jadi kolom kosong tidak langsung memerah
  formulir.value.reset()
}
</script>

<template>
  <form
    ref="formulir"
    action="#"
    method="post"
    novalidate
    @input="saatMengetik"
    @focusout="saatKolomDitinggalkan"
    @submit.prevent="saatKirim"
  >
    <fieldset>
      <legend>Data pengirim</legend>

      <p>
        <label for="nama">Nama lengkap</label>
        <input id="nama" v-model="isi.nama" name="nama" type="text"
               autocomplete="name" aria-describedby="nama-galat"
               :aria-invalid="tandaGalat('nama')" required>
        <span id="nama-galat" class="galat" :hidden="!galat.nama">{{ pesanGalat('nama') }}</span>
      </p>

      <p>
        <label for="email">Email</label>
        <input id="email" v-model="isi.email" name="email" type="email"
               autocomplete="email" aria-describedby="email-galat"
               :aria-invalid="tandaGalat('email')" required>
        <span id="email-galat" class="galat" :hidden="!galat.email">{{ pesanGalat('email') }}</span>
      </p>

      <p>
        <label for="nim">NIM</label>
        <input id="nim" v-model="isi.nim" name="nim" type="text" inputmode="numeric"
               pattern="[0-9]{8}" aria-describedby="nim-bantuan nim-galat"
               :aria-invalid="tandaGalat('nim')" required>
        <span id="nim-bantuan">Delapan digit angka, contoh 25523053.</span>
        <span id="nim-galat" class="galat" :hidden="!galat.nim">{{ pesanGalat('nim') }}</span>
      </p>

      <p>
        <label for="pesan">Pesan</label>
        <textarea id="pesan" v-model="isi.pesan" name="pesan" rows="4"
                  aria-describedby="pesan-galat"
                  :aria-invalid="tandaGalat('pesan')" required></textarea>
        <span id="pesan-galat" class="galat" :hidden="!galat.pesan">{{ pesanGalat('pesan') }}</span>
      </p>

      <button type="submit" :disabled="tombolNonaktif">Kirim</button>
    </fieldset>
  </form>
  <p id="status-kirim" role="status" :hidden="pesanStatus === ''">{{ pesanStatus }}</p>
</template>
