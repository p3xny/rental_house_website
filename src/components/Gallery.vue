<script setup>
import { ref } from 'vue';

import benches from '@/assets/gallery/benches.jpg';
import kitchen from '@/assets/gallery/kitchen01.jpg';
import bathroom from '@/assets/gallery/bathroom01.jpg';
import livingRoom from '@/assets/gallery/living-room01.jpg';

const galleryImages = {
  benches: { img: benches, description: 'Fireplace with a mountain view image' },
  bathroom: { img: bathroom, description: 'Bathroom image' },
  kitchen: { img: kitchen, description: 'Kitchen image' },
  livingRoom: { img: livingRoom, description: 'Living room image' },
};

const imgs = Object.keys(galleryImages);
const currentIndex = ref(0);
const currentImg = ref(galleryImages[imgs[currentIndex.value]].img);

const nextImg = () => {
  currentIndex.value = (currentIndex.value + 1) % imgs.length;
  currentImg.value = galleryImages[imgs[currentIndex.value]].img;
}

const prevImg = () => {
  currentIndex.value = (currentIndex.value - 1 + imgs.length) % imgs.length;
  currentImg.value = galleryImages[imgs[currentIndex.value]].img;

}
</script>

<template>
  <section class="gallery section">
    <h2 class="gallery__title">Galeria</h2>
    <img class="gallery__img" :src="currentImg" alt="Image">
    <button @click="prevImg" id="prev-img">Prev</button>
    <button @click="nextImg" id="next-img">Next</button>
  </section>
</template>

<style scoped>
button {
  width: 70px;
  height: 35px;
}

.gallery {
  text-align: center;
  justify-content: center;

}

.gallery__title {
  color: var(--clr-warm-beige-400);
}

.gallery__img {
  /* height: 600px; */
  width: 100%
}

.gallery__img:nth-child(1) {
  z-index: 4;
}

.gallery__img:nth-child(2) {
  z-index: 3;
}

.gallery__img:nth-child(3) {
  z-index: 2;
}

.gallery__img:nth-child(4) {
  z-index: 1;
}
</style>