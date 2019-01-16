<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			我的买单
		</header>
		<section>
			<div class="x-x" style="border-bottom:0.02rem solid #ccc;">
				<span :class="active1"><router-link to="/huafeidd1">话费订单</router-link></span>
				<span :class="active2"><router-link to="/wdmaidan1_1">待支付</router-link></span>
				<span :class="active3"><router-link to="/wdmaidan1_2">已完成</router-link></span>
			</div>
			
			
			
			<router-view></router-view>
			
		</section>
	</div>
</template>

<script>

	export default {
	  name: 'wdmaidan1',
	  data () {
		return{
			active1:'',
	    	active2:'',
	    	active3:''
		}
	  },
	methods:{
		  	back(){
		  		this.$router.push('/wode')
		  	},
		  
	},
	watch:{
	  		$route(to,form){	  			
				if(to.path == '/wdmaidan1_1'){
				    this.active1=''
				  	this.active2='active1'
				  	this.active3=''
				}else if(to.path == '/huafeidd1'){
					this.active1='active1'
			  		this.active2=''
			  		this.active3=''
				}else{
					this.active1=''
			  		this.active2=''
			  		this.active3='active1'
				}
			}
	}
}
</script>

<style scoped="">
	header{
		width:100%;
		height:0.9rem;
		background:#FFF;
		position:relative;
		font-size:0.34rem;
		text-align: center;
		line-height:0.9rem;
		border-bottom:#ededed solid 0.1rem;
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
		/*margin-bottom:0.9rem;*/
	}
	.x-x{
		width:100%;
		height:0.9rem;
		line-height:0.9rem;
		font-size:0.32rem;
		display:flex;
		justify-content:space-around;	
	}
	
	.active1{
		border-bottom:red 0.01rem solid ;
	}
</style>