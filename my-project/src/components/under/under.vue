<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back" style="color:#333;"></span>
			<div class="search">
				<span @click="back" class="iconfont icon-sousuo" style="color:#333;"></span>
				<input type="text" placeholder="输入商品名称"/>
			</div>
			<div @click="release" style="background:url(static/release.png) no-repeat center center/cover;width:0.4rem;height:0.4rem;float:right;margin-top:0.3rem;margin-right:0.26rem;">				
			</div>
		</header>
		<div class="cation">
			<div class="category" @click="category">
				类别
				&nbsp;<span :class=Ait style="font-size:0.22rem;display:block;float:right;margin-bottom:0.6rem;"></span>
			</div>
			<div class="category1" >
				结算价
				&nbsp;<span class="iconfont icon-shangxia" style="font-size:0.22rem;display:block;float:right;margin-bottom:0.6rem;"></span>
			</div>
			<div class="category2" >
				佣金
				&nbsp;<span class="iconfont icon-shangxia" style="font-size:0.22rem;display:block;float:right;margin-bottom:0.6rem;"></span>
			</div>
		</div>
		<div class="cate_sel" v-show="is">
			<div class="cate_top">
				<p>数码<span style="background:url(static/check.png) no-repeat center center/cover;"></span></p>
				<p>数码 <span style="background:url(static/check.png) no-repeat center center/cover;"></span></p>
				<p>数码<span style="background:url(static/check.png) no-repeat center center/cover;"></span></p>
				<p>数码<span style="background:url(static/check.png) no-repeat center center/cover;"></span></p>
				<p>数码<span style="background:url(static/check.png) no-repeat center center/cover;"></span></p>
				<p>数码<span style="background:url(static/check.png) no-repeat center center/cover;"></span></p>
				<p>数码<span style="background:url(static/check.png) no-repeat center center/cover;"></span></p>
			</div>
			<div class="cate_bot">
				
			</div>
		</div>
		<div class="list">
			<div class="lit" @click="detail">
				<img src="../../../build/logo.png" />
				<div class="lit_right">
					<p>
						<span class="commi" style="background:url(static/commission.png) no-repeat center center/cover;"></span>
						<span>代买华为Mat 20一台</span>
					</p>
					<p><span>&yen;</span><span>998</span></p>
					<p>
						<span class="sion">佣金:<span>288</span></span>
						<span class="gard">抢 单 中</span>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default {
	  name: 'under',
	  data () {
	    return {
			Ait:'iconfont icon-xia',
			is:false
	    }
	  },
	  
	  methods:{	  	
	  	back(){
		  		this.$router.push('/home')
		  	},
		category(){
		  	if(this.Ait == 'iconfont icon-xia'){
		  		this.Ait='iconfont icon-tubiaozhizuo-'
		  		$('.category').css('color','#FE3639')
		  		this.is=true
		  	}else{
		  		this.Ait='iconfont icon-xia'
		  		$('.category').css('color','#333')
		  		this.is=false
		  	}
	  	},
	  	release(){
	  		this.$router.push('/under_release')
	  	},
	  	detail(){
	  		this.$router.push('/under_detail')
	  	}
	  },
	  mounted(){
		$('.cate_top p').click(function(){
			$('.cate_top p').css('color','#333')
			$('.cate_top p span').css('display','none')
			$(this).css('color','#FE3639')
			$(this).children().css('display','block')			
		})

	  }
	}
</script>

<style scoped="scoped">
	header{
		width:100%;
		height:1rem;		
		background:#FFF;
		position:relative;
		font-size:0.34rem;
		text-align: center;
		line-height:0.9rem;
		overflow:hidden;
	}
	header>span{
		display: block;
		width:0.78rem;
		height:0.78rem;
		font-size:0.34rem;
		position:absolute;
		top:calc(50% - 0.43rem);
		left:0rem;
	}
	.search{
		width:5.42rem;
		height:0.6rem;
		background:#f6f6f6;
		margin-left:0.92rem;
		margin-top:0.2rem;
		overflow:hidden;
		float:left;
		border-radius:0.2rem;
	}
	.search>span{
		float:left;
		line-height:0.6rem;
		margin-left:0.2rem;
	}
	.search>input{
		float:left;
		width:80%;
		height:0.56rem;
		border:none;
		text-indent:0.2rem;
		background:#f6f6f6;
	}
	.cation{
		width:calc(100% - 0.8rem);
		height:0.8rem;
		line-height:0.8rem;
		padding:0 0.4rem;
		color:#333;
		font-size:0.28rem;
		display:flex;
		justify-content: space-between;
		color:#333;
	}
	.lit{
		width:100%;
		height:2.5rem;
	}
	.lit>img{
		float:left;
		width:2rem;
		height:2rem;
		margin:0.25rem 0.26rem;
	}
	.lit_right{
		float:right;
		width:calc(100% - 2.52rem);
		height:2.1rem;
		border-bottom:0.01rem solid #f4f4f4;
		padding-top:0.4rem;
	}
	.commi{
		display:inline-block;
		width:0.74rem;
		height:0.32rem;
		float:left;
		margin-right:0.1rem;
	}
	.lit_right>p:nth-child(1){
		line-height:0.3rem;
		margin-bottom:0.6rem;
		font-size:0.26rem;
	}
	.lit_right>p:nth-child(2){
		margin-bottom:0.18rem;
		font-size:0.32rem;
		color:#FF383B;
	}
	.lit_right>p:nth-child(3){		
		font-size:0.26rem;
		color:#fff;
	}
	.sion{
		border-radius:0.06rem;
		background:#FF383B;
		padding:0.02rem 0.14rem;
	}
	.gard{
		display:inline-block;
		border-radius:0.06rem;
		padding:0 0.06rem;
		float:right;
		font-size:0.26rem;
		border:0.01rem solid #FF383B;
		margin-right:0.26rem;
		color:#FF383B;
	}
	.cate_sel{
		width:100%;
		height:calc(100% - 1.8rem);
		position:absolute;
		top:1.8rem;
		left:0;
		background:rgb(0,0,0,0.5);
	}
	.cate_top{
		width:100%;
		min-height:4rem;
		background:#fff;
		font-size:0.28rem;
		color:#333;
		line-height:1.1rem;
		text-indent:0.46rem;
	}
	.cate_top>p>span{
		display:inline-block;
		width:0.26rem;
		height:0.18rem;
		float:right;
		margin-right:0.24rem;
		margin-top:0.4rem;
		display:none;				
	}
	.atr{
		color:red;
		
	}
</style>