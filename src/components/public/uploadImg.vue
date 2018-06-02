<template>
	<a href="javascript:;" class="a-upload">
		<img :src="headportrait"/>
	    <input @change="uploadfile" type="file" name="" id="" accept="image/*"  />
	</a>
</template>

<script>
	import * as qiniu from 'qiniu-js'
	export default{
		data(){
			return {
				headportrait:'http://qiniu.bestpiaopiao.cn/upload.png'
			}
		},
		props:['token','domain'],
		methods:{
			uploadfile:function(){
				var _this = this;
				var file = event.target.files[0]; 
				var key = Date.parse(new Date()) + "_" + Math.round(Math.random() * 100);
				var putExtra = {
					mimeType:["image/png", "image/jpeg", "image/gif"]
				};
				var config = {
					useCdnDomain: true,
				};
				var observable = qiniu.upload(file, key, this.token, putExtra, config)
				
				var fopArr = [];
				let imgLink = qiniu.pipeline(fopArr, key, this.domain);
				var subscription = observable.subscribe({
					error(err) {
						
					},
					complete(res) {
						_this.headportrait = 'http://'+imgLink;
						
					}
				}) // 上传开始
				
			}
		}
	}
</script>

<style>
</style>