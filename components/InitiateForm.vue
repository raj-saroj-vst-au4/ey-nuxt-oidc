<template>
  <form id="signUpForm" class="p-8 md:p-12 shadow-md rounded-xl bg-gray-700">
    <!-- start step indicators -->
    <div class="form-header flex gap-3 mb-4 text-white text-xs text-center">
      <span
        class="stepIndicator flex-1 pb-8 relative"
        :class="[currentTab == 1 ? 'active' : currentTab > 1 ? 'finish' : '']"
        >Find College</span
      >
      <span
        class="stepIndicator flex-1 pb-8 relative"
        :class="[currentTab == 2 ? 'active' : currentTab > 2 ? 'finish' : '']"
        >Your Details</span
      >
      <span
        class="stepIndicator flex-1 pb-8 relative"
        :class="[currentTab == 3 ? 'active' : '']"
        >Get Proposal</span
      >
    </div>
    <!-- end step indicators -->

    <!-- step one -->
    <div :class="[currentTab === 1 ? 'block' : 'step']">
      <p class="text-md text-white leading-tight text-center mt-8 mb-5">
        Find your College
      </p>
      <div class="grid gap-4 mb-6 md:grid-cols-2">
        <div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Country</label
          >
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="selectedCountry"
            @change="onCountrySelected"
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
        </div>
        <div>
          <label
            for="states"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >State</label
          >
          <select
            v-model="selectedState"
            @change="onStateSelected"
            id="states"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option :value="null" selected>College State</option>
            <option
              v-if="selectedCountry"
              v-for="collegestate in states"
              :key="collegestate.id"
              :value="collegestate"
            >
              {{ collegestate }}
            </option>
          </select>
        </div>
      </div>
      <div class="mb-6">
        <label
          for="colleges"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >College</label
        >
        <select
          v-model="selectedCollege"
          id="colleges"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option :value="null" selected>Your College</option>
          <option
            v-if="selectedState"
            v-for="college in colleges"
            :key="college.id"
            :value="college.id"
          >
            {{ college.college_name }}
          </option>
        </select>
      </div>
    </div>

    <!-- step two -->
    <div :class="[currentTab === 2 ? 'block active' : 'step']">
      <p class="text-md text-white leading-tight text-center mt-8 mb-5">
        Personal Details
      </p>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          >
            Your Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Name"
          />
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Phone Number
          </label>
          <input
            class="appearance-none block w-full bg-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            placeholder="Number"
          />
        </div>
      </div>
      <div class="w-full mb-6">
        <label
          class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
        >
          Your Email ID
        </label>
        <input
          class="appearance-none block w-full bg-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="email"
          placeholder="Mail id"
        />
      </div>
    </div>

    <!-- step three -->
    <div :class="[currentTab === 3 ? 'block' : 'step']">
      <p class="text-md text-white leading-tight text-center mt-8 mb-5">
        Engage Stakeholders
      </p>

      <div class="mb-6 w-full">
        <label
          for="designations"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your Designation</label
        >
        <select
          v-model="selectedDesignation"
          id="designations"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg leading-tight focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      </div>
      <div class="grid gap-4 mb-6 md:grid-cols-2">
        <div>
          <label
            class="block tracking-wide text-white text-xs font-bold mb-2"
            for="grid-last-name"
          >
            College Contact
          </label>
          <input
            class="appearance-none block bg-gray-500 w-full rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            placeholder="Number"
          />
        </div>
        <div>
          <label class="block tracking-wide text-white text-xs font-bold mb-2">
            College Email ID
          </label>
          <input
            class="appearance-none block bg-gray-500 w-full rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            type="email"
            placeholder="Mail id"
          />
        </div>
      </div>
    </div>

    <!-- start previous / next buttons -->
    <div class="form-footer flex gap-3">
      <button
        v-if="currentTab > 1"
        type="button"
        class="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
        @click="nextPrev(-1)"
      >
        Previous
      </button>
      <button
        v-if="currentTab < 3"
        type="button"
        class="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
        @click="nextPrev(1)"
      >
        Next
      </button>
      <button
        v-else
        type="button"
        class="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
        @click="nextPrev(1)"
      >
        Submit
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
interface Country {
  id: string;
  name: string;
}
interface State {
  id: string;
  name: string;
  country_id: string;
}
interface College {
  id: string;
  college_name: string;
  state_id: string;
}
interface Designation {
  id: string;
  name: string;
}

const currentTab = ref(1);
const countries = ref<Country[]>([]);
const states = ref<State[]>([]);
const colleges = ref<College[]>([]);
const designations = ref<Designation[]>([]);

const selectedCountry = ref(null);
const selectedState = ref(null);
const selectedCollege = ref(null);
const selectedDesignation = ref(null);
const showTab = (num: number) => {
  currentTab.value = num;
};

const nextPrev = (n: number) => {
  if ((0 < n && currentTab.value < 3) || (0 > n && currentTab.value > 1)) {
    showTab(currentTab.value + n);
  }
};

const fetchCountries = async () => {
  try {
    const response: any = await $fetch("/api/anon/getcountries");
    countries.value = response.countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

const fetchStates = async (country: string) => {
  try {
    const response: any = await $fetch(`/api/anon/getstates/${country}`);
    states.value = response.states;
  } catch (error) {
    console.error("Error fetching states:", error);
  }
};

const fetchColleges = async (country: string, state: string) => {
  try {
    const response: any = await $fetch(
      `/api/anon/getcolleges/${country}/${state}`
    );
    // const clg = await res.json();
    colleges.value = response.colleges;
  } catch (err) {
    console.log("error fetching colleges:", err);
  }
};

const fetchDesignations = async () => {
  try {
    const response: any = await $fetch("/api/anon/getdesignations");
    designations.value = response;
  } catch (error) {
    console.error("Error fetching designations:", error);
  }
};

onMounted(() => {
  showTab(currentTab.value);
  fetchCountries().then(() => {
    fetchDesignations();
  });
});

const onCountrySelected = () => {
  if (selectedCountry.value) {
    const country = selectedCountry.value;
    fetchStates(country);
  }
};

const onStateSelected = () => {
  if (selectedState.value) {
    const country: string = selectedCountry.value || "IN";
    const state: string = selectedState.value;
    fetchColleges(country, state);
  }
};
</script>
