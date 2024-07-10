<template>

    <v-app-bar app color="primary" dark density="compact">
        <v-toolbar-title>Dashboard - Recruitment System</v-toolbar-title>

        <v-menu min-width="200px" rounded open-on-hover>
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-avatar image="https://randomuser.me/api/portraits/men/85.jpg" size="small"></v-avatar>
                </v-btn>
            </template>
            <v-card color="grey-darken-1">
                <v-card-text>
                    <div class="mx-auto text-center">
                        <v-avatar image="https://randomuser.me/api/portraits/men/85.jpg"></v-avatar>
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
    <v-navigation-drawer color="grey-darken-3" v-model="drawer" :rail="rail" permanent @click="rail = false">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" title="John Leider" nav>
            <template v-slot:append>
                <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
            </template>
        </v-list-item>
        <v-list dense>
            <v-list-item class="SelectedTile" active-class="SelectedTile-active" v-for="item in items" :key="item.title"
                :to="item.path" nav>
                <v-list-item :prepend-icon="item.icon" :title="item.title" value="home"></v-list-item>

            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main>
        This is Backend layout
        <slot />
    </v-main>

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

<style scoped>
.ListItemClass {
    color: #f5f5f5;
}

.SelectedTile:hover {
    border-radius: 4px;
    background: #455A64
}

.SelectedTile-active {
    border-radius: 4px;
    background: rgba(10, 204, 117, 0.19)
}
</style>