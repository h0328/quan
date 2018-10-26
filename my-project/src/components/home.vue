<template>
  <div class="home">
  	<section>
  		<div>
  			
  		</div> 		
  	</section>
  	
  	<footer>
  		<a>首页</a>
  		<a>充值</a>
  		<a>买券</a>
  		<a>卖券</a>
  		<a>我的</a>
  	</footer>
  </div>
</template>

<script>
	

	
export default {
  name: 'home',
  data () {
    return {
    	
    }
  }
}
</script>

<style scoped="">
	.home{
		height:100vh;
		position: relative;
	}
	section{
		flex:1;
	}
	footer{
		height:0.9rem;
		width:100%;
		border-top:0.01rem solid #ccc;
		position:fixed;
		left:0px;
		bottom:0px;
		display: flex;
		justify-content: space-around;
		align-items: center; 
		overflow: hidden;
	}

</style>
