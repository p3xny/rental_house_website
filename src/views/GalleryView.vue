<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

import Header from '@/components/Header.vue';

import livingRoom01 from '@/assets/gallery/living-room01.jpg';
import livingRoom02 from '@/assets/gallery/living-room02.jpg';
import livingRoom03 from '@/assets/gallery/living-room03.jpg';
import kitchen01 from '@/assets/gallery/kitchen01.jpg';
import bedroom01 from '@/assets/gallery/bedroom01.jpg';
import bedroom02 from '@/assets/gallery/bedroom02.jpg';
import benches from '@/assets/gallery/benches.jpg';

import tatraMountains from '@/assets/gallery/TatraMountains.jpg';
import tatraMountainsGreen from '@/assets/gallery/TatraMountains-Green.jpg';
import tatraMountainsClean from '@/assets/gallery/TatraMountains-Clean.jpg';
import tatraMountainsCleanOrange from '@/assets/gallery/TatraMountains-Clean-Orange.jpg';
import tatraMountainsHousePanorama from '@/assets/gallery/tatra-mountains-house-panorama.jpg';
import tatraMountainsClouds from '@/assets/gallery/TatraMountains-Green.jpg';

// Balcony
import balconyPurpleSky from '@/assets/gallery/purple-sky.jpg';
import balconySunset from '@/assets/gallery/balcony-sunset.jpg';

const imgs = [benches, bedroom01, bedroom02, kitchen01, livingRoom01, livingRoom02, livingRoom03,
  balconySunset, balconyPurpleSky, tatraMountains, tatraMountainsGreen, tatraMountainsClean,
  tatraMountainsCleanOrange, tatraMountainsHousePanorama, tatraMountainsClouds
];

const isHovered = ref(false);

const elementStyle = computed(() => ({
  backgroundColor: isHovered.value ? 'rgba(0, 0, 0, 0.5)' : '#2980b9',
  color: isHovered.value ? '#fff' : '#eee',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
}))

</script>

<template>
  <Header :isLightTheme="true" />
  <div class="gallery__body">
    <h1 class="gallery__title">Galeria</h1>
    <div class="gallery__img-grid">
      <div v-for="(img, index) in imgs" :key="index" style="
  position: relative;
  border: 5px solid white;" :class="`img-${index}`">
        <img :src="img" alt="image" @mouseenter="isHovered = true" @mouseleave="isHovered = false"
          :style="elementStyle">
        {{ console.log(index) }}
      </div>
    </div>
  </div>

</template>


<style>
.gallery__title {
  color: var(--clr-warm-beige-400);
  /* background-color: var(--clr-warm-beige-600); */
  width: 100%;
  font-size: var(--size-8xl);
  justify-self: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.gallery__body {
  background-color: var(--clr-light);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}

.gallery__img-grid {
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 300px;
  background-color: var(--clr-warm-beige-600);
  margin-bottom: 5rem;
}

.img {
  width: 50%;
}

@media (min-width: 475px) {
  .gallery__img-grid {
    grid-template-columns: 450px;
    grid-template-rows: 335px;
  }
}

@media (min-width: 640px) {
  .gallery__img-grid {
    grid-template-columns: 600px;
    grid-template-rows: 450px;
  }
}

@media (min-width: 768px) {
  .gallery__img-grid {
    grid-template-columns: 700px;
    grid-template-rows: 525px;
  }
}

@media (min-width: 1024px) {
  .gallery__img-grid {
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 225px 225px 225px 225px 225px;
  }

  .img-0 {
    grid-row: span 2;
    grid-column: span 2;
  }

  .img-1 {
    grid-row: span 1;
    grid-column: span 1;
  }

  .img-2 {}

  .img-3 {
    grid-row: span 2;
    grid-column: span 3;
  }

  .img-4 {
    grid-row: span 2;
    grid-column: span 3;
  }

  .img-5 {
    grid-row: span 1;
  }

  .img-6 {
    grid-column: span 1;
    grid-row: span 1;
  }

  .img-7 {
    grid-column: span 3;
  }

  .img-8 {
    grid-column: span 3;
  }

  .img-9 {
    grid-column: span 3;
  }

  .img-10 {
    grid-column: span 3;
  }

  .img-11 {
    grid-column: span 3;
  }

  .img-12 {
    grid-column: span 3;
  }

  .img-13 {}

  .img-14 {}
}

@media (min-width: 1280px) {
  .gallery__img-grid {
    grid-template-columns: 400px 400px 400px;
    grid-template-rows: 300px;
  }
}

@media (min-width: 1536px) {
  .gallery__img-grid {
    grid-template-columns: 475px 475px 475px;
    grid-template-rows: 325px;
  }
}
</style>