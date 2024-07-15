<template>

    <v-app-bar app color="primary" dark density="compact">
        <v-toolbar-title>Dashboard - Recruitment System</v-toolbar-title>

        <v-menu min-width="200px" rounded open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-avatar image="/assets/images/avatar.jpg" size="small"></v-avatar>
                </v-btn>
            </template>
            <v-card color="grey-darken-1">
                <v-card-text>
                    <div class="mx-auto text-center">
                        <v-avatar image="/assets/images/avatar.jpg"></v-avatar>
                        <h3>Daniel</h3>
                        <p class="text-caption mt-1">
                            daniel@gmail.com
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn variant="text" rounded>
                            Edit Account
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn prepend-icon="mdi-logout">
                            Logout
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-menu>
    </v-app-bar>
    <v-navigation-drawer color="grey-darken-3" v-model="drawer" :rail="rail" rail-width="100" permanent
        @click="rail = false">
        <v-list-item prepend-avatar="/assets/images/avatar.jpg" title="Daniel" nav>
            <template v-slot:append>
                <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>
        <v-list>
            <v-list-item v-for="item in items" :key="item.title" :to="item.path" nav>
                <v-list-item :prepend-icon="item.icon" :title="item.title" value="home"></v-list-item>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
        <slot />
    </v-main>
    <v-footer color="primary" app class="justify-center">
        <span>&copy; 2024 Firetiger</span>
    </v-footer>
</template>

<script setup>
import { ref } from 'vue'

const rail = ref(true)
const drawer = ref(true)

const items = ref([
    { title: 'Dashboard', icon: 'mdi-home-city', path: "/dashboard" },
    { title: 'My Profile', icon: 'mdi-account', path: "/profile" },
    { title: 'Setting', icon: 'mdi-cog', path: "/setting" },
])
</script>