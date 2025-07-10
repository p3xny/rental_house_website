<template>
  <footer id="kontakt">
    <div class="phone">
      <!-- zadzwoń -->
      <a class="footer-item" href="tel:+48692434000">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fill-rule="evenodd"
            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
            clip-rule="evenodd" />
        </svg>
        (+48) 692 434 000
      </a>


      <!-- lub skontaktuj się przez e-mail -->
      <a class="footer-item" href="mailto:">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path
            d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        domekrzepiska@gmail.com
      </a>
    </div>
  </footer>

</template>

<style scoped>
a {
  text-decoration: none;
}

footer {
  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: var(--clr-dark);
  color: var(--clr-light);

  justify-items: center;
}

.phone {
  display: flex;
  flex-direction: row;
  height: var(--size-xl);
  gap: 0.8rem;
  padding: 0;
}

.footer-item {
  display: flex;
  height: var(--size-xl);
  gap: 0.3em;
  transition: color 0.3s;
  padding: 0;
  font-weight: 600;

  font-size: var(--size-sm);
}

.footer-item:hover {
  color: gold;
  cursor: pointer;
}

@media (min-width: 768px) {
  .footer-item {
    font-size: var(--siez-base);
  }
}
</style>