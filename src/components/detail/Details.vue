<template>
    <div>
        <div class="detail_img">
            <mt-swipe :auto="4000">
                <mt-swipe-item>
                    <img width="100%" height="100%" src="//img.alicdn.com/imgextra/i4/1910146537/TB2EE02g22H8KJjy1zkXXXr7pXa_!!1910146537.jpg_760x760Q50s50.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img width="100%" height="100%" src="//img.alicdn.com/imgextra/i4/1910146537/TB2EE02g22H8KJjy1zkXXXr7pXa_!!1910146537.jpg_760x760Q50s50.jpg" alt="" />
                </mt-swipe-item>
                <mt-swipe-item>
                    <img width="100%" height="100%" src="//img.alicdn.com/imgextra/i4/1910146537/TB2EE02g22H8KJjy1zkXXXr7pXa_!!1910146537.jpg_760x760Q50s50.jpg" alt="" />
                </mt-swipe-item>
            </mt-swipe>
            <span class="detail_back" @click="back"><img src="../../img/back.png" alt=""></span>
        </div>
        <div class="detail_info">
            <p class="info_title">
                <span>新疆阿克苏冰糖心苹果1.5kg果径80mm以上</span>
            </p>
            <p>
                <span class="info_money">￥23.8</span>
                <span class="info_text">卖家促销</span>
            </p>
            <p class="clearfix info_active">
                <span class="info_xiaoliang">月销量 70498件</span>
                <span class="info_address">上海交通大学</span>
            </p>
        </div>
        <div class="detail_commond">
            <p class="commont_title">商品评价（15698）</p>
            <div class="commont_tag clearfix">
                <span>口感不错</span>
                <span>新鲜</span>
                <span>味道不错</span>
                <span>口感不错</span>
                <span>新鲜</span>
                <span>味道不错</span>
            </div>
            <ul class="commont_content">
                <li>
                    <p class="content_title">
                        <img width="30px" src="//gtms01.alicdn.com/tps/i1/TB1YYDCJpXXXXbIXXXXUAkPJpXX-90-90.png" alt="">
                        <span class="content_nickname">用户昵称</span>
                    </p>
                    <p class="content_content">
                        梨很水很脆，实物非常新鲜，可能是冬天不容易腐坏；柚子不是很红但是甜的，也很新鲜；橙子非常甜，个头不大，手剥即食；桂圆很甜肉厚新鲜，觉得挺值；小绿梨绵脆很甜口感好；龙利鱼挺嫩的；虾仁好吃，爽脆鲜嫩，没有虾线；苹果很脆甜，是冰糖心，很新鲜，刚拆箱的时候摸着冰一样凉。
                    </p>
                    <p class="content_data">2017—08-12</p>
                </li>
                <li>
                    <p class="content_title">
                        <img width="30px" src="//gtms01.alicdn.com/tps/i1/TB1YYDCJpXXXXbIXXXXUAkPJpXX-90-90.png" alt="">
                        <span class="content_nickname">用户昵称</span>
                    </p>
                    <p class="content_content">
                        梨很水很脆，实物非常新鲜，可能是冬天不容易腐坏；柚子不是很红但是甜的，也很新鲜；橙子非常甜，个头不大，手剥即食；桂圆很甜肉厚新鲜，觉得挺值；小绿梨绵脆很甜口感好；龙利鱼挺嫩的；虾仁好吃，爽脆鲜嫩，没有虾线；苹果很脆甜，是冰糖心，很新鲜，刚拆箱的时候摸着冰一样凉。
                    </p>
                    <p class="content_data">2017—08-12</p>
                </li>
            </ul>
            <div class="commont_findmore"><span>查看更多评价</span></div>
        </div>
        <div class="shop">
           <div class="clearfix">
                <span class="shop_icon">
                    <img src="//img.alicdn.com/tps/i1/TB1ju5eKXXXXXXGXFXXTCU0QpXX-300-300.jpg_120x120.jpg" alt="">
                </span>
                   <span class="shop_info">
                   <span class="shp_name">天猫超市旗舰店</span>
                   <p class="fen">店铺评分<span>4.3</span>分</p>
               </span>
           </div>
            <div class="into_shop">
                <span class="into_shop_icon">
                    <img src="../../img/dianpu.png" alt="">
                </span>
                <span>进入店铺</span>
            </div>
        </div>
        <div class="viewmore">
            <p class="commont_title">看了又看</p>
            <ul class="morelist">
                <li>
                    <div class="list_pic"><img src="//img.alicdn.com/bao/uploaded/i1/1910146537/TB1yOgLhb_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg_220x10000Q50s50.jpg_.webp" alt=""></div>
                    <p class="list_title">
                        山东栖霞优质红富士8个 200g以上苹果 新鲜水果
                    </p>
                    <div class="list_moenys">
                        <span class="price">¥25.8</span>
                    </div>
                </li>
                <li>
                    <div class="list_pic"><img src="//img.alicdn.com/bao/uploaded/i1/1910146537/TB1yOgLhb_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg_220x10000Q50s50.jpg_.webp" alt=""></div>
                    <p class="list_title">
                        山东栖霞优质红富士8个 200g以上苹果 新鲜水果
                    </p>
                    <div class="list_moenys">
                        <span class="price">¥25.8</span>
                    </div>
                </li>
                <li>
                    <div class="list_pic"><img src="//img.alicdn.com/bao/uploaded/i1/1910146537/TB1yOgLhb_I8KJjy1XaXXbsxpXa_!!0-item_pic.jpg_220x10000Q50s50.jpg_.webp" alt=""></div>
                    <p class="list_title">
                        山东栖霞优质红富士8个 200g以上苹果 新鲜水果
                    </p>
                    <div class="list_moenys">
                        <span class="price">¥25.8</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="product_details">
            <p class="title">图文详情</p>
        </div>
        <ul class="pay">
            <li>
                <img width="30px" src="../../img/dianpu.png" alt="">
                <p>进店</p>
            </li>
            <li>
                <img width="30px" src="../../img/shoucang1.png" alt="">
                <p>收藏</p>
            </li>
            <li class="addshopcar">
                加入购物车
            </li>
        </ul>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'mint-ui';
    export default {
        data(){
            return{

            }
        },
        methods:{
            back(){
                window.history.back();
            }
        }
    }
</script>
<style scoped>
    @import "details.css";
</style>