// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/util/colors'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const mytheme = {
  dark: false,
  colors: {
    primary: colors.blueGrey.base,
    secondary: colors.blue.lighten2,
    accent: colors.lime.accent3,
    error: colors.red.base,
    warning: colors.orange.darken2,
    info: colors.cyan.lighten1,
    success: colors.teal.accent3,
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
