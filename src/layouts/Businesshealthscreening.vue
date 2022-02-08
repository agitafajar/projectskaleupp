<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
      <v-toolbar flat class="mainHeader">
        <v-spacer></v-spacer>
        <v-fade-transition>
          <v-toolbar-title>
            <router-link to="/">
              <v-img :src="require('../assets/logoscaleup.jpg')" contain height="80" width="150"/>
            </router-link>
          </v-toolbar-title>
        </v-fade-transition>
        <v-toolbar-items class="hidden-xs-only"> </v-toolbar-items>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <Businesshealthform />
    </v-main>
  </v-app>
</template>

<script>
import Businesshealthform from "../components/businesshealth/Businesshealthform";
export default {
  name: "App",

  components: {
    Businesshealthform,
  },

  data: () => ({
    //
  }),
};
</script>
