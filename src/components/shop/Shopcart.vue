<template>
	<div>
		<mt-header title="购物车" style="position: fixed;width: 100%;top: 0;">
		</mt-header>
       <div class="list-block">
	       	<ul class="shop_list">
				<li>
					<div class="item-content">
						<!-- Checked by default -->
						<label class="demo--label"><input class="demo--radio" type="checkbox" name="demo-checkbox1">
							<span class="demo--checkbox demo--radioInput"></span>
						</label>

						<div class="shop_pic">
							<img src="http://qiniu.bestpiaopiao.cn/s5.png"/>
						</div>
						<div class="shop_content">
							<p class="car_title">呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒</p>
							<p class="car_info">400g*10礼盒</p>
							<p class="car_money">
								<span>¥186</span>
								<span>¥356<span class="midline"></span></span>
								<span style="float: right;font-size: .25rem" class="btngroup">
									<span class="fl businessbtn addbusiness">+</span>
									<span class="fl businessnum">0</span>
									<span class="fl businessbtn delbusiness">-</span>
								</span>
							</p>
						</div>

					</div>
				</li>


	        </ul>
       </div>
       <div class="shop_Settlement">

			<label class="demo--label"><input class="demo--radio" type="checkbox" name="demo-checkbox1">
				<span class="demo--checkbox demo--radioInput"></span>全选
			</label>
		   <span class="shop_Two fr">去结算</span>
			<div class="fr busmoney">
				<p>合计：<span class="busmoneys">¥1234</span>元</p>
				<p>免费配送</p>
			</div>
       </div>
        <bottomnav :attribute="'shop'"></bottomnav>
	</div>
</template>

<script>
    import bottomnav from '../public/Bottom.vue'
    export default {
        data() {
            return {
                shopnum:0,

            }
        },

        created:function(){

        },
        components:{
            bottomnav
        },
        mounted:function(){

        },
        methods: {
			hh(){
			    console.log(123456)
			}
        }
    }

</script>

<style>
    @import url("shop.css");
</style>