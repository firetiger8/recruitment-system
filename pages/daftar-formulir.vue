<template>

    <v-card class="mx-2 my-2 px-2" elevation="6">
        <v-card-title>Daftar Formulir Interview</v-card-title>
        <v-chip color="primary" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-details">
            Jumlah : 4 Formulir
        </v-chip>
        <v-chip color="orange" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-search">
            Aktif : 5 Formulir
        </v-chip>
        <v-chip color="green" variant="flat" class="my-2 mx-1" prepend-icon="mdi-check-bold">
            Non Aktif : 1 Formulir
        </v-chip>
        <v-data-table :items="items" :headers="headers" :sort-by="[{ key: 'nama', order: 'asc' }]"
            class="custom-data-table" density="comfortable">
            <template v-slot:item.nama="{ item }">
                <v-avatar size="small">
                    <img :src="item.avatar" alt="Avatar" />
                </v-avatar>
                {{ item.nama }}
            </template>

            <template v-slot:item.saatInterview="{ item }">
                <v-chip v-if="item.saatInterview === 'YA'" color="green" variant="flat" size="small">{{
                    item.saatInterview}}</v-chip>
                <v-chip v-else color="grey" variant="flat" size="small">{{ item.saatInterview }}</v-chip>
            </template>

            <template v-slot:item.status="{ item }">
                <v-chip v-if="item.status === 'AKTIF'" color="green" variant="flat" size="small">{{ item.status
                    }}</v-chip>
                <v-chip v-else color="grey" variant="flat" size="small">{{ item.status }}</v-chip>
            </template>
            <template v-slot:item.actions="{ item }">

                <v-btn color="primary" density="compact" class="mx-2">View</v-btn>
            </template>
        </v-data-table>
    </v-card>
</template>


<script setup>

import { ref } from 'vue'

definePageMeta({
    layout: "backend-layout",
});

const headers = ref([
    {
        title: 'Nama Formulir',
        align: 'start',
        key: 'nama-formulir',
        width: '400px'
    },
    { title: 'No Formulir', key: 'no-formulir', width: '400px' },
    { title: 'Revisi', key: 'revisi' },
    { title: 'Tanggal Formulir', key: 'tanggal-formulir', width: '400px' },
    { title: 'Jumlah Halaman', key: 'jumlah-halaman' },
    { title: 'Digunakan Saat Interview', key: 'saatInterview', width: '400px' },
    { title: 'Status', key: 'status', width: '400px' },
    { title: 'Actions', key: 'actions' },
]);

const items = ref([
    { 'nama-formulir': 'Formulir Data Pribadi', 'no-formulir': 'FR-HR-04', revisi: '03', 'tanggal-formulir': '22 Februari 2024', 'jumlah-halaman': 5, 'saatInterview': 'YA', status: 'AKTIF' },
    { 'nama-formulir': 'Formulir Data Pribadi', 'no-formulir': 'FR-HR-04', revisi: '02', 'tanggal-formulir': '21 Februari 2024', 'jumlah-halaman': 5, 'saatInterview': 'TIDAK', status: 'NON AKTIF' },
    { 'nama-formulir': 'Formulir Vetting', 'no-formulir': 'FR-HR-13', revisi: '02', 'tanggal-formulir': '21 Februari 2024', 'jumlah-halaman': 1, 'saatInterview': 'YA', status: 'AKTIF' },
    { 'nama-formulir': 'Formulir Tes Kesamaptaan Fisik', 'no-formulir': 'FR-HR-28', revisi: '02', 'tanggal-formulir': '24 Februari 2024', 'jumlah-halaman': 1, 'saatInterview': 'YA', status: 'AKTIF' },
    { 'nama-formulir': 'Formulir Interview', 'no-formulir': 'FR-HR-10', revisi: '05', 'tanggal-formulir': '24 Februari 2024', 'jumlah-halaman': 1, 'saatInterview': 'YA', status: 'AKTIF' },
]);

const statusOptions = ref(['Interview', 'Vetting Dokumen', 'Terima', 'Tolak']);

const editItem = (item) => {
    // Edit item logic here
    console.log('Edit:', item);
};

const deleteItem = (item) => {
    // Delete item logic here
    console.log('Delete:', item);
};
</script>

<style scoped>
.custom-data-table {
    background-color: #ffebee;
    /* Table background color */
}

:deep(.custom-data-table thead) {
    background-color: rgb(var(--v-theme-thead));
    color: white;
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
