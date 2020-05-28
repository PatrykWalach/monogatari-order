import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export const vuetify = new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: '#151f2e',
        secondary: '#0b1622',
        accent: '#3db4f2',
      },
    },
  },
})
