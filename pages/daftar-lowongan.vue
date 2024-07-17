<template>

    <v-card class="mx-2 my-2" elevation="6">
        <v-card-title>Daftar Lowongan</v-card-title>
        <v-chip color="primary" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-details">
            Target : 100 Orang
        </v-chip>
        <v-chip color="blue" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-group">
            Pelamar : 50 Orang
        </v-chip>
        <v-chip color="green" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-check">
            Diterima : 20 Orang
        </v-chip>
        <v-chip color="red" variant="flat" class="my-2 mx-1" prepend-icon="mdi-account-remove">
            Ditolak : 30 Orang
        </v-chip>
        <v-data-table :items="items" :headers="headers" :sort-by="[{ key: 'nama', order: 'asc' }]"
            class="custom-data-table">
            <template v-slot:item.nama="{ item }">
                <v-avatar size="small">
                    <img :src="item.avatar" alt="Avatar" />
                </v-avatar>
                {{ item.nama }}
            </template>

            <template v-slot:item.actions="{ item }">


                <v-btn color="primary" density="compact" class="mx-2">View</v-btn>
                <v-btn density="comfortable" icon="mdi-dots-vertical"></v-btn>



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
        title: 'Nama',
        align: 'start',
        key: 'nama',
    },
    { title: 'Umur', key: 'umur' },
    { title: 'Posisi', key: 'posisi' },
    { title: 'Status', key: 'status' },
    { title: 'Actions', key: 'actions', sortable: false, align: 'end', },
]);

const items = ref([
    { nama: 'James', umur: 30, posisi: 'Satpam', status: 'Interview', avatar: '/_nuxt/assets/images/avatar.jpg' },
    { nama: 'Andy', umur: 25, posisi: 'Satpam', status: 'Vetting Dokumen', avatar: '/_nuxt/assets/images/avatar.jpg' },
    { nama: 'Paul', umur: 40, posisi: 'Satpam', status: 'Interview 2', avatar: '/_nuxt/assets/images/avatar.jpg' },
    { nama: 'Ben', umur: 35, posisi: 'Satpam', status: 'Tolak', avatar: '/_nuxt/assets/images/avatar.jpg' },
    { nama: 'Mike', umur: 32, posisi: 'Satpam', status: 'Terima', avatar: '/_nuxt/assets/images/avatar.jpg' }
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
