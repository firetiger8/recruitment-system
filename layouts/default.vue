<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>Recruitment System</v-toolbar-title>
    </v-app-bar>
    <v-main>
        This is default layout
        <slot />
    </v-main>

    <v-footer color="primary" app class="justify-center">
        <span>&copy; 2024 Firetiger</span>
    </v-footer>
</template>