<template>
	<div>
		<div class="index_header">
			<input @click="collageVisible=true" class="header_input" type="text" placeholder="请选择学校" readonly v-model="school">
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
        <div class="index_nav">
        	<span class="navicon1">
        		<img src="../../img/fushi1.png"/>
        		<p class="nav_title">服饰</p>
        	</span>
        	<span class="navicon2">
        		<img src="../../img/shiwu1.png"/>
        		<p class="nav_title">食品</p>
        	</span>
        	<span class="navicon3">
        		<img src="../../img/baihuo1.png"/>
        		<p class="nav_title">日用百货</p>
        	</span>
        	<span class="navicon4">
        		<img src="../../img/ershou1.png"/>
        		<p class="nav_title">其他</p>
        	</span>
        </div>
        <!--neirong-->
        <div class="index_content">
        	<p class="content_title clearfix"><span class="content_redline fl"></span><span class="fl">精彩推荐</span></p>
        </div>
        <ul class="index_list clearfix">
        	<li>
        		<div class="list_pic" @click="todetail">
        			<img src="../../img/local_pic.png"/>
        			<p class="list_info">呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒</p>
        			<p class="list_money clearfix"><span class="red">¥666</span><span class="saled fr">已售</span></p>
        		</div>
        		
        	</li>
        	<li>
        		<div class="list_pic" @click="todetail">
        			<img src="../../img/local_pic.png"/>
        			<p class="list_info">呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒</p>
        			<p class="list_money clearfix"><span class="red">¥666</span><span class="saled fr">已售</span></p>
        		</div>
        	</li>
        	<li>
        		<div class="list_pic" @click="todetail">
        			<img src="../../img/local_pic.png"/>
        			<p class="list_info">呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒</p>
        			<p class="list_money clearfix"><span class="red">¥666</span><span class="saled fr">已售</span></p>
        		</div>
        	</li>
        	<li>
        		<div class="list_pic" @click="todetail">
        			<img src="../../img/local_pic.png"/>
        			<p class="list_info">呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒</p>
        			<p class="list_money clearfix"><span class="red">¥666</span><span class="saled fr">已售</span></p>
        		</div>
        	</li>
        </ul>
		<mt-popup position="bottom" v-model="collageVisible" popup-transition="popup-fade">
			<div class="popupheader clearfix"><span class="fl" @click="collageVisible=false">取消</span><span class="fr" @click="savecollage">保存</span></div>
			<mt-picker :slots="collageslots" @change="onCollageChange"></mt-picker>
		</mt-popup>
	</div>
</template>

<script>
	export default {
        data() {
            return {
                isfix:true,
                school:'郑州科技学院',
                modelschool:'',
                collageVisible:false,
                collageslots: [
                    {
                        values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学'],
                        textAlign: 'center'
                    }
                ],
            }
        },
        created:function(){
        	
        },
        mounted:function(){

        },
        methods: {
            todetail:function () {
                this.$router.push('/detail')
            },
            onCollageChange(picker, values){
                this.modelschool = values.toString();
            },
            savecollage(){
                this.school = this.modelschool;
                this.collageVisible = false;
			}
        }
    }
</script>

<style>
	.mint-popup-bottom{
		width: 100%;
	}
	.popupheader{
		height:.8rem;
		border-bottom: 1px solid #f8f8f8;
	}
	.popupheader span{
		margin: 0 .3rem ;
		font-size:.3rem;
		color: #26a2ff;
		line-height: .8rem;
	}
</style>