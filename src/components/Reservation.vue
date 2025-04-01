<script setup>
const dateToday = '31 Mar 2025';
const dateTomorrow = '01 Kwi 2025';
</script>

<template>
  <section class="rezerwacja section">
    <div class="rezerwacja__form" id="formCalendar">
      <span class="rezerwacja__span">Przyjazd</span>
      <div class="rezerwacja__cell" id="arrival" onclick="openCalendar(id)">
        <span>{{ dateToday }}</span>
      </div>
      <span class="rezerwacja__span">Wyjazd</span>
      <div class="rezerwacja__cell" id="departure" onclick="openCalendar(id)">
        <span>{{ dateTomorrow }}</span>
      </div>
      <span class="rezerwacja__span">Liczba gości</span>
      <div class="rezerwacja__cell" id="guestsButton" onclick="toggleDropdown()">2
        <div id="guest-dropdown-menu" class="dropdown-content"></div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.rezerwacja {
  display: flex;
  background-color: #F4F2ED;
  background-color: var(--clr-warm-beige-200);

  height: 300px;
  text-transform: uppercase;
  /* border: 1px solid red; */
}

.rezerwacja__form {
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 2rem;
  padding-right: 2rem;
}

.rezerwacja__header {
  text-transform: uppercase;
  color: var(--clr-slate800);
  /* color: red; */
}

.rezerwacja__cell {
  border: 1px solid black;
  width: 80%;
  align-content: center;
  padding-left: 1rem;
  align-self: center;
  height: 60px;
}

.rezerwacja__cell:hover {
  cursor: pointer;
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

@media (min-width: 640px) {}

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