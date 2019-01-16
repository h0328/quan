import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import chongzhi from '@/components/chongzhi'
import maiquan from '@/components/maiquan'
import maiquan1 from '@/components/maiquan1'
import wode from '@/components/wode'
import detail from '@/components/detail'
import chongzhi1 from '@/components/chongzhi1'
import chongzhi2 from '@/components/chongzhi2'
import chongzhi3 from '@/components/chongzhi3'
import wdmaidan1 from '@/components/wdmaidan1'
import wdmaidan1_1 from '@/components/wdmaidan1/wdmaidan1_1'
import wdmaidan1_2 from '@/components/wdmaidan1/wdmaidan1_2'
import wdmaidan1_3 from '@/components/wdmaidan1/wdmaidan1_3'
import wdmaidan2 from '@/components/wdmaidan2'
import wdmaidan2_1 from '@/components/wdmaidan2/wdmaidan2_1'
import wdmaidan2_2 from '@/components/wdmaidan2/wdmaidan2_2'
import remenhd from '@/components/remenhd'
import gonggao from '@/components/gonggao'
import yaoqing from '@/components/yaoqing'
import yaoqing_1 from '@/components/yaoqing/yaoqing_1'
import yaoqing_2 from '@/components/yaoqing/yaoqing_2'
import yaoqing_3 from '@/components/yaoqing/yaoqing_3'
import chengjiu from '@/components/chengjiu'
import qianbao from '@/components/qianbao'
import zhifubao from '@/components/zhifubao'
import xgzhifubao from '@/components/xgzhifubao'
import tixian from '@/components/tixian'
import chengjiu_1 from '@/components/chengjiu/chengjiu_1'
import chengjiu_2 from '@/components/chengjiu/chengjiu_2'
import tixian_1 from '@/components/tixian/tixian_1'
import tixian_2 from '@/components/tixian/tixian_2'
import tixian_3 from '@/components/tixian/tixian_3'
import shoujihao from '@/components/shoujihao'
import chongzhi1_1 from '@/components/chongzhi1_1'
import huafeidd from '@/components/huafeidd'
import huafeidd1 from '@/components/huafeidd1'
import qwe from '@/components/qwe'
import after_sale from '@/components/after_sale'
import movie from '@/components/movie/movie'
import movie_buy from '@/components/movie/movie_buy'
import movie_sell from '@/components/movie/movie_sell'
import fee from '@/components/fee/fee'
import fee_buy from '@/components/fee/fee_buy'
import fee_bill from '@/components/fee/fee_bill'
import fee_det from '@/components/fee/fee_det'
import under from '@/components/under/under'
import under_release from '@/components/under/under_release'
import under_detail from '@/components/under/under_detail'

Vue.use(Router)


//头部
Vue.component('header-item', {
  props: ['message', 'backUrl'],
  data:function(){
  	return{
  		ss1:{
  			width:'7.12rem',
				height:'0.6rem',
				'line-height':'0.6rem',
				margin:'0.15rem auto',
				background:'#f2f3f7',
				'border-radius':'0.1rem',				
				overflow: 'hidden'
  		},
  		ipt:{
  			width:'85%',
				height:'0.5rem',
				'line-height':'0.5rem',
				'font-size':'0.26rem',
				color:'#95999c',
				background:'#f2f3f7',
				float:'left',
				border:'none',
				'margin-left':'0.1rem',
				'border-radius':'0.1rem'
  		}
  	}
  },
  template: `
  	<header>
  		<!--搜索框-->
  		<div :style="ss1">
  			<span class="iconfont icon-sousuo" style="margin-left:0.2rem;float:left"></span>
  			<input type="text" :placeholder='message' v-model=val :style="ipt" @blur.prevent="changeCount()" />
  		</div>
  	</header>`
})



export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/chongzhi',
      name: 'chongzhi',
      redirect:'/chongzhi1',
      component: chongzhi,
       children:[ 
       	{
		      path: '/chongzhi2',
		      name: 'chongzhi2',
		      component: chongzhi2
		    },
		    {
		      path: '/chongzhi1',
		      name: 'chongzhi1',
		      component: chongzhi1
		    },		    
		    {
		      path: '/chongzhi3',
		      name: 'chongzhi3',
		      component: chongzhi3
		    }
      ]  
    },
    {
      path: '/maiquan',
      name: 'maiquan',
      component: maiquan
    },
    {
      path: '/maiquan1',
      name: 'maiquan1',
      component: maiquan1
    },
    {
    	path:'/wdmaidan1',
    	name:'wdmaidan1',
    	component:wdmaidan1,
    	children:[      
		    {
		      path: '/wdmaidan1_1',
		      name: 'wdmaidan1_1',
		      component: wdmaidan1_1
		    },
		    {
		      path: '/wdmaidan1_2',
		      name: 'wdmaidan1_2',
		      component: wdmaidan1_2
		    },
		    {
		      path: '/huafeidd1',
		      name: 'huafeidd1',
		      component: huafeidd1
		    }
      ]  
    },
    {
    	path:'/wdmaidan2',
    	name:'wdmaidan2',
    	component:wdmaidan2,
    	children:[      
		    {
		      path: '/wdmaidan2_1',
		      name: 'wdmaidan2_1',
		      component: wdmaidan2_1
		    },
		    {
		      path: '/wdmaidan2_2',
		      name: 'wdmaidan2_2',
		      component: wdmaidan2_2
		    },
		    {
		      path: '/huafeidd',
		      name: 'huafeidd',
		      component: huafeidd
		    }
      ]  
    },
    {
      path: '/wode',
      name: 'wode',
      component: wode
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/remenhd',
      name: 'remenhd',
      component: remenhd
    },
    {
      path: '/gonggao',
      name: 'gonggao',
      component: gonggao
    },
    {
      path: '/yaoqing',
      name: 'yaoqing',
      component: yaoqing,
      redirect:'/yaoqing_3',
      children:[      
		    {
		      path: '/yaoqing_1',
		      name: 'yaoqing_1',
		      component: yaoqing_1
		    },
		    {
		      path: '/yaoqing_2',
		      name: 'yaoqing_2',
		      component: yaoqing_2
		    },
		    {
		      path: '/yaoqing_3',
		      name: 'yaoqing_3',
		      component: yaoqing_3
		    }
      ]
    },
    {
      path: '/chengjiu',
      name: 'chengjiu',
      component: chengjiu,
      redirect:'/chengjiu_1',
      children:[      
		    {
		      path: '/chengjiu_1',
		      name: 'chengjiu_1',
		      component: chengjiu_1
		    }
      ]
    },
    {
      path: '/qianbao',
      name: 'qianbao',
      component: qianbao
    },
    {
      path: '/zhifubao',
      name: 'zhifubao',
      component: zhifubao
    },
    {
      path: '/xgzhifubao',
      name: 'xgzhifubao',
      component: xgzhifubao
    },
    {
      path: '/tixian',
      name: 'tixian',
      component: tixian,
      redirect:'/tixian_1',
      children:[      
		    {
		      path: '/tixian_1',
		      name: 'tixian_1',
		      component: tixian_1
		    },
		    {
		      path: '/tixian_2',
		      name: 'tixian_2',
		      component: tixian_2
		    },
		    {
		      path: '/tixian_3',
		      name: 'tixian_3',
		      component: tixian_3
		    }
      ]
    },
    {
      path: '/shoujihao',
      name: 'shoujihao',
      component: shoujihao
    },
    {
      path: '/qwe',
      name: 'qwe',
      component: qwe
    },
    {
      path: '/chongzhi1_1',
      name: 'chongzhi1_1',
      component: chongzhi1_1
    },
    {
      path: '/after_sale',
      name: 'after_sale',
      component: after_sale
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie,
      redirect:'/movie_buy',
      children:[      
		    {
		      path: '/movie_buy',
		      name: 'movie_buy',
		      component: movie_buy
		    },
		    {
		      path: '/movie_sell',
		      name: 'movie_sell',
		      component: movie_sell
		    }
      ]
    },
    {
      path: '/fee',
      name: 'fee',
      component: fee,
      redirect:'/fee_buy',
      children:[      
		    {
		      path: '/fee_buy',
		      name: 'fee_buy',
		      component: fee_buy
		    },
		    {
		      path: '/fee_bill',
		      name: 'fee_bill',
		      component: fee_bill
		    }
      ]
    },
    {
		      path: '/fee_det',
		      name: 'fee_det',
		      component: fee_det
		},
		{
		      path: '/under',
		      name: 'under',
		      component: under
		},
		{
		      path: '/under_release',
		      name: 'under_release',
		      component: under_release
		},
		{
		      path: '/under_detail',
		      name: 'under_detail',
		      component: under_detail
		},
    {
	      path: '*',      
	      redirect:'/home'
	  }
  ]
})


