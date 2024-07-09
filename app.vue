<template>
  <NuxtLoadingIndicator color="#348feb" :height="1" />
  <NuxtLayout>
    <v-responsive class="border rounded">
      <v-app>
        <v-app-bar app color="primary" dark>
          <v-toolbar-title>Recruitment System</v-toolbar-title>
        </v-app-bar>
        <v-main>
          <v-container fluid>
            <!--<NavigationLinks />-->
            <NuxtPage />
          </v-container>
        </v-main>
        <v-footer color="primary" app>
          <span>&copy; 2024 Firetiger</span>
        </v-footer>
      </v-app>
    </v-responsive>
  </NuxtLayout>
</template>
