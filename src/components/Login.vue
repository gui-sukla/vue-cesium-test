<template>
  <div id="login">
    <div>登陆页面</div>
    <button @click="login" class="go">Let's GO!</button>


  </div>

</template>

<script>
  export default {
    name: 'Login',
    data ()
  {
    return {}
  }
  ,
  methods : {
    login()
    {
      this.$router.push('/main');
    }
  }
  }
</script>

<style scoped>
#login{
  flex: 1;
  background-image: url('https://2.bp.blogspot.com/-CGfpn2dR49s/Wq_ZA820NzI/AAAAAAAAF_s/gw-Mbjo1YEEjjPJQlghHx8JxKkTMmzD2ACPcBGAYYCw/s1600/2016%2B%25E5%25B9%25B4%2B05%2B%25E6%259C%2588%2B12%2B%25E6%2597%25A5_MG_9303-%25E7%25B7%25A8%25E8%25BC%25AF_%25E5%2589%25AF%25E6%259C%25AC.jpg');
  background-size: cover;
}
  .go{
    background-color: orange;
  }
</style>
