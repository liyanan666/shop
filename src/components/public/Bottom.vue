<template>
    <div>
        <mt-tabbar v-model="attr" :fixed="isfix">
            <mt-tab-item id="main">
                <img slot="icon" src="http://qiniu.bestpiaopiao.cn/shouye.png" >
                首页
            </mt-tab-item>

            <mt-tab-item id="shop">
                <img slot="icon" src="http://qiniu.bestpiaopiao.cn/gouwuche.png">
                购物车
            </mt-tab-item>
            <mt-tab-item id="class">
                <img slot="icon" src="http://qiniu.bestpiaopiao.cn/fenlei.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="person">
                <img slot="icon" src="http://qiniu.bestpiaopiao.cn/zhongxin.png">
                个人中心
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
    import {mapState,mapMutations} from 'vuex'

    export default {
        data() {
            return {
                attr:'',
                isfix:true,
            }
        },
        computed:{
            ...mapState([
               'notes'
            ])
        },
        mounted:function () {
          this.attr = this.attribute;
        },
        props:['attribute'],
        watch:{
            attr: function(newval,oldval) {
                if(newval == 'main'){
                    this.$router.push('/index');
                    this.addNote('main');
                }else if(newval == 'class'){
                    this.addNote('class');
                    this.$router.push('/classification')
                }else if(newval == 'shop'){
                    this.addNote('shop');
                    this.$router.push('/shop')
                }else if(newval == 'person'){
                    this.addNote('person');
                    this.$router.push('/personal')
                }
            }

        },
        methods: {
            ...mapMutations([
                'addNote'
            ])
        }
    }
</script>
<style>
</style>