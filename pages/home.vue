<template>
  <h1>Homepage</h1>
  <span>{{ $oidc }}</span>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
const { $oidc } = useNuxtApp();
</script>
