import Vue from 'vue'
import Mint from 'mint-ui';
//import axios from 'axios'
import App from './App'
import router from './router'
import $ from 'jquery'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from './httpConfig/http'



import store from './store/store'
import { DatetimePicker } from 'mint-ui';
//import { DatetimePicker } from 'vant';


import 'mint-ui/lib/style.css'
Vue.use(Mint);

Vue.component(DatetimePicker.name, DatetimePicker);
import './icon/iconfont.css'

Vue.config.productionTip = false
	
$.ajax({
	type:"post",
	url:"http://test.ruimofang.com/index/init/logins.html",
	data:{user_id:3},
	async:false,
	success:function(data){
		localStorage.setItem("token",data);
//		console.log(data)
	}
});		

//http://qqt.ruimofang.com/index/init/logins.html
//var r=window.location.href
//	r = r.substring(r.indexOf("="),r.length).substr(1);
//	var t=r.split('#')[0]
//	var to=localStorage.getItem("token")
//	return to
		 	// axios response 拦截器
		axios.interceptors.request.use(
			config => {
			//			config.headers.value='authority'
			      config.headers.Authority = localStorage.getItem("token");
//			  console.log(config.headers)
			    return config;
			},
			err => {
			    return Promise.reject(err);
			}
		);






/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
