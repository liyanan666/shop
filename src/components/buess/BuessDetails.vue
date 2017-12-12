<template>
    <div>
        <mt-header title="我是商家">
            <router-link to="/personal" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="buess_head clearfix">
            <div class="head_left"><img src="../../img/touxiang.jpg" alt=""></div>
            <div class="head_right">
                <p class="username">我是用户名</p>
                <p class="usercode">店铺号：666dasfa</p>
            </div>
        </div>
        <ul class="buess_caozuo clearfix">
            <li>
                <div class="icon blue"><img src="../../img/fabushangpin2.png" alt=""></div>
                <p>发布商品</p>
            </li>
            <li>
                <div class="icon juhuang"><img src="../../img/dingdanguanli.png" alt=""></div>
                <p>订单管理</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style scoped>
    .buess_head{
        padding: .3rem .4rem;
        background: #f45201;
        display: flex;
    }
    .head_left,head_right{
        float: left;
        flex:1;
    }
    .head_left img{
        width: 1.5rem;
        height:1.5rem;
        border-radius: 50%;
    }
    .head_right{
        height:1.5rem;
        color: #fff;
        flex:3;
        position: relative;
    }
    .head_right .username{
        position: absolute;
        top:.2rem;
        font-size:.4rem;
    }
    .head_right .usercode{
        position: absolute;
        bottom:.2rem;
    }
    .buess_caozuo{
        width: 100%;
        background: #fff;
        padding-bottom: .2rem;
    }
    .buess_caozuo li{
        text-align: center;
        width: 25%;
        float: left;
    }
    .buess_caozuo .icon{
        width: 1.5rem;
        height:1.5rem;
        margin: .2rem;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .buess_caozuo .blue{
        background: #4ac0fb;
    }
    .buess_caozuo .juhuang{
        background:#ff7161;
    }
    .buess_caozuo li img{

        width: 1rem;

    }
</style>