<template>
	<div>
		<!--<div class="hf">
				<button class="btn" @click="jine(10)">
					<p>10元</p>
					<div>售价：9.98元&nbsp;&nbsp;<p>库存：1</p></div>
				</button>
				<button class="btn" @click="jine(20)">
					<p>20元</p>
					<div>售价：9.98元&nbsp;&nbsp;<p>库存：1</p></div>
				</button>
				<button class="btn" @click="jine(30)">
					<p>30元</p>
					<div>售价：9.98元&nbsp;&nbsp;<p>库存：1</p></div>
				</button>
			</div>
			<div class="hf">
				<button class="btn" @click="jine(50)">
					<p>50元</p>
					<div>售价：9.98元&nbsp;&nbsp;<p>库存：1</p></div>
				</button>
				<button class="btn" @click="jine(100)">
					<p>100元</p>
					<div>售价：9.98元&nbsp;&nbsp;<p>库存：1</p></div>
				</button>
				<button class="btn" @click="jine(200)">
					<p>200元</p>
					<div>售价：9.98元&nbsp;&nbsp;<p>库存：1</p></div>
				</button>
			</div>-->
			<div class="xin-x" style="position:relative;">
				<p>充值号码：<span>{{num}}</span></p>
				<p style="margin-top:0.2rem;">充值金额：<span style="color:red;">{{je}}</span></p>
				<!--<p style="margin-top:0.2rem;">库存：<span></span></p>-->
				<p style="color:#CCCCCC;margin-top:0.15rem;font-size:0.24rem;">请确认您的充值号码和充值金额！并在15分钟内完成充值！</p>
				<div id="time">{{time}}</div>
			</div>
			<div class="ts">
				<h1>来源及提示:</h1>
				<p style="margin-top:0.1rem;">1.请确认您的充值号码和充值金额</p>
				<p style="margin-top:0.1rem;">2.请确认您的充值号码和充值金额</p>
				<p style="margin-top:0.1rem;">3.请确认您的充值号码和充值金额</p>
			</div>
			<a href="javascript:;" class="czhi" style="margin-right:10%;">确认充值</a>
			<a href="javascript:;" class="czhi">换一换</a>
			
			
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
	export default {
	  name: 'chongzhi2',
	 data () {
	    return {
	    	je:'',
	    	time:'',
	    	num:''
	    }
	  },
	  methods:{	  	
	  	jine:function(a){
	  		this.je=a+'元';
	  	}

	  },
	  mounted(){
	  	
	  	//内部订单充值
	  	axios.post('index/Fare_Order/getFareOrder.html',{ 		
	  			type:1
			}).then(res => {
//				  console.log(res.data.result.data)
				this.num=res.data.result.data.mobile
				this.je=res.data.result.data.money
				
				if(this.num!=''){
			  		var than=this;
			  		var m = 14;  //分
		            var s = 59;  //秒                        
		            getCountdown();
		            setInterval(function(){ getCountdown() },1000);
		            function getCountdown (){
		                than.time = m+":"+s;
		                if( m == 0 && s == 0 ){
		                    m = 14;
		                    s = 59;
		                }else if( m >= 0 ){
		                    if( s > 0 ){
		                        s--;
		                    }else if( s == 0 ){
		                        m--;
		                        s = 59;
		                    }
		                }
		            }
	  			}
			})
	  }
	}
</script>

<style scoped="">
	.hf{
		width:100%;
		display: flex;
		margin-bottom: 0.3rem;
		justify-content:space-between;
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
		border:0.01rem solid crimson;
		border-radius:0.1rem;
		float: left;
		background: #fff;
		font-size:0.2rem;
		color:#DC143C;
		height:1rem;
	}
	.btn>p{
		font-size:0.3rem;
		color:black;
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
	.ts{
		margin-top:0.2rem;
		height:2.5rem;
	}
	.ts>h1{
		font-size:0.3rem;
		color:darkorange;
	}
	.ts>p{
		font-size:0.26rem;
		color:#333333;
	}
</style>