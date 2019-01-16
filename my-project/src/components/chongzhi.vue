<template>
	<div style="background: rgb(237, 237, 237);height:100%;">
		<!--<header>
			话费充值
		</header>-->
		<section>
			<div class="x-x" style="border-bottom:0.02rem solid #ccc;margin-bottom:0.2rem;">
				<span :class="active1"><router-link to="/chongzhi1">话费回收</router-link></span>
				<!--<span :class="active2"><router-link to="/chongzhi2">自己充值</router-link></span>-->
				<span :class="active2"><router-link to="/chongzhi3">话费充值</router-link></span>
			</div>
			
			
			
			<router-view></router-view>
			
		</section>
		
		<footer>
	  		<router-link to="/home"><a><p class="iconfont icon-home" style="margin-top:0.08rem;font-size:0.4rem;"></p>首页</a></router-link>
	  		<a :class="active"><p class="iconfont icon-huafeichongzhi" style="margin-top:0.08rem;font-size:0.4rem;"></p>话费</a>
	  		<!--<router-link to="/maiquan"><a ><p class="iconfont icon-quan" style="margin-top:0.08rem;font-size:0.4rem;"></p>卖券</a></router-link>-->
	  		<router-link to="/maiquan1"><a ><p class="iconfont icon-quanbao" style="margin-top:0.08rem;font-size:0.4rem;"></p>买券</a></router-link>
	  		<router-link to="/wode"><a ><p class="iconfont icon-wode" style="margin-top:0.08rem;font-size:0.4rem;"></p>我的</a></router-link>
	  	</footer>
	  	
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
	export default {
	  name: 'chongzhi',
	  data () {
	    return {
	    	active:'active',
	    	active1:'active1',
	    	active2:''
	    }
	  },
	  watch:{
	  		$route(to,form){
				if(to.path == '/chongzhi1'){
				    this.active1='active1'
				  	this.active2=''
				}else if(to.path == '/chongzhi3'){
					this.active1=''
			  		this.active2='active1'
				}
			}
	  },
	  methods:{	  	
	  	jine:function(a){
	  		this.je=a+'元';
	  	}

	  },
	  beforeCreate: function () {
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
		
//		console.log(document.title)
	  },
	  created(){
	  	this.$router.push({path: '/chongzhi1'});
	  }
	}
</script>

<style scoped="">
	header{
		width:100%;
		height:0.9rem;
		background:#FFF;
		/*color:#fff;*/
		font-size:0.34rem;
		text-align: center;
		line-height:0.9rem;
		border-bottom:#ededed solid 0.1rem;
	}
	section{
		background:#fff;
		padding:0  0.2rem;
		flex: 1;
		overflow: hidden;
		padding-bottom:0.9rem;
	}
	.x-x{
		width:100%;
		height:0.9rem;
		line-height:0.9rem;
		display:flex;
		justify-content:space-around;	
	}
	.x-x>span{
	
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
	.iconfont{
		color:#676767;
	}
	.active{
		border-top:red 0.01rem solid ;
		font-size:0.24rem;
		color:red;
	}
	.active>p{
		color:red;
	}
	.active1{
		border-bottom:red 0.01rem solid ;
	}
</style>