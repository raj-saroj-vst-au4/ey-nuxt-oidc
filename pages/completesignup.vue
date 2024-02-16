<template>
  <Head>
    <title>Complete Registration</title>
  </Head>
  <div class="min-h-screen py-16 bg-gray-900">
    <div class="container mx-auto">
      <div data-aos="fade-up">
        <div
          class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
        >
          <div
            class="w-full lg:w-1/2 flex flex-col items-center justify-between p-12 bg-no-repeat bg-cover bg-center"
            style="background-image: url('/images/robotics2.png')"
          >
            <h1 class="text-white text-3xl mb-3">Welcome Back</h1>
            <div>
              <p class="text-white">
                e-Yantra Robotics Competition (eYRC) hosted by<br />
                <a
                  href="https://www.e-yantra.org/"
                  class="text-blue-500 font-semibold"
                  >e-Yantra, IIT Bombay.
                </a>
              </p>
            </div>
          </div>
          <div class="w-full lg:w-1/2 py-16 px-12">
            <h2 class="text-3xl mb-4">Finish signup</h2>
            <p class="mb-4">Lets wrap-up registration</p>
            <form @submit.prevent="submitForm">
              <div class="my-5">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  v-model="userFname"
                  class="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div class="grid grid-cols-2 gap-5">
                <select
                  v-model="selectedCountry"
                  @change="onCountrySelected"
                  class="bg-gray-50 border border-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option :value="null" selected>Select Country</option>
                  <option
                    v-for="country in countries"
                    :key="country.id"
                    :value="country"
                  >
                    {{ country }}
                  </option>
                </select>
                <select
                  v-model="selectedCollegeState"
                  @change="onStateSelected"
                  class="bg-gray-50 border border-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option :value="null" selected>College State</option>
                  <option
                    v-if="selectedCountry"
                    v-for="collegestate in collegestates"
                    :key="collegestate.id"
                    :value="collegestate"
                  >
                    {{ collegestate }}
                  </option>
                </select>
              </div>
              <div class="mt-5">
                <select
                  v-model="selectedCollege"
                  class="bg-gray-50 border border-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option :value="null" selected>Your College</option>
                  <option
                    v-if="selectedCollegeState"
                    v-for="college in colleges"
                    :key="college.id"
                    :value="college.id"
                  >
                    {{ college.college_name }}
                  </option>
                </select>
              </div>
              <!-- done till here -->
              <div class="mt-5 grid grid-cols-2 gap-5">
                <select
                  v-model="selectedDesignation"
                  class="bg-gray-50 border border-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option :value="null" selected>Your Designation</option>
                  <option
                    v-for="designation in designations"
                    :key="designation.name"
                    :value="designation.id"
                  >
                    {{ designation.name }}
                  </option>
                </select>
                <select
                  v-model="selectedDepartment"
                  class="bg-gray-50 border border-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option :value="null" selected>Your Department</option>
                  <option
                    v-for="department in departments"
                    :key="department.id"
                    :value="department.id"
                  >
                    {{ department.name }}
                  </option>
                </select>
              </div>
              <div class="mt-5">
                <input
                  type="text"
                  placeholder="Your Address"
                  v-model="userAddress"
                  class="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div class="mt-5">
                <input
                  type="number"
                  placeholder="pincode"
                  v-model="userPincode"
                  class="border border-gray-400 py-1 px-2 w-full"
                />
              </div>

              <div class="mt-5">
                <button
                  class="w-full bg-blue-500 py-3 text-center text-white"
                  type="submit"
                >
                  Continue
                </button>
              </div>
              <div v-if="validationError" class="text-red-500 absolute z-20">
                <div class="relative mt-3">
                  {{ validationError }}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
definePageMeta({
  layout: "auth-blank",
  middleware: ["auth"],
});
const countries = ref([]);
const collegestates = ref([]);
const colleges = ref([]);
const departments = ref([]);
const designations = ref([]);
const { $oidc } = useNuxtApp();

const validationError = ref(null);
const selectedCountry = ref(null);
const selectedCollegeState = ref(null);
const selectedCollege = ref(null);
const selectedDepartment = ref(null);
const selectedDesignation = ref(null);
const userFname = ref(null);
const userAddress = ref(null);
const userPincode = ref(null);

const fetchCountries = async () => {
  try {
    const response = await useAuthFetch("/api/getcountries");
    // const countriesjson = await response.json();
    countries.value = response.countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

const fetchStates = async (country) => {
  try {
    const response = await useAuthFetch(`/api/getstates/${country}`);
    collegestates.value = response.states;
  } catch (error) {
    console.error("Error fetching states:", error);
  }
};

const fetchColleges = async (country, state) => {
  try {
    const res = await useAuthFetch(`/api/getcolleges/${country}/${state}`);
    // const clg = await res.json();
    colleges.value = res.colleges;
  } catch (err) {
    console.log("error fetching colleges:", err);
  }
};

const fetchDepartments = async () => {
  try {
    departments.value = await useAuthFetch("/api/getdepartments");
  } catch (error) {
    console.error("Error fetching departments:", error);
  }
};

const fetchDesignations = async () => {
  try {
    designations.value = await useAuthFetch("/api/getdesignations");
  } catch (error) {
    console.error("Error fetching designations:", error);
  }
};

onMounted(() => {
  fetchCountries()
    .then(() => fetchDepartments())
    .then(() => fetchDesignations());
});

const onCountrySelected = () => {
  if (selectedCountry.value) {
    const country = selectedCountry.value;
    fetchStates(country);
  }
};

const onStateSelected = () => {
  if (selectedCollegeState.value) {
    const state = selectedCollegeState.value;
    const country = selectedCountry.value;
    fetchColleges(country, state);
  }
};

const submitForm = async () => {
  try {
    const response = await useAuthFetch("/api/regsubmit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userFname.value,
        username: $oidc.user.preferred_username,
        email: $oidc.user.email,
        country: selectedCountry.value,
        state: selectedCollegeState.value,
        college: selectedCollege.value,
        department: selectedDepartment.value,
        designation: selectedDesignation.value,
        address: userAddress.value,
        pin: userPincode.value,
      }),
    });

    if (response.status == 200) {
      console.log("form submitted");
      validationError.value = null;
      $router.push("/home");
    } else if (response.status == 401) {
      console.log(response);
    } else {
      validationError.value = Object.values(response.errors)[0][0];
      console.log("server response ", Object.values(response.errors)[0][0]);
    }
  } catch (error) {
    console.error(error);
  }
};
</script>
