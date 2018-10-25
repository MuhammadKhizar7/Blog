<template>
      <div class="row justify-content-md-center">
       <div class="col-sm-6">
         <b-card title="Create New Post"  >
           <hr>
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
             </p>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="title"
                        label="Post title:"
                        label-for="titleinput">
            <b-form-input id="titleinput"
                          type="text"
                          v-model="post.title"
                          required
                          placeholder="Post tilte">
            </b-form-input>
          </b-form-group>
          <b-form-group id="piclink"
                        label="Add Picture:"
                        label-for="picinput">
            <b-form-input id="picinput"
                          type="text"
                          v-model="post.img"
                          placeholder="Enter picture url">
            </b-form-input>
          </b-form-group>
          <b-form-group id="postcontent"
                        label="Content:"
                        label-for="contentarea">
                <b-form-textarea id="contentarea"
                     v-model="post.content"
                     placeholder="write post"
                     :rows="5"
                     :max-rows="6">
                </b-form-textarea>
          </b-form-group>
          
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
         </b-card>
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      errors: [],
      show: true,
      post: {
        id: 100,
        title: "",
        img: "",
        content: ""
      }
    };
  },
  methods: {
    ...mapMutations(["addNewPost"]),
    onSubmit(evt) {
      evt.preventDefault();
      this.errors = [];
      if(!this.post.title) this.errors.push("Title required.");
      if(!this.post.content) this.errors.push("Your posting without content.");
      if(!this.errors.length){
        // alert(JSON.stringify(this.post))
        this.addNewPost(this.post)
        this.$router.push('/');
        return true;
      } 
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.post.title = "";
      this.post.img = "";
      this.post.content = "";
      this.errors = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
.card {
  margin-top: 20px;
}
.btn {
  margin-left: 20px;
}
hr {
  border: 0px;
}
</style>
