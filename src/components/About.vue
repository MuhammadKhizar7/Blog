<template>
    <div class="row justify-content-md-center">
     
       <div class="col-sm-4 ">
            <div class="pic section">
             <b-img rounded  src="https://i.pinimg.com/236x/2d/cc/f5/2dccf5ee16d884af37c5ccf33d816044--islamic-fashion-islamic-quotes.jpg" blank-color="#777" alt="img" class="m-1" />
        </div>
        <div class="about section">
            <H4>{{aboutMe}}</H4>
        </div>
       </div>
      
    </div>
</template>

<script>
export default {
  data() {
    return {
      aboutMe: `I am a Muslim boy`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
