<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			我要发布任务
		</header>
		<div class="deti">
			<div class="mov" style="margin:0 0.2rem;">
				<span style="margin-left:0.28rem;">商品名称</span>
				<input type="text" placeholder="请输入商品名称"/>
			</div>
			<textarea placeholder="请详细的描述需要代下商品的代下购买攻略..."></textarea>
			<div class="upload" style="background:url(static/upload.png) no-repeat center center/cover;">
				<input type="file" name="file" accept="image/*" @change="uploadAvatar" />
			</div>
			<img :src='qwe'/>
		</div>
		<p style="background:#f4f4f4;height:0.08rem;"></p>
		<div class="infor">
			<div class="mov" style="margin:0 0.2rem;">
				<span style="margin-left:0.28rem;margin-top:0.36rem;width:0.36rem;height:0.36rem;background:url(static/addr.png) no-repeat center center/cover;"></span>
				<input type="text" placeholder="请输入收货人详细地址"/>
			</div>
			<div class="mov pricing" style="margin:0 0.2rem;border:none;">
				<span style="margin-left:0.28rem;margin-top:0.36rem;width:0.36rem;height:0.36rem;background:url(static/name.png) no-repeat center center/cover;"></span>
				<input type="text" placeholder="请输入收货姓名"/>
				<span style="margin-left:0.28rem;margin-top:0.36rem;width:0.36rem;height:0.36rem;background:url(static/phone.png) no-repeat center center/cover;"></span>
				<input type="text" placeholder="请输入收货联系电话"/>
			</div>
		</div>
		<p style="background:#f4f4f4;height:0.08rem;"></p>
		<div class="cost">
			<div class="mov" style="margin:0 0.2rem;">
				<span style="margin-left:0.28rem;">商品价格</span>
				<input type="text" placeholder="预估商品结算价格"/>
			</div>
			<div class="mov" style="margin:0 0.2rem;">
				<span style="margin-left:0.28rem;">预估佣金</span>
				<input type="text" placeholder="小费"/>
			</div>
			<div class="mov" style="margin:0 0.2rem;">
				<span style="margin-left:0.28rem;">类别</span>
				<select></select>
				<span class="iconfont icon-you" style="width:4%;float:left;"></span>
			</div>
			
		</div>
		<div class="terms">
				<span style="background:url(static/yera.png) no-repeat center center/cover;"></span>
				已阅读并同意<a style="color:#1375FF;">《代下交易》</a>                                              
		</div>
		<div class="sett">
			<div class="sett_left">
				<p style="color:#181513;">共计 <span style="font-size:0.28rem;">0.00</span> 元</p>
				<p style="color:#C8C8C8;">预估商品结算价格</p>
			</div>
			<button class="btn">
				下 单
			</button>
		</div>
		<div class="over" v-show="is">
			<div class="carry" style="background:url(static/rev.png) no-repeat center center/cover;">
				<p style="margin-top:4.6rem;font-size:0.36rem;">已提交，后台人工审核中！</p>
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
	  name: 'under_release',
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
		uploadAvatar(avatar) {
		  	let file = avatar.target.files[0]
			      let data = new FormData();
			      data.append("image", file, file.name);//很重要 data.append("file", file);不成功
			      data.append('data',112)
			      console.log(data)
			     this.qwe=avatar.srcElement.value
		  }
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
	.deti{
		width:100%;
		height:4.76rem;		
	}
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
	.mov>input{
		text-indent:0.43rem;
		line-height:1.04rem;
		width:78%;
		height:1.02rem;
		border:none;
		float:left;
	}
	.deti>textarea{
		display:block;
		width: 90%;
		margin:0 auto;
		height:1.48rem;
		margin-top:0.3rem;
		border:none;
		outline:none;
		resize:none;
		color:#333;
	}
	.infor{
		width:100%;
		height:2.18rem;
	}
	.upload{
		width:1.1rem;
		height:1.1rem;
		margin-left:0.46rem;
		margin-top:0.2rem;
	}
	.upload>input{
		width:1.1rem;
		height:1.1rem;
		opacity:0;
	}
	.pricing>input{
		text-indent:0.23rem;
		line-height:1.08rem;
		width:38%;
		height:1.04rem;
		border:none;
		float:left;
	}
	.cost{
		width:100%;
		height:3.26rem;
	}
	select{
		text-indent:0.23rem;
		line-height:1.08rem;
		width:74%;
		height:1.04rem;
		border:none;
		float:left;
		opacity:0;
	}
	.terms{
		width:100%;
		height:0.98rem;
		line-height:0.98rem;
		text-indent:0.2rem;
		background:#f4f4f4;
		font-size:0.24rem;
		color:#333;
	}
	.terms>span{
		display:block;
		width:0.38rem;
		height:0.38rem;	
		float:left;
		margin-top:0.3rem;
		margin-left:0.46rem;
	}
	.sett{
		width:100%;
		height:0.98rem;
		position:fixed;
		left:0;
		bottom:0;
	}
	.sett_left{
		width:30%;
		float:left;
		font-size:0.2rem;
		margin-left:0.46rem;
		margin-top:0.1rem;
	}
	.btn{
		width:2rem;
		height:0.7rem;
		background:#FF2727;
		border:none;
		float:right;
		margin-right:0.36rem;
		margin-top:0.1rem;
		color:#fff;
		font-size:0.28rem;
		border-radius:0.1rem;
		outline:none;
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