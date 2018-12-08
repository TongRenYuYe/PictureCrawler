<?php


function curlResources($url, $keyword, $numberId, $downloaderId){

	$ch = curl_init();

	// 设置 URL
	curl_setopt($ch, CURLOPT_URL, $url);

	// 禁止 cURL 验证对等证书
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0); // 0 为不检查名称
		

	// 不传输数据
	curl_setopt($ch, CURLOPT_POST, 0);

	// 要求返回值
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	// 执行
	$resource = curl_exec($ch);

	// 关闭 CURL
	curl_close($ch);
	
	// 保存到本地
	$dir = "../resources/{$downloaderId}-{$keyword}/";
	if(!is_dir($dir)){

		mkdir($dir);
	}
	$file=fopen("{$dir}/{$numberId}.jpg","w+");
	fwrite($file, $resource);
	fclose($file);
}




