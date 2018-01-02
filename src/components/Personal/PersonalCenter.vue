<template>
	<div class="my_body">
		<div class="my_head">
			<div class="my_back">
				
			</div>
			<div class="my_touxiang" >
				<img src="../../img/touxiang.jpg"/>
				
			</div>
			<div class="my_name"  v-show="userinfo._id">
				<p>{{userinfo.nickname}}</p>
			</div>
			
			<p class="my_name" v-show="!userinfo._id" @click="$router.push('/login')">登录/注册</p>
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
			<div @click="topersoninfo">
				<mt-cell title="我的资料" :is-link="link">
				  <img slot="icon" src="../../img/myzl.png" width="24" height="24">
				</mt-cell>
			</div>
			<div @click="tobuess" v-show="userinfo.isbuess == 0">
				<mt-cell title="成为商家" :is-link="link">
				  <img slot="icon" src="../../img/shangjia.png" width="24" height="24">
				</mt-cell>
			</div>
			<div @click="isbuess" v-show="userinfo.isbuess == 1">
				<mt-cell title="我是商家" :is-link="link">
					<img slot="icon" src="../../img/shangjia.png" width="24" height="24">
				</mt-cell>
			</div>
			
			<div @click="toadress">
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
        <bottomnav :attribute="'person'"></bottomnav>
	</div>	
</template>

<script>
    import bottomnav from '../public/Bottom.vue'
    import { MessageBox } from 'mint-ui';
    export default {
        data() {
            return {
                link:true,
                userinfo:{}
            }
        },
        components:{
            bottomnav
        },
        mounted:function(){
        	if(localStorage.getItem("userinfo")){
        		this.userinfo = JSON.parse(localStorage.getItem("userinfo"));
        		console.log(this.userinfo);
        	}
        },
        methods: {
            tobuess:function () {
            	if(this.userinfo._id){
            		this.$router.push('/tobuess');
            	}else{
            		MessageBox("提示","请先登陆");
            	}
            },
            topersoninfo:function () {
            	var _this = this;
            	this.islogin(function(){
					_this.$router.push('/personinfo');
				});
            },
            toadress:function(){
            	var _this = this;
				this.islogin(function(){
					_this.$router.push('/personadress');
				});
            },
			isbuess:function () {
				var _this = this;
				this.islogin(function(){
					_this.$router.push('/buessDetail');
				});
			
           },
           islogin:function(callback){
           		if(this.userinfo._id){
            		callback();
            	}else{
            		MessageBox("提示","请先登陆");
            	}
           }
        }
    }
</script>

<style>
	@import url("PersonalCenter.css");
</style>