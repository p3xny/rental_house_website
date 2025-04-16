<script setup>
import { computed } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  animateClose: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['animationEnd']);

const animationClass = computed(() => {
  if (props.animateClose) return 'slide-out';
  if (props.isOpen) return 'slide-in';
  return '';
});

</script>

<template>
  <div id="mobile-nav" class="mobile-nav" :class="animationClass" @animationend="emit('animationEnd')">
    <div class="button-grid">
      <button id="phoneCallButton" class="btn header__btn" style="text-transform: uppercase;"
        @click="calendarStore.toggleCalendar()">
        Zadzwoń
      </button>
      <button id="reservationButton" class="btn header__btn" style="text-transform: uppercase;"
        @click="calendarStore.toggleCalendar()">
        Rezerwacja
      </button>
      <button id="mapsButton" class="btn header__btn" style="text-transform: uppercase;"
        @click="calendarStore.toggleCalendar()">
        Dojazd
      </button>
    </div>
    <ul>
      <li>
        <a href="/">Strona główna</a>
      </li>
      <li>
        <a href="#o-nas">O nas</a>
      </li>
      <li>
        <a href="/galeria">Galeria</a>
      </li>
      <!-- <li>
        <a href="#atrakcje">Atrakcje</a>
      </li> -->
      <!-- <li>
        <a href="#faq">FAQ</a>
      </li> -->
      <li>
        <a href="#kontakt">Kontakt</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.mobile-nav {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 42vh;
  /* width: 65vw; */
  /* width: 300px; */
  width: 100vw;
  /* background-color: var(--clr-dark-blue); */
  background-color: var(--clr-light);
  box-shadow: 0 4px 2px -2px black;

  /* animation: slide-in 0.3s; */
  z-index: 1001;
}


.slide-in {
  animation: slide-in 0.3s forwards;
}

.slide-out {
  animation: slide-out 0.3s forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

li {
  justify-self: center;
  list-style: none;
  padding-right: 2.5rem;
  padding-bottom: 2rem;
}

.mobile-nav a {
  /* color: var(--clr-light); */
  /* color: var(--clr-warm-beige-600); */
  color: var(--clr-dark-blue);

  text-decoration: none;
  font-size: var(--size-xl);
  font-weight: bold;
  transition: color 0.3s;
}

.mobile-nav a:hover {
  color: gold;
}

/* BUTTONS */
.button-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 3rem;
  width: 100%;
}

.btn {
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: +0.05rem;

  /* background-color: var(--clr-warm-beige-400); */
  color: var(--clr-dark);
  color: var(--clr-light);


  background-color: var(--clr-dark-blue);

  /* background-color: var(--clr-light);
  color: var(--clr-dark-blue); */

  padding: 0.5em 1em;
  /* border-radius: 6px; */
  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  border: 1px solid var(--clr-dark);
}

.btn:hover {
  transform: translateY(-5px);
  background-color: var(--clr-warm-beige-200);
  color: var(--clr-dark-blue);
  cursor: pointer;
}

.header__btn {
  height: 5rem;
  font-size: var(--size-base);
}

.header__btn,
.header__btn-scrolled {
  transition: all 0.3s ease-in-out;
}

/* BUTTON END */
@media (min-width: 475px) {
  /* .mobile-nav {
    width: 380px;
  } */
}


@media (min-width: 550px) {
  /* .mobile-nav {
    width: 450px;
  } */
}



@media (min-width: 640px) {
  /* .mobile-nav {
    width: 500px;
  } */
}
</style>