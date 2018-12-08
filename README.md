# PictureCrawler
基于 PHP/NodeJS 的图片爬虫下载器（A Picture Crawler Based on PHP/NodeJS）

## 摘要

PHP 版本实际效果如下
<img src="https://github.com/Lvsi-China/PictureCrawler/raw/master/extra/images/logo.gif">

```
对于PHP版本，我使用的是 workerman，但是 workerman 在 Windows 上不支持多进程，所以，这个效果图看到的3个并发下载还是在单进程里面执行的。不过不用担心！只要你的系统是Linux系统，就会看到多进程并发下载的效果了。
```
## 介绍

项目会使用两个语言实现，分别是 PHP版本(已完成) 和 NodeJS版本(未完成)。

通过用户输入的关键字和图片数量，后台服务会使用CURL(PHP)抓取网页的内容，然后使用正则去分析出相关图片的URL，紧接着，再次使用CURL(PHP)根据图片的URL去读取图片的内容，然后存入本地文件。

## 前端架构图

前端没有使用React等框架的大致架构如下

<img src="https://github.com/Lvsi-China/PictureCrawler/raw/master/extra/images/FrontEndArchitecture.png">

## 为什么有PHP和NodeJS两个语言版本

其实我之前想的只是用PHP去实现，但是发现 workerman 这个框架在 windows 上不支持多进程，对于 windows 也就无法实现并发下载，所以，为了弥补这个缺陷，就使用 NodeJS 去重新实现另一版。

## 为什么用 WebSocket

- 从效果截图看，就发现每一个下载任务都是有对应的下载进度的，传统的HTTP需要使用轮训才能实现这个功能，但轮训的代价太大，所以只能选择使用 Websocket 进行长连接通信。

## 关于爬图

目前，我代码里面是直接爬的百度图片，而且，很多细节有待改进，比如有些图片无法成功读取并写入，增加下载的图片个数，等等，这些都是之后细节上需要优化的。