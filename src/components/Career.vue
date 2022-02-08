<template>
  <v-row no-gutters style="height: 16%; background-color: #0f4d72">
    <v-col class="text-left">
      <v-col class="fill-height white--text" align="center" justify="center" style="height: 30%"><br><br><br>
        <h2>Careers</h2>
        <p class="text-h3 white--text font-weight-bold">Take Part In Our <br>Exciting Adventures</p>
        <p class="linec"></p><br><br>
      </v-col>
      <v-card class="mx-auto rounded-xl" max-height="650" max-width="1140" style="align-left">
        <v-img class="white--text align-center rounded-xl" lazy-src="https://picsum.photos/id/11/10/6" height="650" width="1140" :src="require('../assets/career.jpg')">
        <v-card-text class="ml-16">
        <p class="text-h3 white--text font-weight-bold">Find Your Passion</p>
        <p class="linec"></p>
        <p class="text-h5 white--text">Find your dream job with full of <br>passion and compassionate</p>
        <p class="text-h6 white--text">Start Here -></p>
        </v-card-text>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
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
.roundedc {
  border-radius: 50px;
}

.linec {
  border-bottom: 5px solid white;
  width: 5%;
}
</style>