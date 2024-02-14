<template>
  <section class="flex flex-col items-center justify-end h-screen">
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera
        :position="[-7, 5, -9]"
        :args="[1.3, 1, 0.1, 100]"
      />
      <OrbitControls :enableZoom="false" />
      <TresMesh ref="droneRef">
        <Suspense>
          <Drone />
        </Suspense>
      </TresMesh>
      <TresDirectionalLight
        color="#212121"
        :position="[6, 3, 6]"
        :intensity="2"
      />
      <TresAmbientLight :intensity="8" />
    </TresCanvas>
    <div
      class="z-20 mb-16 font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
    >
      Revolutionize learning with e-Yantra Competitions
      <span
        class="text-red-700 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          class="block animate-text-slide-3 text-left leading-tight [&_li]:block"
        >
          <li>eYRC</li>
          <li>eYIC</li>
          <li>eYSRC</li>
          <li aria-hidden="true">eYRC</li>
        </ul>
      </span>
    </div>
    <button
      type="button"
      class="z-20 mb-12 text-red-700 border border-red-700 hover:text-white hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      Get Started
      <svg
        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "topnav",
});
// Access the plugin through the composable
const gl = {
  clearColor: "#212121",
  shadows: true,
  windowSize: true,
};
const droneRef = shallowRef(null);
const { onLoop } = useRenderLoop();
onLoop(({ delta, elapsed }) => {
  if (droneRef.value) {
    droneRef.value.rotation.y += delta;
    droneRef.value.position.y = (0.05 - Math.sin(elapsed - 10)) * 0.03;
    // droneRef.value.rotation.z = elapsed * 0.2;
  }
});
</script>
