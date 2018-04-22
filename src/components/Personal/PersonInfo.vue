<template>
   <div>
       <mt-header title="个人资料">
           <router-link to="/personal" slot="left">
               <mt-button icon="back"></mt-button>
           </router-link>
       </mt-header>
       <div>
	       	<mt-field label="用户名:" readonly placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="昵称:" placeholder="请输入昵称" v-model="nickname"></mt-field>
			<mt-field label="手机号:" placeholder="请输入手机号" type="number" v-model="phone"></mt-field>
			<div @click="sexVisible=true">
				<mt-field readonly label="性别:" placeholder="请输入性别" type="url" v-model="sex"></mt-field>
			</div>
			
			
			<div class="myheader">
				<span class="header_title">我的头像</span>
				<span>
					<a href="javascript:;" class="a-upload">
						<img :src="headportrait"/>
					    <input @change="uploadfile" type="file" name="" id="" accept="image/*"  />
					</a>
				</span>
			</div>
			<div @click="collageVisible=true"> 
				<mt-field label="所在院校:" readonly placeholder="请输入院校" v-model="school"></mt-field>
			</div>
			<mt-field label="简介:" placeholder="请输入简介" type="textarea" rows="4" v-model="introduction"></mt-field>
           

       </div>
       <div class="perinfobtn" @click="savedata">保存</div>
       <mt-popup position="bottom" v-model="sexVisible" popup-transition="popup-fade">
           <div class="popupheader clearfix"><span class="fl" @click="sexVisible=false">取消</span><span class="fr" @click="savesex">保存</span></div>
           <mt-picker :slots="sexslots" @change="onsexChange"></mt-picker>
       </mt-popup>
       <mt-popup position="bottom" v-model="collageVisible" popup-transition="popup-fade">
           <div class="popupheader clearfix"><span class="fl" @click="collageVisible=false">取消</span><span class="fr" @click="savecollage">保存</span></div>
           <mt-picker :slots="collageslots" @change="onCollageChange"></mt-picker>
       </mt-popup>

   </div>
</template>

<script>
    import { MessageBox,Popup,Picker } from 'mint-ui';
    export default {
        data() {
            return {
                sexVisible:false,
                collageVisible:false,
                username:'',
               	nickname:'',
                phone:'',
                sex:'男',
                headportrait: '../../src/img/upload.png',
                school:'',
                introduction:'',
                userinfo:{},
                modelnickname:'',
                pickersex:'',
                pickercollage:'',
                modelemailval:'',
                emailval:'',
                modelintroduce:'',
                sexslots: [
                    {
                        values: ['男', '女'],
                        textAlign: 'center'
                    }
                ],
                collageslots: [
                    {
                        values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学'],
                        textAlign: 'center'
                    }
                ],
            }
        },
        mounted:function(){
        	this.userinfo = JSON.parse(localStorage.getItem("userinfo")) || '';
        	console.log(this.userinfo);
        	if(this.userinfo){
        		this.username = this.userinfo.username;
        		this.sex = this.userinfo.sex || '男';
        		this.nickname = this.userinfo.nickname;
        		this.phone = this.userinfo.phone;
        		this.school = this.userinfo.school;
        		this.introduction = this.userinfo.introduction;
        		this.headportrait = this.userinfo.headportrait || '../../src/img/upload.png';
        	}
        },
        methods: {
            changename(){
                MessageBox.prompt('', {
                    message: '请输入昵称？',
                    showInput:true,
                    inputValue:this.modelname
                }).then(({ value, action }) => {
                    if(value.length>9){
                        MessageBox('提示', '超出字符限制，请重新填写');
                        return;
                    }
                    this.modelnickname = value;
                    this.nickname = value;
                }).catch(err => {

                });
            },
            onsexChange(picker, values) {
                this.pickersex = values.toString();
            },
            onCollageChange(picker, values){
                this.pickercollage = values.toString();
            },
            uploadfile(){
            	var _this = this;
            	
            	var file = event.target.files[0];  
            	if (window.FileReader) {  
		            var reader = new FileReader();  
		            reader.readAsDataURL(file);  
		            //监听文件读取结束后事件  
		            reader.onloadend = function (e) {
		            	var formData = new FormData();
						formData.append('file',file);
		            	console.log(formData)
						$.ajax({ 
							url:""+_this.GLOBAL.host+"/uploadimg",
							type : 'POST', 
							data : formData,
							// 告诉jQuery不要去处理发送的数据
							processData : false, 
							// 告诉jQuery不要去设置Content-Type请求头
							contentType : false,
							success : function(data) { 
								_this.headportrait = data.url;
							}, 
							error : function(responseStr) { 
								console.log("error");
							} 
						});
		            };  
		        }  
            },
            savesex:function () {
                this.sex = this.pickersex;
                this.sexVisible = false;
            },
            savecollage:function () {
                this.school = this.pickercollage;
                this.collageVisible = false;
            },
            savedata:function(){
            	if(this.phone.length!=11){
            		MessageBox("提示","手机号码不正确");
            		return;
            	}
            	var _this = this;
            	var datainfo = {
            		username:this.username,
	               	nickname:this.nickname,
	                phone:this.phone,
	                sex:this.sex,
	                headportrait: this.headportrait,
	                school:this.school,
	                introduction:this.introduction,
	                _id:_this.userinfo._id
            	}
            	datainfo = JSON.stringify(datainfo);
            	$.ajax({ 
					url:""+_this.GLOBAL.host+"/changeuserinfo",
					type : 'POST', 
					data : {
						id:_this.userinfo._id,
						userinfo:datainfo
					},
					success : function(data) { 
						if(data.code == 0){
							localStorage.setItem("userinfo",JSON.stringify(data.data));
							_this.$router.push('./personal');
						}else{
							MessageBox("提示","保存失败，请稍后重试");
						}
						
					}, 
					error : function(responseStr) { 
						MessageBox("提示","保存失败，请稍后重试");
					} 
				});
            }

            
        }
    }
</script>

<style>
	.mint-cell{
		border-bottom: 1px solid #efefef;
	}
    .perinfobtn{
        width: 90%;
        height:.8rem;
        background: #D90A00;
        margin: 1rem auto;
        border-radius: 8px;
        color: #fff;
        text-align: center;
        line-height: .8rem;
        font-size: 18px;
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
    .mint-cell:last-child{
		background-position: inherit;
		border-bottom: 1px solid #efefef;
    }
    .mint-popup-bottom{
        width: 100%;
    }
    .myheader{
    	height: 2rem;
    	display: flex;
    	align-items: center;
    	padding: 0 10px;
    	background: #fff;
		font-size: 16px;
		border-bottom: 1px solid #efefef;
    }
    .myheader .header_title{
    	width: 105px;
    }
    .a-upload {
	    width: 1.3rem;
	    height: 1.3rem;
	    line-height: 20px;
	    position: relative;
	    cursor: pointer;
	    color: #888;
	    border-radius: 4px;
	    overflow: hidden;
	    display: inline-block;
	    *display: inline;
	    *zoom: 1
	}
	.a-upload img{
		width: 100%;
		height: 100%;
	}
	.a-upload  input {
	    position: absolute;
	    font-size: 100px;
	    right: 0;
	    top: 0;
	    opacity: 0;
	    filter: alpha(opacity=0);
	    cursor: pointer
	}
</style>