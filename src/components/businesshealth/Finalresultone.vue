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
                <v-col>
                <v-row align="center" justify="center">
                <v-card flat style="width:300px; height:300px;" color="#BFDCFF" rounded="xl" class="d-flex align-center justify-center">
                <v-img class="rounded-xl" lazy-src="https://picsum.photos/id/11/10/6" height="100%" width="100%" :src="require('./animation/animasisatu.gif')" align-center></v-img>
                </v-card>
                </v-row>
                <v-row align="center" justify="center">
                <v-card style="width:125px; height:125px;" color="#BFDCFF" rounded="xl" class="d-flex align-center justify-center">
                <h1 style="color: #4291F0; font-size: 72px;">{{this.getscore()}}</h1>
                </v-card>
                </v-row>
                </v-col><br>
                <h2 class="font-weight-bold display-3">Great! <br>Your Business is Ready for Scalling UP!</h2><br>
                <h4 class="display-1">Bisnis anda memiliki kondisi kesehatan yang sangat bagus saat ini dan beberapa tahun mendatang. Ini saat yang tepat Anda mempertimbangkan strategi peluang pertumbuhan bisnis untuk meningkatkan kesuksesan jangka panjang.</h4><br><br><br>
                <router-link to="/businesshealth/finalresulttwo">
                <v-btn color="#4291F0" width="400" height="60" class="elevation-3 white--text">Scale up bisnis saya sekarang</v-btn>
                </router-link>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-main>
  </v-slide-x-transition>
  </v-app>
</template>

<script>

import { mapGetters } from 'vuex';

import Header from '../Header';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({


}),

  methods: {
    ...mapGetters([
      'getscore',
    ])
  }
};
</script>
