<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
          <Background/>
          <Content/>
          <Team/>
          <Banner/>
          <Footer/>
      </v-main>
    </v-slide-x-transition>
  </v-app>
</template>

<script>

import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/about/Background';
import Content from '../components/about/Content';
import Team from '../components/about/Team';
import Banner from '../components/Banner'

export default {
  name: 'App',

  components: {
    Header,
    Footer,
    Background,
    Content,
    Banner,
    Team,
},

  data: () => ({
    //
  }),
};
</script>
