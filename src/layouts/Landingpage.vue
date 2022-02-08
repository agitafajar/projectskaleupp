<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-main>
      <Carousels/>
      <Cardbusinesshealth/>
      <Window/>
      <Career/>
      <Insight/>
      <Help/>
    </v-main>
      <Footer/>
  </v-app>
</template>

<script>
import Footer from '../components/Footer';
import Help from '../components/Help';
import Insight from '../components/Insight';
import Career from '../components/Career';
import Window from '../components/Window';
import Cardbusinesshealth from '../components/Cardbusinesshealth';
import Carousels from '../components/Carousels';
import Header from '../components/Header';

export default {
  name: 'App',

  components: {
    Header,
    Carousels,
    Cardbusinesshealth,
    Window,
    Career,
    Insight,
    Help,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
