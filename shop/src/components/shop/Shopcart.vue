<template>
	<div>
		<div class="index_header">
			<span>购物车</span>
		</div>
       <div class="list-block">
	       	<ul class="shop_list">
	            <li>
	                <label class="label-checkbox item-content">
	                    <!-- Checked by default -->
	                    <input type="checkbox" name="my-checkbox" value="Books" checked="checked">
	                    <div class="item-media">
	                        <i class="icon icon-form-checkbox"></i>
	                    </div>
	                    <div class="item-inner list_shopcar">
	                        <div class="shop_pic">
	                        	<img src="../../../dist/local_pic.png"/>
	                        </div>
	                        <div class="shop_content">
	                        	<p class="car_title">呼吸套装礼盒呼吸套</p>
	                        	<p class="car_info">400g*10礼盒</p>
	                        	<p class="car_money"><span>¥186</span><span>¥356<span class="midline"></span></span></p>
	                        	<p class="clearfix cart_info">
	                        		<span class="cart_plus">-</span>
	                        		<span class="cart_num">{{shopnum}}</span>
	                        		<span class="cart_minus">+</span>
	                        	</p>
	                        </div>
	                    </div>
	                </label>
	            </li>
	            <li>
	                <label class="label-checkbox item-content">
	                    <!-- Checked by default -->
	                    <input type="checkbox" name="my-checkbox" value="Books" checked="checked">
	                    <div class="item-media">
	                        <i class="icon icon-form-checkbox"></i>
	                    </div>
	                    <div class="item-inner list_shopcar">
	                        <div class="shop_pic">
	                        	<img src="../../../dist/local_pic.png"/>
	                        </div>
	                        <div class="shop_content">
	                        	<p class="car_title">呼吸套装礼盒呼吸套装礼盒</p>
	                        	<p class="car_info">400g*10礼盒</p>
	                        	<p class="car_money"><span>¥186</span><span>¥356<span class="midline"></span></span></p>
	                        	<p class="clearfix cart_info">
	                        		<span class="cart_plus">-</span>
	                        		<span class="cart_num">{{shopnum}}</span>
	                        		<span class="cart_minus">+</span>
	                        	</p>
	                        </div>
	                    </div>
	                </label>
	            </li>
	            <li>
	                <label class="label-checkbox item-content">
	                    <!-- Checked by default -->
	                    <input type="checkbox" name="my-checkbox" value="Books" checked="checked">
	                    <div class="item-media">
	                        <i class="icon icon-form-checkbox"></i>
	                    </div>
	                    <div class="item-inner list_shopcar">
	                        <div class="shop_pic">
	                        	<img src="../../../dist/local_pic.png"/>
	                        </div>
	                        <div class="shop_content">
	                        	<p class="car_title">呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒</p>
	                        	<p class="car_info">400g*10礼盒</p>
	                        	<p class="car_money"><span>¥186</span><span>¥356<span class="midline"></span></span></p>
	                        	<p class="clearfix cart_info">
	                        		<span class="cart_plus">-</span>
	                        		<span class="cart_num">{{shopnum}}</span>
	                        		<span class="cart_minus">+</span>
	                        	</p>
	                        </div>
	                    </div>
	                </label>
	            </li>
	             <li>
	                <label class="label-checkbox item-content">
	                    <!-- Checked by default -->
	                    <input type="checkbox" name="my-checkbox" value="Books" checked="checked">
	                    <div class="item-media">
	                        <i class="icon icon-form-checkbox"></i>
	                    </div>
	                    <div class="item-inner list_shopcar">
	                        <div class="shop_pic">
	                        	<img src="../../../dist/local_pic.png"/>
	                        </div>
	                        <div class="shop_content">
	                        	<p class="car_title">呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒呼吸套装礼盒</p>
	                        	<p class="car_info">400g*10礼盒</p>
	                        	<p class="car_money"><span>¥186</span><span>¥356<span class="midline"></span></span></p>
	                        	<p class="clearfix cart_info">
	                        		<span class="cart_plus">-</span>
	                        		<span class="cart_num">{{shopnum}}</span>
	                        		<span class="cart_minus">+</span>
	                        	</p>
	                        </div>
	                    </div>
	                </label>
	            </li>
	        </ul>
       </div>
       <div class="shop_Settlement">
       	<span class="shop_One">合计&nbsp&nbsp&nbsp<span>¥256</span></span>
       	<span class="shop_Two">去结算</span>
       </div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				shopnum:0
			}
		}
	}
</script>

<style>
    @import url("shop.css");
</style>