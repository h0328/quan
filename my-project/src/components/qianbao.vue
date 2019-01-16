<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p>我的钱包</p>
		</header>
		<section>
			<div style="width:calc(100% - 0.6rem);height:0.54rem;font-size:0.24rem;padding:0 0.3rem;line-height:0.54rem;">
				<span style="color:#333;">支付宝账号：</span>
				<a style="margin-left:0.1rem;color:#FD7B6E;text-decoration:underline;" @click="bangd">{{zhif}}</a>
				<a style="color:#FD7B6E;text-decoration:underline;float:right;margin-right:0.2rem;" v-if="is" @click="xg">更改账户</a>
			</div>
			<div class="zhangh">
				<p style="color:#fff;">可 提 现 账 户<span style="font-size:0.2rem;margin-left:2.42rem;color:#fff;text-align:right;">满一百即可提现</span></p>
				<p style="margin-top:1.5rem;text-indent:0.4rem;">&yen;{{yu}}</p>
				<button @click="tix">去提现</button>
			</div>
			<div class="zhangh zhangh1">
				<p>冻 结 金 额</p>
				<p style="margin-top:1.5rem;text-indent:0.4rem;">&yen;<span class="sp1">{{lyu}}</span></p>
			</div>
			<div class="ts2">
				<p style="line-height:0.5rem;color:#999;">温馨提示： </p>
				<p style="color:#999;">1,可提现金额满100可申请提现。</p>
				<p style="color:#999;">2,当天20：00之前的提现当天24点之前到账，20：00之后的提现次日到账；节假日可能有延迟。</p>
				<p style="color:#999;">3、如有疑问请添加客服QQ：<a>2982862</a> 或拨打客服电话。</p>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Toast } from 'mint-ui'
export default {
  name: 'qianbao',
  data () {
    return {
			yu:'',
			lyu:'',
			zhif:'去绑定',
			is:false
    	}
	},
	methods:{
		  	back(){
				this.$router.push('/wode')
		  	},
		  	bangd(){
		  		if (this.zhif == '去绑定') {
		  			this.$router.push('/zhifubao')
		  		}else{
//		  			console.log(1)
		  		}					
			},
			tix(){
				axios.post('index/user/get_user_info.html',{ 		
	
				}).then(res => {
				//	绑定手机号
//				console.log(res.data.result.data.mobile)
				if(res.data.result.data.alipay_account !=null && res.data.result.data.mobile != ''){
					this.$router.push('/tixian')
									  	
				  }else{
				  	if (res.data.result.data.alipay_account ==null) {
						Toast({
						  message: '请绑定支付宝',
						  position: 'bottom',
						  duration: 3000
						})
						this.$router.push('/zhifubao')
					}
				  	if (res.data.result.data.mobile =='') {
				  		Toast({
						  message: '请绑定手机号',
						  position: 'bottom',
						  duration: 3000
						})
						this.$router.push('/shoujihao')
				  	}
				  }
				  
//				  if(res.data.result.data.mobile){
//				  	this.$router.push('/shoujihao')
//				  }else{
//				  	this.$router.push('/tixian')
//				  }
				  
				  
				})				
		},
		xg(){
			this.$router.push('/xgzhifubao')
		}
	},
	mounted(){
		
		axios.post('index/user/get_user_info.html',{ 		
  			
		}).then(res => {
//			console.log(res.data.result.data)
			this.lyu=res.data.result.data.lock_money
			this.yu=res.data.result.data.money 
			
			if(res.data.result.data.alipay_account == null){
				this.zhif='去绑定'
			}else{
				this.zhif=res.data.result.data.alipay_account
				this.is=true
			}
			

		})
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
		border-bottom:0.02rem solid #ccc;
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
	.zhangh{
		width:92%;
		height:3.5rem;
		background:url(../../static/12.png) no-repeat center center/cover;
		color:#fff;
		overflow:hidden;
		margin:0rem auto 0.2rem;
		position:relative;
	}
	.zhangh>p:nth-child(1){
		font-size:0.3rem;
		margin-top:0.42rem;
		margin-left:0.4rem;
		
	}
	.zhangh1{
		background:url(../../static/13.png) no-repeat center center/cover;
	}
	.zhangh>button{
		width:1.3rem;
		height:0.5rem;
		
		font-size:0.24rem;
		background:#fff;
		border-radius:0.24rem;
		border:none;
		position:absolute;
		top:2.62rem;
		right:0.2rem;
		color:#F8485D;
	}
	.ts2{
		padding:0.05rem 0.3rem;
		font-size:0.26rem;
		    color: #64b990;
		    line-height:0.4rem;
	}
	.sp1:first-line{
		font-size:0.5rem;
	}
</style>