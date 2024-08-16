import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


export default {
    mounted() {
      const menuHamburguer = document.querySelector('.menu-hamburguer');
      menuHamburguer.addEventListener('click', () => {
        this.toggleMenu();
      });
    },
    methods: {
      toggleMenu() {
        const menuHamburguer = document.querySelector('.menu-hamburguer');
        const nav = document.querySelector('.nav-responsive');
        
        menuHamburguer.classList.toggle('change');
        
        if (menuHamburguer.classList.contains('change')) {
          nav.style.display = 'block';
        } else {
          nav.style.display = 'none';
        }
      }
    }
  }
  