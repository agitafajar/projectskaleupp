<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <Background/>
        <Recommend/>
        <Content/>
      </v-main>
    </v-slide-x-transition>
    <Footer/>
  </v-app>
</template>

<script>

import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/insight/Background';
import Recommend from '../components/insight/Recommend';
import Content from '../components/insight/Content';

export default {
  name: 'App',

  components: {
    Header,
    Background,
    Footer,
    Recommend,
    Content,
},

  data: () => ({
    //
  }),
};
</script>
