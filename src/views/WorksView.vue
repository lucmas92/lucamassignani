<style scoped>
.details:before {
    content: '';
    display: block;
    width: 30%;
    height: 1px;
    background: rgba(20, 20, 20, 0.6);
    position: relative;
    top: 0.5rem;
    left: -40%;
}

.details {
    font-size: 0.7rem !important;
    letter-spacing: 0.3rem !important;
}

.details:hover::before {
    left: -1rem;
    width: 120%;
    transition: all 0.2s ease-in-out;
}
</style>
<template>
    <v-card rounded="0" elevation="0" class="pt-16 min-h-100">
        <Rotate text="Works"/>
        <Title style="z-index: -1" title="Works"/>
        <v-sheet class="mx-auto mt-12 mt-md-16 pt-lg-16 bg-transparent"
                 elevation="0"
                 :max-width="isMobile?800:1200">
            <v-card class="pa-4 mt-md-0" style="min-height: 60vh" elevation="0" v-for="(work,i) in works" :key="i">
                <v-card-title data-aos="fade-up" data-aos-delay="100">
                    <v-img :src="require('@/assets/project.webp')"/>
                </v-card-title>
                <v-card-text class="text-grey-lighten-1 mt-8">
                    <v-row class="px-3 justify-md-center">
                        <v-col cols="12" md="6">
                            {{ work.description }}
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions class="d-flex justify-end justify-md-center">
                    <a target="_blank" :href="work['html_url']" class="details text-decoration-none text-uppercase">
                        View Details
                    </a>
                </v-card-actions>
            </v-card>
        </v-sheet>

    </v-card>
</template>

<script>
import {defineComponent} from 'vue';
import Title from "@/components/Title.vue";
import Rotate from "@/components/Rotate.vue";

export default defineComponent({
    name: 'WorksView',
    data: () => ({
        works: [],
        model: null,
        colors: [
            'indigo',
            'warning',
            'pink darken-2',
            'red lighten-1',
            'deep-purple accent-4',
        ]

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
    },
});
</script>
