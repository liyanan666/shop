<template>
	<div class="my_body">
		<div class="my_head">
			<div class="my_back">
				
			</div>
			<div class="my_touxiang" >
				<img src="http://qiniu.bestpiaopiao.cn/touxiang.jpg"/>
				
			</div>
			<div class="my_name"  v-show="userinfo._id">
				<p>{{userinfo.nickname}}</p>
			</div>
			
			<p class="my_name" v-show="!userinfo._id" @click="$router.push('/login')">登录/注册</p>
		</div>
		
		<ul class="my_state">
			<li>
				<img src="http://qiniu.bestpiaopiao.cn/daifahuo.png"/>
				<p>待发货</p>
			</li>
			<li>
				<img src="http://qiniu.bestpiaopiao.cn/fahuozhong.png"/>
				<p>发货中</p>
			</li>
			<li>
				<img src="http://qiniu.bestpiaopiao.cn/daipingjia.png"/>
				<p>待评价</p>
			</li>
			<li></li>
		</ul>
		<div style="margin-top: 0.3rem;margin-bottom:1rem">
			<div @click="topersoninfo">
				<mt-cell title="我的资料" :is-link="link">
				  <img slot="icon" src="http://qiniu.bestpiaopiao.cn/myzl.png" width="24" height="24">
				</mt-cell>
			</div>
			<div @click="tobuess">
				<mt-cell title="成为商家" :is-link="link">
				  <img slot="icon" src="http://qiniu.bestpiaopiao.cn/shangjia.png" width="24" height="24">
				</mt-cell>
			</div>
			<div @click="isbuess" v-show="userinfo.isbuess == 1">
				<mt-cell title="我是商家" :is-link="link">
					<img slot="icon" src="http://qiniu.bestpiaopiao.cn/shangjia.png" width="24" height="24">
				</mt-cell>
			</div>
			
			<div @click="toadress">
				<mt-cell title="收货地址" :is-link="link">
				  <img slot="icon" src="http://qiniu.bestpiaopiao.cn/shouhuodizhi.png" width="24" height="24">
				</mt-cell>
			</div>
			<div @click="work">
				<mt-cell title="我要兼职" :is-link="link">
				  <img slot="icon" src="http://qiniu.bestpiaopiao.cn/work.png" width="24" height="24">
				</mt-cell>
			</div>
			<div @click="history">
				<mt-cell title="申请记录" :is-link="link">
				  <img slot="icon" src="http://qiniu.bestpiaopiao.cn/fuwuzhongxin.png" width="24" height="24">
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
				if(!this.userinfo.nickname){
					this.userinfo.nickname = this.userinfo.username;
				}
        	}else{
				MessageBox("提示","请先登陆");
			}
        },
        methods: {
            tobuess:function () {
            	this.$router.push('/tobuess');
//          	if(this.userinfo._id){
//          		
//          	}else{
//          		MessageBox("提示","请先登陆");
//          	}
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
		  work:function(){
			var _this = this;
				this.islogin(function(){
					_this.$router.push('/work');
				});
		  },
           islogin:function(callback){
           		if(2>1){
            		callback();
            	}else{
            		MessageBox("提示","请先登陆");
            	}
		   },
		   history:function(){
			   var _this = this;
			   this.islogin(function(){
					_this.$router.push('/applyhistory');
				});
		   }
        }
    }
</script>

<style>
	@import url("PersonalCenter.css");
</style>