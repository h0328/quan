<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p>金额提现</p>
		</header>
		<section>
			<p style="font-size:0.28rem;line-height:0.8rem;text-indent:0.2rem;">可提现金额:<span style="color:#FF0000;">{{yu}}</span></p>
			<input type="text" v-model="tx" placeholder="请输入提现金额" />
			
			<button @click="txi">提现</button>
			<button style="width:1.6rem;" @click="qtx">全部提现</button>
			<div class="ts">
				<!--<p style="text-indent:0.2rem;color:#333;">提现记录：</p>-->
				<p style="margin-top:0.1rem;">1.账户余额需大于等于100元才可提现</p>
				<p>2.提现前请核对支付宝账户和提现金额</p>
				<p>3.当天17点前提现当天到账,17点之后提现次天到账</p>
			</div>
			<div class="x-x" style="border-bottom:0.02rem solid #ccc;margin-bottom:0.15rem;">
				<span :class="active1"><router-link to="/tixian_1">提现(审核中)</router-link></span>
				<span :class="active2"><router-link to="/tixian_2">提现(成功)</router-link></span>
				<span :class="active3"><router-link to="/tixian_3">提现(失败)</router-link></span>
			</div>
			
			<router-view></router-view>
			
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Toast } from 'mint-ui'
export default {
  name: 'tixian',
  data () {
    return {
			tx:'',
			yu:'',
			active1:'',
		    active2:'',
		    active3:''
    	}
	},
	methods:{
		  	back(){
				this.$router.push('/qianbao')
		  	},
		  	txi(){
		  		console.log(this.tx)
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
					  	axios.post('index/user/user_present.html',{ 		
		  					money:this.tx
						}).then(res => {
							Toast({
							  message: res.data.message,
							  position: 'bottom',
							  duration: 3000
							})
							this.$router.go(0)
						})
					  }
				})
		  		
		  	},
		  	qtx(){
		  		this.tx=this.yu
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
//					  	axios.post('index/user/user_present.html',{ 		
//		  					money:this.tx
//						}).then(res => {
//							Toast({
//							  message: res.data.message,
//							  position: 'bottom',
//							  duration: 3000
//							})
//							this.$router.go(0)
//						})
					  }
				})
		  	}
	},
	watch:{
	  		$route(to,form){	  			
				if(to.path == '/tixian_1'){
				    this.active1='active1'
				  	this.active2=''
				  	this.active3=''
				}else if(to.path == '/tixian_2'){
					this.active1=''
			  		this.active2='active1'
			  		this.active3=''
				}else{
					this.active1=''
			  		this.active2=''
			  		this.active3='active1'
				}
			}
	},
	mounted(){
		axios.post('index/user/get_user_info.html',{ 		
  			
		}).then(res => {			
			this.yu=res.data.result.data.money 
		})
		
	}
}  
</script>

<style scoped="">
	input{
		border:none;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
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
	section{	
		/*padding:0  0.2rem;*/
		flex: 1;
		overflow: hidden;
		margin-bottom:0.9rem;
	}
	input{
		width:3rem;
		height:0.4rem;
		border:0.02rem solid #ccc;
		margin-left:0.2rem;
		border-radius:0.05rem;
	}
	button{
		width:1.2rem;
		height:0.5rem;
		line-height:0.5rem;
		background:indianred;
		border-radius:0.05rem;
		border:none;
		color:#fff;
	}
	.ts{
		width:calc(92% - 0.1rem);
		min-height:1.8rem;
		padding-left:0.1rem;
		font-size:0.26rem;
		color:#999;
		line-height:0.4rem;
		margin:3% 0.2rem;
		border-radius:0.1rem;
		border:0.02rem solid #ccc;
		line-height:0.5rem;
	}
	.x-x{
		width:100%;
		height:0.7rem;
		line-height:0.7rem;
		font-size:0.26rem;
		display:flex;
		justify-content:space-around;	
	}
	
	.active1{
		border-bottom:red 0.01rem solid ;
	}
</style>