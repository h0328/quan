<template>
	<div>
		<section>
			<div class="x-x" style="border-bottom:0.02rem solid #f4f4f4;">
				<span :class="active1"><router-link to="/fee_buy">买 电 费</router-link></span>
				<!--<span :class="active2"><router-link to="/chongzhi2">自己充值</router-link></span>-->
				<span :class="active2"><router-link to="/fee_bill">电 费 订 单</router-link></span>
			</div>
			
						
			<router-view ></router-view>
			
		</section>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default {
	  name: 'fee',
	  data () {
	    return {
	    	active1:'active1',
	    	active2:''
	    }
	  },
	  watch:{
	  		$route(to,form){
				if(to.path == '/fee_buy'){
				    this.active1='active1'
				  	this.active2=''
				}else if(to.path == '/fee_bill'){
					this.active1=''
			  		this.active2='active1'
				}
			}
	  },
	  methods:{	  	
	  	

	  },
	  mounted(){
		

	  }
	}
</script>

<style scoped="scoped">
	section{
		background:#fff;
		
		flex: 1;
		overflow: hidden;
		padding-bottom:0.9rem;
	}
	.x-x{
		width:100%;
		height:0.9rem;
		line-height:0.9rem;
		font-size:0.32rem;
		display:flex;
		justify-content:space-around;	
	}
	.x-x>span{
		color: #969696;
	}
	.active1>a{
		color:red;
	}
	.active1{
		border-bottom:red 0.02rem solid ;
	}
</style>