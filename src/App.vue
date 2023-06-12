<style>
.nav-item {
  text-decoration: none;
  transition: all .1s ease-in-out;
}

.nav-item:before {
  content: '';
  display: block;
  width: 10%;
  height: 1px;
  background: rgba(20, 20, 20, 0.6);
  position: absolute;
  top: 1.4rem;
  left: 83%;
}

</style>
<template>
  <v-app>
    <v-main class="pt-16">
      <v-navigation-drawer class="d-print-none" v-model="drawer" temporaryx>
        <v-list-item class="text-center" v-if="isMobile">
          <Logo class="float-right"/>
        </v-list-item>

        <v-list density="compact" class="text-right mt-16" nav>
          <v-list-item variant="plain" rounded="0" class="nav-item pr-12 pb-0" to="/" title="Home"
                       value="home"></v-list-item>
          <v-list-item variant="plain" rounded="0" class="nav-item pr-12 pb-0" to="works" title="My Works"
                       value="Works"></v-list-item>
          <v-list-item variant="plain" rounded="0" class="nav-item pr-12 pb-0" to="contacts" title="Contact"
                       value="Contacts"></v-list-item>
          <v-list-item variant="plain" rounded="0" class="nav-item pr-12 pb-0" to="curriculum"
                       title="Curriculum"
                       value="Curriculum"></v-list-item>
        </v-list>

      </v-navigation-drawer>
      <v-app-bar height="100px" class="text-right d-flex d-print-none" scroll-behavior="hide" elevation="0"
                 scroll-threshold="50" density="prominent"
                 :class="{'justify-end': isMobile, 'justify-space-between': !isMobile}">
        <Logo v-if="!isMobile"/>
        <template v-slot:append>
          <v-btn elevation="0" :class="{'d-none':!darkMode}" @click="toggleTheme"
                 icon="mdi-white-balance-sunny"></v-btn>
          <v-btn elevation="0" :class="{'d-none':darkMode}" @click="toggleTheme" icon="mdi-weather-night"></v-btn>

          <v-btn elevation="0" size="x-large"
                 icon="mdi-menu" @click.stop="drawer = !drawer"/>
        </template>
      </v-app-bar>
      <router-view/>
      <v-footer class="d-flex flex-column text-grey py-12">
        <div class="d-flex flex-column flex-md-row w-100 align-center px-4">
          Get connected with me on social networks!

          <v-spacer></v-spacer>
          <div>
            <v-btn
              v-for="(icon,key) in icons"
              :key="key"
              @click="goTo(icon.link)"
              class="mx-4"
              :icon="icon.icon"
              variant="plain"
            ></v-btn>
          </div>
        </div>

        <div class="px-4 py-2 text-center w-100">
          &copy; Copyright {{ new Date().getFullYear() }} — <strong>All rights reserved</strong>
        </div>
      </v-footer>
      <v-btn id="to-top" v-if="windowTop > 100" size="small"
             style="right:2rem; bottom:2rem; position: fixed;"
             class="elevation-21 d-print-none"
             dark
             icon="mdi-arrow-up"
             fab
             button
             right
             color="grey"
             @click="scrollToTop"/>
    </v-main>
  </v-app>
</template>

<script>

import Logo from "@/components/Logo.vue";
import {useTheme} from 'vuetify'

export default {
  name: 'App',
  components: {Logo},
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
      }
    }
  },
  data: () => ({
    drawer: null,

    windowTop: window.top.scrollY,
    icons: [
      {icon: 'mdi-facebook', link: '#'},
      {icon: 'mdi-twitter', link: '#'},
      {icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/luca-massignani-a8a28a197/'},
      {icon: 'mdi-instagram', link: '#'},
    ]
  }),
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
    darkMode: function () {
      return this.$vuetify.theme.current.dark
    }
  },
  created() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    goTo(link) {
      window.open(link, '_blank')
    },
    handleScroll() {
      this.windowTop = Math.round(window.scrollY)
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>
