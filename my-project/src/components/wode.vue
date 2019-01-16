<template>
  <div class="home">
  	<header>
  		<div class="tox">
  			<img :src="img" style="width:100%;border-radius:50%;"/>
  		</div>
  		<p class="uname" style="text-align:center;color:#fff;">{{name}}</p>
  		<!--我的钱包-->
  		<router-link to="/qianbao">
	  		<div class="qibo">
	  			<h2>我的钱包<span style="font-size:0.26rem;color:#ccc;">({{alipay_account}})</span></h2>
	  			<div>
	  				<div style="float:left;">
	  					可提现余额
	  					<p class="money">{{mon}}</p>
	  				</div>
	  				<div style="width:0.02rem;height:0.62rem;background:#e5e5e5;float:left;"></div>
	  				<div>
	  					冻结余额
	  					<p class="lock_money">{{lmon}}</p>
	  				</div>
	  			</div>
	  		</div>
  		</router-link>
  	</header>
  	<section>
  		<div style="width:100%;height:1.26rem;background:#ebebeb;"></div>
  		<div class="md">
  			<span @click="ae1" :class="activeB" >我的卖单</span>
  			<span @click="ae" :class="activeA" >我的买单</span>
  			
  		</div>
  		<div class="xx">
  			<div class="mai-d1" v-show="isShowa">
  				<router-link to="/huafeidd1">
		  			<span class="iconfont icon-huafei"></span>
		  			<p>话费订单</p>
	  			</router-link>
	  			<router-link to="/wdmaidan1_1">
	  			
	  				<span class="iconfont icon-daizhifu"></span>
	  				<p>待支付</p>
	  			
	  			</router-link>
	  			<router-link to="/wdmaidan1_2">
	  			
	  				<span class="iconfont icon-yiwancheng"></span>
	  				<p>已完成</p>
	  			
	  			</router-link>
	  			
  			</div>  			
  			
  			<div class="mai-d2" v-show="isShow">
  				<router-link to="/huafeidd">
  					<span class="iconfont icon-huafei" style="font-size:0.4rem;"></span>
	  				<p>话费订单</p>
  				</router-link>
  				
  				<router-link to="/wdmaidan2_1">
	  				<span class="iconfont icon-quanbao"></span>
	  				<p>已上传</p>
	  			</router-link>

	  			<router-link to="/wdmaidan2_2">
	  				<span class="iconfont icon-yiwancheng"></span>
	  				<p>已完成</p>
	  			</router-link>
  			</div>
  			
  		</div>
  		<div class="xx1">
  			<router-link to="/chengjiu" style="display:block;line-height:0.92rem;height:0.92rem;border-bottom:0.02rem solid #CCCCCC;">
	  			<div class="cj">
	  				<span><span style="color:red;" class="iconfont icon-chengjiu"></span>  交易明细</span>
	  				<span class="iconfont icon-you" style="float:right;"></span>
	  			</div>
  			</router-link>  			
  			<router-link to="/yaoqing" style="display:block;line-height:0.94rem;border-bottom:0.02rem solid #CCC;">
	  			<div class="cj" style="border:none;">
	  				<span><span style="color:#fc3090;" class="iconfont icon-yaoqing"></span>  我的邀请</span>
	  				<span class="iconfont icon-you" style="float:right;"></span>
	  			</div>
  			</router-link>
  			
  		<div v-if="lin" style="border:none;">
				<router-link to="/shoujihao" style="display:block;line-height:0.94rem;border-bottom:0.02rem solid #CCC;">
	  			<div class="cj" style="border:none;">
	  				<span><span style="color:#fc3090;font-size:0.4rem;" class="iconfont icon-bangdingshoujihao"></span>绑定手机号</span>
	  				<span class="iconfont icon-you" style="float:right;"></span>
	  			</div>
  			</router-link>
			</div>
			<div v-if='lin1' style="border:none;">
					<div class="cj" style="border:none;">
	  				<span><span style="color:#fc3090;font-size:0.4rem;" class="iconfont icon-bangdingshoujihao"></span>绑定手机号</span>
	  				<span class="iconfont icon-you" style="float:right;"></span><span style="float:right;font-size:0.26rem;color:rgb(204, 204, 204);">{{mobile}}</span>
	  			</div>
			</div>
			
  			<a href="tel:4008271368" style="display:block;line-height:0.94rem;">
  				<div class="cj" style="border-top:0.02rem solid #ccc;color:#333;">
	  				<span><span style="color:#fc3090;font-size:0.32rem;" class="iconfont icon-kefu"></span>  联系客服</span>
	  				<span class="iconfont icon-you" style="float:right;"></span>
	  			</div>
  			</a>  			
  		</div>
  	</section>
  	
  	<footer>
  		<router-link to="/home"><p class="iconfont icon-home" style="margin-top:0.08rem;font-size:0.4rem;"></p>首页</a></router-link>
	  		<router-link to="/chongzhi"><p class="iconfont icon-huafeichongzhi" style="margin-top:0.08rem;font-size:0.4rem;"></p>话费</a></router-link>
	  		<!--<router-link to="/maiquan"><a><p class="iconfont icon-quan" style="margin-top:0.08rem;font-size:0.4rem;"></p>卖券</a></router-link>-->
				<router-link to="/maiquan1"><a ><p class="iconfont icon-quanbao" style="margin-top:0.08rem;font-size:0.4rem;"></p>买券</a></router-link>
	  		<a :class="active"><p class="iconfont icon-wode" style="margin-top:0.08rem;font-size:0.4rem;"></p>我的</a>
  	</footer>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	

export default {
  name: 'wode',
  data () {
    return {
			active:'active',
			activeA:'',
			activeB:'ac1',
			isShowa:false,
			isShow:true,
			name:'',
			mon:'',
			lmon:'',
			img:'',
			alipay_account:'未绑定支付宝',
			mobile:'',
			lin:false,
			lin1:true
    }
  },
  methods:{
  	ae(){
  		this.activeA='ac1'
			this.activeB=''
			this.isShowa=true
			this.isShow=false
  	},
		ae1(){
			this.activeA=''
			this.activeB='ac1'
			this.isShowa=false
			this.isShow=true
		}
  },
	beforeCreate:function(){
		//获取token	
			axios.post('index/Init/oauth2.html',{ 		
	
			}).then(res => {
						localStorage.setItem("token",res.data.result.token);		
			})
//			用户openid
			axios.post('index/user/get_user_info.html',{ 		
	
			}).then(res => {
//					console.log(res)
					localStorage.setItem("openid",res.data.result.data.openid);
			})
			
	},
	mounted() {
		//获取用户信息
			
				axios.post('index/user/get_user_info.html',{ 		
	  			
				}).then(res => {
//					console.log(res.data.result.data.username)

							this.name=res.data.result.data.username
						  this.img=res.data.result.data.headimgurl
						  this.mon=res.data.result.data.money
						  this.lmon=res.data.result.data.lock_money	
								
						if (res.data.result.data.alipay_account != null) {
							this.alipay_account='已绑定支付宝账号'
						}else{
							this.alipay_account='未绑定支付宝'
						}
					  if (res.data.result.data.mobile != '') {
							this.mobile='已绑定手机号码'
							this.lin=false
							this.lin1=true
						}else{
							this.mobile=''
							this.lin=true
							this.lin1=false
						}		
				})
//				.catch(res=>{
//					this.$router.go(0)
//				})

	}
  
}
</script>

<style scoped="">
	.home{
		height:100vh;
		position: relative;
	}
	
	header{
		width:100%;
		height:3.02rem;
		background:url(../../static/-4.jpg) no-repeat center center/cover;
		position:relative;
		padding-top:0.34rem;
	}
	.tox{
		width:1.25rem;
		height:1.25rem;
		/*border:0.02rem solid #fff;*/
		border-radius:50%;
		margin:0 auto 0;
	}
	.qibo{
		width:6.9rem;
		height:2.16rem;
		background:#fff;
		position:absolute;
		top:2.26rem;
		left:0.3rem;
		z-index:2;
		box-shadow: 0rem 0.06rem 0.04rem #ccc;
	}
	.qibo>h2{
		padding-top:0.18rem;
		padding-left:0.22rem;
		font-size:0.3rem;
		color:#000;
		font-weight:500;
		margin-bottom:0.18rem;
	}
	.qibo>div{
		width:100%;
		display:flex;
		justify-content: space-around;
	}
	.qibo>div>div{
		text-align:center;
		color:#666;
		font-size:0.3rem;
		line-height:0.4rem;
	}
	.qibo>div>div>p{
		color: #FF0000;
		font-size:0.3rem;
	}
	
	section{
		flex:1;
		height:9.1rem;
		background:#ebebeb;
	}
	.md{
		width:100%;
		height:0.7rem;
		background:#fff;
		line-height:0.7rem;
		display:flex;
		justify-content: space-around;
		border-bottom:0.02rem solid #ccc;
		font-size:0.28rem;
	}
	.xx{
		width:100%;
		height:1.08rem;
		padding-top:0.35rem;
		background:#fff;
		display:flex;
		justify-content:space-around;
		margin-bottom:0.2rem;
	}
	.mai-d1{
		width:100%;
		height:1.08rem;
		background:#fff;
		display:flex;
		justify-content:space-around;
	}
	.mai-d1>a{
		display: block;
		text-align:center;
		font-size:0.28rem;
		color:#666666;
		width:20%;
	}
	.mai-d1>a>span{
		font-size:0.4rem;
	}
	.mai-d2{
		width:100%;
		height:1.08rem;
		background:#fff;
		display:flex;
		justify-content:space-around;
	}
	.mai-d2>a{
		display: block;
		text-align:center;
		font-size:0.28rem;
		color:#666666;
		width:20%;
	}
	.mai-d2>a>span{
		font-size:0.4rem;
	}
	.xx1{
		width:calc(100%-0.4rem);
		min-height:0.86rem;
		background:#fff;
		padding:0 0.2rem;
	}
	.xx1>div{
		height:0.94rem;
		line-height:0.94rem;
		border-bottom:0.02rem solid #CCCCCC;
	}
	
	footer{
		height:0.9rem;
		width:100%;
		border-top:0.01rem solid #ccc;
		position:fixed;
		left:0px;
		bottom:0px;
		display: flex;
		justify-content: space-around;
		align-items: center; 
		overflow: hidden;
		background:#fff;
		position:fixed;
		bottom:0px;
	}
	footer>a{
		display:block;
		text-align:center;		
		height:0.89rem;
		width:20%;
		font-size:0.24rem;
	}
	.active{
		border-top:red 0.01rem solid ;
		font-size:0.24rem;
		color:red;
	}
	.active>p{
		color:red;
	}
	.iconfont{
		color:#676767;
	}
	.ac1{
		border-bottom:red 0.02rem solid;
		font-size:0.28rem;
		color:red;
	}
</style>