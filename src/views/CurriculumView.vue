<template>
  <v-card rounded="0" id="curriculum" elevation="0" class="pt-16 min-h-100">
    <Rotate id="title" text="Curriculum"/>
    <Title style="z-index: -1" title="Curriculum"/>
    <div id="spacer" class="mt-lg-8 pt-lg-16">
      <v-sheet max-width="1200px" color="grey-lighten-3" id="cvsheet"
               class="ml-16 mt-12 mt-md-8 mt-lg-16 px-10 px-md-12 pt-8 pt-md-4 pb-16" style="min-height: 90vh">

        <v-btn id="print" @click="print">Print</v-btn>
        <!-- INTESTAZIONE-->
        <div class="d-flex my-5">
          <img :src="require('@/assets/foto.jpeg')" alt="Foto Profilo" class="rounded-circle w-25">
          <div class="px-5 w-100">
            <div class="d-flex justify-space-between">
              <div>
                <h1 class="text-uppercase text-h4 font-weight-black">Luca Massignani</h1>
                <h2 class="text-h5 text-blue">Solution Developer</h2>
              </div>
              <img :src="require('@/assets/qr.svg')" alt="QR Code" style="width: 100px">
            </div>
            <div class="d-flex justify-space-around mt-6">
              <div class="d-flex flex-column">
                <div>
                  <span class="mdi mdi-calendar-month mr-2"></span>23 Giugno 1992
                </div>
                <div>
                  <span class="mdi mdi-cellphone mr-2"></span>
                  <a class="text-decoration-none text-black" href="tel:3495357197">3495357197</a>
                </div>
              </div>
              <div class="flex flex-column">
                <div>
                  <span class="mdi mdi-email-outline mr-2"></span>
                  <a class="text-decoration-none text-black" href="mailto:massignani.luca@hotmail.it">massignani.luca@hotmail.it</a>
                </div>
                <div class="underline">
                  <span class="mdi mdi-web mr-2"></span>
                  <a class="text-decoration-none text-black" target="_blank" href="https://lucamassignani.it">lucamassignani.it</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TESTO -->
        <div class="mt-6 mt-md-12">
          <p class="text-body-2">Ho 7 anni di esperienza come Software Engineer, specializzato in tecnologie come PHP,
            Laravel,
            Linux, MySQL,
            Java, Shell, Python, Vuejs, HTML e Css. Ho partecipato a numerosi progetti di successo, migliorando le
            performance dei prodotti. Sono in grado di lavorare in modo indipendente e di gestire le aspettative del
            cliente, fornendo servizi di qualità. Continuo a cercare opportunità per ampliare le mie conoscenze e
            migliorare
            le mie abilità</p>
        </div>

        <!-- ESPERIENZE E EDUCAZIONE-->
        <div class="my-4 my-md-6">
          <v-sheet class="bg-transparent">
            <h4 class="font-weight-black pt-2 pb-4 text-subtitle-1 text-md-h6 text-blue">ESPERIENZE</h4>
            <v-row style="border-left:1px solid blue" class="px-2 text-body-2 mx-0">
              <v-col cols="12" sm="4" class="pt-0">
                <h5 class="font-weight-black text-subtitle-2 text-md-subtitle-2">SOLUTION DEVELOPER</h5>
                <p class="text-grey-darken-2">Sanmarco Informatica S.P.A</p>
                <p class="text-grey-darken-2">01/2024 - In corso</p>
              </v-col>
              <v-col cols="12" sm="8" class="pt-0 font-weight-regular">
                Responsabile della progettazione e dell'implementazione attiva di applicazioni web, collaborando
                strettamente con il team di sviluppo per concepire e realizzare soluzioni software mediante l'uso di
                tecnologie moderne come PHP (framework Laravel), VueJS, Python, Javascript, MySQL e SQLite
              </v-col>

              <v-col cols="12" sm="4" class="pb-0">
                <h5 class="font-weight-black mt-4 text-subtitle-2 text-md-subtitle-2">SOFTWARE ENGINEER</h5>
                <p class="text-grey-darken-2">Sanmarco Informatica S.P.A</p>
                <p class="text-grey-darken-2">07/2017 - 12/2023</p>
              </v-col>
              <v-col cols="12" sm="8" class="pb-0">
                Incaricato dell'analisi dei requisiti, a contatto con i clienti per comprendere appieno le loro
                esigenze. Implementazione e testing di soluzioni software con attenzione per garantire che il codice sia
                pulito e conforme alle specifiche del cliente, rispettando i tempi di consegna. Monitoraggio di tutte le
                fasi del ciclo di sviluppo fornendo supporto tecnico ai clienti.
              </v-col>
            </v-row>
          </v-sheet>

          <v-sheet class="mt-6 mt-md-8 bg-transparent">
            <h4 class="font-weight-black pt-2 pb-4 text-subtitle-1 text-md-h6 text-blue">EDUCAZIONE</h4>
            <v-row style="border-left:1px solid blue" class="px-2 text-body-2 mx-0">
              <v-col cols="12" sm="4" class="pt-0">
                <h5 class="font-weight-black text-subtitle-2 text-md-subtitle-2">LAUREA IN SCIENZE INFORMATICA</h5>
                <p class="text-grey-darken-2">2022</p>
              </v-col>
              <v-col cols="12" sm="8" class="pt-0">
                Università degli Studi di Verona - Dipartimento di Informatica
              </v-col>
              <v-col cols="12" sm="4" class="pb-0">
                <h5 class="font-weight-black text-subtitle-2 text-md-subtitle-2">DIPLOMA DI RAGIONIERE PROGRAMMATORE</h5>
                <p class="text-grey-darken-2">2011</p>
              </v-col>
              <v-col cols="12" sm="8" class="pb-0">
                Istituto Tecnico Commerciale "L. Luzzatti"
              </v-col>
            </v-row>
          </v-sheet>
        </div>

        <v-sheet class="my-6 my-md-8 bg-transparent">
          <h4 class="font-weight-black pt-2 text-subtitle-1 text-md-h6 text-blue">COMPETENZE PERSONALI</h4>
          <v-row>
            <v-col cols="12" sm="6">
              <table class="text-body-2 text-md-body-1">
                <tr>
                  <td>Problem Solving</td>
                  <td>
                    <v-progress-linear
                      bg-color="pink-lighten-3"
                      color="pink-lighten-1"
                      model-value="85"
                    ></v-progress-linear>
                  </td>
                </tr>
                <tr>
                  <td>Ingles (B1)</td>
                  <td>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Puntulità</td>
                  <td>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 95%"></div>
                    </div>
                  </td>
                </tr>
              </table>
            </v-col>
            <v-col cols="12" sm="6">
              <table class="text-body-2 text-md-body-1">
                <tr>
                  <td>Flessibilità</td>
                  <td>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 90%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Autonomia</td>
                  <td>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 80%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Affidabilità</td>
                  <td>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 85%"></div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Lavoro in Team</td>
                  <td>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div class="bg-blue-600 h-2.5 rounded-full" style="width: 90%"></div>
                    </div>
                  </td>
                </tr>
              </table>
            </v-col>
          </v-row>
        </v-sheet>
      </v-sheet>
    </div>
  </v-card>
</template>

<script>
import {defineComponent} from 'vue';
import Title from "@/components/Title.vue";
import Rotate from "@/components/Rotate.vue";
import Space from "@/components/Space.vue";

export default defineComponent({
  name: 'CurriculumView',
  components: {Space, Title, Rotate},
  data: () => ({}),
  methods: {
    print() {
      this.setPrinterFriendly();
      setTimeout(() => {
        print();
        this.setNormal();
      }, 500);
    },
    setPrinterFriendly() {
      this.addClass(document.querySelector('header'), 'd-none')
      this.addClass(document.querySelector('nav'), 'd-none')
      this.addClass(document.querySelector('.rotate'), 'd-none')
      this.addClass(document.querySelector('#print'), 'd-none')
      this.addClass(document.querySelector('.title'), 'd-none')
      this.addClass(document.querySelector('footer'), 'd-none')
      this.addClass(document.querySelector('.v-main'), 'pl-0')
      this.addClass(document.querySelector('#spacer'), 'mt-lg-8')
      this.addClass(document.querySelector('#spacer'), 'pt-lg-16')
      this.removeClass(document.querySelector('header'), 'd-flex')
      this.removeClass(document.querySelector('#cvsheet'), 'mt-12')
      this.removeClass(document.querySelector('#cvsheet'), 'mt-md-8')
      this.removeClass(document.querySelector('#cvsheet'), 'bg-grey-lighten-3')
      this.removeClass(document.querySelector('main'), 'pt-16')
      this.removeClass(document.querySelector('footer'), 'd-flex')
      this.removeClass(document.querySelector('#curriculum'), 'my-12')
      this.removeClass(document.querySelector('#curriculum'), 'pt-6')
      this.removeClass(document.querySelector('#curriculum'), 'pt-16')
      this.removeClass(document.querySelector('.v-sheet'), 'ml-16')
    },
    setNormal() {
      this.removeClass(document.querySelector('header'), 'd-none')
      this.removeClass(document.querySelector('nav'), 'd-none')
      this.removeClass(document.querySelector('.rotate'), 'd-none')
      this.removeClass(document.querySelector('#print'), 'd-none')
      this.removeClass(document.querySelector('.title'), 'd-none')
      this.removeClass(document.querySelector('footer'), 'd-none')
      this.removeClass(document.querySelector('.v-main'), 'pl-0')
      this.removeClass(document.querySelector('#spacer'), 'mt-lg-8')
      this.removeClass(document.querySelector('#spacer'), 'pt-lg-16')
      this.addClass(document.querySelector('header'), 'd-flex')
      this.addClass(document.querySelector('#cvsheet'), 'mt-12')
      this.addClass(document.querySelector('#cvsheet'), 'mt-md-8')
      this.addClass(document.querySelector('#cvsheet'), 'bg-grey-lighten-3')
      this.addClass(document.querySelector('main'), 'pt-16')
      this.addClass(document.querySelector('footer'), 'd-flex')
      this.addClass(document.querySelector('#curriculum'), 'my-12')
      this.addClass(document.querySelector('#curriculum'), 'pt-6')
      this.addClass(document.querySelector('#curriculum'), 'pt-16')
      this.addClass(document.querySelector('.v-sheet'), 'ml-16')
    },
    addClass(elem, className) {
      if (elem) {
        elem.classList.add(className)
      }
    },
    removeClass(elem, className) {
      if (elem) {
        elem.classList.remove(className)
      }
    }
  }
});
</script>
