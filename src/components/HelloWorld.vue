<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment">+</button>
  </div>
</template>



<script>
// main.js 에서 store 를 vue 생성시 해줬기 때문에 따로 import 할 필요 없다.
// import {store} from '../stores/store';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    increment () {
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    }
  }
}
</script>

<!-- scoped 를 붙이며 shadow component? 인것 같다 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
