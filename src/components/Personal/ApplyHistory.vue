<template>
	<div class="work">
		<mt-header title="申请记录">
            <router-link to="/personal" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
		<ul class="application">
	   	 <li class="clearfix">
	   	 		<img src="../../img/wl.png" width="45">
	   	 		<span>
	   	 			<p>申请“物流员”</p>
	   	 			<p class="time">2016-01-07 16:34:20</p>
	   	 		</span>
	   	 		<i>申请成功</i>
	   	 </li>
	   	 <li>
	   	 		<img src="../../img/ph.png" width="45">
	   	 		<span>
	   	 			<p>申请“配送员”</p>
	   	 			<p class="time">2016-01-07 16:34:20</p>
	   	 		</span>
	   	 		<i>申请中</i>
	   	 </li>
	   	
	   </ul>
	</div>
</template>

<script>
	import { MessageBox,Popup,Picker } from 'mint-ui';
	import { mapState } from 'vuex'
	export default{
		data(){
			return{
				
			}
			
		},
		computed:{
		
		},
		mounted:function(){
			
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