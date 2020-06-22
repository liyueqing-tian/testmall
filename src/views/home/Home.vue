<template>
  <div id="home">
    <HomeVavBar class="home-navBar">
      <div slot="center">购物街</div>
    </HomeVavBar>
<!--  父组件传子组件 banner-->
    <home-swiper :banners="banners"></home-swiper>
    <HomeRecommendViews :recommends="recommends"></HomeRecommendViews>


  </div>
</template>

<script>
  import HomeVavBar from 'components/common/navbar/navBar'
  import HomeSwiper from 'views/home/childrenComps/homeSwiper'
  import HomeRecommendViews from "./childrenComps/HomeRecommendViews";

  import {getHomeMultiData} from 'network/home'
  // 什么时候请求数据呢？ 在home组件创建的时候就需要请求数据


  export default {

    name: "Home",
    components: {
      HomeVavBar,
      HomeSwiper,
      HomeRecommendViews

    },
    data(){
      return{
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultiData().then(
          res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list
          }
      )


    }
  }
</script>

<style scoped>
  #home{
    background-color: #f6f6f6;
  }
  .home-navBar{
    background-color: #ff5777;
    color: #f6f6f6;
  }


</style>
