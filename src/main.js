import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import AOS from 'aos';

// importing AOS css style globally
import 'aos/dist/aos.css'

loadFonts()
AOS.init({
    duration: 600, // values from 0 to 3000, with step 50ms
});

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
