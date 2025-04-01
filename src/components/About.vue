<script setup>
import lava from '@/assets/lawa.jpg';
import villageSunset from '@/assets/village-sunset.jpg';
</script>

<template>
  <section class="o-nas container section">
    <div class="o-nas__content">
      <h2 class="o-nas__title">Opis</h2>
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
      <div class="welcome__hr-container">
        <br>
      </div>
      <p class="o-nas__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eius
        dolorem
        repellendus consequuntur autem ab debitis sequi enim minima laborum, non obcaecati et dicta possimus, quia
        inventore excepturi soluta eligendi impedit neque laudantium molestiae? Aspernatur delectus, repudiandae
        facere excepturi accusantium, minima nesciunt voluptatem optio distinctio rem facilis, hic necessitatibus
        sed
        accusamus incidunt. Velit minus sit at doloremque id, fugit aut, veniam nisi nesciunt voluptate fugiat
        molestiae laborum corporis aperiam necessitatibus.</p>
    </div>
    <div class="o-nas__line"> </div>
    <br class="img-separator">
    <div class="o-nas__img-wrapper">
      <img class="o-nas__img" :src="villageSunset" alt="Mountain Village Sunset View">
    </div>
    <br>
  </section>
</template>

<style scoped>
br {
  display: block;
}

.container {}

.o-nas {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: #FBE9D0; */
  /* background-color: rgba(120, 120, 120, 0.15); */
  background-color: #FFFFFFE0;
  backdrop-filter: blur(4px);
  border-radius: 18px;
  min-height: 50rem;
  text-align: left;
}

.o-nas__title {
  font-size: var(--size-4xl);
  color: var(--clr-dark);
  justify-self: left;
  padding-bottom: 1rem;
}

.o-nas__content {
  color: white;

  padding-left: 2rem;
}

.o-nas__description {
  max-width: 80ch;
  font-size: var(--size-sm);
  /* color: #dae5f4; */
  color: var(--clr-slate800);
}

.o-nas__img {
  /* padding-top: 1rem; */
  width: 94%;
  justify-self: center;
  border-radius: 18px;
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
  .o-nas__img {
    width: 42rem;
    /* padding-bottom: 2rem; */
    padding-left: 0;
    padding-right: 0;
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
  }

  .o-nas__img {
    width: 48rem;
    /* height: 40rem; */
  }

  .o-nas__line {
    display: inline-block;
  }

}


@media (min-width: 1280px) {

  .o-nas__img {
    /* width: 38rem; */
  }
}


@media (min-width: 1536px) {

  .o-nas__img {
    /* width: 44rem; */
  }
}
</style>