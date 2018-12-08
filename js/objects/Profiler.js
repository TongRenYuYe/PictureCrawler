(function(){

	window.Profiler = function (){

		
	};


	window.Profiler.prototype = {

		receiveResponse: function(res){

			window.View.prototype.dynamicChangeView.useWebsocketShowDownloadProcess( (JSON.parse(res.data))[0] );
		}
	};



})();