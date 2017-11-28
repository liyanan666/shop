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
                <span class="usr_input"><input type="text" placeholder="请输入密码"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">确认密码</span>
                <span class="usr_input"><input type="text" placeholder="请输入密码"></span>
            </div>
            <div class="log_regist">
                <span class="usr_name">所在学校</span>
                <span class="usr_input"><input type="text" id="regiest" placeholder=""></span>
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
            var pickerDevice = myApp.picker({
                input: '#regiest',
                value:['郑州科技学院'],
                cols: [
                    {
                        textAlign: 'center',
                        values: ['郑州科技学院', '黄河科技学院', '郑州大学', '财经政法大学', '上海交通大学']
                    }
                ]
            });
        },
    }
</script>

<style scoped="scoped">
    @import url("../login/login.css");
    .usr_name{
        flex:1.2;
    }
</style>