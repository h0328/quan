<template>
	<div>
		<div class="movie_name mov" style="padding:0 0.2rem;">
			<span style="margin-left:0.28rem;">电影名称</span>
			<input type="text" placeholder="请输入电影名称"/>
		</div>
		<div class="pricing mov" style="padding:0 0.2rem;">
			<span style="margin-left:0.28rem;">定价</span>
			<input type="text" placeholder="输入预计定价"/>
			<span style="margin-left:0.28rem;">售价</span>
			<input type="text" placeholder="输入实际售价"/>
		</div>
		<p style="width:100%;height:0.08rem;background:#f4f4f4;"></p>
		<div class="option">
			<div class="cinema mov" style="padding:0 0.2rem;">
				<span style="margin-left:0.08rem;">城市</span>
				<select></select>
				<span style="margin-left:0.28rem;">影院</span>
				<select></select>
			</div>
			<div class="time mov">
				<span >时间</span>
				<span style="float:right;" class="iconfont icon-you"></span>
			</div>
			<div class="seat mov">
				<span >座位号</span>
				<input type="text" placeholder="排"/>
				<span >排</span>
				<input type="text" placeholder="座"/>
				<span >座</span>
			</div>
			<div style="margin:0.42rem 0 0.52rem;width:1.2rem;font-size:0.24rem;color:#333;margin-left:0.1rem;">
				<div style="width:0.68rem;height:0.68rem;margin:0 auto 0.24rem;background:url(static/add.png) no-repeat center center/cover;"></div>
				<span>添加座位号</span>
			</div>
			<button class="btn" @click="tru()">
				确 认 下 单
			</button>
		</div>
		<div class="over" v-show="is">
			<div class="carry" style="background:url(static/carry.png) no-repeat center center/cover;">
				<p style="margin-top:4.6rem;font-size:0.36rem;">你的订单已生成</p>
				<p style="font-size:0.28rem;color:#666;width:80%;margin:0.4rem auto;line-height:0.5rem;text-align:left;">后台人工审核2小时内会审核！有疑问请咨询客服电话。</p>
				<button style="width:80%;" class="btn1">我 知 道 啦</button>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	
	export default {
	  name: 'movie_buy',
	  data () {
	    return {
			is:false
	    }
	  },
	  methods:{	  	
	  	tru(){
//	  		this.is=true
	  	}

	  },
	  mounted(){
		

	  }
	}
</script>

<style scoped="">
	.mov{
		width: calc(100% - 0.4rem);
		height:1.08rem;
		line-height:1.08rem;
		border-bottom:0.01rem solid #f4f4f4;
		color:#333;
		font-size:0.28rem;
	}
	.mov>span{
		width:calc(20% - 0.28rem);
		float:left;
	}
	.movie_name>input{
		text-indent:0.23rem;
		line-height:1.08rem;
		width:78%;
		height:1.04rem;
		border:none;
		float:left;
	}
	.movie_name>input::-webkit-input-placeholder{
			font-size:0.24rem;
			color:#C8C8C8;
		}
	
	.pricing>input{
		text-indent:0.23rem;
		line-height:1.08rem;
		width:28%;
		height:1.04rem;
		border:none;
		float:left;
	}
	.pricing>input::-webkit-input-placeholder{
			font-size:0.24rem;
			color:#C8C8C8;
	}
	.option{		
		width:calc(100% - 0.4rem);
		min-height:5.6rem;
		padding:0 0.2rem;
	}	
	.cinema>select{
		text-indent:0.23rem;
		line-height:1.08rem;
		width:28%;
		height:1.04rem;
		border:none;
		float:left;
	}
	.time{
		width: 100%;
		height:1.08rem;
		line-height:1.08rem;
		text-indent:0.2rem;
		border-bottom:0.01rem solid #f4f4f4;
		color:#333;
		font-size:0.28rem;
	}
	.seat{
		width: 100%;
		height:1.08rem;
		line-height:1.08rem;
		text-indent:0.2rem;
		border-bottom:0.01rem solid #f4f4f4;
		color:#333;
		font-size:0.28rem;
	}
	.seat>input{
		width:24%;
		float:left;
		height:1rem;
		line-height:1.08rem;
		border:none;		
	}
	.seat>input::-webkit-input-placeholder{
		font-size:0.24rem;
			color:#C8C8C8;
	}
	button{
		width:7rem;
		height:0.8rem;
		background:#FF2727;
		border-radius:0.1rem;
		border:none;
		outline: none;
		color:#fff;
		font-size:0.3rem;
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
</style>