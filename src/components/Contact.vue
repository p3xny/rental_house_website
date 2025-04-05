<script setup></script>

<template>
  <section id="kontakt">
    <div class="contact">
      <h2 class="contact__title">Wspomnienia na lata</h2>
      <h3 class="contact__subtitle">Wynajem już od 850 złotych</h3>
      <!-- <h3 class="contact__info">
        Telefon: (+48) 666-666-666
      </h3>
      <h3>
        E-mail: domek.rzepiska@domek.pl
      </h3> -->
    </div>
    <!-- <footer>
      <div class="phone">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd"
            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
            clip-rule="evenodd" />
        </svg>(+48) 666-666-666
      </div>
    </footer> -->
  </section>
</template>

<style>
.contact {
  padding-top: 4rem;
  padding-bottom: 4rem;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  background-color: #FBE9D0;
  color: var(--clr-warm-beige-600);

  justify-content: flex-start;
  align-items: left;
}

.contact__title {
  align-self: center;
  text-transform: uppercase;
  font-size: var(--size-2xl);
}

.contact__subtitle {
  align-self: center;
  text-transform: uppercase;
  font-size: var(--size-xl)
}

.contact__info {
  text-align: left;
  align-self: left;
}

footer {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  background-color: var(--clr-dark);
  color: var(--clr-warm-beige-200);
}

.phone {
  display: flex;
  flex-direction: row;
  height: var(--size-xl);
}

.phone:hover {
  color: gold;
  cursor: pointer;
}

@media (min-width: 640px) {
  .contact__title {
    font-size: var(--size-3xl);
  }
}

@media (min-width: 1024px) {
  .contact {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .contact__title {
    font-size: var(--size-4xl);
  }
}
</style>