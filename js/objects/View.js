(function(){


// 需求：
// 1. 下载中的那个input置为 disable, 不允许再下载，下载结束后，才能继续使用。


window.View = function(){


};


window.View.prototype = {

	init : function(){

		// 暂无任务
		$("#TaskContainer").append($("#TemplateOfTaskIsEmpty").html());

		this.eventsRegister();

	},

	// 事件注册
	eventsRegister: function(){

		this.addTask();
		this.startDownload();
		this.allStartDownload();
		this.allStopDownlaod();
	},


	// 添加下载任务功能
	addTask: function(){

		$(document).on("click", "#AddTaskButton", function(){

			var count = parseInt($(this).attr("data-task-count"))+1;

			if(count>10){

				alert("最多只能添加10个任务");
				return;
			}

			$(this).attr("data-task-count", count );

			if(count===1){

				$("#TaskContainer").html("");
			}

			$("#TaskContainer").append($("#TemplateOfTask").html());
		}),
	},

	// 开始下载
	startDownload(){

		$(document).on("click", ".startDownloadButton", function(){

			var downloadQueue = [];
			downloadQueue.push(window.View.prototype.packageTask($(this).attr("data-id"),$(this).attr("data-keyword"),$(this).attr("data-count"),1));
			
			window.Downloader.prototype.startDownload(downloadQueue);
		});
	},

	// 全部开始下载
	allStartDownload: function(){

		$(document).on("click", "#AllStartButton", function(){

			var downloadQueue = [];
			
			// 遍历所有的下载任务，获取所有的数据全部放到队列中。
			$("#TaskContainer .task").each(function(i){

				downloadQueue.push(window.View.prototype.packageTask($(this).attr("data-id"),$(this).attr("data-keyword"),$(this).attr("data-count"),1));
			});

			window.Downloader.prototype.allStartDownload(downloadQueue);
		});
	},

	// 全部停止下载
	allStopDownlaod: function(){

		$(document).on("click", "#AllStopButton", function(){

			var downloadQueue = [];
			
			// 遍历所有的下载任务，获取所有的数据全部放到队列中。
			$("#TaskContainer .task").each(function(i){

				downloadQueue.push(window.View.prototype.packageTask($(this).attr("data-id"),$(this).attr("data-keyword"),$(this).attr("data-count"),1));
			});

			window.Downloader.prototype.allStartDownload(downloadQueue);
		});
	},

	// 封装下载任务
	packageTask: function(){

		return {

			"id": id,
			"keyword": keyword,
			"count": count,
			"status": status, // -1(下载失败了) , 0(下载完成) , 1(正在下载)
		};
	}


};


})();