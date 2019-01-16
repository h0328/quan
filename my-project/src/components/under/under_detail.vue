<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>			
		</header>
		<div class="name">
			<img src="../../../build/logo.png" style="width:0.8rem;height:0.8rem;float:left;margin:0.14rem;"/>
			<span>代买华为Mat 20一台</span>
		</div>
		<div class="pic">
			<span>&yen; <span style="font-size:0.28rem;">28888</span></span>
			<span>佣金：<span>288</span></span>
		</div>
		<div class="deta_ne">
			<p>代买华为Mat 20一台,64G内存，青色，要全新国行未拆封，不要合约机，通过网络渠道苏宁易购网管购买。</p>
			<img src="../../../build/logo.png" style="width:5.28rem;height:5rem;margin:0.16rem auto 0.36rem;"/>
		</div>
		<div class="pyc">
			<img src="static/alip.png" style="width:0.36rem;height:0.36rem;"/>
			<span style="margin-left:0.2rem;">担保交易</span>
			<span style="float:right;color:#C5C5C5;font-size:0.24rem;"><span>125</span>人浏览</span>
		</div>
		<div class="addr">
			<img src="static/addb.png" style=""/>
			<div>
				<p><span>李晓晓</span>    <span>123123234</span></p>
				<p><span>李晓晓</span>    <span>123123234</span></p>
			</div>
		</div>
		<button class="btn">
			代 TA 下 单
		</button>
		<div class="over" v-show="is">
			<div class="carry" style="background:url(static/carry.png) no-repeat center center/cover;">
				<p style="margin-top:4.6rem;font-size:0.36rem;">恭喜你，抢单成功</p>
				<!--<p style="font-size:0.28rem;color:#666;width:80%;margin:0.4rem auto;line-height:0.5rem;text-align:left;">后台人工审核2小时内会审核！有疑问请咨询客服电话。</p>-->
				<button style="width:80%;margin-top:0.8rem;" class="btn1">我 知 道 啦</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default {
	  name: 'under_detail',
	  data () {
	    return {
			qwe:'',
			is:false
	    }
	  },
	  methods:{	  	
	  	back(){
		  		this.$router.push('/under')
		  	},
		
	  },
	  mounted(){
		

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
		color:#333;
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
	.name{
		width:calc(100% - 0.4rem);
		height:1.08rem;
		line-height:1.08rem;
		font-size:0.28rem;
		color:#333;
		margin:0 0.2rem;
		border-bottom:0.01rem solid #f4f4f4;
	}
	.pic{
		width:clac(100% - 0.92rem);
		height:0.88rem;
		margin:0 0.46rem;
		line-height:0.88rem;
		color:#FF383B;
		font-size:0.2rem;
		margin-bottom:0.2rem;
	}
	.pic>span:nth-child(2){
		padding:0 0.1rem;
		font-size:0.22rem;
		background:#FF383B;
		border-radius:0.06rem;
		color:#fff;
		margin-left:0.4rem;
	}
	.deta_ne{
		width:calc(100% - 0.68rem);
		margin:0 0.34rem;
		font-size:0.28rem;
		color:#333;
		line-height:0.48rem;
		border-bottom:0.01rem solid #f4f4f4;
	}
	.pyc{
		width:calc(100% - 0.68rem);
		margin:0 0.34rem;
		font-size:0.28rem;
		color:#1375FF;
		height:1.04rem;
		line-height:1.04rem;
	}
	.pyc>img{
		margin:0.34rem 0;
		float:left;
	}
	.addr{
		width:calc(100% - 0.68rem);
		margin:0 0.34rem;
		font-size:0.24rem;
		color:#333;
		height:0.66rem;
		margin-top:0.2rem;
		line-height:0.33rem;
	}
	.addr>img{
		float:left;
		width:0.66rem;
		height:0.66rem;
		margin-right:0.32rem;
	}
	.addr>div{
		float:left;
	}
	.btn{
		width:90%;
		height:0.8rem;
		border-radius:0.1rem;
		margin:0 5%;
		position:fixed;
		border:none;
		background:#FF383B;
		color:#fff;
		bottom:2%;
	}
	.over{
		position:absolute;
		top:0;
		width:100%;
		height:100%;
		background: rgb(0,0,0,0.5);
	}
	.carry{
		width:5.9rem;
		height:8.3rem;
		margin:1.9rem auto;
		text-align:center;
		overflow:hidden;
	}
	.btn1{
		width:7rem;
		height:0.8rem;
		background:#FF2727;
		border-radius:0.1rem;
		border:none;
		outline: none;
		color:#fff;
		font-size:0.3rem;
	}
</style>