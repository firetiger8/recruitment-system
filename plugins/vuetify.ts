// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/util/colors'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const mytheme = {
  dark: false,
  colors: {
    primary: colors.blueGrey.base,
    secondary: colors.blueGrey.lighten3, // Lighten the primary color for secondary
    accent: colors.blueGrey.darken3, // Darken the primary color for accent
    error: colors.red.base,
    warning: colors.orange.darken2,
    info: colors.cyan.lighten1,
    success: colors.teal.accent3,
    thead: colors.blueGrey.darken2, // Darker shade for the table header
    stripedOdd: colors.blueGrey.lighten5, // Lighter shade for odd rows
    stripedEven: colors.blueGrey.lighten4, // Even lighter shade for even rows
  }
}


export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'mytheme',
      themes: {
        mytheme,
      },
    },    
    icons: {
      defaultSet: 'mdi',
    },
  })
  app.vueApp.use(vuetify)
})
