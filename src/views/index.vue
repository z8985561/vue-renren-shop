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
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
            </div>
            <!-- 轮播图部分end -->
            <!-- 导航部分 -->
            <div class="index-nav">
                <van-row>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>补水</p>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>美妆</p>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>洁面</p>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>祛痘</p>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>补水</p>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>美妆</p>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>洁面</p>
                    </van-col>
                    <van-col span="6">
                        <van-icon name="point-gift-o" size="34px" />
                        <p>祛痘</p>
                    </van-col>
                </van-row>
            </div>
            <!-- 导航部分end -->
            <!-- 限时抢购部 -->
            <seckillList :seckill="seckillData" />
            <!-- 限时抢购部end -->
            <!-- 推荐 -->
            <recommendList :recommend="recommendData" />
            <!-- 推荐 -->
        </div>
        <!-- 底部tab -->
        <van-tabbar v-model="active" safe-area-inset-bottom>
            <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" info="5">购物车</van-tabbar-item>
            <van-tabbar-item icon="user-o" info="20">我的</van-tabbar-item>
        </van-tabbar>
        <!-- 底部tab -->
    </div>
</template>
<script>
import seckillList from "@/components/seckill-list"
import recommendList from "@/components/recommend-list"
export default {
    components:{seckillList,recommendList},
    data() {
        return {
            key:"",
            active:0,
            seckillData:{
                time:"2019-11-11 00:00:00",
                list:[]
            },
            recommendData:[]
        }
    },
    methods: {
        onSearch(){
            console.log(this.key)
        },
        onCancel(){
            this.key = ""
        }
    },
}
</script>
<style lang="less" scoped>
.mint-swipe-item{
    background-color: pink;
    font-size: 30px;
}
</style>
