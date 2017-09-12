<template>
    <div>
        <div class="index_header">
			<input class="header_input" type="text" placeholder="" readonly id="picker-device">
        </div>
        <div class="index_banner">
        	<mt-swipe :auto="4000">
			  <mt-swipe-item>
			  	<img src="../../img/timg.jpg" width="100%"/>
			  </mt-swipe-item>
			  <mt-swipe-item><img src="../../img/timg.jpg" width="100%"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../img/timg.jpg" width="100%"/></mt-swipe-item>
			</mt-swipe>
        </div>
        <mt-tabbar v-model="selected" :fixed="isfix">
            <mt-tab-item id="主页">
                <img slot="icon" src="../../img/shouye.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="分类">
                <img slot="icon" src="../../img/fenlei.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="购物车">
                <img slot="icon" src="../../img/gouwuche.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="个人中心">
                <img slot="icon" src="../../img/zhongxin.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                selected:"外卖",
                isfix:true
            }
        },
        mounted:function(){
        	var pickerDevice = myApp.picker({
			    input: '#picker-device',
			    
			    value:['郑州科技学院'],
			    cols: [
			        {
			            textAlign: 'center',
			            values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学']
			        }
			    ]
			});
        },
        methods: {

        }
    }
</script>
<style scoped="scoped">
	.index_header{
		height: 0.8rem;
		position: fixed;
		background: #D90A00;
		width: 100%;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.index_header .header_input{
		border: none;
	    font-size: .3rem;
	    background: rgba(0,0,0,0);
	    text-align: center;
	    color: #fff;
	}
	.mint-swipe{
		height: 192px;
	}
	.mint-header{
		background: #d90a00;
	}
	.index_banner{
		margin-top: 0.8rem;
	}
</style>