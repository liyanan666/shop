<template>
    <div>

        <maincontent></maincontent>
        <bottomnav :attribute="'main'"></bottomnav>

    </div>
</template>
<script>
	import maincontent from '../Main/Main.vue'
	import bottomnav from '../public/Bottom.vue'
    export default {
        data() {
            return {
                selected:"tab-container1",
                isfix:true,
                swipeable:true
            }
        },

        created:function(){
        	
        },
        components:{
        	maincontent,
            bottomnav
        },
        mounted:function(){
        },
        methods: {
			
        }
    }
</script>
<style scoped>
	@import url("index.css");
</style>