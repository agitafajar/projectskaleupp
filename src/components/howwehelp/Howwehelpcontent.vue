<template>
  <v-container>
    <v-row justify="left">
      <v-col cols="12" sm="8" md="4">
        <v-card class="mx-auto" outlined color="transparent">
          <v-card-text>
            <p class="text-h2 text--primary font-weight-bold">
              How We Help
            </p>
            <p class="line"></p>
            <div class="text--primary">
              relating to or dependent on charity; charitable.<br />
              "an eleemosynary educational institution."
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="8" align="left" justify="center">
        <v-container >
          <v-row>
            <v-col class="d-flex justify-space-around flex-wrap">
              <v-card width="400" height="150" rounded="0" outlined color="transparent" v-for="(item, index) in wehelp" :key="index" router :to="item.link">
                <v-col class="overfloww d-flex">
                  <v-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"/>
                  </v-avatar>
                <v-col class="pa-md-1 mx-lg-3">
                  <h4>{{ item.judul }}</h4>
                  <p>{{ item.rincian }}</p>
                </v-col>
                </v-col>
              </v-card>
            </v-col>
          </v-row> 
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
    wehelp:[
        {
            link: 'howwehelpsatu',
            judul: 'How We Help 1',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        },
        {
            judul: 'How We Help 2',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        },
        {
            judul: 'How We Help 3',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        },
        {
            judul: 'How We Help 4',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        },
        {
            judul: 'How We Help 5',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        },
        {
            judul: 'How We Help 6',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        },
        {
            judul: 'How We Help 7',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        },
        {
            judul: 'How We Help 8',
            rincian: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac in in venenatis, cursus. Sit hendrerit eget ut posuere sollicitudin id sagittis.',
        }
    ],
  }),
  mounted () {
    document.getElementbyId().scroll = true
  }
};
</script>