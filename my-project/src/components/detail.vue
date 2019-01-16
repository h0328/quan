<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
	  		<p>{{name}}</p>
	  	</header>
	  	
	  	<section>
	  		<div class="de1">
	  			<img :src="`http://qqt.ruimofang.com/uploads/supplier/${this.img}`" style="width:1.25rem;float:left;height:1.2rem;border:0.02rem solid #ccc;margin-right:0.46rem;margin-top:0.26rem;"/>
  				<div class="xiaq">
  					<p>{{name}}</p>
  					<p>面值&nbsp;&nbsp;&nbsp;&yen;<span style="text-decoration: line-through;">{{opce}}</span></p>
  					<p>售价&nbsp;&nbsp;&nbsp;&yen;<span class="zt">{{price}}</span></p>
  					<!--<p class="zt">购买一小时后自动确定</p>
  					<p>已成交<span>7689</span>&nbsp;&nbsp;在售<span>100</span>个</p>-->
  				</div>
	  		</div>
	  		<div class="de2">
	  			<h2 class="de-bt"><span class="iconfont icon-wenxintishi"></span>  使用说明</h2>
	  			<p style="color:#333;">{{explain}}</p>
	  		</div>
	  		<div class="de3" v-if=is1 >
	  			<p style="background:url(static/-5.jpg) no-repeat center center/cover;"></p>
	  			<span style="font-size:0.3rem;">二维码与兑换码</span>
	  			<div>
	  				兑换码：{{dhm}}
	  			</div>
	  			<img :src=code_url />
	  			<!--<div :style="background: url({{code_url}}) no-repeat center center/cover;"></div>-->
	  		</div>
	  		<!--<div class="de3">
	  			<h2 class="de-bt"><span class="iconfont icon-xiangqing"></span>  商品详情</h2>
	  			<p>商品名称价值</p>
	  			<h2 class="de-bt"><span class="iconfont icon-shuoming"></span>  使用说明</h2>
	  			<p>使用时出示条形码或二维码</p>
	  			<h2 class="de-bt"><span class="iconfont icon-mendian-"></span>  使用门店</h2>
	  			<p>店家名称</p>
	  		</div>-->
	  		<div class="dibu" v-if=is >
	  			<div style="margin-left:0.64rem;float:left;">合计：<span style="color:#FF0000;">&yen;</span><span style="color:#FF0000;">{{price}}</span></div>
	  			<!--<div style="float:left;margin-left:1.3rem;margin-top:0.32rem;">
	  				<div class="sc" @click="jian">-</div>
	  				<input class="ipt1" type="text" :value='val' />
	  				<div class="sc" @click="jia">+</div>
	  			</div>-->
	  			<div class="buy"  @click="buy">
	  				立即购买
	  			</div>
	  		</div>
	  	</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
	export default {	
		name: 'detail',
		data () {
		    return {
				val:1,
				name:'',
				opce:'',
				price:'',
				explain:'',
				good_id:'',
				order_no:'',
				img:'',
				is:true,
				is1:false,
				dhm:'',
				code_url:''
		    }
		  },
		  methods:{
		  	back(){
		  		this.$router.go(-1)
		  	},
		  	jian(){
		  		
		  		if (this.val<=1) {
		  			this.val=1
		  		}else{
		  			this.val--
		  		}
		  	},
		  	jia(){
		  		this.val++
		  	},
		  	buy(){
		  		axios.post('index/user/get_user_info.html',{ 			
				
				}).then(res => {
				  if(res.data.result.data.mobile == ''){
				  	Toast({
					  message: '请绑定手机号',
					  position: 'bottom',
					  duration: 3000
					})
				  	this.$router.push('/shoujihao')
				  }else{
				  	axios.post('index/Order/buy_order.html',{ 		
		  				type_id:2,
		  				good_id:this.good_id,
		  				price:this.price
					}).then(res => {
	//				  	console.log(res.data.result.data)
						this.order_no=res.data.result.data.order_no
						this.price=res.data.result.data.price
			  		var than = this
			  		var op=localStorage.getItem("openid")
					function jsApiCall(){
					        $.getJSON('http://qqt.ruimofang.com/index/pay/getJsapiPar.html',{money:than.price,order_id:than.order_no,openid:op,body:'购买优惠券'},function(data){
					            WeixinJSBridge.invoke('getBrandWCPayRequest',data.result.preResult, function(res){				            	
					                if(res.err_msg == "get_brand_wcpay_request:ok" ){
					                    WeixinJSBridge.log(res.err_msg);
	//				                    alert(res.err_code+res.err_desc+res.err_msg);
	//									alert('充值完成')
										MessageBox('温馨提示','购买完成')
										than.$router.go(-1)
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
//					    console.log(1)
					})
				  }
				})
		  		
		  	}
			
		  },
		mounted() {
		//获取用户信息
		var r=window.location.href
		r = r.substring(r.indexOf("="),r.length).substr(1);
		var t=r.split('#')[0]
//		console.log(this.$route.query.id)
		if(this.$route.query.id !=''){
//			console.log(this.$route.query.id)
			axios.post('index/Coupon_Goods/goods_details.html',{ 		
	  			id:this.$route.query.id
			}).then(res => {
				
				if (this.$route.query.st == 2) {
					this.is=false
					this.is1=true
				}else{
					this.is=true
					this.is1=false
				}
//				  console.log(res.data.result)
				this.good_id=res.data.result.data.id
				this.name=res.data.result.data.name
				this.opce=res.data.result.data.market_price
				this.price=res.data.result.data.price
				this.explain=res.data.result.data.explain
				this.img=res.data.result.data.img
				this.dhm=res.data.result.data.code
				this.code_url=res.data.result.data.code_url
			})
		}else if(t !='') {
//			console.log(t)
			axios.post('index/Coupon_Goods/goods_details.html',{ 		
	  			id:t
			}).then(res => {
				if (res.data.result.data.status == 2) {
					this.is=false
					this.is1=true
				}else{
					this.is=true
					this.is1=false
				}
//				  console.log(res.data.result)
				this.name=res.data.result.data.name
				this.opce=res.data.result.data.market_price
				this.price=res.data.result.data.price
				this.img=res.data.result.data.img
				this.dhm=res.data.result.data.code
				this.code_url=res.data.result.data.code_url
				
			})
		}
		
			
						
		}
		  
	}
</script>

<style scoped="">
	header{
		width:100%;
		height:0.88rem;
		background:#fff;
		text-align:center;
		line-height:0.88rem;
		font-size:0.36rem;
		border-bottom:0.02rem solid #bebebe;
		position:relative;
	}
	header>span{
		display: block;
		width:0.88rem;
		height:0.88rem;
		font-size:0.34rem;
		position:absolute;
		top:calc(50% - 0.43rem);
		left:0rem;
	}
	
	section{
		flex:1;
		width:100%;
		height: calc(100vh - 1rem);
		background:#ededed;
		padding-top:0.1rem;
		position:relative;
	}
	.zt{
		color:#FF0000;
	}
	.de1{
		width:calc(100% - 0.48rem);
		background:#fff;
		height:2.34rem;
		padding-top:0.3rem;
		padding-left:0.48rem;
		margin-bottom:0.2rem;
	}
	.xiaq{
		float:left;
	}
	.xiaq>p{
		margin-bottom:0.04rem;
		font-size:0.26rem;
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
	.xiaq p:nth-child(5){
		color:#666;
	}
	.de2{
		width:calc(100% - 0.4rem);
		height:1.65rem;
		background:#fff;
		padding:0.24rem 0.2rem;
		/*margin-bottom:0.2rem;*/
	}
	.de-bt{
		font-size:0.3rem;
		font-weight:400;
		margin-bottom:0.1rem;
	}
	.de-bt>span{
		font-size:0.28rem;
		color:red;
	}
	.de2>p{
		margin-left:0.35rem;
		font-size:0.26rem;
		line-height:0.4rem;
	}
	.de3{
		width:calc(100% - 0.4rem);
		height:3.86rem;
		background:#fff;
		padding:0.24rem 0.2rem;
	}
	.de3>p{
		float:left;
		width:0.3rem;
		height:0.3rem;
		display:inline-block;
		margin-top:0.08rem;
		margin-right:0.1rem;
	}
	.de3>div{
		width:60%;
		height:0.5rem;
		margin-top:0.1rem;
		line-height:0.5rem;
		text-indent:0.2rem;
		margin:0.1rem auto;
		border:0.02rem solid #ccc;
		border-radius:0.14rem;
		color:#999;
	}
	.de3>img{
		
		width:40%;
		margin:0.2rem auto;
		height:2.5rem;
		border:0.02rem solid #ccc;
	}
	.dibu{
		width:100%;
		height:1rem;
		background:#fff;
		position:fixed;
		line-height:1rem;
		bottom:0;
		font-size:0.3rem;
	}
	.ipt1{
		width:0.7rem;
		height:0.34rem;
		border:none;
		background:#ebebeb;
		float:left;
		margin:0 0.1rem;
	}
	.buy{
		width:2rem;
		height:1rem;
		background:#FF0000;
		float:right;
		text-align:center;
		color:#fff;
		margin-left:0.1rem;
	}
	.sc{
		width:0.37rem;
		height:0.37rem;
		line-height:0.37rem;
		float:left;
		text-align:center;
		background:#dbdbdb;
	}
</style>