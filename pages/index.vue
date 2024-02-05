<template>
  <div>
    <NavBar />
    <h2>index page</h2>
  </div>
</template>

<script setup>
// Access the plugin through the composable
const oidc = useOidc();
// Or through injected variable
const { $oidc } = useNuxtApp();
</script>
