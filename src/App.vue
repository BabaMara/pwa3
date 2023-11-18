<script setup>
import { onMounted, ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router';

import { comparer } from '@/utils/sort.js';

import axios from 'axios';

import employeesData from '@/assets/json/employees';

let update = ref(false);

onMounted(async () => {
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) {
    console.log('registration failed!');
    return;
  }
  registration.addEventListener('updatefound', () => (update.value = true));
  if (registration.waiting) update.value = true;

});


const lelu = async () => {
  const registration = await navigator.serviceWorker.getRegistration();
  if (registration) registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
  window.location.reload();
};
</script>

<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-3">
    <div v-if="update" class="alert alert-warning text-center w-75" role="alert">
      A new update is available
      <br />
      <button type="button" @click="lelu" class="btn btn-outline-dark">Update</button>
    </div>
    <div>
      <RouterLink
        to="/"
        class="me-3 mb-5 text-black"
        active-class="border-bottom border-5 border-black"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="ms-3 mb-5 text-black"
        active-class="border-bottom border-5 border-black"
        >About</RouterLink
      >
    </div>
    <RouterView/>
  </div>
</template>

<style>
@font-face {
  font-family: 'Montserrat';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src: local('Montserrat'), url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
}

* {
  font-family: 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
}
</style>

