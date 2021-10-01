// Create a Vue application
const app = Vue.createApp({})


// Define a new global component called button-counter
app.component('products-list', {
  props: ['filename'],
  data() {
    return {
      tag: "lmassignani-21",
      products: [],
      loading: 'loading...',
      customLink: '',
      linkReferral: ''
    }
  },
  watch: {
    customLink: async function (val) {
      console.log(val);
      if (!val.includes('http')) {
        this.linkReferral = "https://www.amazon.it/dp/" + val.trim()
      } else {
        this.linkReferral = val.trim()
      }
      this.linkCheck = true;
      this.linkReferral += "?tag=" + this.tag
      try {
        const headers = {
          "User-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
          "Authority": "www.amazon.it",
          "Access-Control-Allow-Origin": "*",
          "referer":"https://www.amazon.it/"
        };
        fetch(this.linkReferral, {headers})
          .then(async response => {
            console.log(response.status)
            this.linkCheck = true
          })
          .catch(error => {
          });
      } catch (e) {

      }

    }
  },
  methods: {
    goTo: function (link) {
      console.log(link);
      window.open(link);
    },
    getVueObject: function (item) {
      let tmp = {};
      for (let d in item) {
        tmp[d] = item[d];
      }
      return tmp;
    },
    async loadJsonFile() {
      fetch(this.filename)
        .then(response => response.json())
        .then(jsonResponse => {
          if (jsonResponse) {
            this.loading = '';
            let pp = jsonResponse.products;

            pp.forEach((product) => {
              let tmp = this.getVueObject(product);
              this.products.push(tmp);
            });
          }
        })
    },
    async catchWithTryCatch() {
      try {
        await this.loadJsonFile();
      } catch (error) {
        console.log('try catch');
        console.log(error);
      }
    }
  },
  mounted() {
    this.catchWithTryCatch();
  },
  template: `
  <div>
    <div class="grid grid-cols-1 pt-14 px-3 gap-x-12">
      <h3 class="mb-0">
        Se non trovi articoli di tuo interesse, inserisci il link sotto, ti verrà fornito un link referral.
      </h3>
      <input class="px-2 form-control w-full" placeholder="Inserisci il link all'articolo che vuoi acquistare" type="text" v-model="customLink">
      <span v-if="customLink.length > 0 && !linkCheck" class="text-danger">
        Link non valido!
      </span>
      <span v-if="customLink.length > 0 && linkCheck">
        <a target="_blank" :href="linkReferral">https://www.amazon.it/</a>
      </span>
    </div>
    <div class="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-2 pt-14 gap-x-12">
      {{loading}}
      <div data-aos="fade-up" data-aos-offset="200" v-on:click="goTo(product.link)" class="cursor-pointer m-3 p-3 border-2 hover:border-gray-300" v-for="product in products">
            <h4>{{product.title}}</h4>
            <p>{{product.description}}</p>
            <img class='object-contain h-48 w-full' :src='product.image'>
      </div>
    </div>
  </div>
       `
})

app.mount('#app')
