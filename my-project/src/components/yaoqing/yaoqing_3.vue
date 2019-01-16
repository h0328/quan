<template>
	<div>
		<section>			
			<img :src=sc />		
			<p style="margin-left:0.2rem;">邀请码：<span>{{yqm}}</span><button class="copy" :data-clipboard-text="yqm" @click="copy">复制邀请码</button></p>
			<p style="font-size:0.28rem;text-align:left;color:#999;margin:0.2rem 0.4rem 0.1rem;">话费回收模块邀请规则如下，其他模块会逐步开放</p>
			<p style="font-size:0.26rem;text-align:left;color:#999;margin:0.1rem 0.4rem;line-height:0.36rem;">1，为防恶意注册，账户可提现金额大于等于1元方可产生邀请奖励；</p>
			<p style="font-size:0.26rem;text-align:left;color:#999;margin:0.1rem 0.4rem;line-height:0.36rem;">2，需要客户先关注卷卷通公众号，个人中心绑定手机号填写你的邀请码，邀请关系成立并且长期有效；</p>
			<p style="font-size:0.26rem;text-align:left;color:#999;margin:0.1rem 0.4rem;line-height:0.36rem;">3，话费回收模块奖励细则：直接邀请奖励0.2%，间接邀请奖励0.1%；例如：你邀请客户话费回收模块成功做单100元，你将得到0.2元奖励，你邀请的客户同时又邀请了别人做单100元，你还能得到0.1元奖励，奖励长期有效，邀请越多奖励越丰厚！</p>
		</section>		
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
import { Toast } from 'mint-ui'
import Clipboard from 'clipboard';
export default {
	name: 'yaoqing_3',
	data () {
		return{
			sc:'',
			yqm:''
		}
	},
	methods:{
		copy(){
//		  		let url = document.querySelector('.haom');
//			    url.select(); // 选择对象
//			    document.execCommand("Copy");
			        var clipboard = new Clipboard('.copy')
			        clipboard.on('success', e => {
			          Toast({
						  message: '复制成功',
						  position: 'bottom',
						  duration: 3000
						})
			          // 释放内存
			          clipboard.destroy()
			        })
			        clipboard.on('error', e => {
			          // 不支持复制
//			          console.log('该浏览器不支持自动复制')
			          // 释放内存
			          clipboard.destroy()
			        })

		  	}
	},
	mounted(){
		axios.post('index/User/user_qrcode.html',{ 		
  			
		}).then(res => {
//			console.log(res.data.result.data)
			this.sc=res.data.result.data.qr_code
			this.yqm=res.data.result.data.code
		})

	}
}
</script>

<style scoped="">
	section{	
		/*padding:0  0.2rem;*/
		flex: 1;
		overflow: hidden;
		margin-bottom:0.9rem;
	}
	section>img{
		display: block;
		width:60%;
		/*height:3rem;*/
		margin:0 20%;
		border-radius:0.1rem;
	}
	section p{text-align:center;}
	.copy{
		/*display:inline-block;*/
		min-width:0.8rem;
		height:0.4rem;
		text-align:center;
		line-height:0.3rem;
		border:0.02rem solid #ccc;
		border-radius:0.05rem;
		font-size:0.26rem;
		color:#64b990;
		margin-left:0.2rem;
		/*float:left;*/
		/*position:absolute;
		right:1rem;
		top:0.2rem;*/
	}
</style>