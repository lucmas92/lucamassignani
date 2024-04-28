<style>
* {
    font-family: 'Quicksand', sans-serif !important;
}

.list::before {
    content: '\2022';
    color: #000;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
}
</style>
<template>
    <v-card rounded="0">
        <Space
                title="About"
                ltr="true"
                my_image="photo.jpg"
                mainText="Luca<br/>Massignani"
                text="Ho 7 anni di esperienza come Software Engineer, specializzato in tecnologie come PHP, Laravel, Linux, MySQL, Java, Shell, Python, Vuejs, HTML e Css. Ho partecipato a numerosi progetti di successo, migliorando le performance dei prodotti. Sono in grado di lavorare in modo indipendente e di gestire le aspettative del cliente, fornendo servizi di qualità. Continuo a cercare opportunità per ampliare le mie conoscenze e migliorare le mie abilità"/>

        <Space title="Skills"
               ltr="false"
               my_image="skills.jpg"
               mainText="Some of My Skills">
            <template v-slot:text>
                <div class="text text-grey-lighten-1 pl-16">
                    <v-card elevation="0" class="pt-4 pl-4">
                        <v-row>
                            <p class="text-grey-lighten-1">
                                These skills have been developed through field experience, study, and continuous
                                education. Each competence represents an area of knowledge in which I have gained a
                                certain mastery, allowing me to provide added value in the work I do.
                            </p>
                            <v-col cols="6" sm="6">
                                <v-list class="text-grey" density="compact">
                                    <v-list-item class="list">Java</v-list-item>
                                    <v-list-item class="list">PHP</v-list-item>
                                    <v-list-item class="list">Python</v-list-item>
                                    <v-list-item class="list">MySql</v-list-item>
                                    <v-list-item class="list">Couchbase</v-list-item>
                                    <v-list-item class="list">Prisma</v-list-item>
                                    <v-list-item class="list">Express</v-list-item>
                                    <v-list-item class="list">Shell</v-list-item>
                                </v-list>
                            </v-col>
                            <v-col cols="6" sm="6">
                                <v-list class="text-grey" density="compact">
                                    <v-list-item class="list">HTML / CSS</v-list-item>
                                    <v-list-item class="list">Bootstrap</v-list-item>
                                    <v-list-item class="list">Tailwind</v-list-item>
                                    <v-list-item class="list">VueJS</v-list-item>
                                    <v-list-item class="list">Nuxt 2</v-list-item>
                                </v-list>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>

            </template>
        </Space>
        <Space title="Works"
               ltr="true"
               my_image="works.jpg"
               mainText="Recent<br/>Works"
               text="Section dedicated to the projects I have completed. Here you can find a complete list of the works I have finished, which represent my skills and competencies in various areas.
                    <br/>
                    I invite you to explore this section to discover in detail the projects I have completed. You will find information about the challenges I faced, the results I achieved, and the competencies I acquired during the process.
                    <br/>
                    In addition, you will have the opportunity to see examples of my creations and evaluate my style and technique.
                    <br/><br/>
                    Do not hesitate to contact me if you have any questions or if you are interested in collaborating with me on a project."
               buttonLink="/works"
               buttonText="View My Works"
        />
    </v-card>
</template>

<script>
import {defineComponent} from 'vue';
import Space from "@/components/Space.vue";

// Components

export default defineComponent({
    name: 'HomeView',
    data: () => ({}),

    mounted() {
        window.scrollTo(0, 0)
    },
    components: {
        Space
    },
});
</script>
