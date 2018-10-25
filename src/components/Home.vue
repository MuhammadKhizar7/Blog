<template>
     <div class="row">
        <b-jumbotron class="container-fluid" header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
          <p>For more information visit website</p>
          <b-btn variant="primary" href="#">More Info</b-btn>
        </b-jumbotron>
       <app-post-card v-for="post in posts" :key="post.id" :post="post"></app-post-card>
     </div>

</template>

<script>
import  PostCard  from "./shared/PostCard";
import { mapGetters } from 'vuex'
export default {
   components: {
    AppPostCard: PostCard,
   },
    computed:{
      ...mapGetters([
           'posts'
        ])
    },
        created () {
            this.$store.dispatch('getAllPosts')
        }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   $color-background : #3ed345;
   .container-fluid{
     margin-top: 10px;
     background-color:  $color-background;
   }
  
</style>
