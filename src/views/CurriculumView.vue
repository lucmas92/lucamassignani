<style>

.text {
    line-height: 1.9rem;
    padding-left: 3rem;
    font-family: 'Merriweather Sans', sans-serif !important;
    color: grey !important;
}

.text h4 {
    color: black;
}

@media print {
    .text, .text p {
        color: grey !important;
    }

    @page {
        margin: 0;
    }

    body {
        margin: 1.2cm;
    }
}

</style>
<template>
    <v-card rounded="0" id="curriculum" elevation="0" class="pt-16 min-h-100">
        <Rotate text="Curriculum"/>
        <Title style="z-index: -1" title="Curriculum"/>
        <div id="spacer" class="mt-lg-8 pt-lg-16">
            <v-sheet max-width="1200px" color="grey-lighten-3"
                     class="ml-16 mt-12 mt-md-8 mt-lg-16 px-4 px-md-12 pb-16" style="min-height: 90vh">
                <v-btn id="print" icon="mdi-printer" @click="print"></v-btn>
                <v-row id="about" class="my-12">
                    <v-col cols="4" class="text-center text-md-left">
                        <img alt="" width="150" :src="require('@/assets/photo.jpg')"/>
                    </v-col>
                    <v-col cols="auto" sm="8">
                        <div class="d-inline-flex flex-row">
                            <Rotate text="About" :small="true"/>
                            <div class="text pt-2">
                                Diligent software engineer with 5+ years experience in creating and executing
                                innovative software solutions to enhance business productivity. Highly experienced
                                in all aspects of the software development lifecycle and end-to-end project
                                managment, from concept through to development and delivery
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row id="experience-education" class="mb-12">
                    <v-col sm="12" md="7">
                        <div id="experience" class="row d-inline-flex flex-row my-12 mt-md-0">
                            <Rotate text="Experience" :small="true"/>
                            <div class="text pt-2">
                                <h4 class="text-uppercase">Software Engineer</h4>
                                <p class="mb-6">Engineered modern application with PHP (Laravel), Python, Javascript,
                                    MySQL and SQLite.
                                    Efficently deployed and integrated software engineered by team and updated
                                    integration/development scripts to improve continuos integration practice.
                                </p>
                                Sanmarco Informatica<br/>
                                <small>2017 - Present</small>
                            </div>
                        </div>
                    </v-col>
                    <v-col>
                        <div id="education"
                             class="d-inline-flex flex-column flex-sm-row mt-16 mb-16 pb-16 mb-md-0 pb-md-0 mt-md-0">
                            <Rotate text="Education" :small="true"/>
                            <div class="text mb-6 pt-2">
                                <h4 class="text-uppercase">DIPLOMA DI RAGIONIERE PROGRAMMATORE</h4>
                                Istituto Tecnico
                                Commerciale "L. Luzzatti"
                            </div>
                            <div class="text">
                                <h4 class="text-uppercase">LAUREA IN SCIENZE INFORMATICA</h4>
                                Università di Verona - Dipartimento di Informatica
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row id="skills" class="my-12">
                    <v-col>
                        <div class="d-inline-flex flex-sm-row w-100">
                            <Rotate text="Computer<br> Skills" :small="true"/>
                            <div class="text">
                                <v-list density="compact" class="bg-transparent py-0">
                                    <v-list-item>Java</v-list-item>
                                    <v-list-item>Python</v-list-item>
                                    <v-list-item>PHP (Laravel)</v-list-item>
                                    <v-list-item>SQL</v-list-item>
                                </v-list>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <div class="d-inline-flex flex-row w-100">
                            <div class="text pl-5">
                                <v-list density="compact" class="bg-transparent">
                                    <v-list-item>Vue.js - JQuery</v-list-item>
                                    <v-list-item>HTML - CSS</v-list-item>
                                    <v-list-item>Photoshop</v-list-item>
                                    <v-list-item>Android</v-list-item>
                                </v-list>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-sheet>
        </div>
    </v-card>
</template>

<script>
import {defineComponent} from 'vue';
import Title from "@/components/Title.vue";
import Rotate from "@/components/Rotate.vue";
import Space from "@/components/Space.vue";

export default defineComponent({
    name: 'CurriculumView',
    components: {Space, Title, Rotate},
    data: () => ({}),
    methods: {
        print() {
            this.setPrinterFriendly();
            setTimeout(() => {
                print();
                this.setNormal();
            }, 1500);
        },
        setPrinterFriendly() {
            this.addClass(document.querySelector('nav'), 'd-none')
            this.addClass(document.querySelector('header'), 'd-none')
            this.addClass(document.querySelector('.rotate'), 'd-none')
            this.addClass(document.querySelector('#print'), 'd-none')
            this.addClass(document.querySelector('.title'), 'd-none')
            this.addClass(document.querySelector('.titleMD'), 'd-none')
            this.addClass(document.querySelector('.titleSM'), 'd-none')
            this.removeClass(document.querySelector('header'), 'd-flex')
            this.removeClass(document.querySelector('footer'), 'd-flex')
            this.removeClass(document.querySelector('#about'), 'my-12')
            this.removeClass(document.querySelector('#skills'), 'my-12')
            this.removeClass(document.querySelector('#education'), 'mt-16')
            this.removeClass(document.querySelector('#experience'), 'my-12')
            this.removeClass(document.querySelector('#experience-education'), 'mb-12')
            this.addClass(document.querySelector('#education'), 'mt-8')
            this.addClass(document.querySelector('#experience'), 'my-8')
            this.addClass(document.querySelector('#curriculum'), 'pt-6')
            this.removeClass(document.querySelector('#curriculum'), 'my-12')
            this.removeClass(document.querySelector('#curriculum'), 'pt-16')
            this.removeClass(document.querySelector('.v-main'), 'my-12')
            this.removeClass(document.querySelector('.v-main'), 'py-16')
            this.removeClass(document.querySelector('.v-sheet'), 'ml-16')
            this.removeClass(document.querySelector('#spacer'), 'mt-lg-8')
            this.removeClass(document.querySelector('#spacer'), 'pt-lg-16')
            document.querySelector('footer').style.display = 'none';
            document.querySelector('.v-main').style.padding = '0';
        },
        setNormal() {
            this.removeClass(document.querySelector('nav'), 'd-none')
            this.removeClass(document.querySelector('header'), 'd-none')
            this.removeClass(document.querySelector('.rotate'), 'd-none')
            this.removeClass(document.querySelector('#print'), 'd-none')
            this.removeClass(document.querySelector('.title'), 'd-none')
            document.querySelector('.v-main').style.padding = 'var(--v-layout-left)';
            this.addClass(document.querySelector('.v-main'), 'py-16')
            this.addClass(document.querySelector('.v-main'), 'my-12')
            this.addClass(document.querySelector('.v-sheet'), 'ml-16')
        },
        addClass(elem, className) {
            if (elem) {
                elem.classList.add(className)
            }
        },
        removeClass(elem, className) {
            if (elem) {
                elem.classList.remove(className)
            }
        }
    }
});
</script>
