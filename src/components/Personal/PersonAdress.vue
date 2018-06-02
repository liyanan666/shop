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
		padding: .3rem .2rem;
		background: #fff;
		margin-bottom: .1rem;
		border-bottom: 1px solid #D9D9D9;
		position: relative;
	}
	.adress_content .name{
		color: black;
		font-weight: bold;
	}
	.adress_content li p:nth-of-type(1){
		font-size: .3rem;
		line-height: .5rem;
	}
	.adress_content li .shuru{
		width: .4rem;
		height: .4rem;
		position: absolute;
		right: .2rem;
		top: 50%;
		transform: translateY(-50%);
	}
	.add{
		background: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: .2rem 0;
	}
	.add img{
		width: .5rem;
		height: .5rem;
	}
	.add p{
		font-size: .3rem;
		margin-left: .2rem;
	}
</style>