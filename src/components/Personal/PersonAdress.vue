<template>
	<div>
		<mt-header title="收货地址">
            <router-link to="/personal" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        
        <ul class="adress_content">
        	<li v-for="(item,index) in adress" >
        		<p><span class="name">{{item.Consigneename}}</span><span> {{item.Consigneephone}}</span></p>
        		<p>{{item.areaval}}-{{item.Consigneeadress}}</p>
        		<img @click="todetailAdress(item)" class="shuru" src="http://qiniu.bestpiaopiao.cn/shuru.png"/>
        	</li>
        </ul>
        <div class="add clearfix" @click="addadress">
        	<img class="fl" src="http://qiniu.bestpiaopiao.cn/add.png"/>
        	<p class="fl">新增收货地址</p>
        </div>
	</div>
</template>

<script>
    import { MessageBox,Popup,Picker } from 'mint-ui';
    import { mapMutations,mapState } from 'vuex'
    export default{
        data(){
            return {
            	adress:[]
            }
        },
        computed:{
			...mapState([
	            'adressdetail',
        	])
		},
        mounted:function(){
        	var userinfo = JSON.parse(localStorage.getItem("userinfo"));
        	this.adress = userinfo.adressval;
        },
        methods:{
        	...mapMutations([
	            'addAdressDetail',
	        ]),
        	addadress(){
        		this.addAdressDetail({});
        		this.$router.push('/personNewAdress')
        	},
        	todetailAdress(val){
        		this.addAdressDetail(val);
        		this.$router.push('/personNewAdress');
        	}
        }
    }
</script>

<style>
	.adress_content li{
		padding: 10px;
		background: #fff;
		margin-bottom: 5px;
		border-bottom: 1px solid #D9D9D9;
		position: relative;
	}
	.adress_content .name{
		color: black;
		font-weight: bold;
	}
	.adress_content li p:nth-of-type(1){
		font-size: 16px;
	}
	.adress_content li p:nth-of-type(2){
		margin-top: 6px;
		font-size: 14px;
	}
	.adress_content li .shuru{
		width: 30px;
		height: 30px;
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translateY(-50%);
	}
	.add{
		max-width: 640px;
		background: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0;
		border: 1px solid #f2f2f2;
	}
	.add img{
		width: 30px;
		height: 30px;
	}
	.add p{
		font-size: 16px;
		margin-left: 15px;
	}
</style>