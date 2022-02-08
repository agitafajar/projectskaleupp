<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <Background/>
        <Howwehelpdetail/>
        <Howwehelpcontent/>
      </v-main>
    </v-slide-x-transition>
    <Banner/>
    <Footer/>
  </v-app>
</template>

<script>

import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Background from '../components/howwehelp/Background';
import Howwehelpcontent from '../components/howwehelp/Howwehelpcontent';
import Howwehelpdetail from '../components/howwehelp/Howwehelpdetail';

export default {
  name: 'App',

  components: {
    Header,
    Background,
    Howwehelpdetail,
    Howwehelpcontent,
    Banner,
    Footer,
},

  data: () => ({
    //
  }),
};
</script>
