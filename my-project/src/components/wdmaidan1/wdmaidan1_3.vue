<template>
	<div>
		<ul class="list">  			
  				<li v-for="item in arr">
  					<!--<router-link :to="{path:'/detail',query:{id:item.id}}" class="list">-->
		  				<img :src='`http://qqt.ruimofang.com/uploads/supplier/${item.img}`' style="width:1.25rem;float:left;height:1.2rem;border:0.02rem solid #ccc;margin-right:0.46rem;"/>
		  				<div class="xiaq">
		  					<p>{{item.name}}</p>
		  					<p>{{item.supplier_name}}</p>
		  					<p style="margin-top:0.1rem;">面值:<span style="text-decoration: line-through;">{{item.market_price}}</span></p>
		  				</div>
		  				<div class="xiaq1" >
		  					<p>售价:&yen;{{item.price}}</p>
		  					<span style="color:#ccc;line-height:1rem;">已完成</span>
		  					<!--<button >去使用</button>-->
		  				</div>
	  				<!--</router-link>-->
	  			</li>  			  			  			
  		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	
	export default {
	  name: 'wdmaidan1_3',
	  data () {
		return{
			arr:[]
		}
	  },
	  mounted(){
	  	//我的买单列表（已完成）
			axios.post('http://qqt.ruimofang.com/index/user/user_buy_order.html',{ 		
	  			status:'3'
			}).then(res => {
				this.arr=res.data.result.list
			})
		}
	}
</script>

<style scoped="">
	.list>li{
		width:calc(100%-0.68rem);
		background:#fff;
		padding:0.3rem 0.1rem 0.2rem 0.3rem;
		border-bottom:0.02rem solid #ccc;
		height:1.3rem;
		font-size:0.26rem;
	}
	.xiaq{
		float:left;
	}
	.xiaq>p{
		margin-bottom:0.12rem;
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
		width:1.52rem;
		float: right;
		text-align:center;
	}
	.xiaq1>p{
		color:#ff0000;
		font-weight:300;
	}
	.xiaq1>button{
		border:none;
		color:#fff;
		border-radius:0.08rem;
		width:1.1rem;
		height:0.4rem;
		background:#ff0000;
		margin-top:0.2rem;
	}
</style>