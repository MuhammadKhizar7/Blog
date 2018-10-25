<template>
    <div  class="col-sm-4">
        <b-card :title="post.title"
                :img-src="post.img"
                 :img-alt="post.title"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
            <p class="card-text">
              {{ post.content}}
            </p>
            <b-link :to="{ name: 'posts', params: { id: post.id }}" variant="primary">Read more</b-link>
        </b-card>
    </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>

</style>
