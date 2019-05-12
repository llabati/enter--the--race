// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
//import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */

var setMove = {
  methods: {
    score: (a, b) => a = a + b
  }
}

new Vue({
  el: '#race',
  router,
  components: { App },
  template: '<App/>'
})
