<script setup>

import Header from '../components/Header.vue';
import Welcome from '../components/Welcome.vue';
import Reservation from '@/components/Reservation.vue';
import About from '../components/About.vue';
import Gallery from '../components/Gallery.vue';
import Contact from '../components/Contact.vue';
</script>


<template>
  <!doctype html>
  <html lang="en">

  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Domek Rzepiska</title>
  </head>

  <body>
    <div class="hero__bg"></div>
    <Header />

    <div id="app">
      <main>
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
  filter: brightness(50%);
}

.calendar-container {
  position: fixed;
  grid-template-columns: 500px 500px;
  gap: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  margin: 20px auto;
}

.vc-title {
  color: var(--clr-light);
}

.vc-day {
  height: 25px;
  min-height: 25px;
  width: 20px;
}

.vc-weekday {}

.vc-weeks {
  width: 180px;
  min-width: 180px;
  height: 180px;

  /* color: var(--clr-dark-blue); */
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