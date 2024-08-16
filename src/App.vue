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
import HelloWorld from './components/HelloWorld.vue'
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
    PortFolio,
    AboutPort,
    ContactMe
  }
}
</script>
