<template>
	<div>
		<div class="hf">
			<button v-for="(item,index) in arr" class="btn" :class="{active1:index==nowIndex}" @click="act(index,item.id)">
				<p>{{item.money}}元</p>
				<div>售价：{{item.cash}}元</div>
				<p>库存：{{item.count}}</p>
			</button>	
		</div>
		<button class="btn1" @click="tru()">
				去 下 单
			</button>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	import { Toast } from 'mint-ui'
	export default {
	  name: 'fee_bill',
	  data () {
	    return {
			arr:[],
			nowIndex:0,
			config_id:1
	    }
	  },
	  
	  methods:{	  	
	  	act(i,e){
	  		this.nowIndex=i
	  		this.config_id=e
	  	},
		tru(){
			//获取电费订单
			axios.post('index/Electric/getOneOrder.html',{ 		
				config_id:this.config_id
			}).then(res => {
				if(res.data.code === '00000'){
					this.$router.push({path:"/fee_det",query:{num:res.data.result.mobile,money:res.data.result.money,city_name:res.data.result.city_name,order_id:res.data.result.order_id}})
				}else{
					Toast({
						message: res.data.message,
						position: 'bottom',
						duration: 3000
					})
				}
			})
			
		}
	  },
	  mounted(){
	  	//获取电费充值配置
		axios.post('index/Electric/getElectricConfig.html',{ 		
	
		}).then(res => {
//			console.log(res)
			this.arr=res.data.result
		})
		//未完成订单
		axios.post('index/Electric/myNotOrder.html',{ 		
//				config_id:this.config_id
			}).then(res => {
//				console.log(res)
//				"DF201901161547622002DWGYW9"
			})
	
	  }
	}
</script>

<style scoped="scoped">
	.hf{
		width:100%;
		overflow:hidden;
		margin-top:0.2rem;
		/*display: flex;*/
		margin-bottom: 0.1rem;
		/*justify-content:space-between;*/
	}
	.btn{
		width:2.2rem;
		display: block;
		border:0.01rem solid #64b990;
		border-radius:0.05rem;
		float: left;
		background: #fff;
		font-size:0.2rem;
		color:#64b990;
		height:1.1rem;
		margin-bottom: 0.3rem;
		margin-right:1%;
		margin-left:0.2rem;
	}
	.btn>p:nth-child(1){
		font-size:0.32rem;
		/*color:black;*/
	}
	.btn>p:nth-child(2){
		font-size:0.18rem;
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
		margin:0.4rem auto;
		display:block;
	}
	.active1{
		color:#FF0000;
		border:#FF0000 0.02rem solid ;
	}
</style>