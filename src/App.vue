<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar></MainTabBar>

  </div>
</template>

<script>
  import MainTabBar from 'components/contents/mainTabbar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }


</script>

<style>


</style>
