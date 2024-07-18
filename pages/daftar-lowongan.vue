<template>

    <v-card class="mx-2 my-2 px-2" elevation="6">
        <v-card-title>Daftar Lowongan</v-card-title>
        <v-chip color="primary" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-details">
            Jumlah : 6 Lowongan
        </v-chip>
        <v-chip color="orange" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-search">
            Aktif : 5 Lowongan
        </v-chip>
        <v-chip color="green" variant="flat" class="my-2 mx-1" prepend-icon="mdi-check-bold">
            Selesai : 1 Lowongan
        </v-chip>
        <v-data-table :items="items" :headers="headers" :sort-by="[{ key: 'nama', order: 'asc' }]"
            class="custom-data-table" density="comfortable">
            <template v-slot:item.nama="{ item }">
                <v-avatar size="small">
                    <img :src="item.avatar" alt="Avatar" />
                </v-avatar>
                {{ item.nama }}
            </template>
            <template v-slot:item.status="{ item }">
                <v-chip v-if="item.status === 'AKTIF'" color="orange" variant="tonal" size="small">{{ item.status
                    }}</v-chip>
                <v-chip v-else-if="item.status === 'SELESAI'" color="green" variant="tonal" size="small">{{ item.status
                    }}</v-chip>
                <v-chip v-else color="grey" size="small">{{ item.status }}</v-chip>
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
        title: 'Posisi',
        align: 'start',
        key: 'posisi',
        width: '400px'
    },
    { title: 'Lokasi', key: 'lokasi', width: '400px' },
    { title: 'Jenis Kelamin', key: 'jenis-kelamin' },
    { title: 'Tanggal Lowongan', key: 'tanggal-lowongan' },
    {
        title: 'Jumlah', key: 'jumlah', width: '10px', align: 'center',
        children: [
            { title: 'Dibutuhkan', key: 'dibutuhkan', width: '10px' },
            { title: 'Pelamar', key: 'pelamar', width: '10px' },
            { title: 'Diterima', key: 'diterima', width: '10px' },
            { title: 'Kekurangan', key: 'kekurangan', width: '10px' },
        ],
    },

    { title: 'Status', key: 'status' },
    { title: 'Actions', key: 'actions' },
]);

const items = ref([
    {
        posisi: 'Satpam', lokasi: 'Pakuwon Mall', 'jenis-kelamin': 'Pria / Wanita', 'tanggal-lowongan': '01 Juli 2024',
        dibutuhkan: '100', 'pelamar': '50', 'diterima': '20', 'kekurangan': '80', 'status': 'AKTIF'
    },
    {
        posisi: 'Satpam', lokasi: 'Galaxy Mall', 'jenis-kelamin': 'Pria / Wanita', 'tanggal-lowongan': '06 Juli 2024',
        dibutuhkan: '150', 'pelamar': '50', 'diterima': '20', 'kekurangan': '80', 'status': 'AKTIF'
    },
    {
        posisi: 'Satpam', lokasi: 'Tunjungan Plaza', 'jenis-kelamin': 'Pria / Wanita', 'tanggal-lowongan': '11 Juli 2024',
        dibutuhkan: '200', 'pelamar': '50', 'diterima': '20', 'kekurangan': '80', 'status': 'AKTIF'
    },
    {
        posisi: 'Buruh Pabrik', lokasi: 'Pabrik Djarum', 'jenis-kelamin': 'Pria / Wanita', 'tanggal-lowongan': '12 Juli 2024',
        dibutuhkan: '50', 'pelamar': '50', 'diterima': '20', 'kekurangan': '80', 'status': 'AKTIF'
    },
    {
        posisi: 'Machine Operator', lokasi: 'Pabrik Maspion', 'jenis-kelamin': 'Pria / Wanita', 'tanggal-lowongan': '13 Juli 2024',
        dibutuhkan: '40', 'pelamar': '100', 'diterima': '40', 'kekurangan': '0', 'status': 'SELESAI'
    },
    {
        posisi: 'Operator Kebun', lokasi: 'Pabrik Gudang Garam', 'jenis-kelamin': 'Pria / Wanita', 'tanggal-lowongan': '14 Juli 2024',
        dibutuhkan: '70', 'pelamar': '50', 'diterima': '20', 'kekurangan': '80', 'status': 'AKTIF'
    },
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
