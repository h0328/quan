<template>
	<div>
		<ul class="list">  			
			<li v-for="item in arr">
				<img :src=item.img style="width:1.25rem;float:left;height:1.2rem;border:0.02rem solid #ccc;margin-right:0.46rem;"/>
				<div class="xiaq">
					<p>手机号码：{{item.mobile}}</p>
					<p>面额：{{item.money}}</p>
					<p>下单时间：{{item.create_time}}</p>
				</div>
				<div class="xiaq1" >
					<p>&yen;{{item.price}}</p>
					<div v-if="item.status_name">
						<p>{{item.status_name}}</p>
					</div>
					<div v-else >
					<button @click=status(item.order_id)>申请售后</button>
					</div>
				</div>
			</li>  			  			  			
  		</ul>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui'
export default {
  	name: 'huafeidd1',
  	data () {
    	return {
    		arr:[]
    	}
  	},
  	mounted(){
  		
		axios.post('index/Fare_Order/myAddFareOrder.html',{ 		
		}).then(res => {
			var ar=res.data.result.list
			for (var i=0;i<ar.length;i++) {
				if (ar[i].status == 2) {
					var de = new Date(ar[i].expire_time)
					var tim1 = de.getTime()
					var timestamp = Date.parse(new Date())
					if(timestamp-tim1 > 0){
						ar[i].status_name=''
					}else{
						ar[i].status_name='已支付'
					}
				} else if(ar[i].status == 1){
					ar[i].status_name='未支付'
				}else if(ar[i].status == 4){
					ar[i].status_name='已申请售后'
				}else{
					ar[i].status_name='已完成'
				}
				this.arr=ar
			}
		})	
  	},
	methods:{
  		status(id){
			MessageBox.confirm('确定申请售后吗？').then(action => { 
				if (action == 'confirm') {     //确认的回调
					axios.post('index/Fare_Order/updateFareOrderExpire.html',{ 		
						order_id:id
					}).then(res => {
						if(res.data.code == '00000'){
							this.$router.go(0)
						}else{
							MessageBox('温馨提示',res.data.message)
						}
					})	
				}
			}).catch(err => { 
			 	if (err == 'cancel') {     //取消的回调
			 	} 
			})
		}
  	},
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
	
	.xiaq p{
		font-size:0.25rem;
		margin-bottom:0.1rem
	}
	.xiaq1{
		width:1.52rem;
		float: right;
		text-align:center;
	}
	.xiaq1 p:nth-child(1){
		color:#ff0000;
		font-weight:500;
	}
	.xiaq1 div p{
		font-weight:300;
		margin-top:0.5rem
	}
	button{
		border:none;
		color:#fff;
		border-radius:0.08rem;
		min-width:1.1rem;
		height:0.4rem;
		background:#ff0000;
		margin-top:0.5rem;
	}
</style>