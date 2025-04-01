<script setup>
const dateToday = '31 Mar 2025';
const dateTomorrow = '01 Kwi 2025';
</script>

<template>
  <section class="rezerwacja section">
    <div class="rezerwacja__form" id="formCalendar">
      <!-- <span class="rezerwacja__span">Przyjazd</span> -->
      <div class="rezerwacja__date" id="arrival" onclick="openCalendar(id)">
        <span>{{ dateToday }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          style="width: 20px; height: 15px;;">
          <path fill-rule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clip-rule="evenodd" />
        </svg>

        <span>{{ dateTomorrow }}</span>
      </div>
      <!-- <span class="rezerwacja__span">Wyjazd</span> -->
      <!-- <div class="rezerwacja__cell" id="departure" onclick="openCalendar(id)">

      </div> -->
      <!-- <span class="rezerwacja__span">Liczba gości</span> -->
      <div class="rezerwacja__guests" id="guestsButton" onclick="toggleDropdown()">2 Gości
        <div id="guest-dropdown-menu" class="dropdown-content"></div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.arrow {
  height: size(--size-sm);
  width: size(--size-sm);
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
  font-size: var(--size-lg);
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

.show {
  display: block;
}

.dropdown-content {
  background-color: #738678;
  color: var(--clr-light);
  width: 100px;
  height: 300px;
  display: none;
}


@media (min-width: 475px) {}

@media (min-width: 640px) {
  .rezerwacja__form {
    width: 475px;
    font-size: var(--size-xl);
  }
}

@media (min-width: 768px) {}

@media (min-width: 1024px) {
  .rezerwacja__form {
    flex-direction: row;
  }

  .rezerwacja__header {}
}


@media (min-width: 1280px) {}


@media (min-width: 1536px) {}
</style>