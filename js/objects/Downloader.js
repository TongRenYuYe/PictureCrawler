(function(){

	window.Downloader = function(){


	};


	window.Downloader.prototype = {

		constructor: window.Downloader,

		// 开始下载
		startDownload(downloadQueue){

			window.PictureCrawler.prototype.startDownload(downloadQueue);
		},

		// 全部开始下载
		allStartDownload: function(downloadQueue){

			window.PictureCrawler.prototype.allStartDownload(downloadQueue);
		},

		// 全部停止下载
		allStopDownlaod: function(downloadQueue){

			window.PictureCrawler.prototype.allStopDownlaod(downloadQueue);
		}

	};


})();