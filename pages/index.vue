<template>
  <div class="snap-y snap-mandatory h-screen no-scrollbar">
    <section class="snap-start flex flex-col items-center justify-end h-screen">
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
        data-aos="zoom-in-up"
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
        @click="checkSignup"
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
    <section>
      <div class="text-white py-8 bg-gray-900">
        <div
          class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24"
        >
          <div
            class="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8"
          >
            <p class="ml-2 text-red-600 uppercase tracking-loose">Timeline</p>
            <p
              class="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2"
            >
              eYantra 2024
            </p>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the eYantra robotics competition 2024
              process. Go through all the steps to know the exact process of the
              competition.
            </p>
            <a
              href="#"
              class="bg-transparent mr-auto hover:bg-red-600 text-red-600 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-600 hover:border-transparent"
            >
              Explore Now</a
            >
          </div>
          <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div class="container mx-auto w-full h-full">
              <div class="relative wrap overflow-hidden p-10 h-full">
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border z-10"
                  style="
                    right: 50%;
                    border: 2px solid #ff1100;
                    border-radius: 1%;
                  "
                ></div>
                <div
                  class="border-2-2 border-yellow-555 absolute h-full border z-10"
                  style="
                    left: 50%;
                    border: 2px solid #ff1100;
                    border-radius: 1%;
                  "
                ></div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-red-600">1-6 May, 2024</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Registration
                    </h4>
                    <p
                      class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                    >
                      Pick your favourite event(s) and register in that event by
                      filling the form corresponding to that event. Its that
                      easy :)
                    </p>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between items-center w-full right-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-left">
                    <p class="mb-3 text-base text-red-600">6-9 May, 2024</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Participation
                    </h4>
                    <p
                      class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                    >
                      Participate online. The links for your registered events
                      will be sent to you via email and whatsapp groups. Use
                      those links and show your talent.
                    </p>
                  </div>
                </div>
                <div
                  class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
                >
                  <div class="order-1 w-5/12"></div>
                  <div class="order-1 w-5/12 px-1 py-4 text-right">
                    <p class="mb-3 text-base text-red-600">10 May, 2024</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl">
                      Result Declaration
                    </h4>
                    <p
                      class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                    >
                      The ultimate genius will be revealed by our judging panel
                      on 10th May, 2024 and the resukts will be announced on the
                      whatsapp groups and will be mailed to you.
                    </p>
                  </div>
                </div>

                <div
                  class="mb-8 flex justify-between items-center w-full right-timeline"
                >
                  <div class="order-1 w-5/12"></div>

                  <div class="order-1 w-5/12 px-1 py-4">
                    <p class="mb-3 text-base text-red-600">12 May, 2024</p>
                    <h4 class="mb-3 font-bold text-lg md:text-2xl text-left">
                      Prize Distribution
                    </h4>
                    <p
                      class="text-sm md:text-base leading-snug text-gray-50 text-opacity-100"
                    >
                      The winners will be contacted by our team for their
                      addresses and the winning goodies will be sent at their
                      addresses.
                    </p>
                  </div>
                </div>
              </div>
              <img
                class="relative ml-8 lg:ml-36 -mt-48 md:-mt-48 w-48 z-30"
                src="/images/eyrcrocket.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="snap-start h-screen">
      <div
        data-aos="zoom-in-up"
        class="relative flex items-center justify-center h-screen overflow-hidden"
      >
        <!-- <div
          data-aos="zoom-in-down"
          class="relative z-30 p-5 text-2xl text-white bg-gray-800 bg-opacity-50 rounded-xl"
        >
          eYantra Robotics Competition
        </div> -->
        <video
          autoplay
          loop
          muted
          class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/videos/eyrc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
    <section class="snap-start h-screen">
      <div
        class="relative flex items-center justify-center h-screen bg-gray-900"
      >
        <div
          class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2"
        >
          <div
            class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1"
          >
            <h1
              class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white"
            >
              We Provide all the components you need
            </h1>
            <p
              class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400"
            >
              Entire Lab
            </p>
          </div>
          <div
            class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0"
          >
            <img
              src="/images/lib1.png"
              alt=""
              class="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src="/images/lib2.png"
              alt=""
              class="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src="/images/lib3.png"
              alt=""
              class="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>
          <dl
            class="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2"
          >
            <dt class="sr-only">Reviews</dt>
            <dd class="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                class="mr-1 stroke-current dark:stroke-indigo-500"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span
                >4.89
                <span class="text-slate-400 font-normal">(128)</span></span
              >
            </dd>
            <dt class="sr-only">Location</dt>
            <dd class="flex items-center dark:sm:text-white">
              <svg
                width="2"
                height="2"
                aria-hidden="true"
                fill="currentColor"
                class="mx-3 text-slate-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-1 text-slate-400 dark:text-slate-500"
                aria-hidden="true"
              >
                <path
                  d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z"
                />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Straight to your college
            </dd>
          </dl>
          <div
            class="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4"
          >
            <button
              type="button"
              class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Get Components
            </button>
          </div>
          <p
            class="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400"
          >
            Frustrated by remote classroom learning and lack of practical
            exposure?? We bring you one of India’s biggest Robotics Competitions
            - the e-Yantra Robotics Competition (eYRC) hosted by e-Yantra, IIT
            Bombay.
          </p>
        </div>
      </div>
    </section>
    <!-- <div class="absolute z-20 bottom-10 right-10">
      <button
        @click="togglePopover"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        chat
      </button>
       <div v-if="showPopover" class="...">
        <div class="...">
          <h3 class="...">Popover click</h3>
        </div>
        <div class="...">
          <p>And here's some amazing content. It's very engaging. Right?</p>
        </div>
        <div class="..."></div>
      </div> 
    </div> -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "topnav",
});
// Access the plugin through the composable
const { $oidc } = useNuxtApp();
const router = useRouter();
const showPopover = ref(false);

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
const checkSignup = async () => {
  if ($oidc.isLoggedIn) {
    // console.log("auth user, sending data");
    const response = await useAuthFetch("/api/protected", {
      method: "POST",
    });
    if (response) {
      router.push("/home");
    }
  } else {
    $oidc.login();
  }
};

const togglePopover = () => {
  showPopover.value = !showPopover.value;
};
</script>
