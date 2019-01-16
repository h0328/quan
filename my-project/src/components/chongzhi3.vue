<template>
	<div class="dv">
		<div style="height:0.8rem;border-bottom:0.02rem solid #ccc;">
			<input id="ipt" type="text" v-model="num" ref="type" placeholder="请输入手机号码" />
			<!--<span style="font-size:0.24rem;color:#6aa27b;line-height:0.4rem;margin-bottom:0.1rem;">归属地:{{sd}}</span>-->
		</div>
		
		<p style="color:#9d9d9d;font-size:0.24rem;line-height:0.7rem;">充话费</p>
		<div class="hf">
				<div  v-for="item in arr" class="btn" @click='jine(item.id)' >
					<p style="color:#64b990;">{{item.money}}元</p>
					<div>售价：{{item.price}}元</div>
				</div>
		</div>
			
			<div class="ts">
				<h1>温馨提示:</h1>
				<p style="margin-top:0.1rem;">1.充值后30分钟话费未到账，请联系卷卷通客服</p>
				<!--<p style="margin-top:0.1rem;">2.未完成的订单，请到个人中心话费订单中处理；</p>
				<p style="margin-top:0.1rem;">3.如使用优惠券导致截图金额显示不一致，请备注说明。</p>-->
			</div>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
export default {
	  name: 'chongzhi3',
	  data () {
	    return {
			arr:[],
			num:'',
			order_id:'',
	    	money:'',
	    	openid:'',
	    	sd:''
	    }
	  },
	  methods:{	
//	  	changeCount:function(){
//		var shud=null
//		$.ajax({
//				                    url: "https://tcc.taobao.com/cc/json/mobile_tel_segment.htm",
//				                    type: "POST",
//				                    data:{tel:'18738526773'},
//				                    dataType: "jsonp", //指定服务器返回的数据类型
//				                    success: function (data) {
//				                     shud=data.carrier
//				                     	return shud
//				                    }	
//				                    
//				                })
//			this.sd=shud
//	   },
	  	jine:function(event){
	  		
	  		
	  		if(this.num == ''){
	  			Toast({
					  message: '请输入手机号',
					  position: 'bottom',
					  duration: 3000
					})
	  		}else{
//	  			axios.post('index/user/get_user_info.html',{ 		
//	
//				}).then(res => {
//					  if(res.data.result.data.mobile == ''){
//					  	Toast({
//						  message: '请绑定手机号',
//						  position: 'bottom',
//						  duration: 3000
//						})
//					  	
//					  	
//					  	this.$router.push('/shoujihao')
//					  }else{
					  	axios.post('index/Fare_Order/addFareOrder.html',{ 		
				  			mobile:this.num,
				  			config_id:event
						}).then(res => {
							
							this.order_id=res.data.result.data.order_id
							this.money=res.data.result.data.pay_price
							var op=localStorage.getItem("openid")	
							var than = this
							function jsApiCall(){
							        $.getJSON('http://qqt.ruimofang.com/index/pay/getJsapiPar.html',{money:than.money,order_id:than.order_id,openid:op,body:'话费充值'},function(data){
							            WeixinJSBridge.invoke('getBrandWCPayRequest',data.result.preResult, function(res){				            	
							                if(res.err_msg == "get_brand_wcpay_request:ok" ){
							                    WeixinJSBridge.log(res.err_msg);
												MessageBox('温馨提示','充值完成-预计15分钟到账').then(action => { 
													 if (action == 'confirm') {
														than.$router.go(0)
													}
												})
							                } 
							            }
							            );
							        });
							        
							 }
								if (typeof WeixinJSBridge == "undefined"){
							            if( document.addEventListener ){
							                document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
							            }else if (document.attachEvent){
							                document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
							                document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
							            }
							        }else{
							            jsApiCall()
							        }
	
						})
//					}
//				})
	  		}
	  		
	  		
	  	}
	  },
	  mounted(){	  
	  	axios.post('index/Fare_Config/getFareConfig.html',{ 		
	  			type:1
			}).then(res => {
				this.arr=res.data.result.list
//				console.log(this.arr)
			})	
	  }
	}
</script>

<style scoped="">

	#ipt{
		border:none;
		width:100%;
		height:0.7rem;
		font-size:0.36rem;
		/*border-radius:0.1rem;*/
	}
	#ipt::-webkit-input-placeholder {
         color: #ccc;
     }
	.hf{
		width:100%;
		overflow:hidden;
		/*display: flex;*/
		/*margin-top:0.2rem;*/
		/*margin-bottom: 0.2rem;*/
		/*justify-content:space-between;*/
	}
	.btn{
		width:2.1rem;
		text-align: center;		
		display: block;
		border:0.01rem solid #64b990;
		border-radius:0.05rem;
		float: left;
		background: #fff;
		font-size:0.2rem;
		color:#64b990;
		height:1rem;
		margin-bottom: 0.3rem;
		margin-right:1.5%;
		margin-left:1.5%;
	}
	.btn>p{
		font-size:0.3rem;
		margin-top:0.2rem;
		color:black;
	}
	.ts{
		margin-top:0.2rem;
		height:1.3rem;
	}
	.ts>h1{
		color:#ff0000;
		font-size:0.3rem;
	}
	.ts>p{
		font-size:0.26rem;
		color:#666;
	}
	.mint-msgbox{
		font-size: 0.32rem;
	}
	.confirmButton {
		font-size: 0.32rem;
	}
</style>