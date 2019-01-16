<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			<p>交易明细</p>
		</header>
		<section>
			<!--<div class="x-x" style="border-bottom:0.02rem solid #ccc;margin-top:0.9rem;">
				<span >成交日期</span>
				<span >支出/收入</span>
				<span >来源</span>
			</div>-->
			
			
			
			<router-view></router-view>
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'chengjiu',
  data () {
    return {
    	active1:'',
	    active2:''
    	}
	},
	methods:{
		  	back(){
				this.$router.push('/wode')
		  	}
	},
	watch:{
	  		$route(to,form){	  			
				if(to.path == '/chengjiu_1'){
				    this.active1='active1'
				  	this.active2=''
				}else if(to.path == '/chengjiu_2'){
					this.active1=''
			  		this.active2='active1'
				}
			}
	}
//	mounted() {
//		axios.post('index/user/money_log.html',{ 		
//			
//		}).then(res => {
//			console.log(res.data.result.list)
//		})
//		axios.post('index/user/lock_money_log.html',{ 		
//			
//		}).then(res => {
//			console.log(res.data.result.list)
//		})
//	}
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
		position:fixed;
		top:0;
		left:0;
		z-index: 100;
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
		height:0.6rem;
		line-height:0.6rem;
		font-size:0.28rem;
		display:flex;
		justify-content:space-around;	
		position:fixed;
		background:#fff;
	}
	
	.active1{
		border-bottom:red 0.01rem solid ;
	}
</style>