<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCalendarStore } from '@/stores/calendarStore';
import { useScreens } from 'vue-screen-utils';

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
const tomorrow = today + 1;
const year = date.getFullYear();
const monthFirstLetters = months[month].substr(0, 3);

const dateTomorrow = ref(`${today + 1} ${monthFirstLetters} ${year}`);


const peopleCount = ref(2);
const guestLimit = 13;
const numberOfPeople = (n) => {
  if (n < 5 && n != 1) {
    return 'osoby';
  } else if (n >= 5) {
    return 'osób';
  } else {
    return 'osoba';
  }
}


const isDropdown = ref(false);
const changeNumberOfGuests = (id) => {
  const element = document.getElementById(`${id}`);
  isDropdown.value = false
  peopleCount.value = element.innerHTML
  console.log(`PEOPLE COUNT VALUE: ${peopleCount.value}`);
}


const isCalendarOpen = ref(false);
const calendarStore = useCalendarStore();
const { mapCurrent } = useScreens({
  xs: '0px',
  sm: '550px',
  md: '768px',
  lg: '1024px',
});
const columns = mapCurrent({ sm: 2 }, 2);
const expanded = mapCurrent({ lg: false }, true);
const attrs = ref([
  {
    key: 'Any',
    dot: true,
    dates: new Date(),
    expanded: true,
  }
]);
const userLocale = ref('pl-PL');

const dateRange = ref({
  start: new Date(),
  end: new Date(),
})

const confirmRange = () => {
  alert(`Dziękujemy za wysłania zapytania! Odpiszemy tak szybko jak to możliwe`)
}

const masks = {
  input: 'DD MMM YYYY',
}

const formattedStartDate = computed(() => {
  const { start, end } = dateRange.value;
  if (start && end) {
    const startDate = start.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    return startDate;
  }
});


const formattedEndDate = computed(() => {
  const { start, end } = dateRange.value;
  if (start && end) {
    const endDate = end.toLocaleDateString('pl-PL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    const replacement = tomorrow < 10 ? '0' + tomorrow : tomorrow.toString();
    const endDateFinal = endDate.replace(/^\d{1,2}/, replacement);
    const endDateDay = endDate.substring(0, 2);

    if (endDateDay < tomorrow) {
      return endDateFinal;
    } else {
      return endDate;
    }
  }
});

onMounted(() => {
  const selectedStartDate = formattedStartDate.value.substr(0, 2);
  const selectedEndDate = formattedEndDate.value.substr(0, 2);
  const startDateNumber = Number(selectedStartDate);
  const endDateNumber = Number(selectedEndDate);
  console.log(`${typeof startDateNumber}: ${startDateNumber}, nDay: ${endDateNumber}... 1: ${typeof 1}`);
});
</script>

<template>
  <div id="overlay" v-if="calendarStore.isCalendarVisible" @click="calendarStore.toggleCalendar()"></div>

  <div id="calendar-container" class="calendar-container" v-if="calendarStore.isCalendarVisible">
    <VDatePicker :min-date="new Date()" :columns="columns" :attributes="attrs" :expanded="expanded" :locale="userLocale"
      v-model.range="dateRange" :masks="masks" class="my-custom-datepicker" />
  </div>


  <section class="rezerwacja section">
    <div class="rezerwacja__form" id="formCalendar">
      <div class="rezerwacja__date" id="arrival" @click="calendarStore.toggleCalendar()">
        <span v-if="startDateNumber < 10">0{{ formattedStartDate }}</span>
        <span v-else="">{{ formattedStartDate }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          style="width: 6rem; height: 3rem;" class="arrow">
          <path fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd" class="arrow" />
        </svg>

        <span v-if="endDateNumber + 1 < 10">0{{ formattedEndDate ? formattedEndDate : dateTomorrow }}</span>
        <span v-else="">{{ formattedEndDate ? formattedEndDate : dateTomorrow }}</span>
      </div>
      <div class="rezerwacja__guests" id="guestsButton">{{ peopleCount }} {{ numberOfPeople(peopleCount) }}
        <div id="guest-dropdown-menu" class="dropdown-content">
          <ul class="guest-ul">
            <li :id="`guest-li-${n}`" :class="isDropdown ? 'guest-li-none' : 'guest-li'"
              v-for="(n, index) in guestLimit" :key="index" @click="changeNumberOfGuests(`guest-li-${n}`)">{{ n }}</li>
          </ul>
        </div>
      </div>
      <button class="rezerwacja__btn" @click="calendarStore.toggleCalendar()">Sprawdź dostępność</button>
    </div>
  </section>
</template>


<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0;
  padding: 0;
}

.rezerwacja {
  display: flex;
  text-transform: uppercase;
  color: var(--clr-dark-blue);
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
  background-color: var(--clr-warm-beige-200);
  cursor: pointer;
}

.rezerwacja__btn {
  background-color: var(--clr-warm-beige-400);
  color: var(--clr-dark-blue);
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

.rezerwacja__guests {
  display: flex;
  width: 150px;
  background-color: var(--clr-slate200);
  align-items: center;
  justify-content: center;
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  box-shadow: 0 8px 16px 0px rgba(0, 0, 0, 0.3);
  z-index: 1;
  margin-top: 60px;
}

.rezerwacja__guests:hover .dropdown-content {
  display: flex;
  align-self: flex-start;
}

.guest-ul {
  text-align: center;
}

.guest-li {
  background-color: var(--clr-light);
  color: var(--clr-dark-blue);
  width: 100%;
  list-style: none;
  z-index: 1;
  width: 70.900px;
}

.guest-li:hover {
  cursor: pointer;
  background-color: var(--clr-slate200);
  background-color: var(--clr-warm-beige-200);
}

.guest-li-none {
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

  .guest-li {
    width: 89.425px;
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

  .guest-li {
    width: 98.588px;
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


  .guest-li {
    width: 112.675px;
  }
}


@media (min-width: 1536px) {}
</style>