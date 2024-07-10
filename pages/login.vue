<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>Login - Recruitment System</v-toolbar-title>
    </v-app-bar>
    <v-main>


        <v-container>
            <v-row class="justify-center align-center">
                <v-col cols="12" md="6">
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" title="Login to Recruitment System">

                        </v-toolbar>
                        <v-card-text>
                            <v-text-field name="email" label="Email" id="email" prepend-icon="mdi-at"
                                clearable></v-text-field>
                            <v-text-field name="password" label="Password" id="password" type="password"
                                prepend-icon="mdi-lock" clearable></v-text-field>
                        </v-card-text>

                        <v-btn @click="login" small color="primary" class="ma-3" cols="12" md="3">Login</v-btn>
                        <v-btn @click="forgotPassword" variant="text" class="ma-3 float-right" cols="12" md="3">Forgot
                            Password</v-btn>

                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

let email = ''
let password = ''

const login = () => {
    // Handle login logic here
    console.log('Logging in...')
    router.push('/dashboard')
}

const forgotPassword = () => {
    // Navigate to the forgot-password route
    console.log('Forgot Pass')
    router.push('/forgot-password')
}
</script>