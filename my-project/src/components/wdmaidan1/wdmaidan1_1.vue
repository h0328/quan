<template>
	<div class="d1">
		<ul class="list">  			
  				<li v-for="item in arr" >
  					<div style='width:100%;display:block;height:1.3rem;' @click="de(item.good_id)" class="list">
		  				<img :src='`http://qqt.ruimofang.com/uploads/supplier/${item.img}`' style="width:1.25rem;float:left;height:1.2rem;border:0.02rem solid #ccc;margin-right:0.46rem;"/>
		  				<div class="xiaq">
		  					<p>{{item.name}}</p>
		  					<p>{{item.supplier_name}}</p>
		  					<p>面值:<span style="text-decoration: line-through;">{{item.market_price}}</span></p>
		  				</div>
		  				<div class="xiaq1" >
		  					<p>售价:&yen;{{item.price}}</p>
		  					<span style="color:#ccc;">待支付</span>
		  					<button @click="zhif(item.order_no)" @click.stop>取消订单</button>
		  				</div>
	  				</div>
	  			</li>
  			
  			  			
  		</ul> 		
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
	export default {
	  name: 'wdmaidan1_1',
	  data () {
		return{
			arr:[],
			tid:'',
			price:'',
			order_no:''
		}
	  },
	  methods:{
	  	de(e){
	  		this.$router.push({path:'/detail', query: {id:e}})
	  	},
	  	zhif(q){
	  		console.log(q)
	  		axios.post('index/order/cancel_order.html',{ 		
	  			order_no:q
			}).then(res => {
				Toast({
					  message: res.data.message,
					  position: 'bottom',
					  duration: 3000
					})
				this.$router.go(0)
			})
//	  		{path:'/detail',query:{id:item.good_id}}
//	  		event.cancelBubble=true;
//	  		stopPropagation();
//	  		this.price=e
//	  		this.order_no=r
//	  		var than=this
//	  		var op=localStorage.getItem("openid")
////	  		console.log(than.price,than.order_no,op)
//			axios.post('http://qqt.ruimofang.com/index/user/get_user_info.html',{ 			
//				
//			}).then(res => {
//				  if(res.data.result.data.mobile == ''){
//				  	Toast({
//					  message: '请绑定手机号',
//					  position: 'bottom',
//					  duration: 3000
//					})
//				  	this.$router.push('/shoujihao')
//				  }else{
//				  	function jsApiCall(){
//				        $.getJSON('http://qqt.ruimofang.com/index/pay/getJsapiPar.html',{money:than.price,order_id:than.order_no,openid:op,body:'购买优惠券'},function(data){
//				            WeixinJSBridge.invoke('getBrandWCPayRequest',data.result.preResult, function(res){				            	
//				                if(res.err_msg == "get_brand_wcpay_request:ok" ){
//				                    WeixinJSBridge.log(res.err_msg);
////				                    alert(res.err_code+res.err_desc+res.err_msg);
////									alert('充值完成')
//									MessageBox('温馨提示','购买完成')
//									than.$router.go(0)
//				                } 
//				            }
//				            );
//				       });				        
//					 }
//					if (typeof WeixinJSBridge == "undefined"){
//				        if( document.addEventListener ){
//				            document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
//				        }else if (document.attachEvent){
//				            document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
//				            document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
//				        }
//				    }else{
//				        jsApiCall()
//				    }
//				    
//				  }
//			})	  
				
	  	}
	  },
	  mounted(){
	  	//我的买单列表（待支付）
			axios.post('index/user/user_buy_order.html',{ 		
	  			status:1
			}).then(res => {
				this.arr=res.data.result.list
//				console.log(res.data.result.list)
			})
		}
	}
</script>

<style scoped="">
		.list>li{
		width:calc(100%-0.68rem);
		background:#fff;
		padding:0.2rem 0.1rem 0.3rem 0.3rem;
		border-bottom:0.02rem solid #ccc;
		height:1.2rem;
		font-size:0.26rem;
	}
	.xiaq{
		float:left;
	}
	.xiaq>p{
		margin-bottom:0.12rem;
	}
	.xiaq p:nth-child(1){
		font-weight: 600;
		color:#333;
	}
	.xiaq p:nth-child(2){
		color:#737373;
	}
	.xiaq p:nth-child(3){
		color:#ff0000;
	}
	.xiaq1{
		width:1.52rem;
		float: right;
		text-align:center;
	}
	.xiaq1>p{
		color:#ff0000;
		font-weight:300;
	}
	.xiaq1>button{
		border:none;
		color:#fff;
		border-radius:0.08rem;
		min-width:1.1rem;
		height:0.4rem;
		background:#ff0000;
		margin-top:0.2rem;
	}
</style>