<template>
    <div class="order_detail">
        <mt-header title="订单详情" style="position: fixed;width: 100%;top: 0;">
            <router-link to="/classification" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="order_list" style="margin-top: .8rem">
            <div class="c-comment">
                <span class="c-comment-num">商品详情</span>
            </div>
            <div class="c-comment-list" style="border: 0; padding: 0;">
                <a class="o-con" href="">
                    <div class="o-con-img"><img src="http://qiniu.bestpiaopiao.cn/test10.png"></div>
                    <div class="o-con-txt fl">
                        <p>南丰蜜桔 南丰贡桔</p>
                        <p class="price">￥88</p>
                        <p>合计：<span>￥176.00</span></p>
                    </div>
                    <div class="o-con-much fr"> <h4>x2</h4></div>
                </a>
            </div>
            <ul class="orderdetail-text">
                <li>
                    <span>红包抵扣</span>
                    <i class="fr">￥0.00</i>
                </li>
                <li>
                    <span>实付金额</span>
                    <i style="color: #cb2527;float: right;">￥63.00</i>
                </li>
            </ul>
            <div class="c-com-btn clearfix">
                <a href="" class="oncepay">再来一单</a>
                <a href="" class="canelpay">取消订单</a>
            </div>
        </div>
        <ul class="order-state">
            <li>
                <span class="current"><i class="iconfont"></i></span>
                <p>订单提交</p>
                <div class="line"></div>
            </li>
            <li>
                <span><i class="iconfont"></i></span>
                <p>付款</p>
                <div class="line"></div>
            </li>
            <li>
                <span><i class="iconfont"></i></span>
                <p>商家接单  </p>
                <div class="line"></div>
            </li>
            <li>
                <span><i class="iconfont"></i></span>
                <p>配送中</p>
                <div class="line"></div>
            </li>
            <li>
                <span><i class="iconfont"></i></span>
                <p>已收货</p>
            </li>
        </ul>
        <div class="order_list">
            <div class="c-comment">
                <span class="c-comment-num">商品详情</span>
            </div>
            <div class="men-infor clearfix">
                <div class="men-infor-left">
                    <h2>七米设计零食屋</h2>
                    <p>江西现代职业技术学院 南门 商业街 168号</p>
                </div>
                <div class="men-infor-right">
                    <a href="tel:400-000-000"><i class="iconfont"></i></a>
                </div>
            </div>
        </div>
        <div class="order_list">
            <div class="c-comment">
                <span class="c-comment-num">订单详情</span>
            </div>
            <ul class="orderdetail-list">
                <li>
                    订单编号：11345679912
                </li>
                <li>
                    订单时间：2016-01-11 15:02:55
                </li>
                <li>
                    支付方式：支付宝支付
                </li>
                <li>
                    手机号码：13045678945
                </li>
                <li>
                    收货地址：江西现代职业技术学院  学生公寓  7栋 一楼105室
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "order-detail"
    }
</script>

<style scoped>
    .order_detail{
        background: #f5f5f5;
    }
    .order_list{
        background: #fff;
        margin-bottom: .2rem;
    }

    .c-comment {
        padding: 0 .2rem;
        height: 40px;
        line-height: 40px;
        background: #fff;
        font-size: .3rem;
    }
    .c-comment-suc {
        color: #cb2527;
        border-left: 1px solid #ddd;
        padding-left: 0.5rem;
    }
    .c-comment-list {
        background: #f5f5f5;
        overflow: hidden;
        padding: .2rem .5rem ;
    }
    .o-con-img{
        float: left;
        padding-top: 2%;
        width: 25%;
        height: 100%;
        overflow: hidden;
        margin-bottom: 0.2rem;
        margin-left:.2rem;
    }
    .o-con-img img{

        width: 100%;
    }
    .order-state {
        width: 100%;
        padding: .2rem 0;
        overflow: hidden;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        background: #fff;
        margin-bottom: .2rem;
    }
    .order-state li {
        float: left;
        width: 20%;
        text-align: center;
        position: relative;
    }
    .order-state .current {
        background: #cb2527;
    }
    .order-state span {
        color: #fff;
        text-align: center;
        display: inline-block;
        background: #d0d0d0;
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
    }
    .order-state i {
         font-size: .3rem;
     }
    .order-state li p {
        font-size: .3rem;
        line-height: 35px;
    }
    .order-state .line {
        width: 20px;
        height: 1px;
        background: #ddd;
        position: absolute;
        right: -20%;
        top: -15px;
    }
    .line {
         border-bottom: 1px solid #c8c7cd;
         margin: .7rem 5%;
         width: 90%;
     }
    .o-con-txt {
        float: left;
        width: 45%;
        text-align: left;
        margin-left: 2%;
        padding-top: 2%;
    }
    .o-con-much {
        float: right;
        width: 20%;
        text-align: right;
        padding: 2%;
        color: #afafaf;
    }
    .c-comment-list p {
        color: #646464;
        font-size: .25rem;
        line-height: .5rem;
    }
    .c-comment-list p span {
        color: #cb2527;
    }
    .orderdetail-text li {
        border-bottom: 1px solid #ddd;
        line-height: 40px;
        margin: 0.2rem;
        font-size: .3rem;
    }
    .orderdetail-text li i {
        float: right;
        font-style: normal;
    }
    .c-com-btn .oncepay{
        float: right;
        display: block;
        margin: 0.2rem 12px;
        width: 20%;
        border-radius: 5px;
        font-size: .3rem;
        text-align: center;
        margin-left: 2%;
        padding: .15rem;
    }
    .c-com-btn .oncepay {
        border: 1px solid #cb2527;
        color: #cb2527;
    }
    .men-infor {
        padding: 0 .2rem;
        border-top: 1px solid #ddd;
    }
    .men-infor-left {
        float: left;
        padding: 0.2rem 0;
        width: 85%;
    }
    .men-infor-left h2{
        line-height: .7rem;
    }
    .men-infor-left p {
        font-size: .3rem;
        color: #8f8f8f;
    }
    .men-infor-right {
        float: right;
        width: 15%;
        text-align: center;
        margin-top: .5rem;
    }
    .orderdetail-list{
        padding: 0 .2rem;
        margin-bottom: 1rem;
        border-top: 1px solid #ddd;
    }
    .orderdetail-list li{
        line-height: .8rem;
        border-bottom: 1px solid #ddd;
        font-size: .3rem;
    }
</style>