import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './components/App'
import home from './components/pages/home'
import about from './components/pages/about'

/* Setup global things */

try {
    window.$ = window.jQuery = require('jquery')
    require('bootstrap-sass')
} catch (e) {}

/* Initialize and render the vue app */

const router = new VueRouter({
  routes: [
    { path: '/', component: home },
    { path: '/about', component: about }
  ]
})

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
