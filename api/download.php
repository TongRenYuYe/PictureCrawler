<?php

use Workerman\Worker;

require_once '../Workerman/Autoloader.php';

// 创建一个Worker监听2345端口，使用http协议通讯
$http_worker = new Worker("websocket://0.0.0.0:2345");

// 启动4个进程对外提供服务
$http_worker->count = 4;

// 接收到浏览器发送的数据时回复hello world给浏览器
$http_worker->onMessage = function($connection, $data)
{

	$data = json_decode($data, TRUE);

	// 下载总量	
	$count = $data[0]['count'];
	
	// 已下载的数量
	$downloadedCount = $data[0]['downloadedCount'];

	while($downloadedCount<$count){

		$data[0]['downloadedCount'] = (++$downloadedCount);
	    
		

	    
	    // 向浏览器发送
    	$connection->send(json_encode($data,JSON_UNESCAPED_UNICODE));
	}
};

// 运行worker
Worker::runAll();

