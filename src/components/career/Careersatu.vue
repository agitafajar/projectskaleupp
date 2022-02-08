<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
          <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card class="mx-auto mb-16" outlined color="transparent">
            <a href="/careers" class="text-decoration-none"><v-icon>mdi-arrow-left</v-icon> Go to search</a>
          <v-card-text><br><br>
            <p class="text-h4 text--primary font-weight-bold">Accounting associate</p>
            Jakarta, Jakarta Raya Indonesia
            <p class="linecr"></p><br>

        <v-row class="d-flex">
            <v-col>
               <v-card flat>Department<br><p class="text-h6 text--primary font-weight-bold">Finance</p></v-card>
            </v-col>
            <v-col>
               <v-card flat>Job posted on<br><p class="text-h6 text--primary font-weight-bold">Nov 21, 2021</p></v-card>
            </v-col>
            <v-col>
               <v-card flat>Employement type<br><p class="text-h6 text--primary font-weight-bold">Permanent</p></v-card>
            </v-col>
            <v-col>
               <v-card flat>Experience range<br><p class="text-h6 text--primary font-weight-bold">2 Years - 4 Years</p></v-card>
            </v-col>
          </v-row>

            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.</div><br>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.</div><br>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.</div><br>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.</div><br>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.</div><br>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.</div><br>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lectus scelerisque ipsum amet. Tristique tristique velit vivamus neque cras egestas. Porttitor varius fermentum, sed eu sit porttitor gravida duis. Auctor integer rhoncus cursus sed. Pharetra consectetur faucibus quam cras eleifend.</div>
          </v-card-text>
            <p class="linecrb"></p><br>
            <v-row>
            <v-col cols="12" md="8">
            <p class="primary--text">Share this vacancy:</p>
            <v-btn  v-for="icon in icons" :key="icon" class="mx-1" primary icon color="#4291F0" width="36" height="36" outlined style="border-color: #4291f0">
              <v-icon size="25px">
                {{ icon }}
              </v-icon>
            </v-btn>
        </v-col>
        <v-col cols="12" md="2" class="white--text align-center" align="center" justify="center" >
        <router-link to="/Careers/applycareersatu"><v-btn color="#4291F0" width="192" height="52" class="white--text">Apply Now </v-btn></router-link>
        </v-col>
        </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
      </v-main>
    </v-slide-x-transition>
    <Footer/>
  </v-app>
</template>

<script>

import Header from '../Header';
import Footer from '../Footer';

export default {
    
    components: {
    Header,
    Footer,
},

  data: () => ({
      icons: [
      "mdi-facebook",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-youtube",
      "mdi-link",
    ],
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

.linecr {
  border-bottom: 5px solid #4291f0;
  width: 10%;
}
.linecrb {
  border-bottom: 2px solid #D1D1D1;
  width: 100%;
}
</style>