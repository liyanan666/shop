<template>
   <div>
       <mt-header title="个人资料">
           <router-link to="/personal" slot="left">
               <mt-button icon="back"></mt-button>
           </router-link>
       </mt-header>
       <div>
           <mt-cell title="头像" is-link @click="touxiang">
           </mt-cell>
           <mt-cell title="昵称" is-link>
           </mt-cell>
           <mt-cell title="性别" is-link>
           </mt-cell>
           <mt-cell title="简介" is-link>
           </mt-cell>
           <mt-cell title="所在院校" is-link>
           </mt-cell>
           <mt-cell title="邮箱地址" is-link>
           </mt-cell>
       </div>
       <div class="perinfobtn">保存</div>
   </div>
</template>

<script>

    export default {
        data() {
            return {
                link:true
            }
        },

        created:function(){

        },
        components:{
        },
        mounted:function(){

        },
        methods: {
            touxiang:function () {
                MessageBox.prompt('请输入姓名').then(({ value, action }) => {
                    console.log(value)
                });
            }
        }
    }
</script>

<style scoped="scoped">
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
</style>