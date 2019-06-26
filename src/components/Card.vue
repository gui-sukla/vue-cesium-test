<template>
  <div class="card" @click="show" :id="id">
    <img class="img" :src="src" alt="123"/>
    <span class="name">{{name}}-{{id}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    props:['id'],
    data ()
  {
    return {
      name: '飞机',
      src: 'http://cms-bucket.nosdn.127.net/690eaf69e69a4bdd8d72a4596b2dfca720171220151901.jpeg?imageView&thumbnail=750x0&quality=85&type=jpg&interlace=1'
    }
  },
  methods:{
    show(){
      this.$router.push(`/show/${this.id}`)
    }
  }
  }
</script>

<style scoped>
  .card {
    display: inline-block;
    width: 200px;
    height: 250px;
    margin: 15px;
  }

  .img {
    width: 200px;
    height: 220px;
    vertical-align: bottom;
  }

  .name {
    display: inline-block;
    width: 200px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    color: rgb(180, 120, 180);
    text-align: center;
    background: rgba(120, 150, 180, .3);
  }
</style>
