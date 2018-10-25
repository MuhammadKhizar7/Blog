import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
// import Vuex from 'vuex';


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Popular from './components/Popular.vue'
import NewPost from './components/NewPost.vue'
// import Login from './components/Login.vue'
// import Signup from './components/Signup.vue'

import store from './store/Store'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);
// Vue.use(Vuex);


const router = new VueRouter({
  mode:'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/popular', name: 'popular', component: Popular },
    { path: '/posts/:id', name: 'posts', component: Popular },
    { path: '/create-new', name: 'create', component: NewPost },
    // { path: '/login', component: Login },
    // { path: '/signup', component: Signup },
    { path: '/about', name: 'about', component: About },
    { path: '/contact', name: 'contact', component: Contact },
  ]
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
