<script setup>
import { ref, computed, onMounted } from 'vue';

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
import tatraMountainsClouds from '@/assets/gallery/TatraMountains-Clouds.jpg';

// Balcony
import balconyPurpleSky from '@/assets/gallery/purple-sky.jpg';
import balconySunset from '@/assets/gallery/balcony-sunset.jpg';

const imgs = [benches, bedroom01, bedroom02, kitchen01, livingRoom01, tatraMountainsClouds, balconySunset, livingRoom02, livingRoom03,
  balconyPurpleSky, tatraMountains, tatraMountainsClean, tatraMountainsGreen,
  tatraMountainsCleanOrange, tatraMountainsHousePanorama,
];

const isHovered = ref(false);

const elementStyle = computed(() => ({
  backgroundColor: isHovered.value ? 'rgba(0, 0, 0, 0.5)' : '#2980b9',
  color: isHovered.value ? '#fff' : '#eee',
  borderRadius: '8px',
  border: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
}))


const viewerSrc = ref('');
const viewerVisible = ref(false);

const showImage = (src) => {
  viewerSrc.value = src;
  viewerVisible.value = true;
}

const closeViewer = () => {
  viewerVisible.value = false;
}
</script>

<template>

  <span id="close" @click="closeViewer" v-if="viewerVisible">&times;</span>
  <div id="image-viewer" v-show="viewerVisible" :style="{ display: viewerVisible ? 'block' : 'none' }">
    <img :src="viewerSrc" id="full-image">
  </div>
  <div class="image-viewer-overlay" v-if="viewerVisible" @click="closeViewer">
    <button
      style="width: 3rem; height: 100%; background-color: black; position: absolute; top:0; left:0; color: white; font-size: var(--size-3xl);">L</button>

  </div>

  <Header :isLightTheme="true" />
  <div class="gallery__body" id="galeria">
    <h1 class="gallery__title">Galeria</h1>
    <div class="gallery__img-grid">
      <div v-for="(img, index) in imgs" :key="index" style="
  position: relative;
  border: 6px solid transparent;" :class="[`img-${index}`, 'img-container', { expanded: expandedIndex === index }]"
        class="gallery-item image" @mouseenter="" @mouseleave="" :id="`img-${index}`" @click="showImage(img)">
        <img :src="img" alt="image" @mouseenter="isHovered = true" @mouseleave="isHovered = false"
          :style="elementStyle">
        <div class="img-overlay">
        </div>
      </div>
    </div>

  </div>
</template>


<style>
.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.img-container:hover {}

.img-container:hover .img-overlay {
  opacity: 1;
  cursor: pointer;
}

.gallery__title {
  font-family: 'Playfair Display', serif;
  color: var(--clr-warm-beige-400);
  width: 100%;
  font-size: var(--size-8xl);
  justify-self: center;
  padding-top: 5rem;
  padding-bottom: 1rem;
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

.gallery-item {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 0.7rem;
  grid-column: span 1;
}

.gallery-item:hover {
  transform: scale(1.015);
  box-shadow: 1rem 1rem 1rem 0 (0, 0, 0, 1);
  border: 5px solid white;
}

.gallery-item.expanded {
  z-index: 10;
}

.gallery-item img {
  width: 100%;
  height: 100%;
}

.gallery-item.expanded img {
  box-shadow: 8px 8px 8px 8px (0, 0, 0, 0.6);
}

.gallery__img-grid {
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 300px;
  background-color: var(--clr-light);
  margin-bottom: 5rem;
}

/* IMAGE VIEWER START */
#image-viewer {
  position: fixed;
  display: none;
  z-index: 10002;
  top: 50%;
  left: 50%;
  transition: all 0.3s;
  transform: translate(-50%, -50%);
  transform-origin: center;
}

#image-viewer div {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

#image-viewer img {
  max-width: 90vw;
  max-height: 90vh;
  animation: viewImg 0.6s;
}

#close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: var(--clr-light);
  font-size: 2rem;
  z-index: 10000;
}

.image-viewer-overlay {
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  opacity: 1;
  z-index: 9999;
}

#close:hover,
#close:focus {
  cursor: pointer;
  opacity: 0.6;
}


@keyframes viewImg {
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

/* IMAGE VIEWER END */



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


  .img-3 {
    grid-row: 3 / 3;
    grid-column: 1;

  }

  .img-4 {
    grid-row: 4 / 4;
    grid-column: 1;
  }

  .img-5 {
    grid-row: 5 / 6;
    grid-column: 1 / 2;
  }

  .img-6 {
    grid-column: span 2;
    grid-row: span 2;
  }

  .img-7 {
    grid-column: span 1;
  }

  .img-8 {
    grid-column: span 1;
  }

  .img-9 {
    grid-column: span 2;
  }

  .img-10 {
    /* grid-column: span 3; */
  }

  .img-11 {
    /* grid-column: span 2; */
  }

  .img-12 {
    grid-column: span 2;
  }

  .img-13 {

    grid-column: span 2;
  }

  .img-14 {
    /* grid-column: span 2; */
  }
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