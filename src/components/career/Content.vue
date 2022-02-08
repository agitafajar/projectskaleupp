<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col class="text-center mb-16" cols="12" sm="8" md="7">
        <v-col align="center"><br/><br/>
          <p class="text-h4 text--primary font-weight-bold">Find Your Dream Job in Skaleup!</p>
          <p class="lineinso"></p>
          <v-card-subtitle>Start finding your purpose with Skaleup. See our latest vacancies below.</v-card-subtitle>
          <v-row>
            <v-col cols="12" sm="10">
              <v-text-field v-model="search" outlined label="Search by role or keyword" prepend-inner-icon="mdi-magnify" style="width: 100%"></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
             <router-link to="/Careers/careersatu"> <v-btn color="#4291F0" width="168" height="52" class="white--text">Search</v-btn></router-link>
            </v-col>
          </v-row>
        </v-col>

        <v-data-table
    :headers="tittles"
    :items="itemitem"
    :items-per-page="5"
    class="elevation-1"
    :search="search">
    </v-data-table>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        tittles: [
          {
            text: 'TITTLE',
            align: 'start',
            sortable: false,
            value: 'judul',
          },
          { text: 'DEPARTEMENT', value: 'departement' },
          { text: 'JOB POSTED', value: 'tanggal' },
        ],
        itemitem: [
          {
            judul: 'Legal Associate',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
         
          },
          {
            judul: 'Procurement Governance & Excellence',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Financial Planning & Analysis (Financial Services)',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Risk Control & Audit Associate',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Accounting Associate',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Legal Associate',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
         
          },
          {
            judul: 'Procurement Governance & Excellence',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Financial Planning & Analysis (Financial Services)',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Risk Control & Audit Associate',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Accounting Associate',
            departement: 'Finance',
            tanggal: 'Nov 21, 2021',
          },
          {
            judul: 'Jelly bean',
            departement: 0.0,
            tanggal: 94,
          },
          {
            judul: 'Lollipop',
            departement: 0.2,
            tanggal: 98,
          },
          {
            judul: 'Honeycomb',
            departement: 3.2,
            tanggal: 87,
          },
          {
            judul: 'Donut',
            departement: 25.0,
            tanggal: 51,
          },
          {
            judul: 'KitKat',
            departement: 26.0,
            tanggal: 65,
          },
        ],
      }
    },
  }
</script>