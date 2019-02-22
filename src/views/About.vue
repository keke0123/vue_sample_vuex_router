<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'about',
  methods:{
    increment () {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    }
  }
}
</script>