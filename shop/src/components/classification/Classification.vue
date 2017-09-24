<template>
	<div>
		<div class="index_header">
			<span>分类</span>
		</div>
		<ul class="class_list">
			<li class="clearfix">
				<span class="fl class_icon" id="">
					<img src="../../img/class_icon.jpg"/>
				</span>
				<div class="fl class_text">
					<p>食物</p>
					<p>零食,饮料,果汁,便当</p>
				</div>
			</li>
			<li class="clearfix">
				<span class="fl class_icon" id="">
					<img src="../../img/class_icon.jpg"/>
				</span>
				<div class="fl class_text">
					<p>食物</p>
					<p>零食,饮料,果汁,便当</p>
				</div>
			</li>
			<li class="clearfix">
				<span class="fl class_icon" id="">
					<img src="../../img/class_icon.jpg"/>
				</span>
				<div class="fl class_text">
					<p>食物</p>
					<p>零食,饮料,果汁,便当</p>
				</div>
			</li>
			<li class="clearfix">
				<span class="fl class_icon" id="">
					<img src="../../img/class_icon.jpg"/>
				</span>
				<div class="fl class_text">
					<p>食物</p>
					<p>零食,饮料,果汁,便当</p>
				</div>
			</li>
			<li class="clearfix">
				<span class="fl class_icon" id="">
					<img src="../../img/class_icon.jpg"/>
				</span>
				<div class="fl class_text">
					<p>食物</p>
					<p>零食,饮料,果汁,便当</p>
				</div>
			</li>
		</ul>
        <bottomnav :attribute="'class'"></bottomnav>
	</div>
</template>

<script>
    import bottomnav from '../public/Bottom.vue'
    export default {
        data() {
            return {

            }
        },

        created:function(){

        },
        components:{
            bottomnav
        },
        mounted:function(){

        },
        methods: {

        }
    }
</script>

<style scoped="scoped">
	@import url("class.css");
</style>