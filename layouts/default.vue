<template>
  <SideBar />
  <div class="p-4 sm:ml-64 bg-gray-900 min-h-screen">
    <slot />
  </div>
</template>
<script setup>
import SideBar from "~/components/SideBar.vue";
</script>
