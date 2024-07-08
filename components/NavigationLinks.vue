<template>
    <v-list>
        <v-list-item v-for="(link, index) in links" :key="index">
            <v-list-item-content>
                <nuxt-link :to="link.to">{{ link.text }}</nuxt-link>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { to: '/', text: 'Home' },
                { to: '/login', text: 'Login' },
                { to: '/about', text: 'About' },
                { to: '/contact', text: 'Contact' }
            ]
        };
    }
};
</script>