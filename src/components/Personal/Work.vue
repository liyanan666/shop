<template>
	<div class="work">
		<mt-header title="我要兼职">
            <router-link to="/personal" slot="left">
                <mt-button icon="back"></mt-button>
				
            </router-link>
			
        </mt-header>
		<ul class="job">
	   	 <router-link to="applydistributor"><li><img src="http://qiniu.bestpiaopiao.cn/wl.png" width="45"><span>物流员</span><i class="mint-cell-allow-right"></i></li></router-link>
	   	 <li><a href="applicationjob.html"><img src="http://qiniu.bestpiaopiao.cn/ph.png" width="45"><span>配货员</span><i class="mint-cell-allow-right"></i></a></li>
	   	 <li><a href="applicationjob.html"><img src="http://qiniu.bestpiaopiao.cn/lz.png" width="45"><span>招募楼长</span><i class="mint-cell-allow-right"></i></a></li>
	   	 <li><a href="applicationjob.html"><img src="http://qiniu.bestpiaopiao.cn/brand.png" width="45"><span>我要加盟</span><i class="mint-cell-allow-right"></i></a></li>
	   	 <li><a href="applicationjob.html"><img src="http://qiniu.bestpiaopiao.cn/qd.png" width="45"><span>敬请期待</span><i class="mint-cell-allow-right"></i></a></li>
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
.work{
	max-width: 640px;
	position: absolute;
	width: 100%;
	height: 100%;
	background: #efefef;
}
.mint-cell:last-child{
	background-position:inherit !important;
}
.job li {
    background: #fff;
    margin-top: 10px;
    padding: 10px 15px;
    overflow: hidden;
	position: relative;
	font-size: 16px;
}
.job li a {
    color: #2e2e2e;
    display: block;
}
.job li img {
    float: left;
}
.job li span {
    float: left;
    margin-left: 2%;
    margin-top: 15px;
}
.job li .am-icon-angle-right {
    float: right;
    font-style: normal;
    margin-top:  15px;
}
.am-close, .am-icon-btn, [class*=am-icon-] {
    display: inline-block;
}
.mint-cell-allow-right::after {
    border: solid 2px #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 20px;
    position: absolute;
    width: 5px;
    height: 5px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
}
</style>