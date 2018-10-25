<template>
  <div id="app">
   <div class="container-fluid">
      <app-header></app-header>
      <div class="container">
       <router-view></router-view>
      </div>
    <app-footer></app-footer>
   </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    AppHeader: Header,
    AppFooter: Footer

  }
}
</script>

<style lang='scss' scoped>
.container-fluid {
    margin: 0px;
    padding: 0px;

}
</style>
