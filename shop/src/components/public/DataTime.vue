<template>
	<div>
		<mt-popup position="bottom" :value="timeshow" popup-transition="popup-fade">
            <div class="popupheader clearfix"><span class="fl" @click="channel">取消</span><span class="fr" @click="savetime">保存</span></div>
            <mt-picker :slots="timelots" @change="onTimeChange"></mt-picker>
        </mt-popup>
	</div>
</template>

<script>
	import { MessageBox,Popup,Picker } from 'mint-ui';
    export default{
        data(){
            return {
            	modeltime:'',
                timelots: [
                    {
                    	flex: 1,
                        values: ['1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'],
                        textAlign: 'right',
                        className: 'slot1',
                    },
                    {
                    	flex: 1,
                        values: ['01','02','03','04','05','06','07','08','09','10','11','12',],
                        textAlign: 'center',
                        className: 'slot2',
                    },
                    {
                    	flex: 1,
                        values: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
                        textAlign: 'left',
                        className: 'slot3',
                    },
                ],
            }
        },
        props:['showtime'],
        computed:{
        	timeshow:function(){
        		return this.showtime;
        	}
        },
        methods:{
            onTimeChange(picker, values){
                this.modeltime = values.join('-');
            },
            savetime(){
                this.$emit('operationtime',this.modeltime);
            },
            channel(){
            	this.$emit('operationtime',false);
            }
        }
    }
</script>

<style>
</style>