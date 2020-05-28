import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import VueCompositionApi, {
  provide,
  createElement as h,
} from '@vue/composition-api'

import { DefaultApolloClient } from '@vue/apollo-composable'

import { vuetify, client } from './plugins'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)

new Vue({
  vuetify,
  setup() {
    provide(DefaultApolloClient, client)

    return () => h(App)
  },
}).$mount('#app')
