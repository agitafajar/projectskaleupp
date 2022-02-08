<template>
  <v-app>
    <v-app-bar
      app
      flat
      height="100"
      hide-on-scroll
    >
    <Header/>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
      <Footer/>

  </v-app>
</template>

<script>

import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
