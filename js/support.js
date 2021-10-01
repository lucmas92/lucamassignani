// Create a Vue application
const app = Vue.createApp({})


// Define a new global component called button-counter
app.component('products-list', {
  props: ['filename'],
  data() {
    return {
      tag:"lmassignani-21",
      products: [],
      loading: 'loading...',
      customLink:''
    }
  },
  methods:{
    goTo: function(link) {
      console.log(link);
      window.open(link);
    },
    getVueObject: function(item){
          let tmp = {};
          for (let d in item){
            tmp[d] = item[d];
          }
          return tmp;
    },
    async loadJsonFile(){
       fetch(this.filename)
         .then(response => response.json())
         .then(jsonResponse => {
            if (jsonResponse) {
              this.loading = '';
              this.products_md5 = jsonResponse.md5;
              let pp = jsonResponse.products;

              pp.forEach((product) => {
                let tmp = this.getVueObject(product);
                this.products.push(tmp);
              });
            }
          })   
    },
    async catchWithTryCatch () {
      try {
        await this.loadJsonFile();
      } catch (error) {
        console.log('try catch');
        console.log(error);
      }
    }
  },
  mounted(){
    this.catchWithTryCatch();
  },
  template: `
  <div>
      <span v-if="customLink.length > 0 && customLink.includes('http')">{{customLink}}?tag={{tag}}</span>
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