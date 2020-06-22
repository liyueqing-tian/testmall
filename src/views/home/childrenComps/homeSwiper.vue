<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: "homeSwiper",
    // 通过父组件传过来
    props:{
      banners :{
        type: Array,
        default(){
          return []

        }
      }

    },
    components: {
      SwiperItem,
      Swiper
    }
  }
</script>

<style scoped>

</style>