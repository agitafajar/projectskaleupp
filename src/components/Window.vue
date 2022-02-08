<template>
  <v-container>
    <v-row justify="center" align="center" class="mt-16 mb-16">
      <v-col cols="12" md="4" sm="8">
        <v-card class="mx-auto" outlined color="transparent">
          <v-card-text>
            <p class="text-h3 text--primary font-weight-bold">
              Bold steps forwards.
            </p>
            <p class="line"></p>
            <div class=" text-h5">
              How we disrupt their business in <br>performance leveraging
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="blue accent-4" @click="reveal = true">
              See all clients result ->
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" sm="8" class="hidden-xs-only">
        <VueSlickCarousel v-bind="settings">
          <v-col v-for="n in 6" :key="n">
            <v-card class="pa-md-10 mx-lg-auto overflow-hidden" rounded="xl">
              <v-card-subtitle class="font-weight-bold"> Number 10</v-card-subtitle>
              <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div> Whitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday Islands</div>
              </v-card-text>
              <v-col class="d-flex">
              <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"/>
              </v-avatar>
              <v-col class="pa-md-1 mx-lg-3">
              <h4>Name Here</h4>
              <p>Tittle Here</p>
              </v-col>
              </v-col>
              <v-card-actions>
              <v-btn color="blue" text class="text-decoration-underline">Read Story ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </VueSlickCarousel>
      </v-col>
      <v-col cols="12" md="8" sm="8" class="hidden-sm-and-up">
        <VueSlickCarousel v-bind="settingss">
          <v-col v-for="n in 6" :key="n">
            <v-card class="pa-md-10 mx-lg-auto overflow-hidden" rounded="xl">
              <v-card-subtitle class="font-weight-bold"> Number 10</v-card-subtitle>
              <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div> Whitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday IslandsWhitsunday Island, Whitsunday Islands</div>
              </v-card-text>
              <v-col class="d-flex">
              <v-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"/>
              </v-avatar>
              <v-col class="pa-md-1 mx-lg-3">
              <h4>Name Here</h4>
              <p>Tittle Here</p>
              </v-col>
              </v-col>
              <v-card-actions>
              <v-btn color="blue" text class="text-decoration-underline">Read Story ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </VueSlickCarousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  data: () => ({
    reveal: false,
    alignments: ["center"],
    settings: {
          "dots": true,
          "infinite": true,
          "slidesToShow": 3,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 2000,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true
        },
    settingss: {
          "dots": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "autoplay": true,
          "autoplaySpeed": 2000,
          "pauseOnDotsHover": true,
          "pauseOnFocus": true,
          "pauseOnHover": true
        },
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

.roundedw {
  border-radius: 25px;
}

.overfloww {
  align-items: relative;
  overflow-x: auto;
  margin-bottom: 6px;
  /* position:relative; */
}
</style>