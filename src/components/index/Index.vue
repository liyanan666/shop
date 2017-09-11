<template>
    <div>
        <header class="header">

        </header>
        <mt-tabbar v-model="selected" :fixed="isfix">
            <mt-tab-item id="主页">
                <img slot="icon" src="../../img/shouye.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="分类">
                <img slot="icon" src="../../img/fenlei.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="购物车">
                <img slot="icon" src="../../img/gouwuche.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="个人中心">
                <img slot="icon" src="../../img/zhongxin.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected:"外卖",
                isfix:true
            }
        },
        methods: {

        }
    }
</script>
<style>

</style>