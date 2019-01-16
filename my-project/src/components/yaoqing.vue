<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p>我的邀请</p>
		</header>
		<section>
			<div class="x-x" style="border-bottom:0.02rem solid #ccc;">
				<span :class="active1"><router-link to="/yaoqing_3">我的邀请码</router-link></span>
				<span :class="active2"><router-link to="/yaoqing_1">邀请列表</router-link></span>
				<span :class="active3"><router-link to="/yaoqing_2">邀请奖励</router-link></span>
			</div>
			
			
			
			<router-view></router-view>
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'		

export default {
  name: 'yaoqing',
  data () {
    return {
    	active1:'',
	    active2:'',
	    active3:''
    }
   },
   methods:{
		  	back(){
				this.$router.push('/wode')
		  	}
	},
	watch:{
	  		$route(to,form){	  			
				if(to.path == '/yaoqing_1'){
				    this.active1=''
				  	this.active2='active1'
				  	this.active3=''
				}else if(to.path == '/yaoqing_2'){
					this.active1=''
			  		this.active2=''
			  		this.active3='active1'
				}else{
					this.active1='active1'
			  		this.active2=''
			  		this.active3=''
				}
			}
	}
}
</script>

<style scoped="">
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
		flex: 1;
		overflow: hidden;
		margin-bottom:0.9rem;
	}
	.x-x{
		width:100%;
		height:0.7rem;
		line-height:0.7rem;
		display:flex;
		justify-content:space-around;	
	}
	
	.active1{
		border-bottom:red 0.01rem solid ;
	}
</style>