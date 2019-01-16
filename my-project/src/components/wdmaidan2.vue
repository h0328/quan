<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			我的卖单
		</header>
		<section>
			<div class="x-x" style="border-bottom:0.02rem solid #ccc;background:#fff;position:fixed;top:1rem;">
				<span :class="active3"><router-link to="/huafeidd">话费订单</router-link></span>
				<span :class="active1"><router-link to="/wdmaidan2_1">已上传</router-link></span>
				<span :class="active2"><router-link to="/wdmaidan2_2">已完成</router-link></span>
			</div>
			
						
			<router-view></router-view>
			
		</section>
	</div>
</template>

<script>
	export default {
	  name: 'wdmaidan2',
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
				if(to.path == '/wdmaidan2_1'){
				    this.active1='active1'
				  	this.active2=''
				  	this.active3=''
				}else if(to.path == '/wdmaidan2_2'){
					this.active1=''
			  		this.active2='active1'
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
		position:fixed;
		top:0;
		left:0;
		z-index:100;
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
		margin-top:1rem;
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