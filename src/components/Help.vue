<template>
  <div id="idhelp">
    <v-container>
      <v-row align="center" justify="center" no-gutters style="height: 800px">
        <v-col class="text-left">
          <v-card class="mx-auto rounded-xl" width="1600">
            <v-img class="white--text align-center rounded-xl" height="400px" width="1600px" :src="require('../assets/help.png')">
              <p class="text-h3 white--text font-weight-bold ml-16">What can we help<br> you achieve?</p>
              <p class="linec ml-16"></p><br>
              <p class="text-h5 white--text ml-16">Let’s get to work -></p>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
    alignments: ["center"],
  }),
};
</script>
