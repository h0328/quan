<template>
	<div>
		<ul class="list" style="margin-top:0.7rem;">  			
  				<li v-for="item in arr">
  					<!--<router-link :to="{path:'/detail',query:{id:item.id}}" class="list">-->
  						<div style='width:100%;display:block;height:1.3rem;overflow:hidden;' @click=cz(item.mobile,item.money,item.order_id,item.locking_time,item.status,item.newvoucher) >
			  				<img :src=item.img style="width:1.25rem;float:left;height:1.2rem;border:0.02rem solid #ccc;margin-right:0.46rem;"/>
			  				<!--<span style="float:left;">剩余时间<span class="fen">{{item.t_user_id}}</span>:<span class="miao">{{item.u_user_id}}</span></span>-->
			  				<div style="float:left;">
			  					<p style="margin-top:0rem;font-size:0.26rem;color:#666;">充值号码:{{item.mobile}}</p>
			  				<!--<p style="margin-top:0rem;min-width:2rem;dcolor:#999;">面额:{{item.money}}</p>-->
			  					<p style="font-size:0.26rem;margin-top:0.2rem;color:#999;">接单时间:<br />{{item.locking_time}}</p>	
			  				</div>
			  				
			  				<div class="xiaq1" >
			  					<p>&yen;{{item.cash_money}}</p>
			  					<span style="color:#ccc;line-height:0.5rem;" >{{item.status}}</span>
			  					<!--<button @click="xj(item.order_id,item.newvoucher)" v-if=item.expire_time @click.stop>售后处理</button>-->
			  				</div>
		  				</div>
	  				<!--</router-link>-->
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
  name: 'huafeidd',
  data () {
    return {
    	arr:[],
    	zt:'',
    	is:false,
    	time:''
    }
  },
  methods:{
  	cz(e,r,t,i,p,a){
//		var timestamp = Date.parse(new Date())
//		var de = new Date(i)
//		var tim1 = de.getTime()
//		var timestamp1 =900000-(timestamp-tim1);
//		var minutes = parseInt((timestamp1 % (1000 * 60 * 60)) / (1000 * 60))
//		var seconds = parseInt((timestamp1 % (1000 * 60)) / 1000)
//		console.log(minutes,seconds)
		if (p == '待确认') {
			this.$router.push({path:"/chongzhi1_1",query:{num:e,money:r,order_id:t,time:i}})
		}else if(p == '已完成'){
			this.$router.push({path:"/after_sale",query:{order_id:t,newvoucher:a}})
		}
		
  	},
  	xj(e,a){
//		this.$router.push({path:"/after_sale",query:{order_id:e,newvoucher:a}})
//		console.log(e)
//		MessageBox.confirm('确定要申请充值异常吗？<p style="font-size:0.28rem;color:#666;">(确认后将扣取相应的订单金额)</p>').then(action => { 
//							 if (action == 'confirm') {     //确认的回调
//								axios.post('index/Fare_Order/after_sale.html',{ 		
//									order_id:e
//								}).then(res => {
//									
//									Toast({
//									  message: '申请成功',
//									  position: 'bottom',
//									  duration: 3000
//									})
//									location.reload()
//							 	})
//							 }
//							 }).catch(err => { 
//							 if (err == 'cancel') {     //取消的回调
//							 } 
//					})
  	}
  },
  mounted(){
//	话费订单
	axios.post('index/Fare_Order/myFareOrder.html',{ 		

	}).then(res => {
		var ar=res.data.result.list
		
//		console.log(ar)
		for (var i=0;i<ar.length;i++) {
//			console.log(ar[i].status)
			if (ar[i].status == 3) {
				ar[i].status='已完成'
				ar[i].expire_time=true
			}else if(ar[i].status == 4){
				ar[i].status='充值失败'
				ar[i].expire_time=false
			}else{
				ar[i].status='待确认'
				ar[i].expire_time=false
				var timestamp = Date.parse(new Date())
				var de = new Date(ar[i].locking_time)
				var tim1 = de.getTime()
				var timestamp1 =900000-(timestamp-tim1);
				var minutes = parseInt((timestamp1 % (1000 * 60 * 60)) / (1000 * 60))
		      	var seconds = (timestamp1 % (1000 * 60)) / 1000
		      	ar[i].t_user_id=minutes
		      	ar[i].u_user_id=seconds
////				console.log(minutes+':'+seconds)
//			var than=this;
	  		var m = ar[i].t_user_id;  //分
            var s = ar[i].u_user_id;  //秒                        
            getCountdown();            	
//			var interval = setInterval(function(){ getCountdown() },1000);
            function getCountdown (){
//              than.time = m+":"+s;
                if( m == 0 && s == 0 ){
//                  m = 14;
//                  s = 59;
                    clearInterval(interval)                    
	                }else if( m >= 0 ){
	                    if( s > 0 ){
	                        s--;
	                    }else if( s == 0 ){
	                        m--;
	                        s = 59;
	                    }
	                }
//	                console.log(ar[i].t_user_id)
//	                console.log(m,s)
//	                ar[i].t_user_id=m
//          		ar[i].u_user_id=s
	            }
            
			}
			
		}
		
		this.arr=ar
//		console.log(this.arr)
		
	})	
	
  }
}  
</script>

<style scoped="">
	.list>li{
		width:calc(100%-0.68rem);
		background:#fff;
		padding:0.2rem 0.1rem 0.1rem 0.3rem;
		border-bottom:0.02rem solid #ccc;
		height:1.25rem;
		font-size:0.26rem;
	}
	.xiaq{
		float:right;
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
		/*margin-top:-0.2rem;*/
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
		margin-top:-0.4rem;
	}
</style>