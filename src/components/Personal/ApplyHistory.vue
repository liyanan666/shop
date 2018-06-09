<template>
	<div class="work">
		<mt-header title="申请记录">
            <router-link to="/personal" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
		<ul class="application">
	   	 <li class="clearfix" v-for="item in applyList">
	   	 		<img src="http://qiniu.bestpiaopiao.cn/wl.png" width="45">
	   	 		<span>
	   	 			<p>申请成为“{{item.applyname}}”</p>
	   	 			<p class="time">{{item.create_at |formitdata}}</p>
	   	 		</span>
	   	 		<i>{{item.status | fileterstatus}}</i>
	   	 </li>
	   	
	   	
	   </ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { MessageBox,Popup,Picker } from 'mint-ui';
	import { mapState } from 'vuex';
	Vue.filter('fileterstatus',function(val){
		switch (val){
			case 0:
				return '申请中'
				break;
			case 1:
				return '申请成功'
				break;
			case 2:
				return '申请失败'
				break;
			default:
				break;
		}
	})
	export default{
		data(){
			return{
				userid:localStorage.getItem("userid") || '',
				applyList:[]
			}
			
		},
		mounted:function(){
			var _this =this;
        	$.ajax({
        		type:"get",
        		url:""+this.GLOBAL.host+"/user/applylist",
        		async:true,
        		data:{
        			userid : this.userid
        		},
        		success:function(data){
        			if(data.code == -1){
        				MessageBox('提示', data.info);
        				return;
        			}else{
        				_this.applyList = data.data;
        			}
        		}
        	})
		},
		
		methods:{
			
		}
	}
</script>

<style scoped="scoped">
.application {
    background: #fff;
}
.application li {
    border-bottom: 1px solid #ddd;
    overflow: hidden;
    padding: 0.1rem .2rem;
}
.application li img {
    float: left;
    border-radius: 50%;
}
.application li span {
    float: left;;
    margin-left: 2%;
    color: #282828;
}
.application li span p{
    padding: .1rem 0;
    font-size: .32rem;
}
.application li .time {
    color: #a4a4a4;
    font-size: .2rem;
}
.application li i {
    font-style: normal;
    float: right;
    color: #cb2527;
    margin-top: .3rem;
}
</style>