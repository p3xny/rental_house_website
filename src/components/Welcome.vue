<script setup>
</script>

<template>
  <section class="welcome section">
    <!-- <img class="welcome__img" src="/balcony-sunset.jpg" alt=""> -->
    <h2 class="welcome__name">Domek Rzepiska</h2>
    <hr class="welcome__hr" style="width: 40%">
    <h1 class="welcome__title">Panorama Tatr</h1>
    <h2 class="welcome__subtitle">Niezapomniane chwile i piękne widoki</h2>
  </section>
</template>

<style scoped>
.welcome {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* background: url('/balcony-sunset.jpg'); */
  height: 35vh;
}

.welcome__img {
  z-index: -1;
  top: 0;
  position: fixed;
  width: 29.6875rem;
}

.welcome__name {
  /* color: var(--clr-slate400); */
  color: burlywood;
  text-transform: uppercase;
  font-size: var(--size-xl);
  letter-spacing: -0.05rem;
  line-height: 0.9;
}

.welcome__title {
  /* color: var(--clr-slate400); */
  color: burlywood;
  text-transform: uppercase;
  font-size: var(--size-2xl);
  letter-spacing: -0.05rem;
  line-height: 0.9;
}

.welcome__subtitle {
  /* color: #b9c7dc; */
  color: var(--clr-warm-beige-400);
  font-size: var(--size-sm);
  line-height: 0.9;
}

.welcome__hr-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
}

.welcome__hr {
  /* width: 500px; */
  /* width: 60%; */
  color: var(--clr-slate400);
  height: 1px;
}


@media (min-width: 475px) {
  .welcome__hr {
    /* width: 60%; */
    color: var(--clr-slate400);
  }

  .welcome__img {
    width: 40rem;
    height: 26.5rem;
  }


  .welcome__name {
    font-size: var(--size-2xl);
  }

  .welcome__title {
    font-size: var(--size-3xl);
  }

  .welcome__subtitle {
    font-size: var(--size-base);
  }
}

@media (min-width: 640px) {
  .welcome__img {
    width: 48rem;
    height: 31.75rem;
  }

  .welcome__name {
    font-size: var(--size-2xl);
  }

  .welcome__title {
    font-size: var(--size-3xl);
  }

  .welcome__subtitle {
    font-size: var(--size-lg);
  }
}

@media (min-width: 768px) {
  .welcome__img {
    width: 64rem;
    height: 42.25;
  }

  .welcome__name {
    font-size: var(--size-3xl);
  }

  .welcome__title {
    font-size: var(--size-4xl);
  }

  .welcome__subtitle {
    font-size: var(--size-xl);
  }
}

@media (min-width: 1024px) {
  .welcome__img {
    width: 80rem;
    height: 52.8;
  }

  .welcome__name {
    font-size: var(--size-4xl);
  }

  .welcome__title {
    font-size: var(--size-5xl);
  }

  .welcome__subtitle {
    font-size: var(--size-2xl);
  }

}

@media (min-width: 1280px) {
  .welcome__img {
    width: 96rem;
    height: 63.4;
  }

  .welcome__title {
    font-size: var(--size-5xl);
  }

  .welcome__subtitle {
    font-size: var(--size-xl);
  }

  .welcome__title {
    font-size: var(--size-6xl);
  }

  .welcome__subtitle {
    font-size: var(--size-3xl);
  }
}


@media (min-width: 1536px) {
  .welcome__img {
    width: 120rem;
    height: 80rem;
  }
}
</style>
