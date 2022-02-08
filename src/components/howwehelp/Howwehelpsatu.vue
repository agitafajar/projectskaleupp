<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <v-row align="center" justify="center" no-gutters style="height: 400px">
        <v-col class="text-center">
          <v-card flat>
            <v-img class="white--text align-center rounded-0 elevation-0" height="400px" width="100%" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-container>
            <v-card-title>
            <h1>How We Help sub Section</h1>
            </v-card-title>
            <v-card-text class="text-left">
            <p>Egestas urna facilisi</p>
            </v-card-text>
            </v-container>
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-container>
        <v-row align="center" justify="center" no-gutters style="height: 140%">
          <v-col class="text-left">
            <v-card class="mx-auto rounded-0 mb-16 mt-16" width="65%" height="100%" flat>
              <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.<br><br>
                  Consequat lobortis fringilla etiam arcu volutpat elit. Accumsan in adipiscing mollis urna ultricies iaculis. Lacus blandit duis nunc etiam cursus at. Enim, tortor dignissim dignissim purus risus. Sed netus leo sit varius sem dignissim eleifend ullamcorper. Tristique habitasse nulla diam pellentesque sociis arcu. Tellus posuere nibh elementum semper vulputate sed. Scelerisque enim facilisis vitae nunc risus, enim. Posuere quam libero nec purus arcu mattis bibendum sit. Est viverra bibendum adipiscing blandit augue interdum. Elementum cursus venenatis, interdum ut id adipiscing cursus. Velit feugiat tortor ut fringilla. Pellentesque lorem duis facilisi scelerisque. Tempus donec scelerisque arcu massa. Neque ultrices aliquam pretium, eu.<br><br>
                  Dictum suspendisse molestie venenatis urna, sit in. Urna, aliquet nunc, magna quis at. Eu sem enim, placerat morbi hendrerit adipiscing. Luctus quam volutpat lacus sed ultrices. Blandit tortor sit varius lorem dui metus. Consequat volutpat nulla consectetur amet orci augue posuere. Viverra faucibus sed vel eu. Ac purus volutpat adipiscing arcu amet.
              </v-card-text>
              <v-col class="videos">
                <LazyYoutube ref="youtubeLazyVideo" :src="youtubeLink" max-width="720px" aspect-ratio="16:9" thumbnail-quality="standard"/>
              </v-col>
              <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.<br><br>
                  Consequat lobortis fringilla etiam arcu volutpat elit. Accumsan in adipiscing mollis urna ultricies iaculis. Lacus blandit duis nunc etiam cursus at. Enim, tortor dignissim dignissim purus risus. Sed netus leo sit varius sem dignissim eleifend ullamcorper. Tristique habitasse nulla diam pellentesque sociis arcu. Tellus posuere nibh elementum semper vulputate sed. Scelerisque enim facilisis vitae nunc risus, enim. Posuere quam libero nec purus arcu mattis bibendum sit. Est viverra bibendum adipiscing blandit augue interdum. Elementum cursus venenatis, interdum ut id adipiscing cursus. Velit feugiat tortor ut fringilla. Pellentesque lorem duis facilisi scelerisque. Tempus donec scelerisque arcu massa. Neque ultrices aliquam pretium, eu.<br><br>
                  Dictum suspendisse molestie venenatis urna, sit in. Urna, aliquet nunc, magna quis at. Eu sem enim, placerat morbi hendrerit adipiscing. Luctus quam volutpat lacus sed ultrices. Blandit tortor sit varius lorem dui metus. Consequat volutpat nulla consectetur amet orci augue posuere. Viverra faucibus sed vel eu. Ac purus volutpat adipiscing arcu amet.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        <Howwehelpcontent/>
      <v-container class="mt-16">
        <v-row align="center" justify="center">
        <p class="display-2 font-weight-bold">Client Result</p>
        </v-row>
        <v-row align="center" justify="center">
        <p class="lineh"></p>
        </v-row><br><br>
          <v-col class="d-flex">
            <v-row align="center" justify="center" no-gutters >
            <v-col v-for="n in 3" :key="n" md="3">
            <v-card flat class="mr-16">
            <p class="display-4 font-weight-bold text-center">123+</p>
            <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.</p>
            </v-card>
            </v-col>
          </v-row>
          </v-col>
      </v-container>
        <Insight/>
        <Banner/>
      </v-main>
    </v-slide-x-transition>
    <Footer/>
  </v-app>
</template>

<script>

import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';
import Howwehelpcontent from './Howwehelpcontent';
import Insight from '../Insight';
import { LazyYoutube } from "vue-lazytube";

export default {
  name: 'App',

  components: {
    Header,
    Howwehelpcontent,
    LazyYoutube,
    Insight,
    Banner,
    Footer,
},

  data: () => ({
    youtubeLink:'https://www.youtube.com/watch?v=TcMBFSGVi1c',
  }),
};
</script>

<style>
.videos {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.lineh {
  border-bottom: 10px solid #4291f0;
  width: 5%;
}
</style>