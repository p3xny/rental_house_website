<script setup>
import { ref } from 'vue';

import benches from '@/assets/gallery/benches-fhd.png';
import kitchen from '@/assets/gallery/kitchen01-fhd.png';
import bathroom from '@/assets/gallery/bathroom01-fhd.png';
import livingRoom from '@/assets/gallery/living-room01-fhd.png';

const galleryImages = {
  livingRoom: { img: livingRoom, description: 'Living room image' },
  kitchen: { img: kitchen, description: 'Kitchen image' },
  bathroom: { img: bathroom, description: 'Bathroom image' },
  benches: { img: benches, description: 'Fireplace with a mountain view image' },
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
    <div class="image-wrapper">
      <!-- <div class="image-overlay"></div> -->
      <img class="gallery__img" :src="currentImg" alt="Image">
      <button @click="prevImg" id="prev-img">Prev</button>
      <button @click="nextImg" id="next-img">Next</button>
    </div>
  </section>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  display: inline-block;
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

.gallery {
  text-align: center;
  justify-content: center;

}

.gallery__title {
  color: var(--clr-warm-beige-400);
}

.gallery__img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
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