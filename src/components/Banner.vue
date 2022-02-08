<template>
    <v-container fluid style="width:1140px" class="mb-16 mt-16">
      <v-img class="white--text align-center rounded-xl d-flex" lazy-src="https://picsum.photos/id/11/10/6" height="275px" width="1140" :src="require('../assets/banner.jpg')">
      <v-row class="d-flex">
      <v-col cols="12" md="6">
        <v-card class="mx-auto ml-10 mt-6" height="100%" width="100%" outlined color="transparent">
          <v-card-text>
            <p class="text-h4 white--text font-weight-bold">
              Ready to talk?
            </p>
            <p class="lineba"></p>
            <div class="white--text">
              I want to talk to your experts in: <br><br>
              <v-select :items="items" label="Select an industries" solo style="width:350px; height: 52px" class="mb-3"></v-select>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-container>
        <v-col>
          <p class="white--text caption">We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.</p><br>
          <v-text-field label="Your e-mail" solo style="width:350px; height: 52px" class="mb-3"></v-text-field>
          <v-btn color="#4291F0" style="width:350px; height: 52px" class="white--text">Contact Us</v-btn>
        </v-col>
        </v-container>
      </v-col>
      </v-row>
      </v-img>
    </v-container>
</template>
<!-- <v-img class="white--text align-center rounded-xl" height="275px" width="1150px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img> -->
<script>

export default {
  data: () => ({
    reveal: false,
    alignments: ["center"],
    items: ['Industries', 'Manufacture', 'Customer Production', 'Ext'],
  }),
};
</script>

<style>
.lineba {
  border-bottom: 8px solid #fff;
  width: 15%;
}
</style>