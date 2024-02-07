<template>
  <div class="h-screen bg-gray-900">
    <slot />
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
