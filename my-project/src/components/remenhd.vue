<template>
	<div>
		<header>
			<span @click="back" class="iconfont icon-back"></span>
			热门活动
		</header>
		<section>
			<p>{{con}}</p>			
			<img :src=img />
		</section>
	</div>
</template>

<script>
	import axios from 'axios'
	import $ from 'jquery'
export default {
	name: 'remenhd',
	  data () {
	    return {
			con:'',
			img:'http://qqt.ruimofang.com/uploads/article/'
	    }
	  },
	  methods:{
		back(){
		  		this.$router.push('/home')
		  	},
	  },
	  mounted() {
	  	console.log(this.$route.query.id)
	   axios.post('index/article/article_details.html',{ 
	   	id:this.$route.query.id
			}).then(res => {
			  console.log(res.data.result.data)
			 	this.con=res.data.result.data.brief
			 	this.img+=res.data.result.data.img
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
	section>img{
		margin:0.2rem auto;
	}
	section>p{
		width:100%;
	}
	section>p>img{
		width:50%;
		
	}
</style>