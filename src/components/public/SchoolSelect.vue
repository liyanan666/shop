<template>
	<div>
		<mt-popup position="bottom" :value="shows" popup-transition="popup-fade">
            <div class="popupheader clearfix"><span class="fl" @click="channel">取消</span><span class="fr" @click="savecollage">保存</span></div>
            <mt-picker :slots="collageslots" @change="onCollageChange"></mt-picker>
        </mt-popup>
	</div>
</template>

<script>
    import { MessageBox,Popup,Picker } from 'mint-ui';
    export default{
        data(){
            return {
                collageVisible:false,
                collageslots: [
                    {
                        values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学'],
                        textAlign: 'center'
                    }
                ],
            }
        },
        props:['show'],
        computed:{
        	shows:function(){
        		return this.show;
        	}
        },
        methods:{
            onCollageChange(picker, values){
                this.modelschool = values.toString();
            },
            savecollage(){
                this.$emit('operationschool',this.modelschool);
            },
            channel(){
            	this.$emit('operationschool',false);
            }
        }
    }
</script>

<style>
</style>