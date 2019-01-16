<template>
	<div>
		<div class="yq" v-for="item in arr">
				<!--<p style="font-size:0.24rem;color:#333;margin-left:0.06rem;">来源：{{item.remark}}</p>-->	
				<span style="font-size:0.24rem;color:#ccc;margin-left:0.06rem;">时间：{{item.create_time}}</span>
				<span style="font-size:0.24rem;float:right;color:#FF0000;">金额：{{item.money}}</span>				
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	
export default {
	name: 'tixian_2',
	data () {
		return{
			arr:[]
		}
	},
	mounted(){
		//提现列表
		axios.post('index/user/user_present_list.html',{ 		
  			status:1
		}).then(res => {			
			this.arr=res.data.result.list
			console.log(this.arr)
		})
	}
}
</script>

<style scoped="">
	.yq{
		width:96%;
		height:0.6rem;
		border:0.02rem solid #ccc;
		border-radius:0.1rem;
		margin:0 auto;
		margin-bottom:0.1rem;
		position:relative;
	}
</style>