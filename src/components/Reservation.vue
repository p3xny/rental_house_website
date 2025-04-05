<script setup>
import { useCalendarStore } from '@/stores/calendarStore';
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['toggleElement']);

const handleClick = () => {
  emit('toggleElement');
}

const months = ['Styczeń', 'Luty', 'Marzec',
  'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec',
  'Sierpień', 'Wrzesień', 'Październik',
  'Listopad', 'Grudzień'
]
const date = new Date();
const month = date.getMonth();
const today = date.getDate();
const year = date.getFullYear();
const monthFirstLetters = months[month].substr(0, 3);

const calendarStore = useCalendarStore();
const dateToday = ref(`${today} ${monthFirstLetters} ${year}`);
const dateTomorrow = ref(`${today + 1} ${monthFirstLetters} ${year}`);
</script>

<template>
  <section class="rezerwacja section">
    <div class="rezerwacja__form" id="formCalendar">
      <div class="rezerwacja__date" id="arrival" @click="calendarStore.toggleCalendar()">
        <span v-if="today < 10">0{{ dateToday }}</span>
        <span v-else="">{{ dateToday }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          style="width: 6rem; height: 3rem;" class="arrow">
          <path fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd" class="arrow" />
        </svg>

        <span v-if="today + 1 < 10">0{{ dateTomorrow }}</span>
        <span v-else="">{{ dateTomorrow }}</span>
      </div>
      <div class="rezerwacja__guests" id="guestsButton" @click="">2 Gości
        <div id="guest-dropdown-menu" class="dropdown-content"></div>
      </div>
      <button class="rezerwacja__btn">Sprawdź dostępność</button>
    </div>
  </section>
</template>


<style scoped>
.rezerwacja {
  display: flex;
  text-transform: uppercase;
  color: var(--clr-dark);
  justify-content: center;
}

.rezerwacja__form {
  display: flex;
  width: 400px;
  font-size: var(--size-base);
  font-weight: bold;

}

.rezerwacja__header {
  text-transform: uppercase;
  color: var(--clr-dark);
}

.rezerwacja__date {
  width: 400px;
  display: flex;
  flex-direction: row;

  padding-left: 1em;
  align-items: center;
  height: 60px;

  background-color: var(--clr-light);
}

.rezerwacja__date:hover,
.rezerwacja__guests:hover {
  background-color: rgb(254, 253, 232);
  cursor: pointer;
}

.rezerwacja__guests {
  display: flex;
  width: 150px;
  background-color: var(--clr-slate200);
  align-items: center;
  justify-content: center;
}

.rezerwacja__btn {
  background-color: var(--clr-warm-beige-400);
  color: var(--clr-dark);
  border: none;
  font-size: var(--size-base);
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;
}

.rezerwacja__btn:hover {
  background-color: var(--clr-warm-beige-200);
  cursor: pointer;
}

.show {
  display: block;
}

.dropdown-content {
  background-color: #738678;
  color: var(--clr-light);
  width: 150px;
  height: 300px;
  display: none;
}


@media (min-width: 475px) {
  .rezerwacja__form {
    width: 400px;
  }
}

@media (min-width: 640px) {
  .rezerwacja__form {
    width: 475px;
    font-size: var(--size-lg);
  }
}

@media (min-width: 768px) {}

@media (min-width: 1024px) {
  .rezerwacja__form {
    width: 33rem;
    font-size: var(--size-xl);
  }

  .rezerwacja__date {
    width: 24rem;
  }

  .rezerwacja__guests {
    width: 9rem;
  }

}


@media (min-width: 1280px) {
  .rezerwacja__form {
    width: 36rem;
    font-size: var(--size-xl);
  }

  .rezerwacja__date {
    width: 26rem;
  }

  .rezerwacja__guests {
    width: 10rem;
  }
}


@media (min-width: 1536px) {}
</style>