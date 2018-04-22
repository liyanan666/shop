<template>
	<div>
		<mt-popup position="bottom" :value="sexshow" popup-transition="popup-fade">
            <div class="popupheader clearfix">
                <span class="fl" @click="channel">取消</span>
                <span class="fr" @click="savesex">保存</span>
            </div>
            <mt-picker :slots="sexslots" @change="onSexChange"></mt-picker>
        </mt-popup>
	</div>
</template>

<script>
	import { MessageBox,Popup,Picker } from 'mint-ui';
    export default{
        data(){
            return {
                sexslots: [
                    {
                        values: ['男', '女'],
                        textAlign: 'center'
                    }
                ],
            }
        },
        props:['showsex'],
        computed:{
        	sexshow:function(){
        		return this.showsex;
        	}
        },
        methods:{
            onSexChange(picker, values){
                this.modelschool = values.toString();
            },
            savesex(){
                this.$emit('operationsex',this.modelschool);
            },
            channel(){
            	this.$emit('operationsex',false);
            }
        }
    }
</script>

<style>
</style>