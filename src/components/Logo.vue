<style scoped>
.logo {
    width: 90px;
}

.logo div{
    line-height: 4rem;
    height:80px
}
.logoSM div{
    width: 90px;
    height:80px;
}

span {
    letter-spacing: -0.1rem;
    font-size: 3rem;
    font-family: 'Playfair Display', serif !important;
}

.logoSM {
    width: 90px;
    height: 80px;
}
</style>
<template>
    <v-card to="/" elevation="0" class="text-center rounded-0 ma-4" :class="{logoSM: isMobile, logo:!isMobile}">
        <v-img eager :src="require('@/assets/logo.png')"></v-img>
    </v-card>
</template>

<script>

export default {
    name: 'Logo',

    data: () => ({
    }),

    computed: {
        isMobile() {
            return this.$vuetify.display.mobile;
        },
    },
}
</script>
