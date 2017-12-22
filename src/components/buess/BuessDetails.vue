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
        <div class="buess_content">
            <div class="content_list">
                <p>今日订单</p>
                <p>0</p>
            </div>
            <div class="content_list" >
                <p>待处理订单</p>
                <p>0</p>
            </div>
            <div class="content_list" style="border-right: none" >

            </div>
        </div>
        <ul class="buess_caozuo clearfix">
            <li>
                <router-link to="addproduct">
                    <div class="icon blue"><img src="../../img/fabushangpin2.png" alt=""></div>
                    <p>发布商品</p>
                </router-link>
            </li>
            <li>
                <div class="icon juhuang"><img src="../../img/dingdanguanli.png" alt=""></div>
                <p>订单管理</p>
            </li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {

        }
    }
</script>
<style scoped>
    .buess_head{
        padding: .3rem .4rem;
        background: -webkit-linear-gradient(left, #f45201 , #e14100); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #f45201, #e14100); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #f45201, #e14100); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #f45201 , #e14100); /* 标准的语法 */

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
    .buess_content{
        margin-top: .2rem;
        background: #fff;
        padding: .2rem;
        border-bottom: 1px solid #e1e1e1;
        display: flex;
    }
    .buess_content .content_list{
        flex: 1;
        margin: .1rem;
        text-align: center;
        font-size: .28rem;
        display: inline-block;
        border-right: 1px solid #e1e1e1;
    }
    .content_list p:nth-of-type(2){
        margin-top:.1rem ;
    }
    .buess_caozuo{
        margin-top: .2rem;
        width: 100%;
        background: #fff;
        padding-bottom: .2rem;
        display: flex;
    }
    .buess_caozuo li{
        text-align: center;
        width: 25%;
        float: left;
        flex:1;
    }
    .buess_caozuo .icon{
        width: 1.3rem;
        height:1.3rem;
        margin: .2rem auto;

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

        width: .8rem;

    }
</style>