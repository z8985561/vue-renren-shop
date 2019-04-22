<template>
  <div>
    <div class="content">
      <!-- 头部搜索 -->
      <van-search
        v-model="key"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
      <!-- 头部搜索end -->
      <!-- 轮播图部分 -->
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,index) in banner" :key="index">
              <a :href="item.url">
                <img :src="item.imgUrl" alt="">
              </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 轮播图部分end -->
      <!-- 导航部分 -->
      <div class="index-nav">
        <van-row>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>补水</p>
          </van-col>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>美妆</p>
          </van-col>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>洁面</p>
          </van-col>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>祛痘</p>
          </van-col>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>补水</p>
          </van-col>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>美妆</p>
          </van-col>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>洁面</p>
          </van-col>
          <van-col span="6">
            <van-icon name="point-gift-o" size="34px"/>
            <p>祛痘</p>
          </van-col>
        </van-row>
      </div>
      <!-- 导航部分end -->
      <!-- 限时抢购部 -->
      <seckillList :seckill="seckillData"/>
      <!-- 限时抢购部end -->
      <!-- 推荐 -->
      <recommendList :recommend="recommendData"/>
      <!-- 推荐 -->
    </div>
    <!-- 底部tab -->
    <van-tabbar v-model="active" safe-area-inset-bottom>
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" :info="cartTotal">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" :info="mineTip">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 底部tab -->
  </div>
</template>
<script>
import seckillList from "@/components/seckill-list";
import recommendList from "@/components/recommend-list";
import indexData from "@/api/index"
export default {
  components: { seckillList, recommendList },
  data() {
    return {
      key: "",
      active: 0,
      banner:[],
      seckillData: {},
      recommendData: [],
      cartTotal:0,
      mineTip:0
    };
  },
  mounted() {
    var that = this;
    function getBanner(){
       return that.$axios.get('/api/banner');
    }
    function getSeckill(){
      return that.$axios.get('/api/seckill');
    }
    function getRecommend(){
      return that.$axios.get('/api/recommend');
    }
    this.$axios.all([getBanner(), getSeckill(),getRecommend()])
    .then(axios.spread(function (banner, seckill, recommend) {
      console.log(banner, seckill, recommend)
    }));
  },
  methods: {
    onSearch() {
      
    },
    onCancel() {
      this.key = "";
    }
  }
};
</script>
<style lang="less" scoped>
.mint-swipe-item {
  background-color: pink;
  font-size: 30px;
  img{
      width: 100%;
      height: 100%;
  }
}
</style>
