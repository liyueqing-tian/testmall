<template>
  <div class="home-recommend">
    <div v-for="item in recommends" :key="item.id" class="home-recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>

  </div>
  
</template>

<script>

  export default {
    name: "HomeRecommendViews",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .home-recommend{
    display: flex;
    text-align: center ;
    font-size: 13px;
    background-color: white;
    border-bottom: 10px solid #eeeeee;


  }
  .home-recommend-item{
    flex: 1;

  }
  .home-recommend img{
    width: 80px;
    height: 80px;
  }
  .home-recommend-item a{
    color: darkgrey;
    text-decoration: none;
  }

</style>