<template>
   <div>
     <b-navbar toggleable="md" type="dark" variant="warning">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand to="/">{{blogName}}</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/popular">Popular Posts</b-nav-item>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/contact">Contact us</b-nav-item>
        </b-navbar-nav>

    <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <b-nav-form @submit.prevent="searchPost(search)">
                <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" v-model="search" />
                <b-button size="sm" variant="success" class="my-2 my-sm-0 primary" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#" v-for="(lan, index) in lang" :key="index">{{lan}}</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
                <!-- Using button-content slot -->
                <template slot="button-content">
                <em>User</em>
                </template>
                <b-dropdown-item :to="{ name:'create'}">Create New Post</b-dropdown-item>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

     </b-collapse>
    </b-navbar>
   </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      blogName: "DeveloperS Blog",
      lang: ["EN", "ES", "RU", "FA"],
      search: ''
    }
  },
  methods: {
      ...mapActions(['searchPost'])
  }
};
</script>

<style lang="scss" scoped>
.form-control {
   border: none;
   :focus{
        color: #495057;
    background-color: #fff;
    border-color: #eff2f5;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
   }
 
}
 .dropdown-item:hover, .dropdown-item:focus {
    color: #ffffff;
    text-decoration: none;
    background-color: #ffc107 !important;
    border: none;
    box-shadow: none;
}

</style>


