<template>
  <div>
    <HelloWorld/>
    <HomePort/>
    <ServicesPort/>
    <PortFolio/>
    <AboutPort />
    <ContactMe/>
  </div>
</template>

<script>
import './assets/style.css';
import HelloWorld from './components/HelloWorld.vue';
import HomePort from './components/HomePort.vue';
import ServicesPort from './components/ServicesPort.vue';
import AboutPort from './components/AboutPort.vue';
import ContactMe from './components/ContactMe.vue';
import PortFolio from './components/PortFolio.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePort,
    ServicesPort,
    AboutPort,
    ContactMe,
    PortFolio,
  },
  mounted() {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    if (menuHamburguer) {
      menuHamburguer.addEventListener('click', () => {
        this.toggleMenu(menuHamburguer);  // Passa o elemento para o método
      });
    }
  },
  methods: {
    toggleMenu(menuHamburguer) {  // Recebe o elemento como parâmetro
      const nav = document.querySelector('.nav-responsive');
      
      if (menuHamburguer && nav) {
        menuHamburguer.classList.toggle('change');
        
        if (menuHamburguer.classList.contains('change')) {
          nav.style.display = 'block';
        } else {
          nav.style.display = 'none';
        }
      }
    }
  }
}
</script>
