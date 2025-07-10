<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useCalendarStore } from '@/stores/calendarStore';
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import { useScreens } from 'vue-screen-utils';
import { useI18n } from 'vue-i18n';


const { t } = useI18n();
const calendarStore = useCalendarStore();
const { mapCurrent } = useScreens({
  xs: '0px',
  sm: '550px',
  md: '768px',
  lg: '1024px',
});
const columns = mapCurrent({ sm: 1 }, 1);
const columnsWide = mapCurrent({ sm: 2 }, 2);

// const expanded = mapCurrent({ lg: false }, true);
const expanded = ref(null);
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

const width = ref(window.innerWidth);
const updateWidth = () => {
  width.value = window.innerWidth;
  if (width.value >= 550) {
    expanded.value = mapCurrent({ lg: false }, true);
  } else {
    expanded.value = null;
  }
};


onMounted(() => {
  // TEXTAREA
  const textarea = document.getElementById('message-input-inSection');
  const charCount = document.getElementById('charCount-inSection');

  textarea.addEventListener('input', () => {
    console.log('INPUT EVENT TRIGGERED!!!');
    const currentLength = textarea.value.length;
    const maxLength = textarea.getAttribute('maxlength');
    charCount.textContent = `${currentLength}/${maxLength} znaków`;

    if (parseInt(currentLength, 10) === parseInt(maxLength, 10)) {
      charCount.style.color = 'red';
      charCount.textContent = `${currentLength}/${maxLength} znaków - osiągnięto limit znaków.`;
    } else {
      charCount.style.color = 'var(--clr-dark)';
      charCount.textContent = `${currentLength}/${maxLength} znaków`;
    };
  })
  // TEXTAREA END

  // CALENDAR RESIZE
  window.addEventListener('resize', updateWidth); {
    updateWidth();
  }
  // CALENDAR RESIZE END
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth);
})
</script>


<template>
  <section class="reservation" id="reservation-section">

    <h2 class="reservation__title">REZERWACJA</h2>

    <div class="form-wrapper">
      <!-- Calendar -->
      <div id="calendars" class="calendars-wrapper">
        <div id="calendarNarrow" v-if="width < 550">
          <VDatePicker :min-date="new Date()" :columns="columns" :attributes="attrs" :expanded="null"
            :locale="userLocale" v-model.range="dateRange" :masks="masks" class="my-custom-datepicker" />
        </div>
        <div id="calendarWide" v-else>
          <VDatePicker :min-date="new Date()" :columns="columnsWide" :attributes="attrs" :expanded="expanded"
            :locale="userLocale" v-model.range="dateRange" :masks="masks" class="my-custom-datepicker" />
        </div>
      </div>

      <div class="user-data-container">
        <div class="email-field">
          <svg style="height: 2rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <input class="email-input" type="text" placeholder="email@mail.com">
        </div>

        <div class="email-field">
          <span class="contact-cell">
            <svg style="height: 2rem;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <input class="email-input" type="text" placeholder="+48 123 456 789">
        </div>
      </div>

      <div class="message-field">
        <textarea class="message-input" id="message-input-inSection" placeholder="Napisz wiadomość..."
          maxlength="500"></textarea>
        <p id="charCount-inSection" class="counter">0/500 znaków</p>
      </div>

      <button class="confirm-date-btn" @click="console.log(width)">{{ t('confirm') }}</button>
    </div>

  </section>
</template>

<style scoped>
.reservation {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.reservation__title {
  text-align: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  padding: 0 1.5rem;
  box-sizing: border-box;
}

.my-custom-datepicker {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.user-data-container {
  display: flex;
  gap: 1.5rem;
  width: 100%;
}

.email-field {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  background-color: #fff;
}

.email-input {
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  width: 100%;
}

.message-field {
  width: 100%;
}

.message-input {
  width: 100%;
  min-height: 150px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  resize: vertical;
  font-family: inherit;
  font-size: 1rem;
}

.counter {
  text-align: right;
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.5rem;
}

.confirm-date-btn {
  align-self: flex-end;
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

@media (max-width: 768px) {
  .form-wrapper {
    padding: 0 1rem;
  }

  .user-data-container {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>