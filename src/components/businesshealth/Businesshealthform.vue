<template>
  <v-container>
    <v-row align="center" justify="center" no-gutters style="height: 100%">
      <v-col class="text-center" cols="12" sm="4" md="12">
        <v-stepper v-model="e1" class="elevation-0">
           <v-col class="d-flex">
            <v-col v-for="(item, i) in headerslogo" :key="i" cols="12" sm="4" v-show="instant">
              <v-card class="d-flex elevation-0" outlined  rounded="xl" style="border: 1px solid #4291f0">
                <v-col class="d-flex align-center justify-center">
                  <v-card class="mx-1 d-flex align-center justify-center ml-6" width="60" height="60" rounded="circle" elevation="0" color="#4291F0" style="border-color: #4291F0">
                  <v-col>
                  <v-img align-center :src="require('./logo/file-text.svg')"></v-img>
                  </v-col>
                  </v-card>
                  <v-col>
                  <h4 class="blue--text">{{item.stage}} </h4>
                  <p>{{item.tentang}}</p>
                  </v-col>
                </v-col>
                <v-stepper-step :complete="e1 > 1" step="0"> </v-stepper-step>
              </v-card>
            </v-col>
          </v-col>
          <v-stepper-header class="elevation-0 hidden-xs-only" v-show="seen">
            <v-col v-for="(item, i) in headerslogo" :key="i" cols="12" sm="4">
              <v-card class="d-flex elevation-0" outlined  rounded="xl" style="border: 1px solid #4291f0">
                <v-col class="d-flex align-center justify-center">
                  <v-card class="mx-1 d-flex align-center justify-center ml-6" width="60" height="60" rounded="circle" elevation="0" color="#4291F0" style="border-color: #4291F0">
                  <v-col>
                  <v-img :src="require('./logo/briefcase.svg')" align-center></v-img>
                  </v-col>
                  </v-card>
                  <v-col>
                  <h4 class="blue--text">{{item.stage}} </h4>
                  <p>{{item.tentang}}</p>
                  </v-col>
                </v-col>
                <v-stepper-step :complete="e1 > 1" step="1"> </v-stepper-step>
              </v-card>
            </v-col>
          </v-stepper-header>

          <v-stepper-header class="elevation-0 hidden-sm-and-up" v-show="seen">
            <v-col cols="12" sm="4">
              <v-card class="d-flex elevation-0" outlined  rounded="xl" style="border: 1px solid #4291f0">
                <v-col class="d-flex align-center justify-center">
                  <v-card class="mx-1 d-flex align-center justify-center ml-6" width="60" height="60" rounded="circle" elevation="0" color="#4291F0" style="border-color: #4291F0">
                  <v-col>
                  <v-img :src="require('./logo/briefcase.svg')" align-center></v-img>
                  </v-col>
                  </v-card>
                  <v-col>
                  <h4 class="blue--text">Stage 1 </h4>
                  <p>Tentang Diri & Background Bisnis</p>
                  </v-col>
                </v-col>
                <v-stepper-step :complete="e1 > 1" step="1"> </v-stepper-step>
              </v-card>
            </v-col>
          </v-stepper-header>
          <v-row class="hidden-sm-and-up mt-5">
            <br><br><br><br>
          </v-row>
          <v-form @submit.prevent="saved">
          <v-stepper-items class="fill-height white--text align-center pa-md-16 mx-lg-16" align="center" justify="center" style="height: 100%">
            <v-stepper-content step="1">
              <v-card>
                <h1>Tuliskan Nama Anda</h1><br/>
                <h2>Biar akrab, Kami sangat senang berkenalan terlebih dahulu</h2><br/><br/>
                <v-text-field :rules="nameRules" v-model="form.name" label="Nama Lengkap Anda" solo :value="this.setname(form.name)"></v-text-field><br/>
                <v-btn :disabled="!form.name" color="#4291F0" @click="e1 = 2; mounted()" width="165" height="60" class="white--text">
                <h4>Lanjut</h4></v-btn>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="elevation-0" style="height: 100%" v-show="hiden">
                <p class="primary--text display-3 font-weight-bold">Halo {{form.name}}</p><br />
                <p class="display-1 font-weight-bold">Senang berkenalan dengan anda</p><br/><br/>
              </v-card>
              <v-card class="elevation-0" style="height: 100%" v-show="seen">
                <h1>Selanjutnya, Kami Ingin mengetahui background bisnis yang Anda jalankan.</h1><br />
                <h3>Berapa lama bisnis Anda sudah berjalan?</h3><br/><br/>
                <v-container fluid>
                  <v-row align="center" justify="center">
                    <v-radio-group v-model="form.year_of_business" :value="this.setyear_of_business(form.year_of_business)">
                      <v-radio name="form.year_of_business" label="1 Tahun" :value="satutahun" @click="e1 = 21"></v-radio>
                      <v-radio name="form.year_of_business" label="2-5 Tahun" :value="duatahun" @click="e1 = 21"></v-radio>                
                      <v-radio name="form.year_of_business" label=">5 Tahun" :value="limatahun" @click="e1 = 21"></v-radio>                
                    </v-radio-group>
                  </v-row>
                </v-container>
              </v-card>
              <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                <v-row align="center" justify="left" v-show="seen">
                  <p @click="e1 = 1" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
              </v-row>
              </v-col>
            </v-stepper-content>

            <v-stepper-content step="21">
              <v-card class="elevation-0" style="height: 100%">
                <h1>Bisnis anda bergerak di bidang?</h1><br/>
                <v-col class="d-flex" cols="12" sm="6">
                <!-- <v-select :items="business_industriesslist" label="Pilih bisnis di bidang anda" v-model="form.business_industriess" outlined> </v-select>  -->
                <v-col align="center" justify="left" class="align-center justify-center">
                <v-combobox v-model="form.business_industriess" :items="business_industriesslist" label="Pilih bisnis di bidang anda" outlined :value="this.setbusiness_industriess(form.business_industriess)" @change="lainnyaaa" v-show="hidenlainnya"></v-combobox><br>
                <v-text-field v-model="form.business_industriess" label="Tuliskan jenis bidang bisnis anda" outlined :value="this.setbusiness_industriess(form.business_industriess)" v-show="lainnya"></v-text-field>
                </v-col>
                </v-col><br />
                <v-btn color="#4291F0" @click="e1 = 22" width="165" height="60" class="white--text" ><h4>Lanjut</h4></v-btn>
              </v-card>
              <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                <v-row align="center" justify="left">
                  <p @click="e1 = 2" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                </v-row>
              </v-col>
            </v-stepper-content>

            <v-stepper-content step="22">
              <v-card class="elevation-0" style="height: 100%">
                <h1>Apakah bisnis ini dijalankan oleh Anda sendiri atau berpartner dengan orang lain?</h1><br /><br />
                <v-container fluid>
                  <v-row align="center" justify="center">
                  <v-radio-group v-model="form.is_owner" :value="this.setis_owner(form.is_owner)">
                      <v-radio name="form.is_owner" label="Sendiri" :value="sendiri" @click="e1 = 23"></v-radio>
                      <v-radio name="form.is_owner" label="Punya Partner" :value="punyapartner" @click="e1 = 23"></v-radio>                
                    </v-radio-group>
                  </v-row>
                </v-container>
              </v-card>
              <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                <v-row align="center" justify="left">
                  <p @click="e1 = 21" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                </v-row>
              </v-col>
            </v-stepper-content>

            <v-stepper-content step="23">
              <v-card class="elevation-0">
                <v-row>
                <h1>Kita mulai untuk mengecek kondisi bisnis Anda dengan beberapa pertanyaan yang harus Anda pilih skala berdasarkan kondisi sebenarnya ya!</h1><br><br>
                </v-row>      
                <v-row align="center" justify="center" no-gutters style="height: 100%">   
                  <v-col class="d-flex flex-row mb-6" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                    <v-card class="mx-auto elevation-0" width="201" height="137" rounded="xl" outlined color="#4291F0">
                      <v-card-text class="white--text">
                      <h1>{{ item.nomor }}</h1>
                      </v-card-text>
                      <v-card-text class="white--text">
                      <h4>{{ item.keterangan }}</h4>
                      </v-card-text>
                    </v-card>
                    </v-container>
                  </v-col>
                </v-row>
                <v-btn color="#4291F0" @click="e1 = 24" width="165" height="60" class="white--text"><h4>OK, Lanjut!</h4></v-btn>
                <v-col><br/><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 22" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="24">
              <v-card class="elevation-0">
                <h1>Saya mengaplikasikan sistem dan proses yang konsisten dalam bisnis saya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.sistem_dan_proses" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.sistem_dan_proses" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonsatu(item.nomor); e1 = 25" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 23" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="25">
              <v-card class="elevation-0">
                <h1>Karyawan saya menjalankan kewajibannya tanpa perlu banyak monitoring </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.performa_karyawan" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.performa_karyawan" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtondua(item.nomor); e1 = 26" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 24" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="26">
              <v-card class="elevation-0">
                <h1>Saya secara konsisten mencatat pengeluaran dan pemasukan bisnis saya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.performa_finansial" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.performa_finansial" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtontiga(item.nomor); e1 = 27" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 25" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="27">
              <v-card class="elevation-0">
                <h1>Pelanggan/klien saya selalu membayar tepat waktu </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.billing_invoicing_dan_debitur" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.billing_invoicing_dan_debitur" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonempat(item.nomor); e1 = 28" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 26" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="28">
              <v-card class="elevation-0">
                <h1>Selalu ada uang tunai yang mampu mensupport kebutuhan operasional harian bisnis saya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.cash_flow" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.cash_flow" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonlima(item.nomor); e1 = 29" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 27" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="29" style="">
              <v-card class="elevation-0">
                <h1>JEDA</h1><br/><br/>
                <v-col class="d-flex align-center">
                  <v-container>
                    <v-btn class="buttonbhhover white--text" color="#4291F0" @click="e1 = 210" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                      <v-card-text>
                      <div><h1 class="black--text">5</h1></div><br />
                      <div>
                        <h5 class="black--text">Sangat di atas ekspektasi</h5>
                      </div>
                      </v-card-text>
                    </v-btn>
                  </v-container>
                </v-col><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 28" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="210">
              <v-card class="elevation-0">
                <h1>Saya selalu membayar vendor dan supplier tepat waktu </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.sistem_dan_proses" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.sistem_dan_proses" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonenam(item.nomor); e1 = 211" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 29" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="211">
              <v-card class="elevation-0">
                <h1>Saya mempunyai proyek/order yang berkelanjutan untuk beberapa bulan kedepan </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.performa_karyawan" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.performa_karyawan" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtontujuh(item.nomor); e1 = 212" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 210" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="212">
              <v-card class="elevation-0">
                <h1>Saya mengetahui betul kondisi terkini proyek/orderan yang didapat, baik scope kerja, spesifikasi maupun progressnya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.performa_finansial" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.performa_finansial" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtondelapan(item.nomor); e1 = 213" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 211" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="213">
              <v-card class="elevation-0">
                <h1>Saya secara aktif memastikan kualitas produk/jasa sebelum mendapat komplain pelanggan/klien </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.billing_invoicing_dan_debitur" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.billing_invoicing_dan_debitur" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonsembilan(item.nomor); e1 = 214" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 212" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="214">
              <v-card class="elevation-0">
                <h1>Pelanggan/klien mengatakan mereka puas dengan produk/jasa bisnis saya melalui survey pelanggan yang saya bagikan </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.cash_flow" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.cash_flow" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonsepuluh(item.nomor); e1 = 215" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 213" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="215" style="">
              <v-card class="elevation-0">
                <h1>JEDA</h1><br/><br/>
                <v-col class="d-flex align-center">
                  <v-container>
                    <v-btn class="buttonbhhover white--text" color="#4291F0" @click="e1 = 216" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                      <v-card-text>
                      <div><h1 class="black--text">5</h1></div><br />
                      <div>
                        <h5 class="black--text">Sangat di atas ekspektasi</h5>
                      </div>
                      </v-card-text>
                    </v-btn>
                  </v-container>
                </v-col><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 214" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="216">
              <v-card class="elevation-0">
                <h1>Saya merencanakan, menjadwalkan dan membuat prioritas dalam aktivitas harian operasional bisnis saya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.sistem_dan_proses" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.sistem_dan_proses" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonsebelas(item.nomor); e1 = 217" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 215" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="217">
              <v-card class="elevation-0">
                <h1>Saya mampu menganalisa resiko yang berpotensi menghambat bisnis saya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.performa_karyawan" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.performa_karyawan" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonduabelas(item.nomor); e1 = 218" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 216" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="218">
              <v-card class="elevation-0">
                <h1>Saya menerapakan budaya kerja yang positif, terbuka dan interaktif dalam tim karyawan saya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.performa_finansial" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.performa_finansial" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtontigabelas(item.nomor); e1 = 219" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 217" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="219">
              <v-card class="elevation-0">
                <h1>Bisnis saya berkembang dan saya memperoleh renumerasi yang layak sebagai pemilik  </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.billing_invoicing_dan_debitur" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.billing_invoicing_dan_debitur" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonempatbelas(item.nomor); e1 = 220" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 218" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="220">
              <v-card class="elevation-0">
                <h1>Saya memnpunyai business plan dan mengetahui apa saja yang harus dilakukan dan bagaimana mencapainya dalam 12 bulan ke depan </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.cash_flow" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.cash_flow" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonlimabelas(item.nomor); e1 = 221" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 219" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="221">
              <v-card class="elevation-0">
                <h1>Saya mempunyai keseimbangan yang baik dalam bekerja dan mampu mengubah peluang menjadi sesuatu yang menghasilkan untuk bisnis saya </h1><br><br>
                <v-row align="center" justify="center" no-gutters style="height: 100%">
                  <v-col class="d-flex flex-row mb-6"  v-model="form.cash_flow" v-for="(item, index) in kondisi" :key="index">
                    <v-container>
                      <v-btn :value="item.keterangan" name="form.cash_flow" class="buttonbhhover white--text" color="#4291F0" @click="setStateButtonenambelas(item.nomor); e1 = 3" width="201" height="137" rounded="xl" outlined style="border-color: #4291f0">
                        <v-card-text>
                          <div><h1 class="black--text">{{ item.nomor }}</h1></div><br/>
                          <div>
                            <h5 class="black--text">{{ item.keterangan }}</h5>
                          </div>
                        </v-card-text>
                      </v-btn>
                    </v-container>
                  </v-col>
                </v-row><br/>
                <v-col><br/><br/><br/><br/><br><br/><br/><br/><br/><br>
                  <v-row align="center" justify="left">
                    <p @click="e1 = 220" class="black--text"><v-icon>mdi-arrow-left</v-icon>Sebelumnya</p>
                  </v-row>
                </v-col>
              </v-card>
            </v-stepper-content>
    
            <v-stepper-content step="3">
              <v-card class="elevation-0">
                <v-card-text>
                  <h1>Hasil Akhir</h1><br/>
                  <h2>Sekarang saatnya mengetahui hasil analisa kondisi bisnisAnda saat ini.</h2><br/>
                  <h4>Daftarkan no. whatsapp dan email Anda untuk melihatnya</h4>
                  <v-col>
                    <v-text-field type="number" :rules="[() => !!form.phone || 'This field is required']" v-model="form.phone" label="Nomor WhatsApp" solo :value="this.setphone(form.phone)"></v-text-field><br/>
                    <v-text-field :rules="emailRules" v-model="form.email" label="Alamat E-mail" solo :value="this.setemail(form.email)"></v-text-field><br/>
                    <v-btn @click="saved" class="white--text" :disabled="!form.email" color="primary" width="400" height="50" style="text-decoration: none; color: inherit;">Perlihatkan hasil akhir saya</v-btn>
                  </v-col><br /><br />
                  <p>Dengan menekan “Perlihatkan hasil akhir saya” saya menyatakan bahwa saya telah membaca dan setuju dengan Skaleup Lisensi Pengguna Akhir dan Ketentuan Layanan serta Privasi & Persyaratan</p>
                </v-card-text>
              </v-card>
            </v-stepper-content>

          </v-stepper-items>
          </v-form>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from 'axios';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      iconTemp: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 255 || 'Name must be less than 10 characters'
      ],
      emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      satutahun: 1,
      duatahun: 3,
      limatahun: 6,
      sendiri: 1,
      punyapartner: 0,
      e1: 1,
      screening:[],
      form: {
        name:null,
        year_of_business:null,
        business_industries: null,
        is_owner: null,
        phone:null,
        email:null,
        sistem_dan_proses: null,
        performa_karyawan: null,
        performa_finansial: null,
        billing_invoicing_dan_debitur: null,
        cash_flow: null,
        creditor_payment: null,
        work_in_progress: null,
        project_management: null,
        quality: null,
        client_servicing: null,
        organization_and_scheduling: null,
        risk_management: null,
        staff_culture: null,
        sustainability_and_reward: null,
        business_planning: null,
        growth_and_balance: null,
      },
      headerslogo: [
        {
          stage:'Stage 1',
          tentang: 'Tentang Diri & Background Bisnis',
          logo: 'https://drive.google.com/file/d/1P2X6c1rDU9SIdx6FIZ5mygDjsgPVbdtg/view?usp=sharing'
          
        },
        {
          stage:'Stage 2',
          tentang: 'Analisa Bisnis Anda',
          logo: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'
        },
        {
          stage:'Stage 3',
          tentang: 'Hasil Analisa dari Kami',
          logo: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'
        }
      ],
      business_industriesslist: ["Agribisnis", "Manufaktur", "Consumer Products", "Jasa Keuangan", "Produk Kehutanan, Kertas dan Kemasan", "Infrastruktur dan Konstruksi", "Media dan Hiburan", "Energi dan Pertambangan",
                                 "Retail", "Teknologi dan Telekomunikasi", "Transportasi dan Logistik", "Energi Terbarukan", "Industri Kimia", "Kesehatan", "Lainnya, sebutkan: ..."],
      kondisi:[
            {
                nomor: '1',
                keterangan: 'Sangat di bawah ekspektasi',
            },
            {
                nomor: '2',
                keterangan: 'Di bawah ekspektasi',
            },
            {
                nomor: '3',
                keterangan: 'Sesuai ekspektasi',
            },
            {
                nomor: '4',
                keterangan: 'Di atas ekspektasi',
            },
            {
                nomor: '5',
                keterangan: 'Sangat di atas ekspektasi',
            }
        ],
      apibusinesshealth: [],
      seen: false,
      hiden: true,
      instant: true,
      lainnya: true,
      hidenlainnya: true,
    };
  },

  async mounted() {

  },

  methods: {
    lainnyaaa: function() {
      if (this.form.business_industriess == 'Lainnya, sebutkan: ...')
          return [
            this.lainnya = true,
            this.hidenlainnya = false,
            this.form.business_industriess = null,
           ];
           else
          return this.lainnya = false;
    },

    setIconTemp (icon)  {
      this.iconTemp = icon;
    },

    ...mapActions([
      'savePayload', // map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
      // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapMutations([
      'setname',
      'setyear_of_business',
      'setbusiness_industriess',
      'setis_owner',
      'setphone',
      'setemail',
      'setsistem_dan_proses',
      'setperforma_karyawan',
      'setperforma_finansial',
      'setbilling_invoicing_dan_debitur',
      'setcash_flow',
      'setcreditor_payment',
      'setwork_in_progress',
      'setproject_management',
      'setquality',
      'setclient_servicing',
      'setorganization_and_scheduling',
      'setrisk_management',
      'setstaff_culture',
      'setsustainability_and_reward',
      'setbusiness_planning',
      'setgrowth_and_balance',
      'setscreening',
    ]),
    ...mapGetters([
      'getname',
      'getyear_of_business',
      'getbusiness_industriess',
      'getis_owner',
      'getphone',
      'getemail',
      'getsistem_dan_proses',
      'getperforma_karyawan',
      'getperforma_finansial',
      'getbilling_invoicing_dan_debitur',
      'getcash_flow',
      'getcreditor_payment',
      'getwork_in_progress',
      'getproject_management',
      'getquality',
      'getclient_servicing',
      'getorganization_and_scheduling',
      'getrisk_management',
      'getstaff_culture',
      'getsustainability_and_reward',
      'getbusiness_planning',
      'getgrowth_and_balance',
      'getscreening',
    ]),
    mounted: function () {
      setTimeout(() => {
        this.seen = true;
        this.hiden = false;
      }, 3000);
      setTimeout(() => {
        this.instant = false;
      }, 0);
      setTimeout(() => {
        this.lainnya = false;
        this.hidenlainnya = true;
      });
    },
    saved() {
      this.savePayload({
        name: this.getname(),
        year_of_business: this.getyear_of_business(),
        business_industries: this.getbusiness_industriess(),
        is_owner: this.getis_owner(),
        phone: this.getphone(),
        email: this.getemail(),
        screening: {
          sistem_dan_proses: Number(this.getsistem_dan_proses()),
          performa_karyawan: Number(this.getperforma_karyawan()),
          performa_finansial: Number(this.getperforma_finansial()),
          billing_invoicing_dan_debitur: Number(this.getbilling_invoicing_dan_debitur()),
          cash_flow: Number(this.getcash_flow()),
          creditor_payment: Number(this.getcreditor_payment()),
          work_in_progress: Number(this.getwork_in_progress()),
          project_management: Number(this.getproject_management()),
          quality: Number(this.getquality()),
          client_servicing: Number(this.getclient_servicing()),
          organization_and_scheduling: Number(this.getorganization_and_scheduling()),
          risk_management: Number(this.getrisk_management()),
          staff_culture: Number(this.getstaff_culture()),
          sustainability_and_reward: Number(this.getsustainability_and_reward()),
          business_planning: Number(this.getbusiness_planning()),
          growth_and_balance: Number(this.getgrowth_and_balance()),
        },
      }).then((result) => {
        if (Number(result) < 20) this.$router.push({ name: 'finalresultthree'})
        if (Number(result) >= 20 && Number(result) <= 30) this.$router.push({ name: 'finalresulttwo'})
        if (Number(result) > 30) this.$router.push({ name: 'finalresultone'})
      })
    },

    setStateButtonsatu(val) {
      this.form.sistem_dan_proses = val;
      this.setsistem_dan_proses(val);
    },
    setStateButtondua(val) {
      this.form.performa_karyawan = val;
      this.setperforma_karyawan(val);
    },
    setStateButtontiga(val) {
      this.form.performa_finansial = val;
      this.setperforma_finansial(val);
    },
    setStateButtonempat(val) {
      this.form.billing_invoicing_dan_debitur = val;
      this.setbilling_invoicing_dan_debitur(val);
    },
    setStateButtonlima(val) {
      this.form.cash_flow = val;
      this.setcash_flow(val);
    },
    setStateButtonenam(val) {
      this.form.creditor_payment = val;
      this.setcreditor_payment(val);
    },
    setStateButtontujuh(val) {
      this.form.work_in_progress = val;
      this.setwork_in_progress(val);
    },
    setStateButtondelapan(val) {
      this.form.project_management = val;
      this.setproject_management(val);
    },
    setStateButtonsembilan(val) {
      this.form.quality = val;
      this.setquality(val);
    },
    setStateButtonsepuluh(val) {
      this.form.client_servicing = val;
      this.setclient_servicing(val);
    },
    setStateButtonsebelas(val) {
      this.form.organization_and_scheduling = val;
      this.setorganization_and_scheduling(val);
    },
    setStateButtonduabelas(val) {
      this.form.risk_management = val;
      this.setrisk_management(val);
    },
    setStateButtontigabelas(val) {
      this.form.staff_culture = val;
      this.setstaff_culture(val);
    },
    setStateButtonempatbelas(val) {
      this.form.sustainability_and_reward = val;
      this.setsustainability_and_reward(val);
    },
    setStateButtonlimabelas(val) {
      this.form.business_planning = val;
      this.setbusiness_planning(val);
    },
    setStateButtonenambelas(val) {
      this.form.growth_and_balance = val;
      this.setgrowth_and_balance(val);
    }

  }};
</script>

<style>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}

.buttonbhhover:hover {
  background-color: #4291f0;
  color: black;
}
</style>