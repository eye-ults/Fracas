import Vue from 'vue'
import App from './App.vue'
import currentPlayers from './components/SignUp.vue'

Vue.component('currentplayers', currentPlayers);

new Vue({
  el: '#app',
  render: h => h(App)
})
