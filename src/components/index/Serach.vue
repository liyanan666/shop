<template>
    <div>
        <header>
            <div class="serach">
                <span class="title">宝贝</span>
                <input type="text" placeholder="请输入搜索内容">
                <img class="serachimg" src="http://qiniu.bestpiaopiao.cn/serach.png" alt="" width="20px">

            </div>
        </header>
        <p style="padding: .2rem">大家都在搜</p>
        <ul class="search_list clearfix">
            <li>矿泉水</li>
            <li>方便面</li>
            <li>零食</li>
            <li>衬衣</li>
            <li>T-恤</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
        methods: {}
    }
</script>
<style scoped>
    header{
        background: #fff;
        padding: .2rem;
    }
    .serach{
        height:.6rem;
        background: #f5f5f5;
    }
    .serach .serachimg{
        vertical-align: middle;
        float: right;
        margin-top: .1rem;
        margin-right: .1rem;
    }
    .serach .title{
        width: 1rem;
        line-height: .6rem;
        text-align: center;
        display: inline-block;
    }
    .serach input{
        background: #f5f5f5;
        border: none;
        height:.5rem;
        vertical-align: baseline;
    }
    .search_list {
        padding: .3rem;
        background: #fff;

    }

    .search_list li {
        padding: .1rem .2rem;
        border: 1px solid #e1e1e1;
        float: left;
        font-size: .3rem;
        border-radius: 10px;
        margin-right: .2rem;
        margin-bottom: .2rem;
    }
</style>