<template>
	<div style="height:100%;background:#f5f5f5;">
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p >更改支付宝</p>
		</header>
		<section>
			<p style="font-size:0.26rem;text-indent:0.2rem;line-height:0.8rem;color:#888;">为了方便您的余额提现，请绑定本人的支付宝账号</p>
			<div class="fenl" >
  					<span>姓名:</span>  					
  					<input style="outline:none;" type="text" v-model=spm1 placeholder="请输入姓名"/>
  			</div>
  			<div class="fenl" >
  					<span>支付宝账号:</span>  					
  					<input style="outline:none;" type="text" v-model=spm2 placeholder="请输入支付宝账号"/>
  			</div>
  			<div class="fenl" >
  					<span>手机号:</span>  					
  					<input style="outline:none;" type="text" v-model=spm placeholder="请输入手机号码"/>
  			</div>
  			
  			<input id="yz" type="text" v-model=yzm placeholder="验证码" style="padding-left:0.2rem;"/>
  			<button id="yzm" @click="yzy" style="width:2.1rem;">{{m}}</button>
  			<button style="margin-top:0.2rem;" @click="yz">更改支付宝</button>
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
export default {
  name: 'xgzhifubao',
  data () {
    return {
			spm1:'',
			m:'免费获取验证码',
			spm2:'',
			spm:'',
			yzm:'',
			wait:60
    	}
	},
	methods:{
		  	back(){
//		  		this.$router.go('/wode')
				this.$router.push('/qianbao')
		  	},
		  	yz(){
		  		if (this.spm1 != ''&&this.spm != ''&&this.spm2 != ''&&this.yzm != '') {
		  			axios.post('index/alipay/updateUserAlipay.html',{ 		
						mobile:this.spm,
						verify:this.yzm,
						alipay_account:this.spm2,
						real_name:this.spm1
					}).then(res => {
						Toast({
						  message: '修改成功',
						  position: 'bottom',
						  duration: 3000
						})
						this.$router.go(-1)
					})
		  		}else{
		  			Toast({
					  message: '请填写全部的信息',
					  position: 'bottom',
					  duration: 3000
					})
		  		}
		  },
		  yzy(){
			if (this.spm == '') {
				Toast({
					  message: '手机号不能为空',
					  position: 'bottom',
					  duration: 3000
					})
			} else{
				let clock = window.setInterval(() => {
			      
			      if (this.wait == 0) {
			      	this.m ='免费获取验证码'
			      } else{
			      	this.wait--
			      	this.m = this.wait + 's后重新发送'
			      }
			    },1000)
				axios.post('index/Code/regcode.html',{ 		
					mobile:this.spm
				}).then(res => {
					console.log(res)
					if(res.data.code == '00000'){
						
					}else{
						this.m="免费获取验证码";
					}
					
				})
			}	
		},
	}
}  
</script>

<style scoped="">
	.home{
		height:100%;
		background:#F2F2F2;
	}
	#yz::-webkit-input-placeholder {
        font-size:0.26rem;
        line-height:0.3rem;
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
	#yzm{
		min-width:1.6rem;
		height:0.6rem;
		color:#fff;
		font-size:0.26rem;
		line-height:0.6rem;
		background:#F76968;
		opacity:0.8;
		border-radius:0.1rem;
		border:none;
		float:right;		
		margin-right:0.2rem;
	}
</style>