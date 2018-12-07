(function(){


	window.PictureCrawler = function (){

		
	}


	window.PictureCrawler.prototype = {

		constructor: window.PictureCrawler,

		checkDownloadQueue: function(){

			if(downloadQueue.length<1){

				alert("下载队列不能为空 !");
				return false;
			}

			return true;
		},

		init: function(){

			this.eventsRegister();
		},


		eventsRegister: function(){

			this.allStart();
			this.allStop();
		},

		// 全部开始下载
		allStartDownload: function(){

			$(document).on("click","#AllStartButton",function(){
				
				if(! window.PictureCrawler.prototype.checkDownloadQueue() ){
					return;
				}


			});
		},

		// 全部停止下载
		allStopDownload: function(){

			$(document).on("click","#AllStopButton",function(){

				if(! window.PictureCrawler.prototype.checkDownloadQueue() ){
					return;
				}

			});
		},

		// 只开始下载其中的一个
		startDownload: function(){


		},



	};


})();