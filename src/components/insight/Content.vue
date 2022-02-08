<template>
  <v-container>
    <v-row class="d-flex align-center" align="center" justify="center">
        <v-col class="d-flex flex-wrap">
          <v-col v-for="n in 8" :key="n">
            <v-card class="mx-auto elevation-0" width="350" height="400" rounded="xl">
              <v-img class="white--text align-end rounded-xl" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
              <v-card-title>Tiitle Content goes here</v-card-title>
            <v-card-subtitle><v-icon>mdi-calendar</v-icon> Nov 21, 2021</v-card-subtitle>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.</v-card-text>
            <v-btn text color="blue accent-4"><router-link to="/insights/insightone">Read More-></router-link></v-btn>
            </v-card>
          </v-col>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="mb-16 mt-16">
      <v-btn class="primary--text"  color="#4291F0" @click="e1 = 26" width="192" height="52" outlined style="border-color: #4291f0">Load More</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
    alignments: ["center"],
  }),
};
</script>

<style>
.lineins {
  border-bottom: 10px solid #4291f0;
  width: 5%;
}

.alignleft {
  float: left;
}
.alignright {
  float: right;
}
</style>