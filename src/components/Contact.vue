<template>
    <div class="row justify-content-md-center">
       <div class="col-sm-5">
         <b-card title="Contact Us"  sub-title="Write us about blog or any other you want to share" >
           <hr>
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
              </ul>
             </p>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="exampleInputGroup1"
                        label="Email address:"
                        label-for="exampleInput1"
                        description="We'll never share your email with anyone else.">
            <b-form-input id="exampleInput1"
                          type="email"
                          v-model="form.email"
                          required
                          placeholder="Enter email">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
                        label="Your Name:"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="Enter name">
            </b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        label="Message:"
                        label-for="exampleInput3">
                <b-form-textarea id="exampleInputGroup3"
                     v-model="form.text"
                     placeholder="Enter something"
                     :rows="3"
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
export default {
  data () {
    return {
      errors:[],
      form: {
        email: '',
        name: '',
        text: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
       evt.preventDefault();
      this.errors = [];
      if(!this.form.name) this.errors.push("Name required.");
      if(!this.form.email) {
        this.errors.push("Email required.");
      } else if(!this.validEmail(this.form.email)) {
        this.errors.push("Valid email required.");        
      }
      if(!this.errors.length){
        alert(JSON.stringify(this.form));
        return true;
      } 
   
    },
    validEmail:function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.text = '';
      this.errors = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}
</script>

<style lang="scss" scoped>
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
