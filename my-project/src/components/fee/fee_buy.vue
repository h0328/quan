<template>
	<div>
		<div class="acc mov">
			<span >户号</span>
			<input type="text" v-model="acc" placeholder="请输户号"/>
			<p style="position:absolute;right:0.22rem;font-size:0.24rem;color:#327AFF;">如何知道户号</p>
		</div>
		<div class="cinema mov" style="border:none;">
				<span>城市</span>
				<select name="" id="sel1" @change="se1" v-model="sid">
				    <option value='1' v-for="item in sarr" :value=item.id >{{item.city}}</option>
				</select>				
		</div>
		<div class="hf">
			<button v-for="(item,index) in arr" class="btn" :class="{active1:index==nowIndex}" @click="act(index,item.id)">
				<p>{{item.money}}元</p>
				<div>售价：{{item.price}}元</div>
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
	  name: 'fee_buy',
	  data () {
	    return {
	    	nowIndex:0,
	    	arr:[],
	    	sarr:[],
	    	config_id:1,
	    	sid:1,
	    	acc:''
	    }
	  },
	  
	  methods:{	  	
	  	act(i,e){
	  		this.nowIndex=i
	  		this.config_id=e
	  	},
	  	se1(){
//	  		console.log(this.sid)
	  	},
	  	tru(){
	  		if (this.acc!="") {
	  			//充值电费
	  			axios.post('index/Electric/addElectricOrder.html',{ 		
					config_id:this.config_id,
					mobile:this.acc,
					city:this.sid
				}).then(res => {
					console.log(res.data)
					if (res.data.code=='00000'){
						console.log(1)
					}
				})
	  		}else{
	  			Toast({
					message: '请输入户号',
					position: 'bottom',
					duration: 3000
				})
	  		}
	  	}

	  },
	  mounted(){
	  	//获取电费充值配置
		axios.post('index/Electric/getElectricConfig.html',{ 		
	
		}).then(res => {
			console.log(res)
			this.arr=res.data.result
		})
		//获取城市
		axios.post('index/Cascade/city.html',{ 		
	
		}).then(res => {
//			console.log(res)
			this.sarr=res.data.result.list
		})
			
		
		
		
		
	  }
	}
</script>

<style scoped="scoped">
	.mov{
		width: calc(100% - 0.4rem);
		height:1.08rem;
		line-height:1.08rem;
		margin:0 0.2rem;
		border-bottom:0.01rem solid #f4f4f4;
		color:#333;
		font-size:0.28rem;
		text-indent:0.2rem;
	}
	.mov>span{
		width:calc(20% - 0.28rem);
		float:left;
	}
	.acc{
		position:relative;
	}
	.acc>input{
		text-indent:0.23rem;
		line-height:1.08rem;
		width:78%;
		height:1.04rem;
		border:none;
		float:left;
	}
	.cinema>select{
		text-indent:0.23rem;
		line-height:1.08rem;
		width:28%;
		height:1.04rem;
		border:none;
		float:left;
		color:#666;
	}
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
		color:#969696;
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
		border:#FF0000 0.02rem solid;
	}
</style>