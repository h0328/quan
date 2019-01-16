<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			售后处理
		</header>
		<div class="ner" v-if="bn">
			<span style="font-size:0.28rem;margin-right:0.4rem;margin-left:0.4rem;margin-top:0.2rem;color:#999;">更新凭证：  </span>
			<div class="xq-1">
  				<span style="float:left;">上传凭证截图:</span>
  				<div class="btn-lg"><span>{{er}}</span>	
  					<input type="file" name="file" accept="image/*" @change="uploadAvatar">
  				</div>
				<p style="background:url(static/-5.jpg) no-repeat center center/cover;"></p>
  			</div>
  			<div class="ne" style="margin-bottom:0.8rem;" @click="qr">
				更 新 凭 证
			</div>
		</div>
		
		<div class="ner_b">
			<span style="font-size:0.28rem;margin-right:0.4rem;margin-left:0.3rem;margin-top:1rem;color:#999;">申请充值异常：  </span>
			<div class="ne" @click="xj">
				确 认 申 请 充 值 异 常
			</div>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Toast } from 'mint-ui'
import { MessageBox } from 'mint-ui'
export default {
  name: 'after_sale',
  data () {
    return {
    	er:'请上传话费充值成功凭证',
    	result:'',
    	bn:true
    }
  },
  methods:{
  		back(){
		  	this.$router.push('/huafeidd')
		},		
		uploadAvatar(avatar) {

	  			let file = avatar.target.files[0]
			      let data = new FormData();
			      data.append("image", file, file.name);//很重要 data.append("file", file);不成功
			      data.append('data',112)
			      
			      return axios.post("index/Coupon_Goods/upload.html", data, {			        
			      }).then(res=>{
			      	console.log(data)
			      	this.er='已选取'
			      	this.result=res.data.result
					console.log(this.result)
			      })
//	  		}

		 	
		},
		qr(){
			if (this.er == '已选取') {
				axios.post('index/Fare_Order/update_newvoucher.html',{ 		
		  			order_id:this.$route.query.order_id,
		  			newvoucher:this.result
				}).then(res => {
					Toast({
						  message: '更新完成',
						  position: 'bottom',
						  duration: 3000
						})
					this.$router.push('/huafeidd')
					
				})
			}else{
				Toast({
						message: '请上传凭证',
						position: 'bottom',
						duration: 3000
					})
			}
			
		},
		xj(){
  		MessageBox.confirm('确定要申请充值异常吗？<p style="font-size:0.28rem;color:#666;">(确认后将扣取相应的订单金额)</p>').then(action => { 
							 if (action == 'confirm') {     //确认的回调
								axios.post('index/Fare_Order/after_sale.html',{ 		
									order_id:this.$route.query.order_id
								}).then(res => {
									
									Toast({
									  message: '申请成功',
									  position: 'bottom',
									  duration: 3000
									})
									this.$router.push('/huafeidd')
							 	})
							 }
							 }).catch(err => { 
							 if (err == 'cancel') {     //取消的回调
							 } 
					})
  	}
  },
  mounted(){
  	if (this.$route.query.newvoucher!=null) {
  		this.bn=false
  	}else{
  		this.bn=true

  	}
  },
  beforeCreate: function () {
  	
  }
}
</script>

<style scoped="scoped">
	header{
		width:100%;
		height:0.9rem;
		background:#FFF;
		position:relative;
		font-size:0.34rem;
		text-align: center;
		line-height:0.9rem;
		border-bottom:#ededed solid 0.02rem;
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
	.ner{
		margin-top:0.2rem;
		
	}
		.xq-1{
		width:96%;
		margin-left:2%;
		float:left;
		height:0.7rem;
		margin-bottom:0.1rem;		
		margin-top:0.4rem;
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
		    width: 100%;
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
	.ne{
		width:84%;
		margin-top:0.4rem;
		margin-bottom:0.4rem;
		float:left;
		margin-left:5%;
		padding:0 0.2rem;
		min-width:10%;
		height:0.7rem;
		line-height:0.7rem;
		text-align:center;
		font-size:0.26rem;
		color:#fff;
		background:indianred;
		border-radius:0.05rem;
	}
	.ner_b{
		width:100%;
		height:2rem;
		margin-top:0.4rem;
	}
</style>