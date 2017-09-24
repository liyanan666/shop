<template>
	<div class="my_body">
		<div class="my_head">
			<div class="my_back">
				
			</div>
			<div class="my_touxiang">
				<img src="../../img/touxiang.jpg"/>
				
			</div>
			<p class="my_name" v-show="1==2">知 足</p>
			<p class="my_name" @click="$router.push('/login')">登录/注册</p>
		</div>
		
		<ul class="my_state">
			<li>
				<img src="../../img/daifahuo.png"/>
				<p>待发货</p>
			</li>
			<li>
				<img src="../../img/fahuozhong.png"/>
				<p>发货中</p>
			</li>
			<li>
				<img src="../../img/daipingjia.png"/>
				<p>待评价</p>
			</li>
			<li></li>
		</ul>
		<div>
			<mt-cell title="我的订单" :is-link="link">
			  <span>全部订单</span>
			  <img slot="icon" src="../../img/wodedingdan.png" width="24" height="24">
			</mt-cell>
		</div>
		<div style="margin-top: 0.3rem">
			
			<div>
				<mt-cell title="成为商家" :is-link="link">
				  <img slot="icon" src="../../img/shangjia.png" width="24" height="24">
				</mt-cell>
			</div>
			<div>
				<mt-cell title="收货地址" :is-link="link">
				  <img slot="icon" src="../../img/shouhuodizhi.png" width="24" height="24">
				</mt-cell>
			</div>
			<div>
				<mt-cell title="服务中心" :is-link="link">
				  <img slot="icon" src="../../img/fuwuzhongxin.png" width="24" height="24">
				</mt-cell>
			</div>
		</div>
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				link:true
			}
		},
		mounted:function(){
			console.log(12456)
		}
	}
</script>

<style>
	@import url("PersonalCenter.css");
</style>