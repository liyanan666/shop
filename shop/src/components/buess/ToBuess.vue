<template>
    <div class="log_body">
        <mt-header title="成为商家">
            <router-link to="/personal" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="tobus_content">
            <div class="log_regist">
                <span class="usr_name">店铺名称</span>
                <span class="usr_input"><input type="text" v-model="data.shopname" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">主营业务</span>
                <span class="usr_input"><input type="text" v-model="data.mainbusiness" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">姓名</span>
                <span class="usr_input"><input type="text" v-model="data.buessname" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">性别</span>
                <span class="usr_input" @click="isshowsex=true"><input type="text" readonly v-model="data.buesssex" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">出生日期</span>
                <span class="usr_input"><input type="text" readonly="readonly" @click="isshowtime=true" v-model="data.buessbirth" id="beurn_date" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">手机号</span>
                <span class="usr_input"><input type="number" v-model="data.buessphone" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">身份证</span>
                <span class="usr_input"><input type="text" v-model="data.buessidNumber" id="" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">所在院校</span>
                <span class="usr_input" @click="isshowschool=true"><input type="text" readonly v-model="data.buessschool" id="tobuesschool" ></span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right:none ">店铺简介</span>
                <span class="usr_input"><textarea v-model="data.buessintroduction" name="" id="" cols="30" rows="10"></textarea></span>

            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none">店铺Logo</span>
                <span class="usr_input">
					<a href="javascript:;" class="a-upload">
						<img :src="data.buesslogo"/>
					    <input @change="uploadimg(0)" type="file" name="" id="" accept="image/*"  />
					</a>
				</span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none;line-height: normal;margin-top: 0.3rem;">身份证照片</span>
                <span class="usr_input">
                    <a href="javascript:;" class="a-upload">
						<img :src="data.buessidPhoto[0]"/>
					    <input @change="uploadimg(1)" type="file" name="" id="" accept="image/*"  />
					</a>
                    <a href="javascript:;" class="a-upload">
						<img :src="data.buessidPhoto[1]"/>
					    <input @change="uploadimg(2)" type="file" name="" id="" accept="image/*"  />
					</a>
                </span>
            </div>
            <div class="log_btn" @click="regiest">确认注册</div>

        </div>
        <schoolSelect :show="isshowschool" v-on:operationschool="operationschool"></schoolSelect>
        <sexSelect :showsex="isshowsex" v-on:operationsex="operationsex"></sexSelect>
        <dataTime :showtime="isshowtime" v-on:operationtime="operationtime"></dataTime>
    </div>
</template>

<script>
	import { MessageBox} from 'mint-ui';
	import schoolSelect from '../public/SchoolSelect.vue'
	import sexSelect from '../public/SexSelect.vue'
	import dataTime from '../public/DataTime.vue'
    export default{
        data(){
            return {
            	isshowschool:false,
            	isshowsex:false,
            	isshowtime:false,
            	userinfo:{},
            	data:{
            		shopname:'',
	                mainbusiness:'',
	                buessname:'',
	                buesssex:'男',
	                buessphone:'',
	                buessbirth:'1970-01-01',
	                buessidNumber:'',
	                buessschool:'郑州科技学院',
	                buessintroduction:'',
	                buesslogo:'../../src/img/upload.png',
	                buessidPhoto:['../../src/img/upload.png','../../src/img/upload.png'],
            	}
            }
        },
        mounted:function(){
        	this.userInfo = JSON.parse(localStorage.getItem("userinfo")) || {};
        },
        components:{
        	schoolSelect,
        	sexSelect,
        	dataTime
        },
        methods:{
        	regiest(){
        	    var _this = this;
        		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
        		if(reg.test(this.data.buessidNumber) === false)  
			   	{  
			       MessageBox("提示","请输入正确的身份证号码")
			       return;  
			   	}
			   	if(this.data.buessphone.length != 11){
			   		MessageBox("提示","请输入正确的手机号")
			       	return;  
			   	}
        		
        		var userid = this.userInfo._id;
        		console.log(userid);
        		var userdata = JSON.stringify(this.data);
        		$.ajax({
        			type:"post",
        			url:""+this.GLOBAL.host+"/tobuess",
        			async:true,
        			data:{
        				id:userid,
        				userdata:userdata
        			},
        			success:function(data){
        				if(data.code == 0){
        					localStorage.setItem("userinfo",JSON.stringify(data.data));
        					localStorage.setItem("buessinfo",userdata);
        					MessageBox("提示",data.info);
        					_this.$router.push('/personal');
        				}else{
        					MessageBox("提示",data.info);
        					
        				}
        			}
        		});
        	},
        	operationschool(val){
        		if(val){
        			this.data.buessschool = val;
        		}
        		this.isshowschool = false;
        		
        	},
        	operationsex(val){
        		if(val){
        			this.data.buesssex = val;
        		}
        		this.isshowsex = false;
        	},
        	operationtime(val){
        		if(val){
        			this.data.buessbirth = val;
        		}
        		this.isshowtime = false;
        	},
        	uploadimg(index){
        		console.log(index);
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
								switch (index){
									case 0:
										_this.data.buesslogo = data.url;
										break;
									case 1:
										_this.data.buessidPhoto[0] = data.url;
										break;
									case 2:
										_this.data.buessidPhoto[1] = data.url;
										break;
									default:
										break;
								}
							}, 
							error : function(responseStr) { 
								console.log("error");
							} 
						});
		            };  
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
    .mint-header{
        width: 100%;
        position: fixed;
        top:0;
        z-index: 100;
    }
    .tobus_content{
        margin-top: 40px;
    }
    .usr_input textarea{
        height:1.5rem;
        border:1px solid #e9e9e9;
        margin: 0.2rem 0;
        font-size: 0.3rem;
    }
    .usr_input .upload{
        width: 1.5rem;
        margin: 0.3rem 0.2rem;
    }
    .a-upload {
    	margin: .2rem;
	    width: 1.1rem;
	    height: 1.1rem;
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