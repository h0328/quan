<template>
	<div>
		<section>
			<p class="invite">邀请总数：{{zs}}<span class="invite_money">所获奖励：{{jl}}</span></p>
			<div class="yq" v-for="item in arr">
				<img :src=item.headimgurl />
				<span class="username">{{item.username}}</span>
				<span class="time">{{item.regtime}}</span>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	
export default {
	name: 'yaoqing_1',
	data () {
		return{
			arr:[],
			zs:'',
			jl:''
		}
	},
	mounted(){
		axios.post('index/Invite/invite_list.html',{ 		
  			
		}).then(res => {
			this.arr=res.data.result.list
			console.log(this.arr)
		})
		axios.post('index/Invite/my_invite.html',{ 		
  			
		}).then(res => {
			this.zs=res.data.result.data.count
			this.jl=res.data.result.data.money
			if(!this.jl){
				this.jl = '0.00'
			}
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
	.invite{font-size:0.26rem;border-bottom:0.01rem solid #ccc;padding:0.3rem}
	.invite_money{color:red;float:right;}
	.yq{font-size:0.26rem;color:#333;width:100%;height:0.5rem;padding:0.5rem 0;border-bottom:0.01rem solid #ccc}
	.yq img{float:left;width:1rem;border-radius:50%;margin-left:0.3rem;margin-top:-0.3rem;margin-right:0.3rem}
	.username{float:left;width:40%;text-align:left;}
	.time{float:right;margin-right:0.3rem}
</style>