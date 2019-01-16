<template>
	<div class="home">
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p>绑定手机号</p>
		</header>
		<section>
			<div class="fenl" style="margin-top:0.3rem;">
  					<span>手机号:</span>  					
  					<input style="outline:none;" type="text" v-model=spm placeholder="请输入手机号"/>
  			</div>
  			<div class="fenl" v-if=is style="margin-top:0.1rem;">
  					<span>推荐码:</span>  					
  					<input style="outline:none;" type="text" v-model=tjm placeholder="请输入推荐码(选填)"/>
  			</div>
  			
  			<input id="yz" type="text" v-model=yzm placeholder="验证码" style="padding-left:0.2rem;"/>
  			<button @click="yzy">{{m}}</button>
  			<div class="jh" @click="yzs">绑定手机号{{js}}</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Toast } from 'mint-ui'
export default {
  name: 'shoujihao',
  data () {
    return {
			spm:'',
			yzm:'',
			tjm:'',
			js:'',
			m:'免费获取验证码',
			is:false,
			wait:60
    	}
	},
	methods:{
		back(){
			this.$router.go(-1)
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
					if(res.data.code == '00000'){
						
					}else{
						this.m="免费获取验证码";
					}
					
				})
			}	
		},
		yzs(){
			var reg = /^1\d{10}$/;
			if(!reg.test(this.spm) && this.yzm == ''){
				Toast({
					  message: '请输入有效的手机号和验证码',
					  position: 'bottom',
					  duration: 3000
				})
			}else{
				axios.post('index/User/bind_mobile.html',{ 		
					mobile:this.spm,
					verify:this.yzm,
					code:this.tjm
				}).then(res => {
//					console.log(res.data)
					if(res.data.code == '00000'){
						Toast({
						  message: res.data.message,
						  position: 'bottom',
						  duration: 3000
						})
//						alert(res.data.message)
						this.$router.go(-1)
					}else{
						Toast({
						  message: res.data.message,
						  position: 'bottom',
						  duration: 3000
						})
//						alert(res.data.message)
					}
					  
				})
			}
		}
	},
	beforeCreate: function () {
		axios.post('index/user/get_user_info.html',{ 		
			
			}).then(res => {
//				console.log(res.data.result.data)
				if(res.data.result.data.pid != 0){
					this.is=false
				}else{
					this.is=true
				}
			})
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
		background:#f8f8f8;
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
	section>button{
		min-width:1.4rem;
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
	.jh{
		width:calc(100% - 0.48rem);
		height:0.8rem;
		line-height:0.8rem;
		margin-left:0.24rem;
		margin-top:0.5rem;
		color:#fff;
		font-size:0.32rem;
		background:#F76968;
		opacity:0.8;
		border-radius:0.1rem;
		clear:both;
		text-align:center;
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
		width:1.4rem;
		height:0.6rem;
		color:#fff;
		line-height:0.6rem;
		background:#F76968;
		border-radius:0.1rem;
		border:none;
		position:absolute;
		top:0.7rem;
		right:0.2rem;
	}
	.fenl{
		width:95%;
		height:0.7rem;
		margin-left:2.5%;
		background:#fff;
		margin-bottom:0.2rem;
		/*border-radius:0.1rem;*/
		line-height:0.6rem;
		font-size:0.3rem;
		color:#26A2FF;
		text-indent:0.2rem;
		overflow:hidden;
	}
	.fenl>input{
		height:0.6rem;
		width:60%;
		font-size:0.3rem;
	}
	#yz{
		width:30%;
		height:0.6rem;
		border-radius:0.1rem;
		margin-left:2.5%;
		line-height:0;
		border:0.02rem solid indianred;
	}
</style>