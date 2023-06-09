<style scoped>
.mainText {
    margin-top: 2rem;
    font-family: 'Playfair Display', serif !important;
}
.text {
    line-height: 1.9rem;
    padding-left: 4rem;
    font-family: 'Merriweather Sans', sans-serif !important;
}

.min-h-100 {
    min-height: 90vh;
}
.min-h-50 {
    padding-bottom: 10rem !important;
}
</style>
<template>
    <v-card rounded="0" elevation="0" class="text-center pt-16 pb-8 mb-md-0" :class="{'min-h-100': !isMobile, 'min-h-50': isMobile}">
        <Title :title="title" :right="ltr !== 'true'"/>
        <v-row class="mt-12 px-3">
            <v-col class="" style="min-height: 40vh" cols="12" md="6"
                   :order="ltr === 'true' ||  $vuetify.display.smAndDown ? 1 :2">
                <img alt="" data-aos="fade-down"
                     data-aos-anchor-placement="center-bottom"
                     class="pt-6" style="max-height: 60vh; max-width:100%; z-index:200" :src="getImageUrl(my_image)"/>
            </v-col>
            <v-col :order="ltr === 'true' || $vuetify.display.smAndDown ? 2 : 1" class="text-left"
                   style="z-index: 100; min-height: 50vh">
                <div data-aos="fade-in" class="mt-lg-16 pt-lg-12 text-h4 text-md-h2 mainText" v-html="mainText"/>
                <div class="d-inline-flex flex-row mt-12">
                    <Rotate :text="title"/>
                    <div :data-aos="ltr === 'true' ? 'fade-left' : 'fade-right'"
                         data-aos-delay="100"
                         data-aos-anchor-placement="bottom-bottom">
                        <slot name="text">
                            <div class="text text-grey-lighten-1" v-html="text"/>
                        </slot>
                    </div>
                </div>
                <v-hover v-if="buttonText && buttonLink">
                    <template v-slot:default="{ isHovering, props }">
                        <v-btn v-bind="props" class="mt-12 px-8 ml-16 text-uppercase" rounded="0" variant="outlined"
                               :to="buttonLink"
                               :class="{ 'text-white bg-black': isHovering, 'text-black bg-white': !isHovering }">
                            {{ buttonText }}
                        </v-btn>
                    </template>
                </v-hover>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>

import Title from "@/components/Title.vue";
import Rotate from "@/components/Rotate.vue";

export default {
    components: {Rotate, Title},
    props: {
        title: {
            type: String,
            required: true,
        },
        mainText: {
            type: String,
            required: false,
        },
        text: {
            type: String,
            required: false,
        },
        my_image: {
            type: String,
            required: false,
        },
        ltr: {
            type: String,
            required: false,
        },
        buttonLink: {
            type: String,
            required: false,
        },
        buttonText: {
            type: String,
            required: false,
        },
    },
    name: 'Space',

    data: () => ({}),
    computed: {
        isMobile() {
            return this.$vuetify.display.mobile;
        },
    },
    methods: {
        getImageUrl(image) {
            return require(`@/assets/${image}`);
        },
    },
}
</script>
