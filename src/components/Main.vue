<template>

  <div id="main">

    <template  v-for="i in 20">
      <Card :id="i"></Card>
    </template>

  </div>
</template>

<script>
  import Card from '@/components/Card'
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  components : {
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: rgba(150,120,180,.3);
  overflow-y: auto;
}
</style>
