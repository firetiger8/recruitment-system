<template>

    <v-layout>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card color="primary" dark>
                            <v-card-title>Website Views</v-card-title>
                            <v-card-subtitle>Last Campaign Performance</v-card-subtitle>
                            <v-card-text>

                            </v-card-text>
                            <v-card-actions>
                                <v-icon>mdi-refresh</v-icon>
                                <span>updated 10 minutes ago</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card color="secondary" dark>
                            <v-card-title>Daily Sales</v-card-title>
                            <v-card-subtitle>55% increase in today's sales</v-card-subtitle>
                            <v-card-text>

                            </v-card-text>
                            <v-card-actions>
                                <v-icon>mdi-refresh</v-icon>
                                <span>updated 4 minutes ago</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-card color="accent" dark>
                            <v-card-title>Completed Tasks</v-card-title>
                            <v-card-subtitle>Last Last Campaign Performance</v-card-subtitle>
                            <v-card-text>

                            </v-card-text>
                            <v-card-actions>
                                <v-icon>mdi-refresh</v-icon>
                                <span>campaign sent 26 minutes ago</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="2">
                        <v-card color="info" dark>
                            <v-card-title>
                                <v-icon left>mdi-twitter</v-icon>
                                Followers
                            </v-card-title>
                            <v-card-subtitle>+245</v-card-subtitle>
                            <v-card-actions>
                                <span>Just Updated</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-card color="pink" dark>
                            <v-card-title>
                                <v-icon left>mdi-chart-bar</v-icon>
                                Website Visits
                            </v-card-title>
                            <v-card-subtitle>75,521</v-card-subtitle>
                            <v-card-actions>
                                <span>Tracked from Google Analytics</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-card color="green" dark>
                            <v-card-title>
                                <v-icon left>mdi-cash</v-icon>
                                Revenue
                            </v-card-title>
                            <v-card-subtitle>$34,245</v-card-subtitle>
                            <v-card-actions>
                                <span>Last 24 Hours</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-card color="orange" dark>
                            <v-card-title>
                                <v-icon left>mdi-chair-school</v-icon>
                                Bookings
                            </v-card-title>
                            <v-card-subtitle>184</v-card-subtitle>
                            <v-card-actions>
                                <span>Get More Space...</span>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
                <v-data-table :headers="headers" :items="plants" density="compact" item-key="name"
                    color="primary"></v-data-table>
            </v-container>

        </v-main>
    </v-layout>

</template>
<script setup>
import { ref } from 'vue'

definePageMeta({
    layout: "backend-layout",
});

// Plant data
const headers = ref([
    { title: 'Plant', align: 'start', sortable: false, key: 'name' },
    { title: 'Light', align: 'end', key: 'light' },
    { title: 'Height', align: 'end', key: 'height' },
    { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
    { title: 'Price ($)', align: 'end', key: 'price' },
])

const plants = ref([
    {
        name: 'Fern',
        light: 'Low',
        height: '20cm',
        petFriendly: 'Yes',
        price: 20,
    },
    {
        name: 'Snake Plant',
        light: 'Low',
        height: '50cm',
        petFriendly: 'No',
        price: 35,
    },
    {
        name: 'Monstera',
        light: 'Medium',
        height: '60cm',
        petFriendly: 'No',
        price: 50,
    },
    {
        name: 'Pothos',
        light: 'Low to medium',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25,
    },
    {
        name: 'ZZ Plant',
        light: 'Low to medium',
        height: '90cm',
        petFriendly: 'Yes',
        price: 30,
    },
    {
        name: 'Spider Plant',
        light: 'Bright, indirect',
        height: '30cm',
        petFriendly: 'Yes',
        price: 15,
    },
    {
        name: 'Air Plant',
        light: 'Bright, indirect',
        height: '15cm',
        petFriendly: 'Yes',
        price: 10,
    },
    {
        name: 'Peperomia',
        light: 'Bright, indirect',
        height: '25cm',
        petFriendly: 'Yes',
        price: 20,
    },
    {
        name: 'Aloe Vera',
        light: 'Bright, direct',
        height: '30cm',
        petFriendly: 'Yes',
        price: 15,
    },
    {
        name: 'Jade Plant',
        light: 'Bright, direct',
        height: '40cm',
        petFriendly: 'Yes',
        price: 25,
    },
])
</script>