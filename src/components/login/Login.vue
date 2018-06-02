<template>
	<div class="log_body">
		<mt-header title="登录">
		  <router-link to="/personal" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div>
			<div class="log_regist">
                <span class="usr_name">用户名</span>
                <span class="usr_input"><input type="text" v-model="username" placeholder="请输入用户名"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">密码</span>
                <span class="usr_input"><input type="password" v-model="password"  placeholder="请输入密码"></span>
            </div>
            <div class="log_btn" @click="login">登录</div>
            <p class="clearfix log_info"><span class="fl"></span><span class="fr" @click="rightnowregist">立即注册</span></p>
            <p class="log_text"><span class="log_line"></span><span class="log_hh">使用合作网站登录</span><span class="log_line"></span></p>
            <p class="log_icon"><span class="wx"><img src="http://qiniu.bestpiaopiao.cn/weixin.jpg" width="100%" alt=""></span></p>
		</div>


	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		data(){
			return {
				username:'',
				password:''
			}
		},
        methods:{
            rightnowregist:function () {
                this.$router.push('/regiest');
            },
            login:function(){
            	var _this =this;
            	$.ajax({
            		type:"post",
            		url:""+this.GLOBAL.host+"/user/login",
            		async:true,
            		data:{
            			username : this.username,
	            		password : this.password
            		},
            		success:function(data){
            			if(data.code == -1){
            				MessageBox('提示', data.info);
            				return;
            			}else{
            				localStorage.setItem("userinfo",JSON.stringify(data.info));
            				_this.$router.push('/index');
            			}
            			
            		}
            	})
            }
        }
	}
</script>

<style scoped="scoped">
	@import url("login.css");
</style>