<template>
  <v-app>
    <slot />
  </v-app>
</template>
<script>
definePageMeta({
  middleware: ["auth"],
});
</script>
