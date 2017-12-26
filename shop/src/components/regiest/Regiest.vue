<template>
    <div class="log_body">
        <mt-header title="注册">
            <router-link to="/login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <div class="log_regist">
                <span class="usr_name">用户名</span>
                <span class="usr_input"><input type="text" placeholder="请输入用户名" v-model="username"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">密码</span>
                <span class="usr_input"><input type="password" placeholder="请输入密码" v-model="psw"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">确认密码</span>
                <span class="usr_input"><input type="password" placeholder="请输入密码" v-model="psw2"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">验证码</span>
                <span class="usr_input"><input type="text" placeholder="请输入验证码" v-model="code"></span>
                <span @click="changecode" style="height: 1rem;position: absolute;right: 0;top: 0;"><img :src="imgsrc" style="width: 1.5rem;height: 1rem;"/></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">所在学校</span>
                <span class="usr_input" @click="collageVisible=true"><input readonly type="text" v-model="school" placeholder=""></span>
            </div>
            <div class="log_btn" @click="regist">确认注册</div>

        </div>
        <mt-popup position="bottom" v-model="collageVisible" popup-transition="popup-fade">
            <div class="popupheader clearfix"><span class="fl" @click="collageVisible=false">取消</span><span class="fr" @click="savecollage">保存</span></div>
            <mt-picker :slots="collageslots" @change="onCollageChange"></mt-picker>
        </mt-popup>

    </div>
</template>

<script>
    import { MessageBox,Popup,Picker } from 'mint-ui';
    export default{
        data(){
            return {
            	imgsrc:'http://10.0.0.12:3000/code',
                username:'',
                psw:'',
                psw2:'',
                code:'',
                email:'',
                school:'郑州科技学院',
                modelschool:'',
                captcha:'',
                collageVisible:false,
                collageslots: [
                    {
                        values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学'],
                        textAlign: 'center'
                    }
                ],
            }
        },
        mounted:function(){
        	
        },
        methods:{
            onCollageChange(picker, values){
                this.modelschool = values.toString();
            },
            savecollage(){
                this.school = this.modelschool;
                this.collageVisible = false;
            },
            changecode(){
            	this.imgsrc = ''+this.GLOBAL.host+'/code?id='+Math.random();
            },
            regist(){
            	var _this = this;
            	if(this.psw != this.psw2){
            		MessageBox('提示', "密码不一致，请重新输入");
            		return;
            	}
            	if(this.psw!="" && this.username!="" && this.psw2!="" && this.code!=""){
            		$.ajax({
	            		type:"post",
	            		url:""+this.GLOBAL.host+"/registuser",
	            		async:true,
	            		data:{
	            			username : this.username,
		            		password : this.psw,
		            		code : this.code,
		            		school:this.school,
		            		age:"",//年龄
	                        phone:"",//电话
	                        sex:"",//性别
	                        nickname:"",//昵称
	                        email:"",//邮箱
	                        introduction:"",//简介
	                        headportrait:""      //头像
	            		},
	            		success:function(data){
	            			if(data.code == -1){
	            				MessageBox('提示', data.info);
	            				return;
	            			}
	            			_this.$router.push('/login');
	            		}
	            	});
            	}else{
            		MessageBox('提示', "请完善信息");
            		return;
            	}
            	
            }
        }
    }
</script>

<style scoped="scoped">
    @import url("../login/login.css");
    .usr_name{
        flex:1.2;
    }
    .mint-popup-bottom{
        width: 100%;
    }
    .popupheader{
        height:.8rem;
        border-bottom: 1px solid #f8f8f8;
    }
    .popupheader span{
        margin: 0 .3rem ;
        font-size:.3rem;
        color: #26a2ff;
        line-height: .8rem;
    }
</style>