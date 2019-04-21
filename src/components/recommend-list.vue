<template>
  <div class="recommend">
    <div class="p-10 fz-18 c3">为您推荐</div>
    <ul class="recommend-list">
      <li class="recommend-item" v-for="(item,index) in recommend" :key="index">
        <a :href="item.url">
          <div class="pic">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="fz-14 c3 text-hide plr-10 mb-10">{{item.title}}</p>
          <div class="plr-10 flex flex-jus">
            <span class="price fz-13">￥{{item.price}}</span>
            <span class="c9 fz-12">{{item.buyCount}}人付款</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["recommend"],
  data() {
    return {};
  }
};
</script>
<style lang="less" scope>
</style>