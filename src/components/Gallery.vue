<script setup>
import { ref } from 'vue';

import benches from '@/assets/gallery/benches-fhd.png';
import kitchen from '@/assets/gallery/kitchen01-fhd.png';
import bathroom from '@/assets/gallery/bathroom01-fhd.png';
import livingRoom from '@/assets/gallery/living-room01-fhd.png';
import villageSunset from '@/assets/village-sunset.jpg';
import tatraMountainsGreen from '@/assets/gallery/TatraMountains-Green.png';

const homeGalleryImages = {
  livingRoom: { img: livingRoom, description: 'Living room image' },
  kitchen: { img: kitchen, description: 'Kitchen image' },
  bathroom: { img: bathroom, description: 'Bathroom image' },
  // benches: { img: benches, description: 'Fireplace with a mountain view image' },
  villageSunset: { img: villageSunset, description: 'Sunset in Tatra Mountain village' },
};

const imgs = Object.keys(homeGalleryImages);
const currentIndex = ref(0);
const currentImg = ref(homeGalleryImages[imgs[currentIndex.value]].img);

const nextImg = () => {
  currentIndex.value = (currentIndex.value + 1) % imgs.length;
  currentImg.value = homeGalleryImages[imgs[currentIndex.value]].img;
}

const prevImg = () => {
  currentIndex.value = (currentIndex.value - 1 + imgs.length) % imgs.length;
  currentImg.value = homeGalleryImages[imgs[currentIndex.value]].img;

}
</script>

<template>
  <div class="home-gallery__welcome-section">
    <h2 class="home-gallery__title">Coś więcej niż dom</h2>
  </div>
  <section class="home-gallery">
    <div class="image-wrapper">
      <img class="home-gallery__img" :src="currentImg" alt="Image">
      <button @click="prevImg" class="home-gallery-btn" id="prev-img-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="arrow">
          <path fill-rule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <button @click="nextImg" class="home-gallery-btn" id="next-img-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.home-gallery__welcome-section {
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: var(--clr-warm-beige-400);
}

.home-gallery__title {
  text-align: center;
  font-size: var(--size-2xl);

  color: var(--clr-light);
  color: var(--clr-warm-beige-200);
  padding-left: 2rem;
  padding-right: 2rem;
  text-transform: uppercase;
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.home-gallery-btn {
  display: inline-block;
  position: absolute;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: +0.05rem;

  background-color: transparent;

  padding: 0.5em 1em;
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  border: none;
  color: var(--clr-light);
  z-index: 2;

  height: 100%;
  width: 125px;
}

.home-gallery-btn:hover {
  cursor: pointer;
  color: var(--clr-gold);
  color: gold;
}

#prev-img-btn {
  top: 0;
  left: 0;
  transition: transform 0.3s;
}

#next-img-btn {
  top: 0;
  right: 0;
  transform: transform 0.3s;
}

#prev-img-btn:hover {
  transform: translateX(-5px);
}

#next-img-btn:hover {
  transform: translateX(5px);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
}

.home-gallery {
  text-align: center;
  justify-content: center;
  background-color: #FBE9D0;
}

.home-gallery__img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.home-gallery__img:nth-child(1) {
  z-index: 4;
}

.home-gallery__img:nth-child(2) {
  z-index: 3;
}

.home-gallery__img:nth-child(3) {
  z-index: 2;
}

.home-gallery__img:nth-child(4) {
  z-index: 1;
}

@media (min-width: 640px) {
  .home-gallery__title {
    font-size: var(--size-3xl);
  }
}

@media (min-width: 1024px) {
  .home-gallery__welcome-section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .home-gallery__title {
    font-size: var(--size-4xl);
  }
}
</style>