<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p>话费回收</p>
		</header>
		<div class="xin-x" style="position:relative;">
				<p>充值号码：<input class="haom" v-model='num' readonly="readonly"/><button class="copy" :data-clipboard-text="num" @click="copy">复制号码</button></p>
				<p style="margin-top:0.2rem;">充值金额：<span style="color:red;">{{je}}</span></p>
				<p v-if=is1 style="margin-top:0.2rem;">运营商：<span style="color:red;">{{tx2}}</span></p>
				<p v-if=is2 style="margin-top:0.2rem;">归属地：<span style="color:red;">{{tx1}}</span></p>
				<p style="margin-top:0.2rem;">接单时间：<span style="color:red;">{{ti}}</span></p>
				<p style="color:#CCCCCC;margin-top:0.15rem;font-size:0.24rem;">请确认您的充值号码和充值金额！并在15分钟内完成充值！</p>				
				<!--<div id="time">{{time}}</div>-->
		</div>
		<div class="xq-1">
  				<span style="float:left;">上传凭证截图:</span>
  				<div class="btn-lg"><span>{{er}}</span>	
  					<input type="file" name="file" accept="image/*" @change="uploadAvatar">
  				</div>
				<p style="background:url(static/-5.jpg) no-repeat center center/cover;"></p>
  		</div>
  		<a href="javascript:;" class="czhi" style="margin-left:3%;margin-right:3%;" @click="qx">取消充值</a>
		<a href="javascript:;" class="czhi"  @click="qr">确认充值</a>		

	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import { Button } from 'mint-ui'
import Clipboard from 'clipboard'
import wx from 'weixin-js-sdk'
import moment from 'moment'
	export default {
	  name: 'chongzhi1_1',
	  data () {
	    return {
	    	je:'',
	    	num:'',
	    	er:'请上传话费充值完成凭证',
	    	order_id:'',
	    	result:'',
	    	ti:'',
	    	is1:false,
	    	is2:false
	    }
	  },
	  methods:{
	  	back(){
			this.$router.push('/chongzhi1')
//		  		axios.post("index/Fare_Order/updateFareOrderLocking.html",{	 
//				order_id:this.order_id
//		      }).then(res=>{
//					Toast({
//					  message: '解锁话费订单成功',
//					  position: 'bottom',
//					  duration: 3000
//					})
////					MessageBox('提示','解锁话费订单成功')
//					
//		      	})
		  	},
		  	copy(){
//		  		let url = document.querySelector('.haom');
//			    url.select(); // 选择对象
//			    document.execCommand("Copy");
			        var clipboard = new Clipboard('.copy')
			        clipboard.on('success', e => {
			          Toast({
						  message: '复制成功',
						  position: 'bottom',
						  duration: 3000
						})
			          // 释放内存
			          clipboard.destroy()
			        })
			        clipboard.on('error', e => {
			          // 不支持复制
//			          console.log('该浏览器不支持自动复制')
			          // 释放内存
			          clipboard.destroy()
			        })

		  	},
	  	uploadAvatar(avatar) {
//	  		var u = navigator.userAgent, app = navigator.appVersion;
//	  		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
//			if (isAndroid) {
//				wx.chooseImage({
//				    count: 1, // 默认9
//				    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//				    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//				    success: function (res) {
//				        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//				    }
//				})
//			}else{
	  			let file = avatar.target.files[0]
			      let data = new FormData();
			      data.append("image", file, file.name);//很重要 data.append("file", file);不成功
			      data.append('data',112)
			      
			      return axios.post("index/Coupon_Goods/upload.html", data, {			        
			      }).then(res=>{
			      	console.log(data)
			      	this.er='已上传'
			      	this.result=res.data.result
		//	      	this.eimg.push(res.data.result)
//					window.opreation.choosePhoto('getPhoto')
		//	      	console.log(this.eimg)
			      })
//	  		}

		 	
		},
		qr(){
			if (this.er == '已上传') {
				axios.post('index/Fare_Order/updateFareOrder.html',{ 		
		  			order_id:this.order_id,
		  			voucher:this.result
				}).then(res => {
					Toast({
						  message: '充值完成',
						  position: 'bottom',
						  duration: 3000
						})
					this.$router.go(-1)
					
				})
			}else{
				Toast({
						message: '请上传凭证',
						position: 'bottom',
						duration: 3000
					})
			}
			
		},
		qx(){
			axios.post("index/Fare_Order/updateFareOrderLocking.html",{	 
				order_id:this.order_id
	      	}).then(res=>{
//		      	console.log(res.data)
				Toast({
					  message: '解锁话费订单成功',
					  position: 'bottom',
					  duration: 3000
					})
				this.$router.push('/chongzhi1')
	      	})
		}
	  },
	  mounted(){
	  	this.num=this.$route.query.num
	  	this.je=this.$route.query.money
	  	this.order_id=this.$route.query.order_id	  	
	  	this.tx1=this.$route.query.t1
	  	this.tx2=this.$route.query.t2	  	
	  	if (this.$route.query.time == undefined) {
	  		this.ti=this.$route.query.ti
	  	}else{
	  		this.ti=this.$route.query.time
	  	}
	  	if (this.$route.query.t1 == undefined && this.$route.query.t2 ==undefined) {
	  		this.is1=false
	  		this.is2=false
	  	}else{
	  		this.is1=true
	  		this.is2=true
	  	}
//	  	let transTime = moment(this.ti).format('YYYY/MM/DD HH:mm:ss')
//	  	var timestamp = Date.parse(new Date())
//				var de = new Date(transTime)
//				var tim1 = de.getTime()
//				var timestamp1 =900000-(timestamp-tim1);
//				var min = parseInt((timestamp1 % (1000 * 60 * 60)) / (1000 * 60))
//				var sec = parseInt((timestamp1 % (1000 * 60)) / 1000)
//		  		var than=this;
//		  		var m = min;  //分
//	            var s = sec;  //秒                        
//	            getCountdown();            	
//				var interval = setInterval(function(){ getCountdown() },1000);            
//	            function getCountdown (){
//	                than.time = m+":"+s;
//	                if( m <= 0 && s <= 0 ){
//	//                  m = 14;
//	//                  s = 59;
//	                    clearInterval(interval)
//	                    axios.post("index/Fare_Order/updateFareOrderLocking.html",{	 
//							order_id:this.order_id
//				      	}).then(res=>{
//							Toast({
//								  message: '解锁话费订单成功',
//								  position: 'bottom',
//								  duration: 3000
//								})
//							this.$router.push('/chongzhi1')
//				      	})
//	                }else if( m >= 0 ){
//	                    if( s > 0 ){
//	                        s--;
//	                    }else if( s == 0 ){
//	                        m--;
//	                        s = 59;
//	                    }
//	                }
//	            }
	  	
	  	if(this.$route.query.min!=undefined && this.$route.query.sec!=undefined){
//	  		this.time=''
//	  		var than=this;
//	  		var min =parseInt(this.$route.query.min)
//	  		var sec =parseInt(this.$route.query.sec)
//	  		var m = min;  //分
//          var s = sec;  //秒               
//          getCountdown();            	
//			var interval = setInterval(function(){ getCountdown() },1000);            
//          function getCountdown (){
//              than.time = m+":"+s;
//              if( m == 0 && s == 0 ){
////                  m = 14;
////                  s = 59;
//                  clearInterval(interval)
//                  axios.post("index/Fare_Order/updateFareOrderLocking.html",{	 
//						order_id:this.order_id
//			      	}).then(res=>{
//						Toast({
//							  message: '解锁话费订单成功',
//							  position: 'bottom',
//							  duration: 3000
//							})
//						this.$router.push('/chongzhi1')
//			      	})
//              }else if( m >= 0 ){
//                  if( s > 0 ){
//                      s--;
//                  }else if( s == 0 ){
//                      m--;
//                      s = 59;
//                  }
//              }
//          }
	 }else{	  			

	  	}
	  		
	  }
	} 
</script>

<style scoped="">
	.copy{
		/*display:inline-block;*/
		min-width:0.8rem;
		height:0.4rem;
		text-align:center;
		line-height:0.4rem;
		border:0.02rem solid #ccc;
		border-radius:0.05rem;
		font-size:0.26rem;
		color:#64b990;
		/*margin-right:0.6rem;*/
		/*float:right;*/
		position:absolute;
		right:1rem;
		top:0.2rem;
	}
	input{
		width:2.6rem;
		border:none;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
		/*display:inline-block;*/
		background:#fff;
		font-size:0.34rem;
		color:#333;
	}
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
   .xin-x{
		width:96%;
		min-height:2.2rem;
		border:0.01rem solid #ccc;
		margin-top:0.2rem;
		margin-left:2%;
		border-radius:0.2rem;
		padding:0.2rem 0.3rem;
		box-sizing: border-box;
		position:relative;
	}
	.czhi{
		display: block;
		margin-top: 0.2rem;
		opacity:0.9;
		width:45%;
		height:1rem;
		float: left;
		text-align: center;
		line-height:1rem;
		color:#fff;
		border-radius:0.1rem;
		font-size:0.35rem;
		background:indianred;
	}
		.xq-1{
		width:96%;
		margin-left:2%;
		height:0.7rem;
		margin-bottom:0.1rem;		
		margin-top:0.2rem;
		border-radius:0.1rem;
		line-height:0.6rem;
		font-size:0.26rem;
		color:#26A2FF;
		text-indent:0.2rem;
		border:0.02rem solid indianred;
		box-sizing:border-box;
	}
	.btn-lg{
		position: relative;
		float:left;
		width:60%;
		height:0.7rem;
		color:#ccc;
		/*border:0.02rem solid #000;*/
	}
	.btn-lg>input{
		    width: 5.3rem;
		 position: absolute;
		 top: 0;left: 0;
		 opacity: 0;
		 cursor: pointer;
		 height:0.65rem;
	}
	.xq-1>p{
		float:right;
		width:0.3rem;
		height:0.3rem;
		display:inline-block;
		margin-top:0.2rem;
		margin-right:0.1rem;
	}
	.xq-1>input{
		
		width:70%;
		height:0.5rem;
	}
	#time{
		position:absolute;	
		top:0.1rem;
		right:0.1rem;
		height:0.4rem;
		color:#FF4949;
		font-size:0.3rem;
	}
</style>