(function(){

	window.MyWebsocket = function(){


	};

	window.MyWebsocket.prototype = {

		constructor：MyWebsocket,

		websocket : null,

		init: function(){

			if(this.websocket===null){

				this.websocket = new WebSocket("ws://localhost:9998");
			}
		},


		// 发送数据
		send: funtion(){


		}


	};

})();