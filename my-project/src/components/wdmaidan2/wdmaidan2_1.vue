<template>
	<div>
		<ul class="list" style="margin-top:0.7rem;">  			
  				<li v-for="item in arr">
  					<div style='width:100%;display:block;height:1.3rem;' @click="de(item.id)" class="list">
		  				<img :src='`http://qqt.ruimofang.com/uploads/supplier/${item.img}`' style="width:1.25rem;float:left;height:1.2rem;border:0.02rem solid #ccc;margin-right:0.46rem;"/>
		  				<div class="xiaq">
		  					<p>{{item.name}}</p>
		  					<p>{{item.supplier_name}}</p>
		  					<p style="margin-top:0.1rem;">面值:<span style="text-decoration: line-through;">{{item.market_price}}</span></p>
		  				</div>
		  				<div class="xiaq1" >
		  					<p>售价:&yen;{{item.price}}</p>
		  					<!--<span style="color:#ccc;line-height:0.5rem;">已上传</span>-->
		  					<button @click="xj(item.id,item.status)" v-if=item.good_id v-bind:value=item.status @click.stop>{{item.status}}</button>
		  				</div>
	  				</div>
	  			</li>  			  			  			
  		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
	export default {
	  name: 'wdmaidan2_1',
	  data () {
		return{
			arr:[]
		}
	  },
	  methods:{
	  	de(e){
	  		this.$router.push({path:'/detail', query: {id:e}})
	  	},
	  	xj(e,r){
//	  		event.toElement.innerHTML='上架'
			if (r == '下架') {				
					MessageBox.confirm('确定要下架该商品吗？').then(action => { 
							 if (action == 'confirm') {     //确认的回调
								axios.post('index/Coupon_Goods/updateCouponGoods.html',{ 		
									id:e,
									status:4
								}).then(res => {
									location.reload()
//									Toast({
//									  message: '下架成功',
//									  position: 'bottom',
//									  duration: 3000
//									})
									
							 	})
							 }
						}).catch(err => { 
							 if (err == 'cancel') {     //取消的回调
							 } 
					})	
				
			}else if(r =='上架'){
					MessageBox.confirm('确定要重新上架该商品吗？').then(action => { 
							 if (action == 'confirm') {     //确认的回调
								axios.post('index/Coupon_Goods/updateCouponGoods.html',{ 		
									id:e,
									status:2
								}).then(res => {
									
//									Toast({
//									  message: '上架成功',
//									  position: 'bottom',
//									  duration: 3000
//									})
									location.reload()
							 	})
							 }
							 }).catch(err => { 
							 if (err == 'cancel') {     //取消的回调
							 } 
					})
			}
	  			
	  		
/*			if (r == 2) {
				this.sx='上架商品'
				
			}else if(r == 4){
				this.sx='下架商品'
				axios.post('index/Coupon_Goods/updateCouponGoods.html',{ 		
					id:e,
					status:2
				}).then(res => {
					console.log(res.data.message)
	//				this.arr=res.data.result.list
	//				console.log(this.arr)
					this.sx='下架商品'
				})
			}*/
			
	  	}
	  },
	  mounted(){
	  	//我的卖单列表（已上传）
			axios.post('index/user/user_sell_order.html',{ 		

			}).then(res => {
				var ar=res.data.result.list
//				console.log(res.data.result.list)
				for (var i=0;i<ar.length;i++) {
					if (ar[i].status == 2) {
						ar[i].status='下架'
					}else{
						ar[i].status='上架'
					}
					if (ar[i].good_id !=null) {
						ar[i].good_id=false
					}else{
						ar[i].good_id=true
					}
				}
				this.arr=res.data.result.list

			})

		}
	}
</script>

<style scoped="">
	.list>li{
		width:calc(100%-0.68rem);
		background:#fff;
		padding:0.3rem 0.1rem 0.3rem 0.3rem;
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
		min-width:1.1rem;
		height:0.4rem;
		background:#ff0000;
		margin-top:0.4rem;
	}
</style>