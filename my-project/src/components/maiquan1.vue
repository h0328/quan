<template>
  <div class="home">
  	<!--头部-->
  	
  	<header>
  		<!--搜索框-->
  		<div class="ss1">
  			<span class="iconfont icon-sousuo" style="margin-left:2%;float:left;"></span>
  			<input type="text" v-model="val" placeholder='搜索优惠券' class="ipt" @blur.prevent="changeCount()" />
  			<span @click="remove" class="iconfont icon-jikediancanicon07" style="font-size:0.4rem;position:absolute;right:0.2rem;z-index:3;"></span>
  		</div>
  	</header>
  	<section>
  		<!--排序-->
  		<div class="px">
  			<div class="px1" @click="plei">
  				品类
  				&nbsp;<span :class=Ait ></span>
  			</div>
  			<!--<div class="px1">
  				销售
  				<span class="iconfont icon-shangxia"></span>  				 				
  			</div>-->
  			<div class="px1" @click="jiag">
  				价格
  				&nbsp;<span class="iconfont icon-shangxia"></span>  				
  			</div>
  		</div> 	
  		<!--商品列表-->
  		<ul class="list" style="margin-bottom:1rem;">  			
  				<li v-for="item in arr">
  					<router-link :to="{path:'/detail',query:{id:item.id}}" class="list" >
		  				<img :src='`http://qqt.ruimofang.com/uploads/supplier/${item.img}`'  />
		  			
		  				<div class="xiaq">
		  					<p>{{item.name}}</p>
		  					<p>{{item.supplier_name}}</p>
		  					<p >面值:<span style="text-decoration: line-through;">{{item.market_price}}</span></p>
		  				</div>
		  			
		  				<div class="xiaq1">
		  					<p>售价:&yen;{{item.price}}</p>
		  					<button >购买</button>
		  				</div>
	  				</router-link>
	  			</li>
  			
  			  			
  		</ul> 		
  	</section>
  	<footer>
  			<router-link to="/home"><p class="iconfont icon-home" style="margin-top:0.08rem;font-size:0.4rem;"></p>首页</a></router-link>
	  		<router-link to="/chongzhi"><p class="iconfont icon-huafeichongzhi" style="margin-top:0.08rem;font-size:0.4rem;"></p>话费</a></router-link>
	  		<!--<router-link to="/maiquan"><a><p class="iconfont icon-quan" style="margin-top:0.08rem;font-size:0.4rem;"></p>卖券</a></router-link>-->
	  		<a :class="active"><p class="iconfont icon-quanbao" style="margin-top:0.08rem;font-size:0.4rem;"></p>买券</a>
	  		<router-link to="/wode"><a ><p class="iconfont icon-wode" style="margin-top:0.08rem;font-size:0.4rem;"></p>我的</a></router-link>
  	</footer>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Toast } from 'mint-ui'
export default {
  name: 'maiquan1',
  data () {
    return {
			active:'active',
			val:'',
			arr:[],
			Ait:'iconfont icon-xia',
			type:'',
			price:''
    }
  },
//	watch:{
//		a(e,w){
//			console.log(e,w)
//		}
//	},
  methods:{
		remove(){
			this.val=''
			axios.post('index/Coupon_Goods/goods_list.html',{ 		
			}).then(res => {
				this.arr=res.data.result.list
			})
		},
		changeCount:function(){
      axios.post('index/Coupon_Goods/goods_list.html',{ 		
				goods_name:this.val
			}).then(res => {
					this.arr=res.data.result.list
//					console.log(this.arr)
			})
   	},
// zf(r,t){
//	  		axios.post('index/Order/buy_order.html',{ 		
//	  			type_id:2,
//	  			good_id:r,
//	  			price:t
//				}).then(res => {
////					console.log(res.data)
//					Toast({
//					  message: '已生成订单',
//					  position: 'bottom',
//					  duration: 3000
//					})
//				})

//	  },
	  plei(){
	  	if(this.type == ''){
	  		this.Ait='iconfont icon-tubiaozhizuo-'
	  		this.type='asc'
	  	}else{
	  		this.Ait='iconfont icon-xia'
	  		this.type=''
	  	}
	  	
	  	if (this.$route.params.val!='') {
	  		axios.post('index/Coupon_Goods/goods_list.html',{
	  			goods_name:this.$route.params.val,
	  			type:this.type
				}).then(res => {
					this.arr=res.data.result.list
				})
	  	} else{
	  		if (this.val == '') {
		  		axios.post('index/Coupon_Goods/goods_list.html',{ 		
		  			type:this.type
					}).then(res => {
						this.arr=res.data.result.list
					})
		  	}else{
		  		axios.post('index/Coupon_Goods/goods_list.html',{ 		
		  			goods_name:this.val,
		  			type:this.type
					}).then(res => {
						this.arr=res.data.result.list
					})
		  	}
	  	}

	  },
	  jiag(){

//	  	console.log(this.$route.params.val)
	  	if (this.$route.params.val!=undefined) {
	  		if (this.price == '') {
	  			this.price='desc'
	  			axios.post('index/Coupon_Goods/goods_list.html',{ 		
		  			goods_name:this.$route.params.val,
		  			price:'desc'
					}).then(res => {
						this.arr=res.data.result.list
					})
	  		}else{
	  			this.price=''
	  			axios.post('index/Coupon_Goods/goods_list.html',{ 		
		  			goods_name:this.$route.params.val,
		  			price:''
					}).then(res => {
						this.arr=res.data.result.list
					})
	  		}
	  		
	  	}else{
	  		
	  		if (this.val == '') {
		  		if(this.price == ''){
			  		this.price='desc'
			  		axios.post('index/Coupon_Goods/goods_list.html',{ 		
			  			price:'desc'
						}).then(res => {
							this.arr=res.data.result.list
						})
			  	}else{
			  		this.price=''
			  		axios.post('index/Coupon_Goods/goods_list.html',{ 		
			  			price:''
						}).then(res => {
							this.arr=res.data.result.list
						})
			  	}
		  		
		  	}else{
//		  		console.log(this.val,this.price)
		  		if (this.price == '') {
		  			this.price='desc'
		  			axios.post('index/Coupon_Goods/goods_list.html',{ 		
			  			goods_name:this.val,
			  			price:'desc'
						}).then(res => {
							this.arr=res.data.result.list
						})
		  		}else{
		  			this.price=''
		  			axios.post('index/Coupon_Goods/goods_list.html',{ 		
			  			goods_name:this.val,
			  			price:''
						}).then(res => {
							this.arr=res.data.result.list
						})
		  		}
		  		
		  	}
		  	
	  	}
	  	
	  	
	  	
	  }
  },
beforeCreate: function () {
//
//		//获取token	
		axios.post('index/Init/oauth2.html',{ 		

		}).then(res => {
				localStorage.setItem("token",res.data.result.token);
			})
//		用户openid
		axios.post('index/user/get_user_info.html',{ 		

		}).then(res => {
					localStorage.setItem("openid",res.data.result.data.openid);

		})			
	},
  mounted(){
  	
	if (this.$route.params.val!='') {
//		this.val=this.$route.params.val
			axios.post('index/Coupon_Goods/goods_list.html',{ 		
					goods_name:this.$route.params.val
			}).then(res => {
					this.arr=res.data.result.list
//					console.log(this.arr)
			})
	}
	else{
  		axios.post('index/Coupon_Goods/goods_list.html',{ 		

			}).then(res => {
					this.arr=res.data.result.list
					
			})
	}
  	
		
  }
}
</script>

<style scoped="">
	.home{
		height:100vh;
		position: relative;
	}
	input{
		border:none;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
	}
		
	header{
		width:100%;
		height:0.9rem;
		overflow: hidden;
		background:#FFFFFF;
		z-index:2;
		position:fixed;
		top:0;
		left:0;
	}
	.ss1{
  			width:96%;
				height:0.6rem;
				line-height:0.6rem;
				margin:0.15rem auto;
				overflow: hidden;
				background:#f2f3f7;
				border-radius:0.1rem;
				position:relative;
  }
  .ipt{
  			display: block;
  			width:85%;
				height:0.5rem;
				float:left;
				margin-left:0.1rem;
				line-height:0.5rem;
				font-size:0.26rem;
				color:#95999c;
				background:#f2f3f7;
				float:left;
				border:none;
				border-radius:0.1rem;
  		}
	
	section{
		flex:1;
		/*min-height:calc(100% - 1.82rem);*/
		/*position:relative;
		top:1.3rem;
		bottom:3rem;*/
		/*overflow:hidden;*/
		margin-bottom:1rem;
		margin-top:1.3rem;
		background:#f2f2f2;
	}	
	.px{
		width:100%;
		height:0.5rem;
		font-size:0.26rem;
		position:fixed;
		top:0.9rem;
		z-index:5;
		display: flex;
		justify-content: space-around;
		
		background:#fff;
	}
	.px1>span{
		display: block;
		float:right;
		font-size:0.22rem;
		margin-top:0.06rem;
		margin-left:0.08rem;
	}
	/*.list{
		width:calc(100%-0.68rem);
		background:#fff;
		padding:0.3rem 0.2rem 0.3rem 0.48rem;
		border-top:0.02rem solid #ccc;
		height:1.2rem;
		font-size:0.26rem;
	}*/
	.list>li{
		width:calc(100%-0.68rem);
		background:#fff;
		padding:0.3rem 0.2rem 0.3rem 0.48rem;
		border-top:0.02rem solid #ccc;
		height:1.2rem;
		font-size:0.26rem;
		/*position:relative;*/
	}
	.list>img{
		width:1.25rem;
		float:left;
		height:1.2rem;
		border:0.02rem solid #ccc;
		margin-right:0.46rem;
	}
	.xiaq{
		width:3rem;
		float:left;
	}
	.xiaq>p{
		margin-bottom:0.12rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.xiaq p:nth-child(1){
		font-weight: 600;
		color:#333;
	}
	.xiaq p:nth-child(2){
		color:#737373;
	}
	.xiaq p:nth-child(3){
		color:#ff0000;
	}
	.xiaq1{
		min-width:1rem;
		float: right;
		text-align:center;
		
	}
	.xiaq1>p{
		color:#ff0000;
		font-weight:300;
	}
	.xiaq1>button{
		/*position:absolute;*/
		border:none;
		color:#fff;
		border-radius:0.08rem;
		width:0.92rem;
		/*height:0.4rem;*/
		/*top:1rem;*/
		/*right:0.2rem;*/
		line-height:0.4rem;
		background:#ff0000;
		margin-top:0.4rem;
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
</style>
