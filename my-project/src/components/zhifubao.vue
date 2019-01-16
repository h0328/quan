<template>
	<div style="height:100%;background:#f5f5f5;">
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p >绑定支付宝</p>
		</header>
		<section>
			<p style="font-size:0.26rem;text-indent:0.2rem;line-height:0.8rem;color:#888;">为了方便您的余额提现，请绑定本人的支付宝账号</p>
			<div class="fenl" >
  					<span>姓名:</span>  					
  					<input style="outline:none;" type="text" v-model=spm1 placeholder="请输入姓名"/>
  			</div>
  			<div class="fenl" >
  					<span>支付宝账号:</span>  					
  					<input style="outline:none;" type="text" v-model=spm placeholder="请输入支付宝账号"/>
  			</div>
  			<button @click="yz">绑定支付宝</button>
  			<!--<input id="yz" type="text" placeholder="验证码" />-->
  			<!--<button @click="yz">获取验证码</button>-->
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
export default {
  name: 'zhifubao',
  data () {
    return {
			spm:'',
			spm1:''
    	}
	},
	methods:{
		  	back(){
//		  		this.$router.go('/wode')
				this.$router.push('/qianbao')
		  	},
		  	yz(){
		  		axios.post('index/Alipay/bindUserAlipay.html',{ 		
  					alipay_account:this.spm,
  					real_name:this.spm1
				}).then(res => {
					console.log(res.data.code)
					if(res.data.code=='00000'){
						Toast({
						  message: '已绑定支付宝',
						  position: 'bottom',
						  duration: 3000
						})
						this.$router.push('/qianbao')
					}else{
						Toast({
						  message: '绑定失败',
						  position: 'bottom',
						  duration: 3000
						})
						this.$router.push('/qianbao')
					}
					  
				})
		  	}
	}
}  
</script>

<style scoped="">
	.home{
		height:100%;
		background:#F2F2F2;
	}
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
		/*height:100%;*/
		flex: 1;
		overflow: hidden;
		/*margin-bottom:0.9rem;*/
	}
	section>button{
		width:calc(100% - 0.48rem);
		height:0.8rem;
		line-height:0.8rem;
		background:#F8A0A0;
		border-radius:0.1rem;
		border:none;
		color:#fff;
		font-size:0.32rem;
		float:right;
		margin-right:0.24rem;
	}
	.zhangh{
		width:92%;
		height:1.6rem;
		border:0.02rem solid #26A2FF;
		border-radius:0.2rem;
		margin:0.1rem auto;
		position:relative;
	}
	.zhangh>button{
		width:1.2rem;
		height:0.6rem;
		line-height:0.6rem;
		background:#00FFFF;
		border-radius:0.1rem;
		border:none;
		position:absolute;
		top:0.7rem;
		right:0.2rem;
	}
	.fenl{
		width:100%;
		height:1rem;
		background:#fff;
		/*margin-left:2.5%;*/
		margin-bottom:0.2rem;
		/*border-radius:0.1rem;*/
		line-height:1rem;
		font-size:0.3rem;
		color:#26A2FF;
		text-indent:0.2rem;
		/*border:0.02rem solid indianred;*/
	}
	.fenl>input{
		width:50%;
		height:0.7rem;
		margin-top:0.1rem;
		font-size:0.3rem;
	}
	#yz{
		width:30%;
		height:0.6rem;
		border-radius:0.1rem;
		margin-left:2.5%;
		border:0.02rem solid indianred;
	}
</style>