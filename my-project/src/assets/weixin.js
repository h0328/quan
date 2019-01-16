   //调用微信JS api 支付
    function jsApiCall(){
        axios.post('http://qqt.kulian100.com/index/pay/getJsapiPar.html',{ 		
				  			money:this.money,
				  			order_id:this.order_id,
				  			openid:this.openid
						}).then(res => {
				            WeixinJSBridge.invoke('getBrandWCPayRequest',res.result.preResult, function(rel){
				                if(rel.err_msg == "get_brand_wcpay_request:ok" ){
				                    WeixinJSBridge.log(rel.err_msg);
				                    alert(rel.err_code+rel.err_desc+rel.err_msg);
				                } 
				            }
				        )
			        })
    }
//	 if (typeof WeixinJSBridge == "undefined"){
//          if( document.addEventListener ){
//              document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
//          }else if (document.attachEvent){
//              document.attachEvent('WeixinJSBridgeReady', jsApiCall); 
//              document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
//          }
//      }else{
//          jsApiCall();
//      }
    
export{
	jsApiCall
}
