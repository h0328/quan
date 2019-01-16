<template>
	<div>
<span style="font-size:0.28rem;margin-right:0.4rem;margin-left:0.2rem;margin-top:0.2rem;color:#999;">直接抢单：  <span class="iconfont icon-tishi" @click="tishi" style="color:cornflowerblue;"></span></span>
		<div class="hf">
				<button  v-for="item in arr" class="btn" @click='jine(item.count,item.money,item.id)' >
					<p>{{item.money}}元</p>
					<div>售价:{{item.cash}}元</div>
					<p>库存:{{item.count}}</p>
				</button>
		</div>
<span style="font-size:0.28rem;margin-right:0.4rem;margin-left:0.2rem;margin-top:0.4rem;color:#999;">根据条件精确抢单：</span>
			<div class="ts">
				<div class="div1">
				    <select name="" id="sel1" @change="se1" v-model="sid">
				        <option value='0' v-for="item in sarr" :value=item.id >{{item.province}}</option>
				    </select>
				</div>
				<div class="div1">
				    <select name="" id="sel3" v-model="yid">
				        <option value='0' v-for="item in yarr" :value=item.id >{{item.operator}}</option>
				    </select>
				</div>
				<div class="div1" style="width:1.6rem;">					
				    <select name="" id="sel4" v-model="qi">
				        <option value='0' v-for="item in arr" :value=item.money >{{item.money}}</option>
				    </select>
				</div>
			</div>
			<div class="ts1">
				<div class="cx" @click="chax">查&nbsp;询</div>
			</div>
			<div class="ts2">
				<p style="line-height:0.5rem;color:#999;">温馨提示： </p>
				<p style="color:#999;">1,未完成的话费回收订单，可以在我的>我的卖单>话费订单里继续进行凭证上传和订单确认。</p>
				<p style="color:#999;">2,话费回收订单完成后，订单收入自动进入冻结账户，24小时后解冻并可以进行提现。</p>
				<p style="color:#999;">3,上传截图需含充值手机号+金额+成功状态，特殊情况可以先上传 然后联系在线客服或电话客服说明情况。</p>
				<p style="color:#999;">4,凭证上传成功后，又发现充值失败退款的，请自行点申请售后放弃订单，否则将有一定处罚！</p>
			</div>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
	export default {
	  name: 'chongzhi1',
	  data () {
	    return {
	    	arr:'',	    	
	    	order_id:'',
	    	num:'',
	    	sarr:[],
	    	sarr1:[],
	    	yarr:[],
	    	sid:0,
	    	tx1:'',
	    	sid1:1,
	    	tx2:'',
	    	yid:1,
	    	qi:"10.00"
	    }
	  },
	  methods:{	  	
	  	jine:function(a,e,d){
	  		console.log(d)
			axios.post('index/user/get_user_info.html',{ 		
	
			}).then(res => {
				if(res.data.result.data.mobile==''){
					MessageBox.confirm('请绑定手机号').then(action => { 
								 if (action == 'confirm') {     //确认的回调
									this.$router.push('/shoujihao')								 	
								 }
							 }).catch(err => { 
							 if (err == 'cancel') {     //取消的回调
							 } 
					})					
				}else{
					if(a == 0){					
						Toast({
						  message: '该面额库存不足',
						  position: 'bottom',
						  duration: 3000
						})
					}else{
						
						 MessageBox.confirm(`
												<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">1.请在15分钟内充值并上传凭证报单！禁止多充、禁止少充、禁止拆分充值！</p>
												<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">2.请使用快充渠道，禁止使用慢充渠道！24小时未到账直接失败处理！话费充值有15天售后期！</p>
												<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">3.对于假充（实际没充值点我已充值的）、伪造凭证等违规行为平台将永久封号处理！</p>
												<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">4.未完成订单点我的—我的卖单—话费订单处理；获取订单15分钟未充值及点我已充值处理的订单将自动释放！</p>
												<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">5.订单成功后结算金额自动进入冻结金额，24小时后可直接体现！</p>
												<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">以上规则我能读懂并自愿遵守，若有异议，请勿接单，若有违反，造成资金损失由自己承担！</p>
								`).then(action => { 
								 if (action == 'confirm') {     //确认的回调
									axios.post('index/Fare_Order/getFareOrderOne.html',{ 		
							  			config_id:d
									}).then(res => {
										console.log(res)
										this.num=res.data.result.data.mobile
										this.order_id=res.data.result.data.order_id
										var tit=res.data.result.data.locking_time
										this.$router.push({path:"/chongzhi1_1",query:{num:this.num,money:e,order_id:this.order_id,ti:tit}})
									})
								 	
								 }
								 }).catch(err => { 
								 if (err == 'cancel') {     //取消的回调
								 } 
						})					
					}
				}
			})
	  		
	  	},
	  	se1:function(){
//		  	console.log(this.sid)		
		  	axios.post('index/Cascade/province_city.html',{ 
				pid:this.sid
			}).then(res => {
				this.sarr1=res.data.result.list
//				console.log(this.sarr1)
			})
		},
		tishi(){
			MessageBox.alert(`<p style="font-size:0.28rem;line-height:0.5rem;text-align:left;">抢单攻略：</p><p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">1.库存有显示即可点击获取订单，注意规则；</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">2.复制手机号去相应渠道充值相应的金额，注意核对手机号，充值成功截图！</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">3.回到卷卷通上传截图并且点我已充值，15分钟内完成充值并上报！</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">4.需要指定充值地区或指定运营商的请通过精确抢单获取订单！</p>
											`)
		},
		chax(){
//			console.log(this.sid)
//			console.log(this.sid,this.sid1,this.yid,this.qi)
			this.noScroll()
			var options=$('#sel1 option:selected')
			this.tx1=options.text()
			var options1=$('#sel2 option:selected')
			this.tx1+=options1.text()
			var options2=$('#sel3 option:selected')
			this.tx2=options2.text()
//			console.log(this.qi)
			if(this.sid!=null && this.yid!='' && this.qi!=''){
				axios.post('index/Cascade/search.html',{ 
					pid:this.sid,
					coid:this.yid,
					value:this.qi
				}).then(res => {
//					console.log(this.sid,this.yid,this.qi)
					console.log(res)
					if (res.data.result.data != null) {
						MessageBox.confirm(`<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">1.请在15分钟内充值并上传凭证报单！禁止多充、禁止少充、禁止拆分充值！</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">2.请使用快充渠道，禁止使用慢充渠道！24小时未到账直接失败处理！话费充值有15天售后期！</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">3.对于假充（未充值报单）、伪造凭证等违规行为平台将永久封号处理！</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">4.未完成订单请到“我的”“话费订单”中处理，15分钟未充值订单将自动释放！</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">5.订单成功后结算金额自动进入冻结金额，24小时后可直接体现！</p>
											<p style="font-size:0.26rem;line-height:0.5rem;text-align:left;">以上规则我能读懂并自愿遵守，造成资金损失由自己承担！若有异议，请勿接单！</p>
											`).then(action => { 
							 if (action == 'confirm') {     //确认的回调
								axios.post('index/Fare_Order/getFareOrder.html',{ 		
						  			type:1,
						  			money:this.qi
								}).then(res => {
//									console.log(res.data.result.data)
									this.num=res.data.result.data.mobile
									this.order_id=res.data.result.data.order_id
									var tit=res.data.result.data.locking_time
									this.$router.push({path:"/chongzhi1_1",query:{num:this.num,money:this.qi,order_id:this.order_id,ti:tit,t1:this.tx1,t2:this.tx2}})
								})
							 	
							 }
							 }).catch(err => { 
							 if (err == 'cancel') {     //取消的回调
	//						 	console.log(2);
							 } 
						})
					}else{
						Toast({
						  message: '暂无对应条件的订单',
						  position: 'bottom',
						  duration: 3000
						})
					}
					
//					console.log(res.data.result.data)
				})
			}else{
				Toast({
					  message: '请输入完整条件进行查询',
					  position: 'bottom',
					  duration: 3000
					})
			}
		}
	  },
	  mounted(){
	  	axios.post('index/Fare_Config/getFareConfig.html',{ 		
	  			type:1
			}).then(res => {
				this.arr=res.data.result.list
//				console.log(this.arr)
			})
		axios.post('index/Cascade/province.html',{ 
			
			}).then(res => {
				this.sarr=res.data.result.list

			})
		axios.post('index/Cascade/province_city.html',{ 
				pid:this.sid
			}).then(res => {
				this.sarr1=res.data.result.list
//				console.log(this.sarr1)
			})
		axios.post('index/Cascade/operator.html',{ 	
			
			}).then(res => {
				this.yarr=res.data.result.list
//				console.log(this.yarr)
			})
//			console.log($('#sel1 option:first'))
//		$("#sel1 option:first").prop("selected", 'selected'); 

	  }
	}
</script>

<style scoped="">
	.hf{
		width:100%;
		overflow:hidden;
		margin-top:0.2rem;
		/*display: flex;*/
		margin-bottom: 0.1rem;
		/*justify-content:space-between;*/
	}
	input{
		border:none;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
	}
	#ipt{
		width:100%;
		font-size:0.35rem;
		height:0.8rem;
		border:none;
		border-bottom:0.01rem solid #ccc;
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
		margin-left:1%;
	}
	.btn>p:nth-child(1){
		font-size:0.32rem;
		/*color:black;*/
	}
	.btn>p:nth-child(2){
		font-size:0.18rem;
	}
	.xin-x{
		width:100%;
		height:2.5rem;
		border:0.01rem solid darkslateblue;
		margin-top:0.2rem;
		border-radius:0.2rem;
		padding:0.2rem 0.3rem;
		box-sizing: border-box;
	}
	.czhi{
		display: block;
		margin-top: 0.4rem;
		width:45%;
		height:1rem;
		float: left;
		text-align: center;
		line-height:1rem;
		color:#00FFFF;
		border-radius:0.2rem;
		font-size:0.35rem;
		background:blueviolet;
	}
	#time{
		position: absolute;
		top:0.1rem;
		right:0.08rem;
		color:darkgreen;
		font-size:0.24rem;
		color:goldenrod;
	}
	.div1{
        width:30%;
        height:0.7rem;
        border-radius:0.1rem;
        border: 0.02rem solid #64b990;
        position: relative;
        float:left;
 	}
    select{
        border: none;
        outline: none;
        color:#999;
        width: 100%;
        height: 0.7rem;
        font-size:0.32rem;
        line-height:0.7rem;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding-left: 0.15rem;
    }
    .div1:after{
    	content: "";
        width: 0.2rem;
        height: 0.2rem;
        background: url(../../static/xl.png) no-repeat center center/cover;
        position: absolute;
        right: 0.05rem;
        top: calc(50% - 0.1rem);
        pointer-events: none;
    }
	.ts{
		padding:0 0.1rem;
		margin-top:0.2rem;
		height:1.2rem;
		display:flex;
		justify-content: space-between;
	}
	.ts>h1{
		font-size:0.3rem;
		color:#ff0000;
	}
	.ts>p{
		font-size:0.26rem;
		color:#666;
	}
	.ts1{
		padding:0 0.2rem;
		height:0.8rem;
		
		display:flex;
		justify-content:space-between;
	}
	.ts1>select{
		border: 0.02rem solid #64b990;
		width:1.5rem;
        height:0.7rem;
        border-radius:0.1rem;
        /*box-shadow: 0 0 0.1rem #ccc;*/
       padding-left:0.1rem;
	}
	.ts1>input:-webkit-input-placeholder{
		color:#999;
	}
	.ts1>input:-moz-placeholder{
		color:#999;
	}
	.ts1>input:-ms-input-placeholder{
		color:#999;
	}
	.cx{
		width:100%;
		height:0.75rem;
		text-align:center;
		line-height:0.75rem;
/*		border:0.02rem solid #64b990;*/
		border-radius:0.05rem;
		color:#fff;
		background:indianred;
	}
	.ts2{
		padding:0rem 0.2rem 0.2rem;
		font-size:0.26rem;
		    color: #64b990;
		    line-height:0.4rem;
	}
</style>