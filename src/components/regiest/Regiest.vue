<template>
    <div class="log_body">
        <mt-header title="注册">
            <router-link to="/login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div>
            <div class="log_regist">
                <span class="usr_name">用户名</span>
                <span class="usr_input"><input type="text" placeholder="请输入用户名"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">密码</span>
                <span class="usr_input"><input type="password" placeholder="请输入密码"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">确认密码</span>
                <span class="usr_input"><input type="password" placeholder="请输入密码"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">验证码</span>
                <span class="usr_input"><input type="text" placeholder="请输入验证码"></span>
                <span><img src="../../img/1.jpg" width="100" style="height: 1rem;position: absolute;right: 0;top: 0;" alt=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">所在学校</span>
                <span class="usr_input" @click="collageVisible=true"><input readonly type="text" v-model="school" placeholder=""></span>
            </div>
            <div class="log_btn">确认注册</div>

        </div>
        <mt-popup position="bottom" v-model="collageVisible" popup-transition="popup-fade">
            <div class="popupheader clearfix"><span class="fl" @click="collageVisible=false">取消</span><span class="fr" @click="savecollage">保存</span></div>
            <mt-picker :slots="collageslots" @change="onCollageChange"></mt-picker>
        </mt-popup>

    </div>
</template>

<script>
    import { MessageBox,Popup,Picker } from 'mint-ui';
    export default{
        data(){
            return {
                username:'',
                email:'',
                school:'郑州科技学院',
                modelschool:'',
                captcha:'',
                collageVisible:false,
                collageslots: [
                    {
                        values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学'],
                        textAlign: 'center'
                    }
                ],
            }
        },
        mounted:function(){

        },
        methods:{
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

<style scoped="scoped">
    @import url("../login/login.css");
    .usr_name{
        flex:1.2;
    }
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