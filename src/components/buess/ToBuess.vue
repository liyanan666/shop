<template>
    <div class="log_body">
        <mt-header title="成为商家">
            <router-link to="/login" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="tobus_content">
            <div class="log_regist">
                <span class="usr_name">店铺名称</span>
                <span class="usr_input"><input type="text" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">主营业务</span>
                <span class="usr_input"><input type="text" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">姓名</span>
                <span class="usr_input"><input type="text" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">性别</span>
                <span class="usr_input"><input type="text" id="tobuessex" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">出生日期</span>
                <span class="usr_input"><input type="text" id="beurn_date" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">手机号</span>
                <span class="usr_input"><input type="text" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">身份证</span>
                <span class="usr_input"><input type="text" id="" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">所在院校</span>
                <span class="usr_input"><input type="text" id="tobuesschool" placeholder=""></span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right:none ">店铺简介</span>
                <span class="usr_input"><textarea name="" id="" cols="30" rows="10"></textarea></span>

            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none">店铺Logo</span>
                <span class="usr_input">
                    <img class="upload" src="../../img/upload.png" alt="">
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none;line-height: normal;margin-top: 0.3rem;">身份证照片</span>
                <span class="usr_input">
                    <img class="upload" src="../../img/upload.png" alt="">
                    <img class="upload" src="../../img/upload.png" alt="">
                </span>
            </div>
            <div class="log_btn">确认注册</div>

        </div>


    </div>
</template>

<script>
    export default{
        data(){
            return {
                username:'',
                email:''
            }
        },
        mounted:function(){
            var _this = this;
            var pickerDevice = myApp.picker({
                input: '#tobuesschool',
                value:['郑州科技学院'],
                cols: [
                    {
                        textAlign: 'center',
                        values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学']
                    }
                ]
            });
            var pickersex = myApp.picker({
                input: '#tobuessex',
                value:['男'],
                cols: [
                    {
                        textAlign: 'center',
                        values: ['男', '女']
                    }
                ]
            });
            var beurn_date =  myApp.calendar({  //起保日期
                input: '#beurn_date',
                dateFormat: 'yyyy-mm-dd',
                dayNamesShort:['日', '一', '二', '三', '四', '五', '六'],
                monthNames:['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月' , '九月' , '十月', '十一月', '十二月'],
                onDayClick:function(p, dayContainer, year, month, day){

                    beurn_date.close();
                }
            });
        },
    }
</script>

<style scoped="scoped">
    @import url("../login/login.css");
    .usr_name{
        flex:1.2;
    }
    .mint-header{
        width: 100%;
        position: fixed;
        top:0;
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
    .usr_input .upload{
        width: 1.5rem;
        margin: 0.3rem 0.2rem;
    }
</style>