<template>
   <div>
       <mt-header title="个人资料">
           <router-link to="/personal" slot="left">
               <mt-button icon="back"></mt-button>
           </router-link>
       </mt-header>
       <div>
           <div @click="touxiang">
               <mt-cell title="头像" is-link >
               </mt-cell>
           </div>
           <div>
               <mt-cell title="用户名" is-link :value="name">
               </mt-cell>
           </div>
           <div @click="changename">
               <mt-cell title="昵称" is-link :value="nickname">
               </mt-cell>
           </div>
           <div @click="sexVisible=true">
               <mt-cell title="性别" is-link :value="sex">
               </mt-cell>
           </div>
           <div @click="introduction">
               <mt-cell title="简介" is-link :value="introduce">
               </mt-cell>
           </div>
           <div @click="collageVisible=true">
               <mt-cell title="所在院校" is-link :value="collage">
               </mt-cell>
           </div>
           <div @click="email">
               <mt-cell title="邮箱地址" is-link :value="emailval">
               </mt-cell>
           </div>

       </div>
       <div class="perinfobtn">保存</div>
       <mt-popup position="bottom" v-model="sexVisible" popup-transition="popup-fade">
           <div class="popupheader clearfix"><span class="fl" @click="sexVisible=false">取消</span><span class="fr" @click="savesex">保存</span></div>
           <mt-picker :slots="sexslots" @change="onsexChange"></mt-picker>
       </mt-popup>
       <mt-popup position="bottom" v-model="collageVisible" popup-transition="popup-fade">
           <div class="popupheader clearfix"><span class="fl" @click="collageVisible=false">取消</span><span class="fr" @click="savecollage">保存</span></div>
           <mt-picker :slots="collageslots" @change="onCollageChange"></mt-picker>
       </mt-popup>

   </div>
</template>

<script>
    import { MessageBox,Popup,Picker } from 'mint-ui';
    export default {
        data() {
            return {
                sexVisible:false,
                collageVisible:false,
                name:'',
                nickname:'',
                modelnickname:'',
                sex:'男',
                pickersex:'',
                collage:'',
                pickercollage:'',
                modelemailval:'',
                emailval:'',
                introduce:'',
                modelintroduce:'',
                sexslots: [
                    {
                        values: ['男', '女'],
                        textAlign: 'center'
                    }
                ],
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
        components:{
        },
        mounted:function(){

        },
        methods: {
            changename(){
                MessageBox.prompt('', {
                    message: '请输入昵称？',
                    showInput:true,
                    inputValue:this.modelname
                }).then(({ value, action }) => {
                    if(value.length>9){
                        MessageBox('提示', '超出字符限制，请重新填写');
                        return;
                    }
                    this.modelnickname = value;
                    this.nickname = value;
                }).catch(err => {

                });
            },
            onsexChange(picker, values) {
                this.pickersex = values.toString();
            },
            onCollageChange(picker, values){
                this.pickercollage = values.toString();
            },
            savesex:function () {
                this.sex = this.pickersex;
                this.sexVisible = false;
            },
            savecollage:function () {
                this.collage = this.pickercollage;
                this.collageVisible = false;
            },
            introduction:function () {
                MessageBox.prompt('', {
                    message: '请输入简介？',
                    showInput:true,
                    inputValue:this.modelintroduce
                }).then(({ value, action }) => {
                    if (action == 'confirm') {
                        if(value.length>16){
                            MessageBox('提示', '超出字符限制，请重新填写');
                            return;
                        }
                        this.modelintroduce = value;
                        this.introduce = value;
                    }
                }).catch(err => {

                });

            },
            email:function () {
                MessageBox.prompt('', {
                    message: '请输入邮箱？',
                    showInput:true,
                    inputValue:this.modelemailval
                }).then(({ value, action }) => {
                    if (action == 'confirm') {
                        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                        if(!myreg.test(value))//对输入的值进行判断
                        {
                            MessageBox('提示', '邮箱格式错误');
                            return;
                        }
                        this.modelemailval = value;
                        this.emailval = value;
                    }
                }).catch(err => {

                });

            },
            touxiang:function () {

            }
        }
    }
</script>

<style>
    .perinfobtn{
        width: 80%;
        height:1rem;
        background: #D90A00;
        margin: 1rem auto;
        border-radius: 8px;
        color: #fff;
        text-align: center;
        line-height: 1rem;
        font-size: 18px;
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
    .mint-cell:last-child{
        background-position: inherit;
    }
    .mint-popup-bottom{
        width: 100%;
    }
</style>