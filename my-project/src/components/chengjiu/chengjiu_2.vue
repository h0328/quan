<template>
	<div class="home1">
			<div class="yq" v-for="item in arr">
				<span class="time">{{item.create_time}}</span>
				<span class="money">{{item.money}}</span>
				<span class="remark">{{item.remark}}</span>
			</div>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	
export default {
	name: 'chengjiu_2',
	data () {
		return{
			arr:[]
		}
	},
	methods:{
		  	back(){
				this.$router.push('/wode')
		  	}
	},
	mounted(){
		axios.post('index/user/lock_money_log.html',{ 		
			
		}).then(res => {
			this.arr=res.data.result.list
		})
	}
}
</script>

<style scoped="">
/*.home{
		margin-top:1.62rem;
	}*/
section{	
		/*padding:0  0.2rem;*/
		flex: 1;
		overflow: hidden;
		margin-bottom:0.9rem;
	}
	.yq{font-size:0.26rem;color:#333;width:100%;height:0.3rem;padding:0.3rem 0;border-bottom:0.01rem solid #ccc}
	.time{float:left;width:33%;padding-left:4%;}
	.money{float:left;width:30%;text-align:center;}
	.remark{float:left;width:33%;text-align:center;}
</style>