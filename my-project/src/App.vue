<template>
  <div id="app" v-if='is'>
    
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'	
import Router from 'vue-router'
export default {
  name: 'App',
  data(){
  	return{
  		is:true
  	}  	
	}
//	beforeCreate: function (){
//		//获取token	
//			axios.post('http://qqt.ruimofang.com/index/pay/index.html',{ 		
//	
//			}).then(res => {
////				console.log(res.data.result.token)
//						localStorage.setItem("token",res.data.result.token);		
//						
//			})
//	//		用户openid
//			axios.post('http://qqt.ruimofang.com/index/user/get_user_info.html',{ 		
//	
//			}).then(res => {
//					localStorage.setItem("openid",res.data.result.data.openid);
//			})		
//	}
}
</script>

<style>
#app {
  font-family: "微软雅黑", Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh;
  display: flex;
	flex-direction: column;
  margin:0;
  padding:0;
}
</style>
