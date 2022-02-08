<template>
  <v-container>
    <v-row justify="center" align="center" class="mt-16 mb-16">
      <v-col cols="12" md="6" class="mt-16">
        <v-card class="mx-auto" outlined color="transparent">
          <v-card-text>
            <div><h2 style="color: #4291F0">Business Health Scanning</h2></div><br/>
            <p class="text-h3 text--primary font-weight-bold">Buat Perubahan Besar Pada Perusahaan Anda <br>Sekarang.</p>
            <p class="line"></p>
            <div class="text-h5">Business health scanning membantu anda mengetahui<br> performa perusahaan anda secara cepat dan menyeluruh.<br> Dapatkan analisa mengenai aspek-aspek yang menjadi <br> hambatan dan potensi perusahaan dapat dioptimalkan.</div>
          </v-card-text>
              <v-btn text color="#4291F0"><router-link to="/businesshealth">Check your business health here-></router-link></v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-container>
          <v-img class="roundedbh" lazy-src="https://picsum.photos/id/11/10/6" height="550" max-width="550" :src="require('../assets/businesshealth.jpg')"></v-img>
        </v-container>
      </v-col>
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
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.roundedbh {
  border-radius: 25px;
}

.line {
  border-bottom: 10px solid #4291f0;
  width: 15%;
}
</style>