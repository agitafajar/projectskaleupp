<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <v-container>
          <div id="businesshealth0">
          <v-row align="center" justify="center" no-gutters style="height: 800px">
            <v-col class="text-center pa-md-15 mx-lg-15"> 
              <v-card class="mx-auto flat elevation-0" width="750" height="">
              <h1 class="font-weight-bold display-3" v-show="hiden">Selamat!</h1>
              <h1 class="display-1" v-show="hiden">Anda Telah Melakukan Langkah Besar Untuk Keberhasilan Bisnis Ke Depan</h1><br>
              <h2 v-show="seen">Kami paham Anda telah melakukan yang terbaik untuk bisnis yang telah Anda rintis. 
                Untuk mengetahui kondisi bisnis Anda saat ini, kami perlu mengenal Anda dan mengajukan beberapa pertanyaan melalui screening ini. 
                Kami tahu Anda sibuk, maka kami hanya perlu beberapa menit untuk membantu Anda melakukan perubahan besar ini.</h2><br><br><br>
              <router-link to="/businesshealthscreening"><v-btn color="#4291F0" width="190" height="60" class="elevation-3 white--text" v-show="seen">Yuk Mulai</v-btn>
              </router-link>
              </v-card>
            </v-col>
          </v-row>
          </div>
        </v-container>
      </v-main>
    </v-slide-x-transition>
    <Footer/>
  </v-app>
</template>

<script>

import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    seen: false,
    hiden: true,
  }),
  mounted: function () {
    setTimeout(() => {
      this.seen = true;
      this.hiden = false;
    }, 4000)
  },
};
</script>
