<template>
  <div class="rush-buy">
    <div class="flex flex-jus">
      <div class="flex flex-align-center">
        <h3 class="fz-18 c3">限时抢购</h3>
        <div class="flex flex-align-center ml-5">
          <span class="mr-5 fz-14">还剩</span>
          <van-icon name="underway" color="red" size="20px"/>
          <span class="time">{{hour}}</span>:
          <span class="time">{{minute}}</span>:
          <span class="time">{{second}}</span>
        </div>
      </div>
    </div>
    <ul class="seckill-list flex">
      <li v-for="(item,index) in seckill.list" :key="index">
        <a :href="item.url">
          <div class="pic">
            <img :src="item.imgUrl" alt="">
          </div>
          <div>
            <span class="fz-14 price">￥{{item.newPrice}}</span>
            <span class="fz-12 c9 text-line">￥{{item.oldPrice}}</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props:["seckill"],
    data() {
      return {
        hour:"03",
        minute:"18",
        second:"33",
        clearTime:null
      }
    },
    mounted() {
        this.clearTime = setInterval(() => {
          this.countDown();
        }, 1000);
    },
    methods: {
      countDown(){
        let toTime = new Date(this.seckill.time).getTime();
        let nowDate = new Date().getTime();
        let timeDiff = toTime - nowDate;
        if(timeDiff>0){
          this.hour = this.addZero(Math.floor(timeDiff / 1000 / 60 / 60 % 24))
          this.minute = this.addZero(Math.floor(timeDiff / 1000 / 60 % 60))
          this.second = this.addZero(Math.floor(timeDiff / 1000 % 60))
        }else{
          clearInterval(this.clearTime)
        }
      },
      addZero(num){
        if(num < 10){
          return "0" + num;
        }else{
          return num
        }
      }
    },
};
</script>
<style lang="less" scope>
</style>