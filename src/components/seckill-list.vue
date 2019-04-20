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
      <li>
        <a href="#">
          <div class="pic"></div>
          <div>
            <span class="fz-14 price">￥19.80</span>
            <span class="fz-12 c9 text-line">￥32.00</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="pic"></div>
          <div>
            <span class="fz-14 price">￥19.80</span>
            <span class="fz-12 c9 text-line">￥32.00</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="pic"></div>
          <div>
            <span class="fz-14 price">￥19.80</span>
            <span class="fz-12 c9 text-line">￥32.00</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="pic"></div>
          <div>
            <span class="fz-14 price">￥19.80</span>
            <span class="fz-12 c9 text-line">￥32.00</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="pic"></div>
          <div>
            <span class="fz-14 price">￥19.80</span>
            <span class="fz-12 c9 text-line">￥32.00</span>
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
      }
    },
    mounted() {
        console.log(this.seckill)
    },
};
</script>
<style lang="less" scope>
</style>