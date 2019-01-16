<template>
	<div style="background:#f4f4f4;height:100%;">
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			详细信息
		</header>
		<div class="det">
			<div class="mon">
				<span style="width:24%;float:left;">金额</span>
				<span class="money">99.9 元</span>
			</div>
			<div class="det_t">
				<div>
					<span style="width:24%;float:left;">充值户号</span>
					<input type="text" v-model='num' readonly="readonly"/>
					<button class="copy" :data-clipboard-text="num" @click="copy" style="background:url(static/copy.png) no-repeat center center/cover;"></button>
				</div>
				<div style="border-top:0.01rem solid #f4f4f4;">
					<span style="width:24%;float:left;">城市</span>
					<span class="city"></span>
				</div>
			</div>
			<div class="pic">
				<div class="mon" style="border-bottom:0.01rem solid #f4f4f4;">
					<span style="float:left;">上传凭证截图:</span>
	  				<div class="btn-lg"><span>{{er}}</span>	
	  					<input type="file" style="outline:none;" name="file" accept="image/*" @change="uploadAvatar">
	  				</div>
					<p style="background:url(static/-5.jpg) no-repeat center center/cover;"></p>
				</div>
				<div class="imgs">
					<div class="imgn">
												
					</div>
					<div class="add" style="margin:0.14rem 0 0;float:left;width:1.6rem;text-align:center;font-size:0.24rem;color:#333;margin-left:0.2rem;">
						<input type="file" style="outline:none;" name="file" accept="image/*" @change="uploadAvatar">
						<div style="width:0.68rem;height:0.68rem;margin:0 auto 0.2rem;background:url(static/add.png) no-repeat center center/cover;"></div>
						<span>添加新的截图</span>
					</div>
				</div>				
			</div>
			<div class="btnn">
				<button class="btn1" style="background:#f4f4f4;color:#FF2727;border:0.01rem solid #FF2727;margin-right:10%;" @click="qx()">
					取 消 充 值
				</button>
				<button class="btn1" @click="tru()">
					确 认 上 传
				</button>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	import { Toast } from 'mint-ui'
	import { MessageBox } from 'mint-ui'
	import Clipboard from 'clipboard'
	export default {
	  name: 'fee_det',
	  data () {
	    return {
			num:'123',
			er:'请上传话费充值完成凭证',
			result:'',
			order_id:''
	    }
	  },
	  
	  methods:{	  	
	  	back(){
		  		this.$router.go(-1)
		  	},
		copy(){
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
		  	var img_li=document.querySelector('.imgn')
		  	let file = avatar.target.files[0]
			      let data = new FormData();
			      data.append("image", file, file.name);//很重要 data.append("file", file);不成功
			      data.append('data',112)
			      
			      return axios.post("index/Coupon_Goods/upload.html", data, {			        
			      }).then(res=>{
//			      	console.log(res)
			      	this.er='已上传'
			      	this.result=res.data.result
			      	var list=`
			      	<div style="position:relative;width:1.1rem;height:1.1rem;float:left;margin-left:0.1rem;">
			      		<img src=${res.data.result} style="width:1rem;height:1rem;float:left;margin-top:0.1rem;margin-right:0.1rem;">
						<span style="display:inline-block;width:0.34rem;height:0.34rem;position:absolute;right:0;top:0;background:url(static/close.png) no-repeat center center/cover;"></span>
			      	</div>
			      	`		      	
			      	img_li.innerHTML+=list
			      	$('.imgn div span').click(function(){
						console.log($(this).parent().remove())
					})
			      })
		  },
		  tru(){
		  	if (this.er == '已上传') {
		  		//完成电费订单
				axios.post('index/Electric/updateOrder.html',{ 		
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
		  	MessageBox.confirm('确定取消充值吗？').then(action => { 
								 if (action == 'confirm') {     //确认的回调
									//解锁订单
									axios.post('index/Electric/updateOrderLocking.html',{ 		
										order_id:this.order_id
									}).then(res => {
//										console.log(res.data)
										if(res.data.code==='00000'){
											this.$router.go(-1)	
										}														
									})					 	
								 }
							 }).catch(err => { 
							 if (err == 'cancel') {     //取消的回调
							 } 
					})
		  },
		  
	  },
	  mounted(){
		$('.money').text(this.$route.query.money)
		this.num=this.$route.query.num
		this.order_id=this.$route.query.order_id
		$('.city').text(this.$route.query.city_name)
		
		
	  }
	}
</script>

<style scoped="scoped">
	header{
		width:100%;
		height:0.9rem;
		background:#FFF;
		position:relative;
		font-size:0.34rem;
		text-align: center;
		line-height:0.9rem;
		margin-bottom:0.18rem;
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
	.det{
		padding:0 0.24rem;
	}
	.mon{
		width:100%;
		height:1.08rem;
		line-height:1.08rem;
		text-indent:0.32rem;
		background:#fff;
		border-radius:0.1rem;
		color:#333;
		font-size:0.3rem;
		margin-bottom:0.08rem;
	}
	.det_t{
		width:100%;
		height:2.18rem;
		border-radius:0.1rem;
		background:#fff;
		font-size:0.3rem;
		margin-bottom:0.08rem;
	}
	.det_t>div{
		height:1.1rem;
		line-height:1.1rem;
		text-indent:0.32rem;
	}
	.det_t>div:nth-child(1) input{
		border:0;		
	}
	.copy{
		/*display:block;*/
		border:none;
		width:1.2rem;
		height:0.44rem;
		float:right;
		margin-top:0.34rem;
		margin-right:0.3rem;
	}
	.pic{
		width:100%;
		height:2.68rem;
		background:#fff;
		border-radius:0.1rem;
		font-size:0.3rem;
		margin-bottom:0.64rem;
	}
	.btn-lg{
		position: relative;
		float:left;
		width:60%;
		height:1rem;
		color:#ccc;
		/*border:0.02rem solid #000;*/
	}
	.btn-lg>input{
		 
		 position: absolute;
		 top: 0;left: 0;
		 opacity: 0;
		 cursor: pointer;
		 height:0.65rem;
	}
	.mon>p{
		float:right;
		width:0.3rem;
		height:0.3rem;
		display:inline-block;
		margin-top:0.38rem;
		margin-right:0.2rem;
	}
	.btnn{
		width:7rem;
		height:0.8rem;
		margin:0.4rem auto;
	}
	.btn1{
		width:45%;
		height:0.8rem;
		background:#FF2727;
		border-radius:0.1rem;
		border:none;
		outline: none;
		color:#fff;
		font-size:0.3rem;
		display:block;
		float:left;
	}
	.add{
		position:relative;
		width:2rem;
		height:1.4rem;
	}
	.add>input{
		width:100%;
		height:100%;
		opacity:0;	
		position:absolute;
		z-index:1;	
	}
	.add>div{
		position:absolute;
		left:30%;
		top:0;
	}
	.add>span{
		width:100%;
		left:0;
		position:absolute;
		bottom:10%;
	}
	.imgn>div{
		width:1rem;
		height:1.1rem;
		float:left;
		display:none;
		margin-left:0.1rem;
	}
	.imgn>div>img{
		width:1rem;
		height:1rem;
		
		float:left;
	}
</style>