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
                    <h2>James</h2>
                    <p>Software Developer</p>
                </v-card-subtitle>
            </v-col>
            <v-col cols="12" md="6">
                <v-list v-if="basicInfo && basicInfo.length" density="dense">
                    <!-- Loop through each key-value pair in the first object of basicInfo -->
                    <v-list-item v-for="(value, key) in basicInfo[0]" :key="key" density="dense">
                        <v-list-item-title class="text-subtitle-2">
                            <v-row><v-col cols="6" md="4" density="dense"><strong>{{ key }}:</strong></v-col><v-col
                                    cols="6" md="8">{{
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
                <v-btn color="accent" class="my-2" prepend-icon="mdi-file-excel" block>Import Data</v-btn>



            </v-col>
        </v-row>
    </v-card>
    <v-card class="mx-2 my-2" elevation="6">
        <v-row dense>
            <v-col cols="12" md="12">
                <v-card>


                    <v-tabs v-model="tab" bg-color="primary">
                        <v-tab v-for="(item, index) in myTabs" :key="index" :text="item.title" :value="index"></v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                        <v-tab-item v-for="(item, index) in myTabs" :key="index" :value="index">
                            <v-card flat>
                                <v-data-table v-show="tab === index" :items="getContentItems(item.title)"
                                    :headers="getHeaderItems(item.title)" class="custom-data-table my-2 mx-2"
                                    density="compact">
                                    <template v-slot:bottom></template>
                                </v-data-table>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
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
        'Nama Lengkap': 'James Brown',
        'Tempat Tanggal Lahir': 'Surabaya, 1 Januari 2000',
        'Jenis Kelamin': 'Laki-laki',
        'Status': 'Kawin',
        'Agama': 'Buddha',
        'No KTP': '12313213134',
        'Alamat Lengkap': 'Jl. Kedungdoro',
        'Kode Pos': '12345',
        'Alamat Domisili': 'Jl. Kedungdoro',
        'No HP': '08123456789'
    }
]);
const getHeaderItems = (itemTitle) => {
    switch (itemTitle) {
        case 'Riwayat Pendidikan':
            console.log('Get header ', itemTitle);
            return pendidikanHeaders.value;
        case 'Riwayat Pekerjaan':
            console.log('Get header ', itemTitle);
            return pekerjaanHeaders.value;
        default:
            return [];
    }
};
const getContentItems = (itemTitle) => {
    switch (itemTitle) {
        case 'Riwayat Pendidikan':
            console.log('Get header ', itemTitle);
            return pendidikanItems.value;
        case 'Riwayat Pekerjaan':
            console.log('Get header ', itemTitle);
            return pekerjaanItems.value;
        default:
            return [];
    }
};

const myTabs = ref([
    { title: 'Riwayat Pendidikan', header: 'pendidikanHeaders', content: 'pendidikanItems' },
    { title: 'Riwayat Pekerjaan', header: 'pekerjaanHeaders', content: 'pekerjaanItems' }

]);
const pendidikanHeaders = ref([
    {
        title: 'Tingkat', key: 'tingkat', sortable: false
    },
    { title: 'Nama Sekolah', key: 'nama-sekolah', sortable: false },
    { title: 'Jurusan', key: 'jurusan', sortable: false },
    {
        title: 'Tahun', key: 'tahun', sortable: false, align: 'center',
        children: [
            { title: 'Dari', key: 'dari', sortable: false },
            { title: 'Sampai', key: 'sampai', sortable: false },
        ]
    },
]);

const pendidikanItems = ref([
    { 'tingkat': 'SD', 'nama-sekolah': 'SD 1 Surabaya', 'jurusan': '-', 'dari': '1998', 'sampai': '2004' },
    { 'tingkat': 'SMP', 'nama-sekolah': 'SMP 1 Surabaya', 'jurusan': '-', 'dari': '2004', 'sampai': '2007' },
    { 'tingkat': 'SMA', 'nama-sekolah': 'SMA 1 Surabaya', 'jurusan': '-', 'dari': '2007', 'sampai': '2010' },
    { 'tingkat': 'AKADEMI', 'nama-sekolah': '-', 'jurusan': '-', 'dari': '-', 'sampai': '-' },
    { 'tingkat': 'UNIVERSITAS (S1)', 'nama-sekolah': 'Universitas Surabaya', 'jurusan': 'Hukum', 'dari': '2010', 'sampai': '2014' },
    { 'tingkat': 'S2 / S3', 'nama-sekolah': '-', 'jurusan': '-', 'dari': '-', 'sampai': '-' },
]);
const pekerjaanHeaders = ref([
    {
        title: 'Masa Waktu', key: 'masa-waktu', sortable: false
    },
    { title: 'Nama Perusahaan', key: 'nama-perusahaan', sortable: false },
    { title: 'Jenis Usaha', key: 'jenis-usaha', sortable: false },
    { title: 'Jabatan', key: 'jabatan', sortable: false },
]);

const pekerjaanItems = ref([
    { 'masa-waktu': 'Sept 2022 - Feb 2024', 'nama-perusahaan': 'Gramedia', 'jenis-usaha': 'Toko Buku', 'jabatan': 'Manager' },
    { 'masa-waktu': 'Feb 2000 - Sept 2022', 'nama-perusahaan': 'Matahari', 'jenis-usaha': 'Dep Store', 'jabatan': 'Manager' },
    { 'masa-waktu': 'Mar 2016 - Des 2000', 'nama-perusahaan': 'Sogo', 'jenis-usaha': 'Dep Store', 'jabatan': 'Manager' },
    { 'masa-waktu': 'Jan 2014 - Feb 2016', 'nama-perusahaan': 'XXI', 'jenis-usaha': 'Bioskop', 'jabatan': 'Manager' },
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