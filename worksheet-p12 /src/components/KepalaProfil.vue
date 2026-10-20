<script setup>
// Satu-satunya komponen yang menerima props. Anak hanya membaca, tidak mengubah.
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <h1>{{ props.profil.nama }}</h1>
  <p class="tagline">{{ props.profil.peran }}.</p>
</template>
