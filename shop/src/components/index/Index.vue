<template>
    <div>
    	<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="tab-container1">
		    <maincontent></maincontent>
		  </mt-tab-container-item>
		  
		  <mt-tab-container-item id="tab-container2">
		  	<classification></classification>
		  </mt-tab-container-item>
		  
		  <mt-tab-container-item id="tab-container3">
		  	<shopcart></shopcart>
		  </mt-tab-container-item>
		  
		  <mt-tab-container-item id="tab-container4">
		  	<personal></personal>
		  </mt-tab-container-item>
		  
		</mt-tab-container>
        
        <mt-tabbar v-model="selected" :fixed="isfix">
            <mt-tab-item id="tab-container1">
                <img slot="icon" src="../../img/shouye.png" >
               	 主页
            </mt-tab-item>
            <mt-tab-item id="tab-container2">
                <img slot="icon" src="../../img/fenlei.png">
               	 分类
            </mt-tab-item>
            <mt-tab-item id="tab-container3">
                <img slot="icon" src="../../img/gouwuche.png">
               	 购物车
            </mt-tab-item>
            <mt-tab-item id="tab-container4">
                <img slot="icon" src="../../img/zhongxin.png">
               	 个人中心
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
	import maincontent from '../Main/Main.vue'
	import classification from '../classification/Classification.vue'
	import shopcart from '../shop/Shopcart.vue'
	import personal from '../Personal/PersonalCenter.vue'
    export default {
        data() {
            return {
                selected:"tab-container1",
                isfix:true,
                swipeable:true
            }
        },
        watch:{
        	selected:function(newval,oldval){
        		console.log(newval)
        		if(newval == 'tab-container4'){
        		}
        	}
        },
        created:function(){
        	
        },
        components:{
        	maincontent,
        	classification,
        	shopcart,
        	personal
        },
        mounted:function(){
        	
        },
        methods: {
			
        }
    }
</script>
<style scoped="scoped">
	@import url("index.css");
</style>