<script type="text/javascript">
	var host = '';
	if(location.host.indexOf('localhost')>=0 || location.host.indexOf('10.0.0')>=0 || location.host.indexOf('127.0.0.1')>=0){
		
		host = 'http://10.0.0.12:3000';
	}else{
		host = '';

	}
	export default {
	  host
	}
</script>