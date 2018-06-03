<template>
	<div class="work">
		<mt-header title="申请物流员">
            <router-link to="/work" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
		<ul class="application-infor">
	    	<li><span>姓名 :</span><input v-model="info.name" type="text" placeholder="请输入您的真实姓名"></li>
	    	<li><span>性别 :</span><input  @click="showsex=true" v-model="info.sex"  readonly type="text" placeholder="请选择您的性别">  </li>
	    	<li><span>学校 :</span><input  @click="collageVisible=true" v-model="info.school"  readonly type="text" placeholder="请选择您的所在院校">  </li>
	    	<li><span>院系 :</span><input v-model="info.college" type="text" placeholder="请输入您的所在院系"></li>
	    	<li><span>专业 :</span><input v-model="info.major" type="text" placeholder="请输入您的专业"></li>
	    	<li><span>班级 :</span><input type="text" v-model="info.class" placeholder="请输入您所在的班级"></li>
	    	<li><span>学号 :</span><input type="text" v-model="info.schoolNum" placeholder="请输入您的学号"></li>
	    	<li><span>身份证号 :</span><input type="text" v-model="info.IDnum" placeholder="请输入您的身份证号"></li>
	    	<li><span>支付宝账号 :</span><input type="text" v-model="info.payNum" placeholder="请输入支付宝账号，方便给您薪资"></li>
	    	<li><span>手机号 :</span><input type="text" v-model="info.phoneNum" placeholder="请输入您的手机号"></li>
	    	
	    </ul>
        <input type="button" value="提交申请" class="login-btn" @click="apply">
        <schoolSelect :show="collageVisible" @operationschool="operationschool"></schoolSelect>
        <sexselect :showsex="showsex" @operationsex="operationsex"></sexselect>
	</div>
</template>

<script>
	import { MessageBox,Popup,Picker } from 'mint-ui';
    import { mapState } from 'vuex';
    import sexselect from '../public/SexSelect.vue';
    import schoolSelect from '../public/SchoolSelect.vue';
import { fail } from 'assert';
	export default{
		data(){
			return{
                collageVisible:false,
                showsex:false,
                school:'',
                sex:'',
                info:{
                	name:'',
                	sex:'',
                	school:'',
                	college:'',
                	major:'',
                	class:'',
                	schoolNum:'',
                	IDnum:'',
                	payNum:'',
                	phoneNum:''
                }
			}
			
        },
        components:{
            schoolSelect,
            sexselect
        },
		mounted:function(){
			
		},
		
		methods:{
			operationschool:function(val){
                if(val){
                    this.school = val;
                } 
                this.collageVisible = false;
                
            },
            operationsex:function(val){
                if(val){
                    this.sex = val;
                } 
                this.showsex = false;
            },
            apply:function(){
            	for(var keys in this.info){
            		if(!this.info[keys]){
            			MessageBox('提示','请完善信息');
            			return;
            		}
            	}
            }

		}
	}
</script>

<style scoped="scoped">
.application-infor {
    background: #fff;
    overflow: hidden;
    font-size: 16px;
}
.application-infor li {
    border-bottom: 1px solid #ddd;
    overflow: hidden;
}
.application-infor li span {
    line-height: 49px;
    float: left;
    width: 30%;
    text-align: right;
}
.application-infor li input {
    float: left;
    border: 0;
    line-height: 49px;
    width: 40%;
    vertical-align: middle;
    outline: none;
    padding-left: 20px;
}
.login-btn {
    margin: 20px 5%;
    border: 0;
    color: #fff;
    width: 90%;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    background: #cb2527;
}
</style>