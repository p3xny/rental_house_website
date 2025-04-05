<script setup>
</script>

<template>
  <section class="welcome section">
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
  height: 35vh;
}

.welcome__name {
  color: burlywood;
  text-transform: uppercase;
  font-size: var(--size-3xl);
  letter-spacing: -0.05rem;
  line-height: 0.9;
}

.welcome__title {
  color: burlywood;

  text-transform: uppercase;
  font-size: var(--size-4xl);
  letter-spacing: -0.05rem;
  line-height: 0.9;
}

.welcome__subtitle {
  color: #b9c7dc;
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
  color: var(--clr-slate400);
  height: 1px;
}


@media (min-width: 475px) {
  .welcome__hr {
    color: var(--clr-slate400);
  }

  .welcome__name {
    font-size: var(--size-4xl);
  }

  .welcome__title {
    font-size: var(--size-5xl);
  }

  .welcome__subtitle {
    font-size: var(--size-base);
  }
}

@media (min-width: 640px) {
  .welcome__subtitle {
    font-size: var(--size-lg);
  }
}

@media (min-width: 768px) {
  .welcome__name {
    font-size: var(--size-5xl);
  }

  .welcome__title {
    font-size: var(--size-6xl);
  }

  .welcome__subtitle {
    font-size: var(--size-xl);
  }
}

@media (min-width: 1024px) {
  .welcome__name {
    font-size: var(--size-6xl);
  }

  .welcome__title {
    font-size: var(--size-7xl);
  }

  .welcome__subtitle {
    font-size: var(--size-2xl);
  }

}

@media (min-width: 1280px) {
  .welcome__title {
    font-size: var(--size-7xl);
  }

  .welcome__title {
    font-size: var(--size-8xl);
  }

  .welcome__subtitle {
    font-size: var(--size-3xl);
  }
}


@media (min-width: 1536px) {}
</style>
