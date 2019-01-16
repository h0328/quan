<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			站内公告
		</header>
		<section>
			
		</section>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
	export default {
	name: 'gonggao',
	  data () {
	    return {
			
	    }
	  },
	  methods:{
		back(){
		  		this.$router.push('/home')
		  	},
	  },
	  mounted() {
	   axios.post('index/article/article_list.html',{ 
	   	type_id:'2'
			}).then(res => {
//			  console.log(res.data.result.data)
			  $('section').html(res.data.result.list[0].title)
			})
	    
	}
  
}
</script>

<style scoped="">
	header{
		width:100%;
		height:0.88rem;
		background:#fff;
		text-align:center;
		position:relative;
		line-height:0.88rem;
		font-size:0.34rem;
		border-bottom:0.02rem solid #bebebe;
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
	
	section{
		flex:1;
		width:100%;
		height:calc(100% - 1.92rem);
		/*background:#ededed;*/
		text-align:center;
		padding-top:0.1rem;
		position:relative;
	}
</style>