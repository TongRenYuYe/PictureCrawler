# PictureCrawler

<p align="center">
<img src="https://img.shields.io/badge/language-PHP/NodeJS-red.svg">
<img src="https://img.shields.io/badge/license-MIT-black.svg">
</p>

基于 PHP/NodeJS 的图片爬虫下载器（A Picture Crawler Based on PHP/NodeJS）

[立即使用](#usage)

## ✎ 摘要( Synopsis )

PHP 版本实际效果如下
<img src="https://github.com/Lvsi-China/PictureCrawler/raw/master/extra/images/logo.gif">

```
对于PHP版本，我使用的是 workerman，但是 workerman 在 Windows 上不支持多进程，
所以，这个效果图看到的3个并发下载还是在单进程里面执行的。
不过不用担心！只要你的系统是Linux系统，就会看到多进程并发下载的效果了。
```
## ♨ 介绍( Introduction )

项目会使用两个语言实现，分别是 PHP版本(已完成) 和 NodeJS版本(未完成)。

通过用户输入的关键字和图片数量，后台服务会使用CURL(PHP)抓取网页的内容，然后使用正则去分析出相关图片的URL，紧接着，再次使用CURL(PHP)根据图片的URL去读取图片的内容，然后存入本地文件。

## <span id="usage">♗ 使用</span>

PHP 版本
```
1. 下载本项目
2. 开启本地 Apache 服务器
3. 直接运行 index.html 文件，即可使用。
```

## ✪ 功能( Features )

1. 根据输入的图片关键字和数量以实现自定义图片抓取和下载。
2. 多个下载任务使用多进程并行(并发)下载，提高下载效率。
3. 使用WebSocket与后端服务长连接通信，可视化查看每个下载任务的下载进度。
4. 后端服务会自动下载爬取到的图片，无需用户干预。
5. ... ...

## ✣ 前端架构图 ( Front end architecture )

前端没有使用React等框架的大致架构如下

<img src="https://github.com/Lvsi-China/PictureCrawler/raw/master/extra/images/FrontEndArchitecture.png">

## ☑ 为什么有PHP和NodeJS两个语言版本 ( Why PHP & NodeJS ) ?

其实我之前想的只是用PHP去实现，但是发现 workerman 这个框架在 windows 上不支持多进程，对于 windows 也就无法实现并发下载，所以，为了弥补这个缺陷，就使用 NodeJS 去重新实现另一版。

## ☑ 为什么用 WebSocket ( Why websocket ) ?

- 从效果截图看，就发现每一个下载任务都是有对应的下载进度的，传统的HTTP需要使用轮训才能实现这个功能，但轮训的代价太大，所以只能选择使用 Websocket 进行长连接通信。

## ✦ 关于爬图 ( About crawl pictures )

目前，我代码里面是直接爬的百度图片，而且，很多细节有待改进，比如有些图片无法成功读取并写入，增加下载的图片个数，等等，这些都是之后细节上需要优化的。

## ✦ 关于下载暂停 ( About download suspension )

先说一下实现的过程，当通过 Websocket 传输【下载消息】，后台接收到消息后就开始了。 此时，如果再点击暂停按钮的时候，会再次通过 Websocket 传输【暂停消息】，由于后台服务是多个不同的进程，因此，收到消息的可能是另一个进程。

很明显，此时又涉及到了进程之间的通信，请看下面。

## ✦ 关于进程间通信（ About IPC ）

常见的进程通信方式包括管道，消息队列和共享内存等，具体大家可以Google看看，我使用的是共享内存的方式，具体实现是通过 Redis 缓存系统实现的，每当进程收到【暂停消息】的时候，在缓存中将下载任务对应的状态置为暂停，然后另一个进程发现自己的状态为暂停，就不会再下载了。大致过程就是这样。

## ✔ 发行版 ( Releases)
有 NodeJS 版本和 PHP 版本，具体的请见 [releases](https://github.com/Lvsi-China/PictureCrawler/releases)
