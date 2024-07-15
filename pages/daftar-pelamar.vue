<template>
    Daftar Pelamar
    <v-card class="mx-2 my-2" elevation="6">
        <v-data-table :items="items" class="custom-data-table">

        </v-data-table>
    </v-card>
</template>

<script setup>

import { ref } from 'vue'

definePageMeta({
    layout: "backend-layout",
});
const items = ref([
    { name: 'John', age: 30, occupation: 'Engineer' },
    { name: 'Jane', age: 25, occupation: 'Designer' },
    { name: 'Paul', age: 40, occupation: 'Manager' },
    { name: 'Sara', age: 35, occupation: 'Developer' },
    { name: 'Mike', age: 50, occupation: 'Architect' }
]);
</script>

<style scoped>
.custom-data-table {
    background-color: #ffebee;
    /* Table background color */
}

:deep(.custom-data-table thead) {
    background-color: rgb(var(--v-theme-thead));
    /* Header text color */
}

/* Deep selector to target v-data-table rows */
:deep(.custom-data-table .v-data-table__tr:nth-child(even)) {
    background-color: rgb(var(--v-theme-stripedOdd));
    /* Odd row background color */
}

:deep(.custom-data-table .v-data-table__tr:nth-child(odd)) {
    background-color: rgb(var(--v-theme-stripedEven));
    /* Even row background color */
}
</style>
