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


// RESERVATION FORM
// const endDate = new Date().toISOString().split('T')[0];
// const tomorrowDate = new Date(date);
// tomorrowDate.setDate(today.getDate() + 1);
// tomorrowDate.toISOString().split('T')[0];
// console.log(endDate);
// console.log(tomorrowDate);
console.log(tomorrow)


const formVisible = ref(false)

const toggleReservationForm = () => {
  const element = document.getElementById('reservation-final-form');
  element.style.display = 'block';
  formVisible.value = !formVisible.value;
};

const closeForm = () => {
  formVisible.value = false;
}

const sendReservationRequest = async () => {
  const email = document.querySelector('.email-input').value.trim();
  const message = document.querySelector('.message-input').value.trim();

  if (!email) {
    alert('Proszę podać adres email, na który możemy się odezwać :)');
    return;
  }

  const payload = {
    email,
    message,
    startDate: dateRange.value.start.toISOString().split('T')[0],
    endDate: dateRange.value.end.toISOString().split('T')[0],
    people: peopleCount.value,
  };

  try {
    const response = await fetch('http://localhost:8000/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const result = await response.json();
      alert('Wiadomość została wysłana pomyślnie: ' + result.message);
      closeForm();
    } else {
      const error = await response.json();
      alert('Błąd podczas wysyłania wiadomości: ' + (error.detail || 'Nieznany błąd.'));
    }
  } catch (err) {
    console.error('Błąd sieci:', err);
    alert('Nie udało się wysłać wiadomości z powodu błędu sieci.');
  }
};


// RESERVATION FORM^


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

  // RESERVATION FORM
  const textarea = document.getElementById('message-input');
  const charCount = document.getElementById('charCount');

  textarea.addEventListener('input', () => {
    const currentLength = textarea.value.length;
    const maxLength = textarea.getAttribute('maxlength');
    charCount.textContent = `${currentLength}/${maxLength} znaków`;

    if (parseInt(currentLength, 10) === parseInt(maxLength, 10)) {
      charCount.style.color = 'yellow';
      charCount.textContent = `${currentLength}/${maxLength} znaków - osiągnięto limit znaków.`;
    } else {
      charCount.style.color = 'white';
      charCount.textContent = `${currentLength}/${maxLength} znaków`;
    };
  })
  // RESERVATION FORM^
});

</script>

<template>
  <div id="overlay" v-if="calendarStore.isCalendarVisible" @click="calendarStore.toggleCalendar()"></div>
  <div id="overlay" v-else-if="formVisible" @click="toggleReservationForm()"></div>

  <div id="calendar-container" class="calendar-container" v-if="calendarStore.isCalendarVisible">
    <VDatePicker :min-date="new Date()" :columns="columns" :attributes="attrs" :expanded="expanded" :locale="userLocale"
      v-model.range="dateRange" :masks="masks" class="my-custom-datepicker" />
  </div>

  <div class="reservation-final-form" id="reservation-final-form" v-show="formVisible"
    :style="{ display: formVisible ? 'block' : 'none' }">
    <div class="email-field">
      <span><strong>e-mail:</strong></span>
      <input class="email-input" type="text">
    </div>

    <div class="message-field">
      <span>Jakieś pytania? Napisz wiadomość!</span>
      <span><strong>Wiadomość:</strong></span>
      <textarea class="message-input" id="message-input" placeholder="Napisz wiadomość..." maxlength="500"></textarea>
      <p id="charCount">0/500 znaków</p>
      <!-- <span>Zaznaczona wcześniej data do rezerwacji będzie wysłana do nas w wiadomości automatycznej</span> -->

    </div>
    <button class="send-btn" @click="sendReservationRequest()">Wyślij</button>
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
      <button class="rezerwacja__btn" @click="toggleReservationForm()">Sprawdź dostępność</button>
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
  background-color: var(--clr-warm-beige-200);
  cursor: pointer;
}

.rezerwacja__btn {
  background-color: var(--clr-warm-beige-400);
  /* color: var(--clr-dark-blue); */
  color: var(--clr-dark);
  border: none;
  font-size: var(--size-base);
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;
}

.rezerwacja__btn:hover {
  background-color: var(--clr-warm-beige-600);
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

/* RESERVATION POP UP FORM */
.reservation-final-form {
  position: fixed;
  width: 100%;
  height: 500px;
  display: none;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background-color: white;
  color: var(--clr-dark-blue);


  background-color: var(--clr-dark-blue);
  color: white;

  z-index: 10000;

  /* border-radius: 12px; */

  font-size: large;
  letter-spacing: +0.05rem;
}

.email-field {
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  margin-top: 2rem;
}

.email-input {
  margin-left: 0.5rem;
  border-radius: 6px;
  border: solid 1px var(--clr-dark-blue);
  background-color: var(--clr-light);
  color: var(--clr-dark);

  font-weight: 500;
  font-size: medium;
}

.email-input:focus {
  background-color: var(--clr-warm-beige-200);
}

.message-field {
  margin-top: 2rem;
  margin-left: 2rem;

  display: flex;
  flex-direction: column;
}

.message-input {
  height: 17.5rem;
  width: calc(100% - 2rem);

  padding: 10px;
  font-size: 1rem;
  border: 1px solid #333;
  border-radius: 6px;
  resize: none;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;
}

.send-btn {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-top: 2rem;
  margin-bottom: 0.1rem;

  text-transform: uppercase;
  letter-spacing: +0.05rem;

  height: 3rem;
  width: 8rem;

  font: var(--size-xl);
  font-weight: 600;


  color: var(--clr-dark-blue);
  background-color: var(--clr-light);

  /* color: var(--clr-dark);
  background-color: var(--clr-warm-beige-400); */

  transition: transform 0.3s, color 0.3s, background-color 0.3s;
  border: none;
  border-radius: 3px;

  text-align: center;
  justify-content: center;
}

.send-btn:hover {
  /* background-color: var(--clr-warm-beige-600); */
  background-color: var(--clr-warm-beige-200);
  cursor: pointer;
}


/* RESERVATION POP UP FORM END */

@media (min-width: 475px) {
  .rezerwacja__form {
    width: 400px;
  }

  .reservation-final-form {
    width: 94%;
    height: 60%;
    border-radius: 6px;
    box-shadow: 1rem rgba(0, 0, 0, 1);
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

@media (min-width: 768px) {
  .message-input {
    width: 600px;
    font-size: 1.2rem;
  }

  .reservation-final-form {
    width: 700px;
    height: 520px;
  }

}

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

  .message-input {
    width: 650px;
  }

  .reservation-final-form {
    width: 800px;
    height: 500px;
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