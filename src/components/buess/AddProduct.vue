<template>
    <div class="log_body">
        <mt-header title="添加商品">
            <router-link to="/buessDetail" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="tobus_content">
            <div class="log_regist">
                <span class="usr_name">商品名称</span>
                <span class="usr_input"><input type="text" v-model="data.productname"></span>
            </div>
            
            <div class="log_regist">
                <span class="usr_name">商品价格</span>
                <span class="usr_input">
                    <input type="number" v-model="data.productprice" style="width:2rem;">
                    <span style="font-size: .3rem;vertical-align: middle">元</span>
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name">促销价格</span>
                <span class="usr_input">
                    <input type="number" v-model="data.productPromotionprice" style="width:2rem;">
                    <span style="font-size: .3rem;vertical-align: middle">元</span>
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name noneline">商品分类</span>
                <span class="usr_input"><input @click="fenleiVisible=true" v-model="data.productclassification" readonly type="text" id="beurn_date" placeholder="请选择分类"></span>
            </div>

            <div class="log_regist">
                <span class="usr_name" style="border-right: none">商品图片</span>
                <span class="usr_input">
                    <a href="javascript:;" class="a-upload">
						<img :src="data.productimg"/>
					    <input @change="uploadimg(1)" type="file" name="" id="" accept="image/*"  />
					</a>
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none;line-height: normal;margin-top: 0.3rem;">详情图片</span>
                <span class="usr_input">
                    <a href="javascript:;" class="a-upload" v-for="(item,index) in data.productdetailimg">
						<img :src="data.productdetailimg[index]"/>
					    <input @change="uploadimg(2)" type="file" name="" id="" accept="image/*"  />
					</a>
					
                </span>
            </div>
            <div class="log_regist">
                <span class="usr_name" style="border-right: none">商品描述</span>
                <span class="usr_input"><textarea v-model="data.priductintroduct" name="" id="" cols="30" rows="10"></textarea></span>
            </div>
            <div class="log_btn" @click="postProduct">确认发布</div>

        </div>
        <mt-popup position="bottom" v-model="fenleiVisible" popup-transition="popup-fade">
            <div class="popupheader clearfix"><span class="fl" @click="fenleiVisible=false">取消</span><span class="fr" @click="fenleiVisible=false">保存</span></div>
            <mt-picker :slots="fenlei" @change="onProductChange"></mt-picker>
        </mt-popup>

    </div>
</template>

<script>
	import { MessageBox,Popup,Picker } from 'mint-ui';
    export default{
        data(){
            return {
            	userinfo:{},
                username:'',
                email:'',
                fenleiVisible:false,
                baoyouVisible:false,
                data:{
                	productname:'',
				    productprice:'',
				    productPromotionprice:'',
				    productclassification:'',
				    productimg:'../../src/img/upload.png',
				    productdetailimg:['../../src/img/upload.png'],
				    priductintroduct:''
                },
                fenlei: [
                    {
                        values: ['服饰', '食品', '日用百货', '二手', '其他'],
                        textAlign: 'center'
                    }
                ],

            }
        },
        mounted:function(){
			this.userinfo = JSON.parse(localStorage.getItem("userinfo")) || {};
        },
        methods:{
            onProductChange(picker, values){
            	this.data.productclassification = values.toString();
            },
            postProduct(){
				if(this.data.productname=='' || this.data.productprice==''|| this.data.productPromotionprice==''|| this.data.productclassification==''|| this.data.productimg=='../../src/img/upload.png'||this.data.priductintroduct=='' || this.data.productdetailimg[0]=='../../src/img/upload.png' ){
					MessageBox("提示","请完善信息");
					return;
				}
				var productdata = JSON.stringify(this.data);
				var id = this.userinfo._id;
				$.ajax({
					type:"post",
					url:""+this.GLOBAL.host+"/uploadimg",
					async:true,
					data:{
						id:id,
						productdata:productdata
					},
					success:function(data){
						
					}
				});
            },
            uploadimg(index){
            	console.log(index);
        		var _this = this;
            	var file = event.target.files[0];  
            	if (window.FileReader) {  
		            var reader = new FileReader();  
		            reader.readAsDataURL(file);  
		            //监听文件读取结束后事件  
		            reader.onloadend = function (e) {
		            	var formData = new FormData();
						formData.append('file',file);
		            	console.log(formData)
						$.ajax({ 
							url:""+_this.GLOBAL.host+"/uploadimg",
							type : 'POST', 
							data : formData,
							// 告诉jQuery不要去处理发送的数据
							processData : false, 
							// 告诉jQuery不要去设置Content-Type请求头
							contentType : false,
							success : function(data) { 
								switch (index){
									case 1:
										_this.data.productimg = data.url;
										break;
									case 2:
										if(_this.data.productdetailimg[0] == '../../src/img/upload.png'){
											_this.data.productdetailimg[0] = data.url;
										}else{
											_this.data.productdetailimg.push(data.url);
										}
										break;
									default:
										break;
								}
							}, 
							error : function(responseStr) { 
								console.log("error");
							} 
						});
		            };  
		        }  
            }
        }
    }
</script>

<style scoped="scoped">
    @import "../login/login.css";
    .usr_name{
        flex:1.2;
    }
    .mint-header{
        width: 100%;
        position: fixed;
        top:0;
        z-index: 100;
    }
    .tobus_content{
        margin-top: 40px;
    }
    .usr_input textarea{
        height:1.5rem;
        border:1px solid #e9e9e9;
        margin: 0.2rem 0;
        font-size: 0.3rem;
    }
    .noneline{
        border-right: none;
    }
    .usr_input .upload{
        width: 1.5rem;
        margin: 0.3rem 0.2rem;
    }
</style>