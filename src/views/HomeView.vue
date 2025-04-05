<script setup>
import { ref, watch } from 'vue';
import { useCalendarStore } from '@/stores/calendarStore';
import { useScreens } from 'vue-screen-utils';

import Header from '../components/Header.vue';
import Welcome from '../components/Welcome.vue';
import Reservation from '@/components/Reservation.vue';
import About from '../components/About.vue';
import Gallery from '../components/Gallery.vue';
import Contact from '../components/Contact.vue';


const isCalendarOpen = ref(false);
const calendarStore = useCalendarStore();
const { mapCurrent } = useScreens({
  xs: '0px',
  sm: '550px',
  md: '768px',
  lg: '1024px',
});
const columns = mapCurrent({ sm: 2 }, 2);
const expanded = mapCurrent({ lg: false }, true);
const attrs = ref([
  {
    key: 'Any',
    dot: true,
    dates: new Date(),
    expanded: true,
  }
]);
const userLocale = ref('pl-PL');
</script>


<template>
  <div id="overlay" v-if="calendarStore.isCalendarVisible" @click="calendarStore.toggleCalendar()"></div>

  <!doctype html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Domek Rzepiska</title>
  </head>

  <body>

    <div class="hero__bg"></div>
    <Header />

    <div id="app">
      <main>
        <div id="calendar-container" class="calendar-container" v-if="calendarStore.isCalendarVisible">
          <VCalendar :min-date="new Date()" :columns="columns" :attributes="attrs" :expanded="expanded"
            :locale="userLocale" />
        </div>

        <Welcome />
        <Reservation />
        <About />
        <Gallery />
        <section></section>
        <Contact />
      </main>
    </div>
  </body>

  </html>
</template>


<style>
.hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  background: url('../assets/panorama.jpg') no-repeat center/cover;
  z-index: -1;
  filter: brightness(60%);
}

.calendar-container {
  position: fixed;
  grid-template-columns: 500px 500px;
  gap: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  /* max-width: 500px; */
  margin: 20px auto;
  /* padding: 20px; */
}

.vc-title {
  color: var(--clr-light);
}

.vc-day {
  height: 25px;
  min-height: 25px;
  width: 20px;
}

.vc-weekday {
  /* color: var(--clr-slate600); */
}

.vc-weeks {
  width: 180px;
  min-width: 180px;
  height: 180px;

  color: var(--clr-warm-beige-800);
}

.vc-pane {
  min-width: 180px;
  background-color: var(--clr-light);
  border-radius: 18px;
}

@media (min-width: 475px) {
  .vc-day {
    height: 32px;
    width: 26px;
  }

  .vc-day-content {
    font-size: var(--size-base);
  }

  .vc-weeks {
    width: 230px;
    height: 210px;
  }

  .vc-pane {
    width: 230px;
  }
}

@media (min-width: 640px) {
  .vc-day {
    height: 40px;
    width: 32px;
  }

  .vc-day-content {
    font-size: var(--size-base);
  }

  .vc-weeks {
    width: 260px;
    height: 250px;
  }

  .vc-pane {
    width: 260px;
  }
}

@media (min-width: 768px) {
  .vc-day {
    height: 48px;
    width: 40px;
  }

  .vc-day-content {
    font-size: var(--size-lg);
  }

  .vc-weeks {
    width: 320px;
    height: 300px;
  }

  .vc-pane {
    width: 320px;
  }
}

@media (min-width: 1024px) {
  .vc-day {
    height: 64px;
    width: 52px;
  }

  .vc-day-content {
    font-size: var(--size-xl);
  }

  .vc-weeks {
    width: 400px;
    height: 400px;
  }

  .vc-pane {
    width: 400px;
  }
}

@media (min-width: 1280px) {
  .vc-day {
    height: 72px;
    width: 64px;
  }

  .vc-weeks {
    width: 450px;
    height: 525px;
  }

  /* .vc-header, */
  .vc-title,
  .vc-day-content,
  .vc-weekday {
    font-size: var(--size-2xl);
  }

  .vc-weekday {
    padding-top: 2rem;
  }

  .vc-pane {
    width: 450px;
    height: 525px;
  }
}
</style>