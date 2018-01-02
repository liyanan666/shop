<template>
	<div>
		<mt-header title="新增收货地址">
            <router-link to="/personadress" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button v-show="adressdetail._id" slot="right" @click="delate">删除</mt-button>
        </mt-header>
        
        <span><mt-field label="收货人" placeholder="" v-model="Consigneename"></mt-field></span>
        <span><mt-field label="联系电话" type="number" placeholder="" v-model="Consigneephone"></mt-field></span>
        <span @click="adressVisible=true">
	    	<mt-cell title="所在区域" :is-link="link" :value="areaval">
	    	</mt-cell>
    	</span>
        <span><mt-field label="详细地址" placeholder="" type="textarea" rows="4" v-model="Consigneeadress"></mt-field></span>
        <div class="save" @click="saveVal">保存</div>
        <mt-popup position="bottom" v-model="adressVisible" popup-transition="popup-fade">
           <div class="popupheader clearfix"><span class="fl" @click="adressVisible=false">取消</span><span class="fr" @click="saveadress">保存</span></div>
           <mt-picker :slots="adressslots" @change="onAdressChange"></mt-picker>
       </mt-popup>
	</div>
</template>

<script>
	import { MessageBox,Popup,Picker } from 'mint-ui';
	import { mapState } from 'vuex'
	import {areaList,jsonlist} from './city.js'
	export default{
		data(){
			return{
				userinfo:'',
				link:true,
				Consigneename:'',
				Consigneephone:'',
				Consigneeadress:'',
				areaval:'北京-东城',
				adressVisible:false,
				Consigneearea:[],
				adressslots: [
			        {
			          flex: 1,
			          values: areaList,
			          className: 'slot1',
			          textAlign: 'right'
			        },{
			          divider: true,
			          content: '-',
			          className: 'slot2'
			        }, {
			          flex: 1,
			          values: jsonlist['北京市'],
			          className: 'slot3',
			          textAlign: 'left'
			        }
			    ]
			}
			
		},
		computed:{
			...mapState([
	            'adressdetail',
        	])
		},
		mounted:function(){
			if(this.adressdetail._id){
				this.Consigneename = this.adressdetail.Consigneename;
				this.Consigneephone = this.adressdetail.Consigneephone;
				this.Consigneeadress = this.adressdetail.Consigneeadress;
				this.areaval = this.adressdetail.areaval;
			}
			this.userinfo = JSON.parse(localStorage.getItem("userinfo")) || '';
		},
		
		methods:{
			onAdressChange(picker, values){
				if(!values[0]){
					values[0] = '北京市';
				}
			    picker.setSlotValues(1, jsonlist[values[0]]);
			    this.areaval = picker.getValues().join("-");
			},
			saveadress(){
				this.adressVisible = false;
			},
			saveVal(){
				var _this = this;
				if(this.Consigneename==''||this.Consigneeadress==''||this.areaval==''){
					MessageBox("提示","请完善信息");
					return;
				}
				if(this.Consigneephone.length!=11){
					MessageBox("提示","请输入正确的手机号");
					return;
				}
				var adressval = {
					Consigneename : this.Consigneename,
					Consigneephone : this.Consigneephone,
					Consigneeadress : this.Consigneeadress,
					areaval : this.areaval
				}
				adressval = JSON.stringify(adressval);
				if(this.adressdetail._id){
					$.ajax({
						type:"post",
						url:""+_this.GLOBAL.host+"/updateadress",
						async:true,
						data:{
							id:_this.userinfo._id,
							arrayid:_this.adressdetail._id,
							adressval:adressval
						},
						success:function(data){
							if(data.code == 0){
								localStorage.setItem("userinfo",JSON.stringify(data.data));
								_this.$router.push('/personadress');
							}
						}
					});
				}else{
					$.ajax({
						type:"post",
						url:""+_this.GLOBAL.host+"/saveadress",
						async:true,
						data:{
							id:_this.userinfo._id,
							arrayid:_this.adressdetail._id,
							adressval:adressval
						},
						success:function(data){
							if(data.code == 0){
								localStorage.setItem("userinfo",JSON.stringify(data.data));
								_this.$router.push('/personadress');
							}
						}
					});
				}
				
			},
			delate(){
				var _this = this;
				$.ajax({
					type:"post",
					url:""+_this.GLOBAL.host+"/delateadress",
					async:true,
					data:{
						id:_this.userinfo._id,
						arrayid:_this.adressdetail._id
					},
					success:function(data){
						if(data.code == 0){
							localStorage.setItem("userinfo",JSON.stringify(data.data));
							_this.$router.push('/personadress');
						}
					}
				});
			}
		}
	}
</script>

<style scoped="scoped">
	.mint-cell:last-child{
		background-position:inherit !important;
	}
	.save{
		width: 90%;
		height: 1rem;
		background: #d90a00;
		margin: 1rem auto 0 auto;
		border-radius: 6px;
		color: #fff;
		line-height: 1rem;
		text-align: center;
		font-size: .3rem;
	}
</style>