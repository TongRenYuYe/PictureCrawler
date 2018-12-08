(function(){

	window.Profiler = function (){

		
	};


	window.Profiler.prototype = {

		receiveResponse: function(res){

			var data = (JSON.parse(res.data))[0];

			if(data['res']==2){

				alert();
				console.log(data['resMsg']);
			}

			window.View.prototype.dynamicChangeView.useWebsocketShowDownloadProcess( data );
		}
	};



})();