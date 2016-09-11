import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter()
require('./router')(router,Vue,App);
