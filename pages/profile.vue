<template>
    <v-card class="mx-2 my-2" elevation="6">
        <v-row dense>
            <v-col cols="12" md="3">
                <!-- Top Section -->

                <v-card-title class="d-flex justify-center">
                    <v-avatar size="120">
                        <img src="/assets/images/avatar.jpg" alt="Avatar">
                    </v-avatar>
                </v-card-title>
                <v-card-subtitle class="text-center">
                    <h2>John Doe</h2>
                    <p>Software Developer</p>
                </v-card-subtitle>


            </v-col>
            <v-col cols="12" md="6">

                <v-list v-if="basicInfo && basicInfo.length">
                    <!-- Loop through each key-value pair in the first object of basicInfo -->
                    <v-list-item v-for="(value, key) in basicInfo[0]" :key="key" density="compact">

                        <v-list-item-title class="text-subtitle-2">
                            <v-row><v-col cols="4" md="2"><strong>{{ key }}:</strong></v-col><v-col cols="8" md="8">{{
                                    value
                                    }}</v-col></v-row>

                        </v-list-item-title>

                    </v-list-item>
                </v-list>
                <p v-else>No data available.</p>


            </v-col>
            <v-col cols="12" md="3">
                Melamar :
                <v-chip class="ma-2" color="blue" variant="flat">
                    <v-icon start></v-icon>
                    Satpam
                </v-chip>
                <v-divider class="border-opacity-100" color="info"></v-divider>
                Status :
                <v-chip class="ma-2" color="green" variant="flat">
                    <v-icon icon="mdi-label" start></v-icon>
                    Interview 1
                </v-chip>
                <v-divider class="border-opacity-100" color="info"></v-divider>
                <v-btn color="primary" class="my-2" block>Vetting Dokumen</v-btn>
                <v-divider class="border-opacity-100" color="info"></v-divider>
                <v-btn color="accent" class="my-2" block>Form Interview</v-btn>
                <v-btn color="accent" class="my-2" block>Import Data</v-btn>



            </v-col>
        </v-row>
    </v-card>
    <v-card class="mx-2 my-2" elevation="6">
        <v-row dense>
            <v-col cols="12" md="12">
                <v-card>
                    <v-card-title>
                        <h2>
                            Data Pelamar
                        </h2>
                    </v-card-title>

                    <v-tabs v-model="tab" bg-color="primary">
                        <v-tab v-for="(item, index) in tabs" :key="index" :text="item.title" :value="index"></v-tab>
                    </v-tabs>

                    <v-tabs-window v-model="tab">
                        <v-tabs-window-item v-for="(item, index) in tabs" :key="index" :value="index"
                            transition="fade-transition" reverse-transition="fade-transition">
                            <v-card flat>
                                <v-card-text>
                                    <div v-for="(value, key) in item.content" :key="key" class="my-2">
                                        <strong>{{ key }}:</strong> {{ value }}
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card>
            </v-col>
        </v-row>
    </v-card>






</template>

<script setup>

import { ref } from 'vue'

definePageMeta({
    layout: "backend-layout",
});
// Method to log info and index
const logInfo = (index, info) => {
    console.log('Index:', index);
    console.log('Info:', info);
};
const basicInfo = ref([
    {
        Nama: 'James',
        Umur: '32',
        Agama: 'Buddha',
        Alamat: 'Surabaya',
        Handphone: '08967777777',
        Email: 'james@gmail.com',
    }
]);

// Define tabs with dynamic content
const tabs = ref([

    {
        title: 'Pendidikan',
        content: {
            SD: 'Sanjos',
            SMP: 'Sanjos',
            SMA: 'Sanjos',
            UNIVERSITAS: 'STTS',
        }
    },
    {
        title: 'Pekerjaan',
        content: {
            '2017-2022': 'Mulia Graha',
            '2013-2017': ' Global',
        }
    },
    {
        title: 'Skill',
        content: {
            'Mandarin': 'OK',
            'English': 'OK',
            'Coding': 'OK'
        }
    }
    // Add more tabs as needed
]);

const tab = ref(0); // Default to first tab
</script>

<style scoped>
/* Add any additional styles here */
</style>
