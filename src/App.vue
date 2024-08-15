<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AboutPort />
    <ServicesPort/>
    <HomePort/>
    <PortFolio/>
    <ContactMe/>
  </div>
</template>

<script>
import './assets/style.css';
import HelloWorld from './components/HelloWorld.vue'
import AboutPort from './components/AboutPort.vue';
import ServicesPort from './components/ServicesPort.vue';
import PortFolio from './components/PortFolio.vue';
import ContactMe from './components/ContactMe.vue';
import HomePort from './components/HomePort.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AboutPort,
    ServicesPort,
    PortFolio,
    ContactMe,
    HomePort
  }
}
</script>
