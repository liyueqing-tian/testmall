<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right" >
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navBar"
  }
</script>

<style scoped>
  .nav-bar{
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    text-align: center;
    display: flex;
    /*针对文本*/
    line-height: 44px;
    height: 44px;
  }
  .left, .right{
    width: 60px;
  }
  .center{
    /* 中间部分占据剩余部分*/
    flex: 1;
  }


</style>