<?php

require_once "./curl.php" ;


function robot($keyword, $numberId, $taskId){

	curlBaidu("https://image.baidu.com/search/index?tn=baiduimage&word={$keyword}", 
		$keyword, $numberId, $taskId);
}
	
