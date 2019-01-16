<template>
	<div>
			<div class="yq" v-for="item in arr">
				<span class="time">{{item.create_time}}</span>
				<span class="money">{{item.money}}</span>
				<span class="remark">{{item.type_name}}<span style="color:#999;">({{item.level_name}})</span></span>
			</div>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	
export default {
	  name: 'yaoqing_2',
	  data () {
		return{
			arr:[]
		}
	},
	mounted(){
		axios.post('index/Invite/reward_list.html',{ 		
  			
		}).then(res => {
//			console.log(res.data.result.list)
			this.arr=res.data.result.list
			  
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
	.yq{font-size:0.26rem;color:#333;width:100%;height:0.3rem;padding:0.3rem 0;display:flex;justify-content:space-around;border-bottom:0.01rem solid #ccc}
	.time{float:left;padding-left:4%;}
	.money{float:left;text-align:center;}
	.remark{float:left;text-align:center;}
</style>