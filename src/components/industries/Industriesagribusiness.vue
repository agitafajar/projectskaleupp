<template>
  <v-app>
    <v-app-bar color="white" app flat height="100" elevation="1">
    <Header/>
    </v-app-bar>
    <v-slide-x-transition>
      <v-main>
        <Background/>
        <v-container>
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </v-container>
        <v-container>
          <v-row align="center" justify="center" no-gutters style="height: 140%">
            <v-col class="text-left">
              <v-card class="mx-auto rounded-0 mb-16" width="80%" height="100%" flat>
                <v-card-text class="body-1">
                  Agrikultur telah ada dan berkembang sejak awal kehidupan bermasyarakat terbentuk. Hal ini pula yang mendorong bisnis dalam bidang pertanian menjadi tidak lekang oleh waktu. Dengan semakin berkembangnya teknologi di era disruptif ini, agribisnis juga harus mengikuti transformasi tersebut agar tetap relevan dengan kebutuhan pasar dan keberlangsungan perusahaan.<br><br>
                  Kami didukung oleh mitra yang terpercaya dalam bidang ini mampu membantu perusahaan agribisnis anda untuk berkembang dan berinovasi menggunakan teknologi yang dapat diaplikasikan secara langsung di lapangan. Tim agrikultur kami berpengalaman mulai dari pemilihan bibit yang sesuai dengan kondisi lapangan, penerapan metode pembiakkan hingga metode meningkatkan pertumbuhan panen yang konsisten.<br> 
                </v-card-text><br>
                <v-container fill-height fluid style="width:755px">
                <v-img class="white--text align-end rounded-xl" height="500px" width="755px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"></v-img>
                </v-container>
          <v-container class="mt-16">
            <v-row align="center" justify="center">
            <p class="display-2 font-weight-bold">Associate Partner</p>
            </v-row>
            <v-row align="center" justify="center">
            <p class="lineh"></p>
            </v-row>
            <v-row align="center" justify="center">
              <v-col class="d-flex justify-space-around mt-16 mb-16">
                <v-card width="350" height="100%" flat>
                  <v-img height="55px" width="250px" src="https://s3-alpha-sig.figma.com/img/487c/a0f9/5743f83411ca9b5f7e35b67e4bb696b3?Expires=1638748800&Signature=ViW76zeffBlUv2~Mjqdle7rNvC1vxxnxeohH8C6qKEklEK57up2b5zFT5z3B1IqkbvVTIK5BHI-QZHFZVewVOX-amEAm6HwTy3a9aTicGSOlzb8eI1DUCbzUZX0-11H4mEeVVCxYVwSfGLp2bXdRfhGB4xAr8q8vTcqq78iTIj-UoC9Ej5YwQOo7m4VnhtnqznUtwymk8tLccSI0hyZPzrHSClBt7WvL9-jc4FtYAfI~~fTCvl1OkrVwJE1NNvstStX6nS~lHZNF9Jn4rbe0z3O3Os6LGop9BRFV-SoypsEgbRbFPBxucTUIEKVD7mJ5b4oSFgMBLFxxC7i3cBVr4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></v-img>
                </v-card>
                <v-card width="350" height="100%" flat>
                  <v-img height="55px" width="250px" src="https://s3-alpha-sig.figma.com/img/487c/a0f9/5743f83411ca9b5f7e35b67e4bb696b3?Expires=1638748800&Signature=ViW76zeffBlUv2~Mjqdle7rNvC1vxxnxeohH8C6qKEklEK57up2b5zFT5z3B1IqkbvVTIK5BHI-QZHFZVewVOX-amEAm6HwTy3a9aTicGSOlzb8eI1DUCbzUZX0-11H4mEeVVCxYVwSfGLp2bXdRfhGB4xAr8q8vTcqq78iTIj-UoC9Ej5YwQOo7m4VnhtnqznUtwymk8tLccSI0hyZPzrHSClBt7WvL9-jc4FtYAfI~~fTCvl1OkrVwJE1NNvstStX6nS~lHZNF9Jn4rbe0z3O3Os6LGop9BRFV-SoypsEgbRbFPBxucTUIEKVD7mJ5b4oSFgMBLFxxC7i3cBVr4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></v-img>
                </v-card>
                <v-card width="350" height="100%" flat>
                  <v-img height="55px" width="250px" src="https://s3-alpha-sig.figma.com/img/487c/a0f9/5743f83411ca9b5f7e35b67e4bb696b3?Expires=1638748800&Signature=ViW76zeffBlUv2~Mjqdle7rNvC1vxxnxeohH8C6qKEklEK57up2b5zFT5z3B1IqkbvVTIK5BHI-QZHFZVewVOX-amEAm6HwTy3a9aTicGSOlzb8eI1DUCbzUZX0-11H4mEeVVCxYVwSfGLp2bXdRfhGB4xAr8q8vTcqq78iTIj-UoC9Ej5YwQOo7m4VnhtnqznUtwymk8tLccSI0hyZPzrHSClBt7WvL9-jc4FtYAfI~~fTCvl1OkrVwJE1NNvstStX6nS~lHZNF9Jn4rbe0z3O3Os6LGop9BRFV-SoypsEgbRbFPBxucTUIEKVD7mJ5b4oSFgMBLFxxC7i3cBVr4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></v-img>
                </v-card>
              </v-col>
            <v-container>
              <v-row align="center" justify="center" no-gutters style="height: 100%">
                <v-col :cols="n === 1 ? 8 : 4">
                  <v-card class="mx-auto" outlined color="transparent">
                  <v-card-text>
                    <p class="text-h2 text--primary font-weight-bold">Our client portfolio</p>
                    <p class="line"></p>
                      <div class="text--primary">See how we’ve helped ambitious <br>clients achieve extraordinary<br> outcomes.</div>
                  </v-card-text>
                  </v-card>
                </v-col>
                <v-col>
                <v-container>
                <v-col class="d-flex justify-space-around flex-wrap">
                  <v-card class="mb-3 mt-3" width="235" height="130" rounded="xl" outlined v-for="(item, index) in clientlogo" :key="index" router :to="item.link">
                    <v-col class="text-center">
                      <v-avatar>
                      <v-icon>mdi-camera</v-icon>
                      </v-avatar>
                      <v-col>
                      <h4>{{ item.judul }}</h4>
                      </v-col>
                    </v-col>
                  </v-card>
                </v-col>
                </v-container>
                </v-col>
              </v-row>
            </v-container>
            </v-row>
          </v-container>
          </v-card>
          </v-col>
          </v-row>
        </v-container>
        <Shareicon/>
      </v-main>
    </v-slide-x-transition>
    <Banner/>
    <Footer/>
  </v-app>
</template>

<script>

import Header from '../Header';
import Banner from '../Banner';
import Footer from '../Footer';
import Background from './Background';
import Shareicon from './Shareicon';

export default {
  name: 'App',

  components: {
    Header,
    Background,
    Banner,
    Footer,
    Shareicon
},

  data: () => ({

      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Industries',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Agribusiness',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],

      clientlogo:[
        {
            link: 'howwehelpsatu',
            judul: 'Client Logo 1',
        },
        {
            judul: 'Client Logo 2',
        },
        {
            judul: 'Client Logo 3',
        },
        {
            judul: 'Client Logo 4',
        },
        {
            judul: 'Client Logo 5',
        },
        {
            judul: 'Client Logo 6',
        },

    ],

}),
};
</script>
