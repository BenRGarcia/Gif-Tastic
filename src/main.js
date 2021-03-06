// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// Bootstrap
$(function () {
  $('[data-toggle="popover"]').popover(); // enable Bootstrap's popovers
  $('[data-toggle="tooltip"]').tooltip(); // enable Bootstrap's tooltips
})
