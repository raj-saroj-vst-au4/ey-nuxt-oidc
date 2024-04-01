<template>
  <nav
    class="navigation fixed w-4/5 z-30 left-[10%] top-8 rounded-3xl bg-slate-700 border-gray-200 dark:border-gray-600"
    :class="{ hidden: !isNavbarVisible }"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/eyantralogo.svg" class="h-8" alt="Eyantra Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Eyantra</span
        >
      </NuxtLink>
      <div
        class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse dark:text-white"
      >
        <span
          v-if="$oidc.isLoggedIn && $oidc.user.name"
          class="text-2xl font-semibold whitespace-nowrap"
          >Welcome back, {{ $oidc.user.name }} !</span
        >
        <button
          v-else
          @click="$oidc.login()"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
const { $oidc } = useNuxtApp();
const isNavbarVisible = ref(true);

let lastScrollTop = 0;

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop && currentScrollTop > 0) {
    isNavbarVisible.value = false;
  } else {
    isNavbarVisible.value = true;
  }

  lastScrollTop = currentScrollTop;
}
</script>
