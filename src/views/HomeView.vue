<script setup>
import { ref } from 'vue';
import lava from '@/assets/lawa.jpg';
import sunset from '@/assets/balcony-sunset.jpg';

import Header from '../components/Header.vue';
import Welcome from '../components/Welcome.vue';
import Reservation from '@/components/Reservation.vue';
import About from '../components/About.vue';
import Gallery from '../components/Gallery.vue';

const selectedDate = ref(null) 
</script>

<template>

  <!-- <div>
    <VCalendar />
    <VDatePicker v-model='selectedDate' />
  </div> -->

  <!doctype html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Domek Rzepiska</title>
  </head>

  <body>
    <Header />
    <div id="overlay">


    </div>
    <div id="app">
      <main>
        <Welcome />
        <Reservation />
        <About />
        <Gallery />
        <section></section>
      </main>
    </div>
  </body>

  </html>
</template>


<style>
/* body {
  font-family: 'General Sans', sans-serif;
  background: url(`${sunset}`) no-repeat center center/cover;
  overflow-x: hidden;
} */
</style>