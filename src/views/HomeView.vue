<script setup>
import { ref } from 'vue';

import { comparer } from '@/utils/sort.js';

import ButtonGet from '@/components/ButtonGet.vue';
import CardView from '@/components/CardView.vue';
import axios from 'axios';


let employees = ref([]);

const fetchEmployees = async () => {
  const { data } = await axios.get('/employees');
  employees.value = data.sort(({ name: objA }, { name: objB }) => comparer(objA.last, objB.last));
};

const removeEmployee = (id) => (employees.value = employees.value.filter((el) => el.id !== id));

const lelu = async () => {
  const registration = await navigator.serviceWorker.getRegistration();
  if (registration) registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
  window.location.reload();
};
</script>

<template>
  <div id="app" class="container d-flex flex-column justify-content-center align-items-center mt-3">
    <ButtonGet @getEmployees="fetchEmployees"></ButtonGet>
    <CardView :employees="employees" @remove="removeEmployee"
      ><button type="button" @click="lelu" class="btn btn-outline-danger">Delete</button></CardView
    >
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