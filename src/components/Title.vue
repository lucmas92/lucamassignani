<style scoped>
* {
//box-shadow: 0px 0px 5px #000000;
}

.title {
    font-size: 200px;
    color: rgba(230, 230, 230, 0.6);
    line-height: 200px;
    top: 1rem;
    left: 5%;
    position: fixed;
    font-family: "Playfair Display", Georgia, serif !important;

}

.left{
    margin-left: 15%
}

.right{
   margin-left: 45%
}

.titleSM {
    font-size: 70px;
    line-height: 70px;
    color: rgba(230, 230, 230, 0.6);
    top: 10px;
    z-index: 150;
    left: 0;
    margin-left: 20%;
    font-family: "Playfair Display", Georgia, serif !important;

}

.titleMD {
    font-size: 100px;
    line-height: 100px;
    color: rgba(230, 230, 230, 0.6);
    top: 0;
    z-index: 150;
    left: 0;
    margin-left: 20%;
    font-family: "Playfair Display", Georgia, serif !important;

}
</style>
<template>
    <span data-aos="fade-in" data-aos-anchor-placement="center-bottom" class="position-absolute font-weight-bold"
          :class="{title: !isMobile, titleMD:isTablet, titleSM: isMobile, right:right && !isMobile, left:!right || isMobile}">
            {{ title }}
        </span>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        right: {
            type: Boolean,
            default: false,
        },
    },
    name: 'Title',

    data: () => ({}),
    computed: {
        isMobile() {
            return this.$vuetify.display.mobile;
        },
        isTablet() {
            return this.$vuetify.display.md;
        },
    }
}
</script>
