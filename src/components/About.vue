<script setup>
import lava from '@/assets/lawa.jpg';
import villageSunset from '@/assets/village-sunset.jpg';
import TatraMountainsGreen from '@/assets/gallery/TatraMountains-Green.png';
import purpleSky from '@/assets/gallery/purple-sky-fhd-high.png';
import tatraMountainsHousePanorama from '@/assets/gallery/tatra-mountains-house-panorama.jpg';
</script>

<template>
  <section class="o-nas section-wide" id="o-nas">
    <div class="o-nas__content">
      <h2 class="o-nas__title">Dom z widokiem na panoramę Tatr</h2>
      <p class="o-nas__description">Domek wypoczynkowy z pięknym widokiem na
        <strong>panoramę Tatr</strong>.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ex dignissimos maiores quis expedita officia
        fugiat ad consectetur libero nostrum vel aperiam, ipsum doloremque, numquam incidunt rerum molestias quod
        facilis optio deleniti dolorum voluptatibus laudantium? Alias et officiis incidunt animi voluptatem
        cupiditate. Eius repudiandae consequatur molestias fugit totam sed adipisci ducimus, libero exercitationem
        fuga voluptates praesentium quibusdam dolores dignissimos laboriosam impedit id ab. Neque dolores
        quibusdam
        alias eligendi earum veniam.
      </p>
    </div>
    <br class="img-separator">
    <div class="o-nas__img-wrapper">
      <!-- <img class="o-nas__img" :src="villageSunset" alt="Mountain Village Sunset View"> -->
      <img class="o-nas__img" :src="tatraMountainsHousePanorama" alt="Tatra Mountains panorama view from balcony">
    </div>
    <br>
  </section>
</template>

<style scoped>
br {
  display: block;
}

.o-nas {
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  position: relative;
  background-color: #FBE9D0;
  text-align: left;

  padding-top: 3rem;
  padding-bottom: 3rem;
}

.o-nas__title {
  font-size: var(--size-2xl);
  color: var(--clr-warm-beige-600);

  justify-self: left;
  padding-bottom: 1rem;
  padding-left: 1rem;
}


.o-nas__description {
  max-width: 60ch;
  font-size: var(--size-sm);
  color: var(--clr-slate800);
  padding-left: 1rem;
  padding-right: 1rem;
}

.o-nas__img {
  width: 94%;
  justify-self: center;
  border-radius: 18px;
  /* box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.4); */
}

.o-nas__line {
  border: 1px solid var(--clr-slate800);
  padding-top: 50%;
  display: none;
  margin-right: 1rem;
  margin-left: 1rem;
}

.o-nas__hr {
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  color: var(--clr-dark);
}

@media (min-width: 475px) {}

@media (min-width: 640px) {
  .o-nas__title {
    font-size: var(--size-3xl);
  }

  .o-nas__description {
    max-width: 80ch;
    font-size: var(--size-base);
  }
}

@media (min-width: 768px) {}

@media (min-width: 1024px) {
  .img-separator {
    display: none;
  }

  .o-nas {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .o-nas__title,
  .o-nas__description {
    padding-left: 2rem;
  }

  .o-nas__description {
    max-width: 60ch;
    padding-bottom: 1rem;
  }

  .o-nas__line {
    display: inline-block;
  }

}


@media (min-width: 1200px) {
  .o-nas__description {
    max-width: 50ch;
  }
}

@media (min-width: 1280px) {}


@media (min-width: 1536px) {

  .o-nas__img {
    width: 60rem;
    margin-right: 2rem;
  }

  .o-nas__title {
    font-size: var(--size-5xl);
  }

  .o-nas__description {
    font-size: var(--size-xl);
  }
}

@media (min-width: 1675px) {
  .o-nas__img {
    width: 63rem;
  }
}

@media (min-width: 1750px) {
  .o-nas__img {
    width: 67rem;
  }
}

@media (min-width: 1920px) {
  .o-nas__img {
    width: 76rem;
  }

  .o-nas__title {
    font-size: var(--size-6xl);
  }

  .o-nas__description {
    font-size: var(--size-2xl);
  }
}

@media (min-width: 2050px) {
  .o-nas__img {
    /* width: 1fr; */
    width: 100%;
  }
}
</style>