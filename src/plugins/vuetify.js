import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#278AB1',
        secondary: '#67CAE1',
        anchor: '#8c9eff'
      }
    }
  }
}

export default new Vuetify(opts)
