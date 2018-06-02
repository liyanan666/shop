<script>
	var host = '';
	var qiniu = {
		token:'',
		domain:''
	};
	if(location.host.indexOf('localhost')>=0){
		
		host = 'http://127.0.0.1:8070';
	}else{
		host = '';

	}
	var getQiniuToken = function(){
		var _this = this;
		$.ajax({
			type:"post",
			url:""+host+"/api/qiniutoken",
			async:true, 
			success:function(data){
				qiniu.token = data.token;
				qiniu.domain = data.domain;
			}
		});
		
	}
	getQiniuToken();
	export default {
	  host,
	  qiniu
	}
</script>