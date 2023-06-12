<template>
  <v-card rounded="0" elevation="0" class="pt-16 min-h-100">
    <Rotate text="Thanks"/>
    <Title style="z-index: -1" title="Thanks"/>
    <v-sheet class="mx-auto mt-12 mt-md-16 pt-lg-16 bg-transparent text-center"
             elevation="0"
             :max-width="isMobile?800:1200">
      <v-row class="px-12 pb-16 pt-lg-16">
        <v-col class="mb-12 mb-md-0 text-h6 text-md-h4" cols="12">
          Grazie per aver inviato il tuo messaggio!<br/>
          Risponderò al più presto!
        </v-col>
      </v-row>
      <v-progress-linear :model-value="progress" max="50"></v-progress-linear>

    </v-sheet>

  </v-card>
</template>

<script>
import {defineComponent} from 'vue';
import Title from "@/components/Title.vue";
import Rotate from "@/components/Rotate.vue";

const TIMER = 3000;
export default defineComponent({
  name: 'ThanksView',
  data: () => ({
    progress: 50,
    progressInterval: null
  }),
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
  },
  watch: {
    progress(val) {
      if (val <= 0) {
        clearInterval(this.progressInterval);
        this.$router.push('/')
      }
    },
  },
  mounted() {
    this.progressInterval = setInterval(() => {
      this.progress -= 2
    }, 100)
  },
  beforeUnmount() {
    clearInterval(this.progressInterval)
  },
  components: {
    Rotate,
    Title
  }
});
</script>
