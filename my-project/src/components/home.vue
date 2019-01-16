<template>
  <div class="home">
  	<!--头部-->
  	<!--<header-item message="搜商品" backUrl="/wode"></header-item>-->	
  	<header>
  		<!--搜索框-->
  		<div :style="ss1">
  			<span class="iconfont icon-sousuo" style="margin-left:0.2rem;float:left"></span>
  			<input type="text" placeholder='搜商品' v-model=val :style="ipt" @blur.prevent="changeCount()" />
  		</div>
  	</header>
  	<section>
  		<!--轮播图-->
  		<div class="lb">
  			<mt-swipe class='lb1' :show-indicators="false" style="height: 3.38rem;background: #fff;">
				  <mt-swipe-item >
				  		
				  </mt-swipe-item>
				  <mt-swipe-item >
				  	
				  </mt-swipe-item>
				  <mt-swipe-item >
				  	
				  </mt-swipe-item>
				</mt-swipe>
  		</div> 		
  		<div class="nr">
  			<p style="line-height:0.92rem;border-bottom:0.01rem solid #F2F2F2;">
  				<router-link to="/gonggao">
  					<span style="font-weight:900;font-size:0.28rem;color:#000;">站内公告</span>
	  				<span style="margin:0 0.16rem;">|</span>
	  				<span class="kg" style="font-size:0.26rem;color:#282828;"></span>
  				</router-link>  				
  			</p>
  			<div class="qz">
  				<router-link to="/chongzhi">
  					<div style="background:url(static/call.png) no-repeat center center/cover;"></div>
  					<p>话费交易</p>
  				</router-link>
  				<router-link to="/maiquan1">
  					<div style="background:url(static/coupon.png) no-repeat center center/cover;"></div>
  					<p>优惠券交易</p>
  				</router-link>
  				<router-link to="/movie">
  					<div style="background:url(static/movie.png) no-repeat center center/cover;width:0.62rem;height:0.5rem;"></div>
  					<p>电影票交易</p>
  				</router-link>
  				<!--<router-link to="/maiquan1"><div style="background:url(static/-3.jpg) no-repeat center center/cover;"><h3>我要买券</h3></div></router-link>
  				<router-link to="/chongzhi"><div style="background:url(static/-2.jpg) no-repeat center center/cover;"><h3>话费充值</h3></div></router-link>
  				<router-link to="/maiquan"><div style="background:url(static/-1.jpg) no-repeat center center/cover;"><h3>我要卖券</h3></div></router-link>  				-->
  			</div>
  			<div class="qz">
  				<router-link to="/fee">
  					<div style="background:url(static/fee.png) no-repeat center center/cover;width:0.62rem;height:0.5rem;"></div>
  					<p>电费交易</p>
  				</router-link>
  				<router-link to="/under">
  					<div style="background:url(static/under.png) no-repeat center center/cover;"></div>
  					<p>代下任务</p>
  				</router-link>
  				<a>
  					<div style="background:url(static/tuned.png) no-repeat center center/cover;width:0.62rem;height:0.5rem;"></div>
  					<p>敬请期待</p>
  				</a>
  				<!--<router-link to="/maiquan1"><div style="background:url(static/-3.jpg) no-repeat center center/cover;"><h3>我要买券</h3></div></router-link>
  				<router-link to="/chongzhi"><div style="background:url(static/-2.jpg) no-repeat center center/cover;"><h3>话费充值</h3></div></router-link>
  				<router-link to="/maiquan"><div style="background:url(static/-1.jpg) no-repeat center center/cover;"><h3>我要卖券</h3></div></router-link>  				-->
  			</div>
  		</div>
  		<div style="height:0.14rem;background:#ededed;"></div>
  		<!--热门活动-->
  		<div class="nr" style="height:3.06rem;">
  			<h2 style="line-height:0.7rem;text-align:center;font-size:0.28rem;font-weight:300;">热门活动</h2>
  			<div class="jz"> 						 				
	  				<div class="hdo" v-for="item in arr">
		  				<router-link :to="{path:'/remenhd',query:{id:item.id}}">  				
		  					<img :src='`http://qqt.ruimofang.com/uploads/article/${item.img}`' />
	  					</router-link>
	  				</div>
  				 				
  			</div>
  		</div>
  		<div style="height:0.2rem;background:#ededed;"></div>
  		<!--推荐商品-->
  		<div  style="overflow: hidden;">
  			<h2 style="line-height:0.7rem;text-align:center;font-size:0.28rem;font-weight:300;">推荐商品</h2>
  			<div class="jz jz1" style="width:100%;background:#ededed;">
  				<!--<div class="tj" style="padding-left:0.2rem;">
  					<img style="width:3.5rem;height:3.7rem;"/>
  					<p class="name"></p>
  					<p  class="price"></p>
  				</div>
  				<div class="tj" style="padding-right:0.2rem;">
  					<img style="width:3.5rem;height:3.7rem;"/>
  					<p class="name"></p>
  					<p class="price"></p>
  				</div>-->
  			</div>
  		</div>
  	</section>
  	
  	<!--<div class="fot">-->
  		<!--<router-link to="/maiquan"><a class="jia"><span class="iconfont icon-jia" style="color:#fff;font-size:0.5rem;"></span></a></router-link>-->
  		<footer v-show="hidshow">
  		
	  		<a :class="active"><p class="iconfont icon-home" style="margin-top:0.08rem;font-size:0.4rem;"></p>首页</a>
	  		<router-link to="/chongzhi"><a ><p class="iconfont icon-huafeichongzhi" style="margin-top:0.08rem;font-size:0.4rem;"></p>话费</a></router-link>
	  		<!--<router-link to="/maiquan"><a ><p class="iconfont icon-quan" style="margin-top:0.08rem;font-size:0.4rem;"></p>卖券</a></router-link>-->
	  		
	  		<router-link to="/maiquan1"><a ><p class="iconfont icon-quanbao" style="margin-top:0.08rem;font-size:0.4rem;"></p>买券</a></router-link>
	  		<router-link to="/wode"><a ><p class="iconfont icon-wode" style="margin-top:0.08rem;font-size:0.4rem;"></p>我的</a></router-link>
	  	</footer>
  	<!--</div>-->
  	
  	
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'	
export default {
  name: 'home',
  data () {
    return {
			active:'active',
			val:'',
			img1:'',
			img2:'',
			arr:[],
			docmHeight: document.documentElement.clientHeight,  //默认屏幕高度
      showHeight: document.documentElement.clientHeight,   //实时屏幕高度
      hidshow:true,//显示或者隐藏footer
      ss1:{
  			width:'7.12rem',
				height:'0.6rem',
				'line-height':'0.6rem',
				margin:'0.15rem auto',
				background:'#f2f3f7',
				'border-radius':'0.1rem',				
				overflow: 'hidden'
  		},
  		ipt:{
  			width:'85%',
				height:'0.5rem',
				'line-height':'0.5rem',
				'font-size':'0.26rem',
				color:'#95999c',
				background:'#f2f3f7',
				float:'left',
				border:'none',
				'margin-left':'0.1rem',
				'border-radius':'0.1rem'
  		}
    }
  },
	beforeCreate: function () {
//	
//		//获取token	
		axios.post('index/Init/oauth2.html',{ 		

		}).then(res => {
				localStorage.setItem("token",res.data.result.token);
//			 	this.$store.commit(res.data.result.token)
			})
//		用户openid
		axios.post('index/user/get_user_info.html',{ 		

		}).then(res => {
				localStorage.setItem("openid",res.data.result.data.openid);
//			 	this.$store.commit(res.data.result.token)
		})		
	},
  methods:{
		changeCount:function(){
//	  	this.$router.push('/maiquan1')
				if (this.val!='') {
					this.$router.push({
		          name: 'maiquan1',
		          params: {
		            val: this.val
		          }
		      })
				}
				
	   	}		
  	    	
 },
  mounted() {
  	//热门活动
  	axios.post('index/article/recom_article_list.html',{ 		
  			type_id:3,
  			limit:2
			}).then(res => {
				this.arr=res.data.result.list
			  this.img1=res.data.result.list[0].img
			  this.img2=res.data.result.list[1].img
			})
			
		//推荐商品
		axios.post('index/article/recom_coupon_goods.html',{ 		
  			type_id:'2'
		}).then(res => {
			  let arr = res.data.result.list
//			  console.log(arr)
			  for (var i=0;i<arr.length;i++) {
			  	var jz=document.querySelector('.jz1')
			  	var list=`			  		
			  			<div class="tj" style="padding-left:0.2rem;width:3.5rem;height:5rem;background:#fff">
				  			<a href="#/detail?id=${arr[i].id}">
			  					<img src='http://qqt.ruimofang.com/uploads/supplier/${arr[i].img}' style="width:3.5rem;height:3.5rem;"/>
			  					<p>${arr[i].name}</p>
			  					<p style="margin-top: 0.1rem;color:red;font-size:0.28rem;">${arr[i].price}</p>
			  					<p style="text-decoration:line-through;color:#ccc;font-size:0.28rem;">${arr[i].market_price}</p>
			  				</a>	
		  				</div>
						`
			  	jz.innerHTML+=list
			  }
			})
		
		//站内公告
		axios.post('index/article/article_list.html',{ 		
  			type_id:'2'
		}).then(res => {
//			console.log(res.data)
			  $('.kg').html(res.data.result.list[0].title)
			})
			
			//banner
			axios.post('index/article/banner.html',{ 		
  			type:'2'
			}).then(res => {
			  let arr=res.data.result.list
			  for (var i=0;i<arr.length;i++) {
			  	var lb=document.querySelectorAll('.mint-swipe-item')
					for (var j=0;j<i+1;j++) {				
						let list=`			  		
					  	<img src="http://qqt.ruimofang.com/uploads/banner/${arr[i].img}" style="width:100%;height:3.38rem;"/>					 
			  		`
			  	lb[j].innerHTML+=list
					}
			  }
			})
		
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
		border-bottom:0.01rem solid #d0cdc6;
		overflow: hidden;
		background:#FFFFFF;
		z-index:2;
		position:fixed;
		top:0;
		left:0;
	}
	
	section{
		flex:1;
		padding-bottom:0.9rem;
		margin-top:0.9rem;
	}
	.lb{
		width:100%;
		height:3.38rem;
	}
	.nr{
		width:7.1rem;
		padding:0 0.2rem;
	}
	.qz{
		height:1.6rem;
		
		display:flex;
		justify-content: space-between;
		/*width:100%;*/
	}
	.qz a{
		display:block;
		text-align:center;
		width:32%;
		color:#1F1F1F;
		font-size:0.26rem;
	}
	.qz a>div{
		width:0.68rem;
		height:0.48rem;
		margin:0.32rem auto 0.22rem;
		text-align:center;
	}
	.qz a>div>h3{
		color:#fff;
		font-weight:900;
		font-family: "微软雅黑";
		font-size:0.3rem;
		margin-top:0.1rem;
		text-shadow:0.08rem 0.06rem 0.06rem #333;
	}
	.hdo{
		width:3.26rem;
		height:1.8rem;
		position:relative;
		color:#FFFFFF;
		font-size:0.28rem;
		
	}
	
	.hdo>a{
		color:#FFFFFF;
		display: block;
		width:3.26rem;
		height:1.8rem;
	}
	.hdo>a>img{
		width:3.26rem;
		border-radius:0.1rem;
	}
	.jz{
		min-height:2.05rem;
		display:flex;
		justify-content:space-between;
	}
	.tj{
		width:3.5rem;
		height:5.22rem;
		background:#fff;
		font-size:0.3rem;
	}
	.tj>p:nth-child(3){
		margin-top: 0.1rem;
	}
	.fot{
		width:100%;
		height:1.25rem;
		position:fixed;
		bottom:0;
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
	.jia{
		display:block;
		width:0.7rem;
		height:0.7rem;
		line-height:0.7rem;
		text-align:center;
		/*margin-top:-0.3rem;*/
		position:absolute;
		/*bottom:0;*/
		right:calc(50% - 0.35rem);
		z-index:2000;
		border-radius:50%;
		background:#FF0000;
	}
	.active{
		border-top:red 0.01rem solid ;
		font-size:0.24rem;
		color:red;
	}
	.iconfont{
		color:#676767;
	}
	.active>p{
		color:red;
	}
</style>
