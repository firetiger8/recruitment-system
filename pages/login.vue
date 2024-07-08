<template>
    <v-app>
        <v-container fluid fill-height>
            <v-row align="center" justify="center">
                <v-col cols="12" md="6">
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Login form</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form @submit.prevent="login">
                                <v-text-field v-model="loginForm.login" prepend-icon="mdi-account" label="Login"
                                    type="text"></v-text-field>
                                <v-text-field v-model="loginForm.password" prepend-icon="mdi-lock" label="Password"
                                    type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="login">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                login: '',
                password: '',
            },
        };
    },
    methods: {
        login() {
            // Perform login logic here
            console.log('Logging in with:', this.loginForm);
            // Example: Redirect to home page after successful login
            this.$router.push('/');
        },
    },
};
</script>

<style scoped>
/* Add scoped styles as needed */
</style>