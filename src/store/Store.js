import Vue from "vue";
import Vuex from "vuex";
import blog from "./../../api/posts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: {
      all: []
    }
  },
  mutations: {
    setPosts(state, post) {
      state.posts.all = post;
    },
    addNewPost(state, post){
        state.posts.all.push(post)
    }
      
  },
  getters: {
     posts: state => state.posts.all
  },
  actions: {
    getAllPosts({ commit }) {
      blog.getPosts(post => {
        commit("setPosts", post)
      });
    },
    searchPost({commit}, search){

       var postslist =blog.searchPosts(r=>{ return r.filter(post => { 
           return post.title.toLowerCase().includes(search.toLowerCase()) || post.content.toLowerCase().includes(search.toLowerCase())   
         })})
    
         commit("setPosts", postslist)
    //    alert(JSON.stringify(postslist));
         }  
  }
});
