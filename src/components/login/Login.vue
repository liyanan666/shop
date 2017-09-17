<template>
	<div>
		<mt-header title="登录">
		  <router-link to="/index" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		</mt-header>
		<div>
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
		</div>
		<div style="margin-top: 0.5rem;">
			<mt-field label="密码" placeholder="请输入密码" type="email" v-model="email"></mt-field>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				username:'',
				email:''
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("login.css");
</style>