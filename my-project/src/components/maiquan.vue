<template>
  <div class="home">
  	<header>
  		<span @click="back" class="iconfont icon-back"></span>
  		<p>我要卖券</p>
  	</header>	
  	
  	<section>
  		<div class="mz">
  			<h2 style="margin-left:0;"><span class="iconfont icon-fenlei" style="font-size:0.3rem;color:#FF0000;"></span>&nbsp;&nbsp;商品分类与价格</h2>
  			<div class="fenl" style="margin-top:0;width:48%;float:left;">
  					<span style="float:left;">商品类别:</span>  	
  					<div class="div1">
	  					<select  v-model='fenl1' >
	  						<option value='' disabled selected style='display:none;'>商品类别</option>					    
						    <option value='0' v-for="item in fenl1a" :value=item.id >{{item.name}}</option>					    
	  					</select>
  					</div>
  			</div>
  			<div class="fenl" style="margin-top:0;width:48%;float:right;">
  					<span style="float:left;">商家名称:</span> 
  					<div class="div1" v-if='sn' >
	  					<select  v-model='fenl2'  @change="sel(fenl2)">
	  						<option value='' disabled selected style='display:none;'>商家名称</option>					    
						    <option value='0' v-for="item in fenl2a" :value=item.id >{{item.name}}</option>					    
	  					</select>
	  				</div>
	  				<input style="width:46%;height:0.3rem;float:left;" v-if='sn1' placeholder="输入商家名称" type="text" v-model=sjn @change='hu(sjn)' />
  			</div>
  			<div class="fenl" style="margin-top:0.2rem;clear: both;">
  					<span>商品名称:</span>  					
  					<input style="width:4.8rem;outline:none;line-height:0.45rem;height:0.45rem;font-size:0.26rem;" type="text" v-model=spm placeholder="如：肯德基50元通用券"/>
  			</div>  			
  			<div class="fenl" style="float:left;border:0.02rem solid #ccc;width:45%;height:0.5rem;line-height:0.4rem;color:#FF0000;">面值：<input style="width:40%;height:0.3rem;" placeholder="输入金额" type="text" v-model=jiag1 /></div>
  			<div class="fenl" style="float:right;border:0.02rem solid #ccc;width:45%;height:0.5rem;line-height:0.4rem;color:#FF0000;">实际售价：<input style="width:40%;height:0.3rem;" placeholder="输入金额" type="text" v-model=jiag /></div>
  		</div>
  		
  		<div class="ts">
  			<h2><span class="iconfont icon-xinaixin" style="font-size:0.26rem;"></span>  使用说明</h2>
  			<textarea placeholder="请详细描述商品的有效期，和所适用的门店" v-model=shuom >
  				
  			</textarea>
  		</div>
  		
  		<p style="background:#fff;font-size:0.28rem;text-indent:0.2rem;line-height:0.6rem;"><span style="color:red;" class="iconfont icon-quan"></span>&nbsp;&nbsp;优惠券信息选择</p>
  		<div class="xz1">  			
  			<p>券1</p>
  			<div class="xq">
  				<div class="xq-1">
  					<span style="float:left;">二维码或条形码:</span>
  					<div class="btn-lg"><span>{{er}}</span>		
  						<input type="file" name="file" accept="image/*" @change="uploadAvatar">
  					</div>
						<p style="background:url(static/-5.jpg) no-repeat center center/cover;"></p>
  				</div>
  				<div class="xq-1">
  					<span>兑换码:</span>  					
  					<input style="outline:none;" type="text" v-model=dh placeholder="请输入兑换码(非必填)"/>
  					<p style="background:url(static/-6.jpg) no-repeat center center/cover;"></p>
  				</div>
  				<div class="xq-1" @click="openPicker">
  					<span>有效期:</span>
  					<input style="outline:none;background:#fff;" type="text" disabled="disabled" readonly="readonly" :value=time placeholder="请选择截至日期 (非必填)"/>
  					<p style="background:url(static/-7.jpg) no-repeat center center/cover;" ></p>
  				</div>
  			</div>
  		</div>
  		
  		
  		<div class="xz1 xz2" style="padding-bottom:0.9rem;" v-if='title'>  			
  			<p>券2<span style="float:right;" class="iconfont icon-shanchu" @click="sc"></span></p>
  			<div class="xq">
  				<div class="xq-1">
  					<span style="float:left;">二维码或条形码:</span>
  					<div class="btn-lg"><span>{{er1}}</span>		
  						<input type="file" name="file" accept="image/*" @change="uploadAvatar1">
  					</div>
						<p style="background:url(static/-5.jpg) no-repeat center center/cover;"></p>
  				</div>
  				<div class="xq-1">
  					<span>兑换码:</span>  					
  					<input style="outline:none;" type="text" v-model=dh1 placeholder="请输入兑换码(非必填)"/>
  					<p style="background:url(static/-6.jpg) no-repeat center center/cover;"></p>
  				</div>
  				<div class="xq-1" @click="openPicker1">
  					<span>有效期:</span>
  					<input style="outline:none;background:#fff;" type="text" disabled="disabled" readonly="readonly" :value=time1 placeholder="请选择截至日期(非必填) "/>
  					<p style="background:url(static/-7.jpg) no-repeat center center/cover;" ></p>
  				</div>
  			</div>
  		</div>
		
  		<div class="sc">
	  			<a @click="tj"><span class="iconfont icon-jia"></span>添加新券</a>
	  			<a @click="fb">立即发布</a>
  		</div>
		
  	</section>
  	
  	<!--<footer>  
  			
  			<router-link to="/home"><p class="iconfont icon-home" style="margin-top:0.08rem;font-size:0.4rem;"></p>首页</a></router-link>
	  		<router-link to="/chongzhi"><p class="iconfont icon-huafeichongzhi" style="margin-top:0.08rem;font-size:0.4rem;"></p>话费</a></router-link>
	  		<a :class="active"><p class="iconfont icon-quan" style="margin-top:0.08rem;font-size:0.4rem;"></p>卖券</a>
	  		<router-link to="/maiquan1"><a ><p class="iconfont icon-quanbao" style="margin-top:0.08rem;font-size:0.4rem;"></p>买券</a></router-link>
	  		<router-link to="/wode"><a ><p class="iconfont icon-wode" style="margin-top:0.08rem;font-size:0.4rem;"></p>我的</a></router-link>
  	</footer>-->
  	<mt-datetime-picker
		    ref="picker"
		    type="date"
		    :startDate = "startDate"
		    @confirm="handleConfirm"
		    >
		 </mt-datetime-picker>
		 <mt-datetime-picker
		    ref="picker1"
		    type="date"
		    :startDate = "startDate"
		    @confirm="handleConfirm1"
		    >
		 </mt-datetime-picker>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	
import { Toast } from 'mint-ui'
export default {
  name: 'maiquan',
  data () {
    return {
    	startDate: new Date(),
			active:'active',
			eimg:[],
			er:'上传二维码或条形码截图',
			er1:'上传二维码或条形码截图',
			shuom:'',
			jiag1:'',
			jiag:'',
			fenl1:'',
			fenl1a:[],
			fenl2:'',
			fenl2a:[],
			spm:'',
			dh:'',
			time:'',
			time1:'',
			times:[],
			dh:'',
			dh1:'',
			dhs:[],
			title:false,
			sjn:'',
			sn:true,
			sn1:false,
			sid:''
    }
  },
//wacth:{
//	signReasonVisible:function(newvs,oldvs){//picker关闭没有回调函数，所以侦听该属性替代
//      console.log(newvs,oldvs)
//      if(newvs){
//          this.closeTouch();
//      }else{
//          this.openTouch();
//      }
//  }
//},
  methods:{
  	sel(e){
//		console.log(e)
  		if (e == undefined) {
  			this.sn1=true
  			this.sn=false
  		}
  	},
  	hu(e){
  		axios.post('index/Supplier/add.html',{
				name:e
			}).then(res=>{
				this.sid=res.data.result.id
			})
  	},
  		back(){
//		  		this.$router.go('/wode')
				this.$router.push('/home')
		  	},
			uploadAvatar(avatar) {
	      let file = avatar.target.files[0]
	      let data = new FormData();
	      data.append("image", file, file.name);//很重要 data.append("file", file);不成功
	      data.append('data',112)
//	      console.log(data)
	      return axios.post("index/Coupon_Goods/upload.html", data, {
	        
	      }).then(res=>{
//	      	console.log(res)
	      	this.er='已上传'
	      	this.eimg.push(res.data.result)
//	      	console.log(this.eimg)
	      })
		 
		},
		uploadAvatar1(avatar) {
	      let file = avatar.target.files[0]
	      let data = new FormData();
	      data.append("image", file, file.name);//很重要 data.append("file", file);不成功
	      data.append('data',112)
	      return axios.post("index/Coupon_Goods/upload.html", data, {
	        
	      }).then(res=>{
	      	this.er1='已上传'
	      	this.eimg.push(res.data.result)
//	      	console.log(this.eimg)
	      })
		 
		},
		openPicker() {
        this.$refs.picker.open();
//      this.closeTouch();
      },
    openPicker1() {
        this.$refs.picker1.open();    
//      this.closeTouch();
     },		
    handleConfirm (data) {	
			  var time=data.getFullYear() + '年' + (data.getMonth() + 1) + '月' + data.getDate() + '日';
//			  console.log(time)
				this.time=time
		},
		handleConfirm1 (data) {	
        var time=data.getFullYear() + '年' + (data.getMonth() + 1) + '月' + data.getDate() + '日';
//				console.log(time)
				this.time1=time
		},
//    closeTouch(){
//        document.getElementsByTagName("body")[0].addEventListener('touchmove',
//          this.handler,{passive:false});//阻止默认事件
//        console.log("closeTouch haved happened.",1);
//      },
//    openTouch(){
//        document.getElementsByTagName("body")[0].removeEventListener('touchmove',
//          this.handler,{passive:false});//打开默认事件
//        console.log("openTouch haved happened.",2);
//      },
 		tj(){
 			
			if (this.title == false) {
				this.title=true
				
			}else{
				Toast({
					  message: '一次做多只能发布两张券',
					  position: 'bottom',
					  duration: 3000
				})
			}			
 		},
 		sc(){
					this.title=false
		},		
 		fb(){
 			if (this.time != '') {
 				this.times.push(this.time)
 			}
 			if (this.time1 != '') {
 				this.times.push(this.time1)
 			}
 			
 			if (this.dh1 != '') {
 				this.dhs.push(this.dh1)
 			}
 			if (this.dh != '') {
 				this.dhs.push(this.dh)
 			}
			var i=JSON.stringify(this.eimg)
			var t=JSON.stringify(this.times)			
			var d=JSON.stringify(this.dhs)
//			console.log(this.fenl1,this.fenl2,this.spm,this.jiag,this.jiag1,this.dhs,this.eimg,this.shuom,this.times)
					if (this.fenl1 !='' && this.spm !='' && this.jiag !='' && this.jiag1 != '' && this.eimg != '' && this.shuom != '') {
						if(this.sid !=''){
							axios({
						    method:"post",
						    url:"index/Coupon_Goods/goods_add.html",
						    data:{
						    			type_id:this.fenl1,
						    			supplier_id:this.sid,
						        	name:this.spm,
							  			price:this.jiag,
							  			market_price:this.jiag1,
							  			code:this.dhs,
							  			code_url:this.eimg,
							  			explain:this.shuom,
							  			end_time:this.times
						    }				    	
								}).then((res)=>{
//									console.log(res.data.message)
									Toast({
									  message: res.data.message,
									  position: 'bottom',
									  duration: 3000
									})
								  this.$router.push('/maiquan1')
								})	
						}else{
							axios({
						    method:"post",
						    url:"index/Coupon_Goods/goods_add.html",
						    data:{
						    			type_id:this.fenl1,
						    			supplier_id:this.fenl2,
						        	name:this.spm,
							  			price:this.jiag,
							  			market_price:this.jiag1,
							  			code:this.dhs,
							  			code_url:this.eimg,
							  			explain:this.shuom,
							  			end_time:this.times
						    }				    	
								}).then((res)=>{
//									console.log(res.data.message)
									Toast({
									  message: res.data.message,
									  position: 'bottom',
									  duration: 3000
									})
								  this.$router.push('/maiquan1')
								})
						}
							
					}else{
						if (this.fenl1 == '') {
							Toast({
									  message: '请选择商品类别',
									  position: 'bottom',
									  duration: 3000
									})
						}
						if (this.fenl2 == '') {
							Toast({
									  message: '请选择商家名称',
									  position: 'bottom',
									  duration: 3000
									})
						}
						if (this.spm == '') {
							Toast({
									  message: '请输入商品名称',
									  position: 'bottom',
									  duration: 3000
									})
						}
						if (this.jiag == '') {
							Toast({
									  message: '请输入实际售价',
									  position: 'bottom',
									  duration: 3000
									})
						}
						if (this.jiag1 == '') {
							Toast({
									  message: '请输入面值',
									  position: 'bottom',
									  duration: 3000
									})
						}
						if (this.shuom == '') {
							Toast({
									  message: '请填写使用说明',
									  position: 'bottom',
									  duration: 3000
									})
						}
						if (this.eimg == '') {
							Toast({
									  message: '请上传二维码截图',
									  position: 'bottom',
									  duration: 3000
									})
						}
					}
			
	
		 		}
		
  },
  mounted(){
		axios.post('index/Coupon_Type/index.html',{
			
		}).then(res=>{
			this.fenl1a=res.data.result.list
//			console.log(this.fenl1a)
		})
		axios.post('index/Supplier/index.html',{
			
		}).then(res=>{
			this.fenl2a=res.data.result.list
			this.fenl2a.push({name:"其他"})
		})
		
					
  }
  
}
</script>

<style scoped="scoped">
	.home{
		/*height:100vh;*/
		position: relative;
	}
	header{
		width:100%;
		height:0.88rem;
		background:#fff;
		text-align:center;
		line-height:0.88rem;
		font-size:0.34rem;
		border-bottom:0.02rem solid #bebebe;
		position:fixed;
		top:0;
		left:0;
		z-index:5;
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
	input{
		border:none;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
	}
	.div1{
        width:1.8rem;
        height:0.5rem;
        border-radius:0.1rem;
        /*box-shadow: 0 0 0.1rem #ccc;*/
        position: relative;
        float:left;
 	}
    select{
        border: none;
        outline: none;
        color:#999;
        width: 1.8rem;
        height: 0.5rem;
        line-height:0.5rem;
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
	textarea{
		border:none;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
		width:90%;
		height: 1.1rem;
		margin:0 5%;
		font-size:0.28rem;
	}
	/*select{
		border:none;
		outline: none;
		border-radius: 0;
	}*/
	/*option{
		font-size:0.26rem;
		color:#666;
	}*/
	
	
	section{
		flex:1;
		background:#ededed;
		width:calc(100% - 0.08rem);
		margin-top:0.88rem;
		margin-bottom:0.92rem;
	}
	.ts{
		width:100%;
		height:1.8rem;
		background:#fff;
	
		margin-bottom:0.1rem;
	}
	h2{
		line-height:0.65rem;
		font-size:0.28rem;
		font-weight:400;
		margin-left:0.2rem;
	}
	.ts>h2>span{
		font-size:0.28rem;
		color:red;
	}
	.ts>p{
		margin-left:0.55rem;
		font-size:0.26rem;
		line-height:0.4rem;
	}
	.mz{
		width:calc(100%-0.44rem);
		height:3.3rem;
		line-height:0.81rem;
		background:#fff;
		padding:0 0.2rem;
		/*margin-bottom:0.1rem;*/
			border-bottom:0.02rem solid #c1c1c1;
	}

	.xz1{
		width:calc(100%-0.4rem);
		height:3.6rem;
		background:#fff;
		padding:0.2rem 0.2rem;
		padding-top:0;
	}
	.xz1>p:nth-child(1){
		line-height:0.52rem;
		border-bottom:0.02rem solid #ccc;
		padding-left:0.38rem;
		padding-right:0.38rem;
		font-size:0.28rem;
	}
	
	.xq{
		width:100%;
		height:2.7rem;
		/*display:flex;
		justify-content: space-around;*/
	}
	.fenl{
		margin-left:0 !important;
		width:100%;
		height:0.6rem;
		margin-bottom:0.26rem;
		border-radius:0.1rem;
		line-height:0.5rem;
		font-size:0.26rem;
		color:#26A2FF;
		text-indent:0.2rem;		
		border:0.02rem solid rgb(204, 204, 204);
		box-sizing:border-box;
		overflow:hidden;
	}
	.xq-1{
		width:100%;
		height:0.7rem;
		margin-bottom:0.1rem;		
		margin-top:0.2rem;
		border-radius:0.1rem;
		line-height:0.6rem;
		font-size:0.26rem;
		color:#26A2FF;
		text-indent:0.2rem;
		border:0.02rem solid indianred;
		box-sizing:border-box;
	}
	.btn-lg{
		position: relative;
		float:left;
		width:60%;
		height:0.7rem;
		color:#ccc;
		/*border:0.02rem solid #000;*/
	}
	.btn-lg>input{
		 position: absolute;
		 top: 0;left: 0;
		 opacity: 0;
		 cursor: pointer;
		 height:0.65rem;
	}
	.xq-1>p{
		float:right;
		width:0.3rem;
		height:0.3rem;
		display:inline-block;
		margin-top:0.2rem;
		margin-right:0.1rem;
	}
	.xq-1>input{
		
		width:70%;
		height:0.5rem;
	}
	.sc{
		width:100%;
		height:0.8rem;
		position:fixed;
		bottom:0rem;
		left:0;
		z-index:3;
		/*margin-top:2rem;*/
	}
	.sc>a{
		display: block;
		width:50%;
		height:0.8rem;
		text-align: center;
		line-height:0.8rem;
		float:left;
	}
	.sc>a:nth-child(1){
		background:#fff;
		color:#333;
		font-size:0.32rem;
	}
	.sc>a:nth-child(2){
		background:red;
		font-size:0.32rem;
		color:#fff;
	}
	
	footer{
		height:1.8rem;
		width:100%;
		border-top:0.02rem solid #ccc;
		position:fixed;
		left:0px;
		bottom:0px;
		display: flex;
		justify-content: space-around;
		align-items: center; 
		overflow: hidden;
		background:#fff;
	}
	footer>a{
		display:block;
		text-align:center;
		height:0.89rem;
		width:20%;
		font-size:0.24rem;
	}
	.active{
		border-top:red 0.01rem solid ;
		font-size:0.24rem;
		color:red;
	}
	.active>p{
		color:red;
	}
	.iconfont{
		color:#676767;
	}
</style>
