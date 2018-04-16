<template>
	<div>
		<mt-header title="全部订单" style="position: fixed;width: 100%;top: 0;">
		</mt-header>
		<ul class="order-style">
			<li class="current"><a href="allorder.html">全部</a></li>
			<li>待付款</li>
			<li>退发货</li>
			<li>待收货</li>
			<li>待评价</li>
		</ul>
		<ul class="classification_list">
			<li>
				<div class="c-comment">
					<span class="c-comment-num">支付宝支付</span>
					<span class="c-comment-suc">待付款</span>
				</div>
				<div class="c-comment-list" style="border: 0;">
					<router-link to="orderdetail">
						<p>应付金额：￥63.0     实付金额：<span>￥63.0</span></p>
						<p>订单编号：123456789</p>
						<p>下单时间：2016-01-07  10：22：52</p>
						<p>联系店长：沫沫       <span><i class="iconfont"></i>18012345678</span></p>
					</router-link>
				</div>
				<div class="c-com-btn">
					<a href="tureorder.html" class="oncepay">立即支付</a>
					<a href="" class="canelpay">取消订单</a>
				</div>
			</li>

		</ul>
        <bottomnav :attribute="'class'"></bottomnav>
	</div>
</template>

<script>
    import bottomnav from '../public/Bottom.vue'
    export default {
        data() {
            return {

            }
        },

        created:function(){

        },
        components:{
            bottomnav
        },
        mounted:function(){

        },
        methods: {

        }
    }
</script>

<style scoped="scoped">
	@import url("class.css");
</style>