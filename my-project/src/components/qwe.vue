<template>
	<div>
	  <div class="dialog-modal"> <!-- 根元素，z-index 需要高于父容器其他元素 -->
	    <div class="dialog-wrapper" @click="onClose" v-show="isShow"></div> <!-- 加载一个具有透明度的背景，使根元素透明，子元素会继承该透明度 -->
	    <transition name="drop">
	        <div class="dialog-container" v-show="isShow">  <!-- 模态框容器，z-index 需要高于背景 -->
	            <header>
					<span @click="back" class="iconfont icon-back"></span>
					<p>绑定手机号</p>
				</header>
				<section>
					<div class="fenl" style="margin-top:0.3rem;">
		  					<span>手机号:</span>  					
		  					<input style="outline:none;" type="text" v-model=spm placeholder="请输入手机号"/>
		  			</div>
		  			<div class="fenl" v-if=is style="margin-top:0.1rem;">
		  					<span>推荐码:</span>  					
		  					<input style="outline:none;" type="text" v-model=tjm placeholder="请输入推荐码(选填)"/>
		  			</div>
		  			
		  			<input id="yz" type="text" v-model=yzm placeholder="验证码" style="padding-left:0.2rem;"/>
		  			<button @click="yzy">{{m}}</button>
		  			<div class="jh" @click="yzs">绑定手机号{{js}}</div>
				</section>
	        </div>
	    </transition>
	  </div>
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
    export default {
    	name: 'qwe',
        props: {
            isShow:{
                type: Boolean,
                default: true
            }
        },
        methods: {
            onClose(){
                this.$emit('on-close');
            }
        }
    }
</script>

<style>
.drop-enter-active {
  transition: all .5s;
}
.drop-leave-active {
  transition: all .3s;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}   
  
    .dialog-modal{
        position: absolute;
        z-index: 5;
    }
    .dialog-wrapper
    {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      
    }
    .dialog-wrapper{
        background-color: #eee;
        opacity: .9;
    }
    .dialog-container{
        position: fixed;
        z-index:80;
        top: 20%;
        left: 10%;
        width: 80%;
        /* margin: 0 auto; */
        background-color: #eee;
        border-radius: 3px;
        box-shadow: 0 5px 15px rgba(0,0,0,.5);
    }
    span.close-btn{
        padding: 0 5px;
        float: right;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }
    #yz::-webkit-input-placeholder {
        font-size:0.26rem;
        line-height:0.3rem;
     }
	input{
		border:none;
		outline: none;
		-webkit-appearance: none;
		border-radius: 0;
	}
	header{
		width:100%;
		height:0.88rem;
		background:#f8f8f8;
		text-align:center;
		line-height:0.88rem;
		font-size:0.36rem;
		border-bottom:0.02rem solid #bebebe;
		position:relative;
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
		/*padding:0  0.2rem;*/
		flex: 1;
		overflow: hidden;
		margin-bottom:0.9rem;
	}
	section>button{
		min-width:1.4rem;
		height:0.6rem;
		color:#fff;
		font-size:0.26rem;
		line-height:0.6rem;
		background:#F76968;
		opacity:0.8;
		border-radius:0.1rem;
		border:none;
		float:right;		
		margin-right:0.2rem;
	}
	.jh{
		width:calc(100% - 0.48rem);
		height:0.8rem;
		line-height:0.8rem;
		margin-left:0.24rem;
		margin-top:0.5rem;
		color:#fff;
		font-size:0.32rem;
		background:#F76968;
		opacity:0.8;
		border-radius:0.1rem;
		clear:both;
		text-align:center;
	}
	.zhangh{
		width:92%;
		height:1.6rem;
		border:0.02rem solid #26A2FF;
		border-radius:0.2rem;
		margin:0.1rem auto;
		position:relative;
	}
	.zhangh>button{
		width:1.4rem;
		height:0.6rem;
		color:#fff;
		line-height:0.6rem;
		background:#F76968;
		border-radius:0.1rem;
		border:none;
		position:absolute;
		top:0.7rem;
		right:0.2rem;
	}
	.fenl{
		width:95%;
		height:0.7rem;
		margin-left:2.5%;
		background:#fff;
		margin-bottom:0.2rem;
		/*border-radius:0.1rem;*/
		line-height:0.7rem;
		font-size:0.3rem;
		color:#26A2FF;
		text-indent:0.2rem;
		/*border:0.02rem solid indianred;*/
	}
	.fenl>input{
		height:0.6rem;
		width:60%;
		font-size:0.3rem;
	}
	#yz{
		width:30%;
		height:0.6rem;
		border-radius:0.1rem;
		margin-left:2.5%;
		line-height:0;
		border:0.02rem solid indianred;
	}
</style>