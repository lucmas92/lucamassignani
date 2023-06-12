<style>
.min-h-100 {
  min-height: 90vh;
}
</style>
<template>
  <v-card rounded="0" elevation="0" class="pt-16 min-h-100">
    <Rotate text="Contacts"/>
    <Title style="z-index: -1" title="Contacts"/>
    <v-row class="px-12 mt-12 pb-16 mt-md-16 pt-lg-16">
      <v-col class="mt-lg-12 mb-12 mb-md-0" cols="12" md="6">
        <v-card-title class="mb-12">My Contacts</v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item link href="https://goo.gl/maps/i7i9WeK7oDskXXjR8?coh=178573&entry=tt">
              <template v-slot:prepend>
                <v-icon icon="mdi-map-marker"></v-icon>
              </template>
              Castelgomberto (VI), Italy
            </v-list-item>
            <v-list-item link href="tel:3495357197">
              <template v-slot:prepend>
                <v-icon icon="mdi-phone"></v-icon>
              </template>
              349 5357197
            </v-list-item>
            <v-list-item link href="mailto:massignani.luca@hotmail.it">
              <template v-slot:prepend>
                <v-icon icon="mdi-mail"></v-icon>
              </template>
              massignani.luca
              <v-icon icon="mdi-at"></v-icon>
              hotmail.it
            </v-list-item>
            <v-list-item link href="https://lucamassignani.it">
              <template v-slot:prepend>
                <v-icon icon="mdi-web"></v-icon>
              </template>
              lucamassignani.it
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-col>

      <v-col class="mt-lg-12 bg-transparent" cols="12" md="6">

        <v-form ref="contactForm" name="contactForm" data-netlify="true" @submit.prevent="handleSubmit" netlify>
          <input type="hidden" name="form-name" value="contactForm"/>
          <v-textarea name="Message" :rules="messageRules" class="bg-transparent my-2 my-md-4" rounded="0"
                      label="Message" v-model="formData.message"></v-textarea>
          <v-text-field name="Name" :rules="nameRules" rounded="0" class="my-2 my-md-4" type="text"
                        label="Name" v-model="formData.name"></v-text-field>
          <v-text-field name="Email" :rules="emailRules" rounded="0" class="my-2 my-md-4" type="email"
                        label="Email" v-model="formData.email"></v-text-field>
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-btn type="submit" v-bind="props" class="px-8 text-uppercase" rounded="0" variant="outlined"
                     :class="{ 'text-white bg-black': isHovering, 'text-black bg-white': !isHovering }">
                Send Message
              </v-btn>
            </template>
          </v-hover>
        </v-form>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
import {defineComponent} from 'vue';
import Title from "@/components/Title.vue";
import Rotate from "@/components/Rotate.vue";
import router from "@/router";

export default defineComponent({
  name: 'ContactsView',
  data: () => ({
    valid: true,
    formData: {
      name: '',
      email: '',
      message: '',
    },
    works: [],
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 255) || 'Name must be less than 255 characters',
      v => (v && v.length >= 3) || 'Name must be at least 3 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    messageRules: [
      v => !!v || 'Message is required',
      v => (v && v.length <= 255) || 'Message must be less than 255 characters',
      v => (v && v.length >= 5) || 'Message must be at least 5 characters',
    ],
  }),

  components: {
    Rotate,
    Title
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.mobile;
    },
  },

  mounted() {
    window.scrollTo(0, 0)
    this.getWorks()
  },
  methods: {
    getWorks() {
      const url = 'https://api.github.com/users/lucmas92/repos'
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.works = data
        })
    },
    async handleSubmit(e) {
      e.preventDefault();

      const validate = await this.$refs.contactForm.validate()
      console.log(validate)

      if (!validate['valid'])
        return


      fetch("/", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(this.formData).toString(),
      })
        .then(() => this.$router.push('/thanks'))
        .catch((error) => alert(error));

    }
  },
});
</script>
