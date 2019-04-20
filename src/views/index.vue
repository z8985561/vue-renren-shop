<template>
    <div>
        <mt-header fixed title="人人商城"></mt-header>
        <div class="content">
            <mt-search
            v-model="key"
            cancel-text="取消"
            placeholder="请输入搜索关键字">
            </mt-search>
            <div class="banner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item>1</mt-swipe-item>
                    <mt-swipe-item>2</mt-swipe-item>
                    <mt-swipe-item>3</mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            key:""
        }
    },
    watch: {
        
    },
}
</script>
<style scoped>
.mint-swipe-item{
    background-color: pink;
    font-size: 30px;
}
</style>
