<template>
    <div class="log_body">
        <mt-header title="添加商品">
            <router-link to="/personal" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="tobus_content">
            <div class="log_regist">
                <span class="usr_name">商品名称</span>
                <span class="usr_input"><input type="text" placeholder=""></span>
            </div>
            
            <div class="log_regist">
                <span class="usr_name">商品价格</span>
                <span class="usr_input">
                    <input type="number" placeholder="" style="width:2rem;">
                    <span style="font-size: .3rem;vertical-align: middle">元</span>
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name">促销价格</span>
                <span class="usr_input">
                    <input type="number" placeholder="" style="width:2rem;">
                    <span style="font-size: .3rem;vertical-align: middle">元</span>
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name noneline">商品分类</span>
                <span class="usr_input"><input @click="fenleiVisible=true" readonly type="text" id="beurn_date" placeholder="请选择分类"></span>
            </div>

            <div class="log_regist">
                <span class="usr_name" style="border-right: none">商品图片</span>
                <span class="usr_input">
                    <img class="upload" src="../../img/upload.png" alt="">
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none;line-height: normal;margin-top: 0.3rem;">详情图片</span>
                <span class="usr_input">
                    <img class="upload" src="../../img/upload.png" alt="">
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none">商品描述</span>
                <span class="usr_input"><textarea name="" id="" cols="30" rows="10"></textarea></span>
            </div>
            <div class="log_btn">确认发布</div>

        </div>
        <mt-popup position="bottom" v-model="fenleiVisible" popup-transition="popup-fade">
            <div class="popupheader clearfix"><span class="fl" @click="fenleiVisible=false">取消</span><span class="fr" @click="savecollage">保存</span></div>
            <mt-picker :slots="fenlei" @change="onCollageChange"></mt-picker>
        </mt-popup>

    </div>
</template>

<script>
    export default{
        data(){
            return {
                username:'',
                email:'',
                fenleiVisible:false,
                baoyouVisible:false,
                fenlei: [
                    {
                        values: ['服饰', '食品', '日用百货', '二手', '其他'],
                        textAlign: 'center'
                    }
                ],

            }
        },
        mounted:function(){

        },
        methods:{
            selectfenlei(){

            },
            onCollageChange(){

            },
            savecollage(){

            }
        }
    }
</script>

<style scoped="scoped">
    @import "../login/login.css";
    .usr_name{
        flex:1.2;
    }
    .mint-header{
        width: 100%;
        position: fixed;
        top:0;
        z-index: 100;
    }
    .tobus_content{
        margin-top: 40px;
    }
    .usr_input textarea{
        height:1.5rem;
        border:1px solid #e9e9e9;
        margin: 0.2rem 0;
        font-size: 0.3rem;
    }
    .noneline{
        border-right: none;
    }
    .usr_input .upload{
        width: 1.5rem;
        margin: 0.3rem 0.2rem;
    }
</style>