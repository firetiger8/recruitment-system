<template>
    <v-main>
        <v-container>
            <v-row class="justify-center align-center">
                <v-col cols="12" md="6">
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" title="Forgot Password">
                        </v-toolbar>
                        <v-card-text>
                            <p>Enter your email to reset your password</p>
                            <v-text-field name="email" label="Email" id="email" prepend-icon="mdi-at"
                                clearable></v-text-field>
                        </v-card-text>

                        <v-btn @click="resetPassword" small color="primary" class="ma-3" cols="12" md="3">Reset
                            Password</v-btn>
                        <v-btn @click="login" class="ma-3 float-right" cols="12" md="3">Back to
                            Login</v-btn>

                    </v-card>

                </v-col>
            </v-row>
            <v-dialog v-model="dialog" max-width="400" transition="dialog-top-transition">
                <v-card>
                    <v-card-title class="headline">Password Reset</v-card-title>
                    <v-card-text>
                        Your password has been successfully reset.
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="success" text @click="dialog = false">Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </v-main>
</template>

<script setup>

import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const dialog = ref(false)

const login = () => {
    console.log("back to login page")
    router.push('/login')
}

const resetPassword = () => {
    dialog.value = true  // Show the dialog
}


</script>