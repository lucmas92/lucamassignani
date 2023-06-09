<style>


.rotate {
    z-index: 9999;
    -webkit-transform-origin: left top 0;
    transform-origin: left top 0;
    transform: rotate(90deg);
    padding-left: 0.5rem;
    position: absolute;
    letter-spacing: 1em;
    font-size: 0.75rem !important;
    font-weight: 400;
    line-height: 1.25rem;
}

.text-small {
    font-size: 0.6rem !important;
}

.rotate:after {
    content: '';
    display: block;
    width: 50%;
    height: 1px;
    background: rgba(20, 20, 20, 0.6);
    position: absolute;
    top: 0.6rem;
    left: 110%;
}

@media print {
    .rotate {
        color: darkgrey !important;
    }
}

.rotate:hover::after {
    left: -.8rem;
    width: 120%;
    transition: all 0.2s ease-in-out;
    background: red;
}
</style>
<template>
    <div class="text-uppercase ml-6 rotate" :class="{'text-small':small}" v-html="text"/>
</template>

<script>

export default {
    name: 'Rotate',

    data: () => ({}),
    props: {
        text: {
            type: String,
            required: true,
        },
        small: {
            type: Boolean,
            default: false,
        },

    },
}
</script>
