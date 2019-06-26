<template>
<div>
  <button @click="goback" class="go">Let's GO BACK!</button>
  <h1>飞机-{{id}}</h1>
</div>


  </div>
</template>

<script>
export default {
  name: 'cesiumToolPanel',
  props:['id'],
  data () {
    return {
    }
  },
methods:{
  goback(){
    this.$router.push('/')
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    color: orange;
  }
  .go{
    background-color: orange;
  }
</style>
