---
title: MongoDB安装配置
date: 2019-12-27 20:31:49
categories: Node
tags: [NodeJS]
---

### <center>MongoDB安装配置</center>

##### MongoDB安装
MongoDB安装简单，可以自行百度mongodb菜鸟教程，windows环境下几乎没有什么坑；
本篇主要介绍centOS7.x版本下MongoDB的安装与配置；

* 下载MongoDB
本人习惯使用3.x版本的MongoDB，目前用得比较顺的是3.6.16，[MongoDB的官方下载链接](https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.16.tgz)
linux安装MongoDB的方式有很多种，以我最熟悉的centos为例，可以使用wget，curl等工具直接下载官网的链接，也可以在windows系统上下载tar包，然后用ssh工具传送到服务器进行解压
当然也可以直接yum install
我使用的方式是
``` bash
wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.6.16.tgz
```
wget命令，下载的文件就你执行此命令的文件夹下，所以下载完成之后，可以直接执行ls，此命令会列出当前文件夹下所有的文件及文件夹

* 安装MongoDB
下载好的tgz文件，直接使用tar命令解压
``` bash
tar -zvxf mongodb-linux-x86_64-3.6.16.tgz
``` 

接下来再执行ls命令，可以看到解压后的MongoDB文件夹
**此处建议将MongoDB目录移动至不常用的文件夹,mv命令也可以直接修改文件名**

* 配置MongoDB

首先添加MongoDB的bin目录下的可执行命令到全局

``` bash
vim /etc/profile

```
这里进入vim编辑profile文件，在底部或者你熟悉的地方添加如下代码：

``` bash
export PATH=<mongodbpath>/bin:$PATH
# <mongodbpath> 替换为你的MongoDB路径
```

接下来创建数据文件夹和日志文件夹

``` bash
mkdir -p /data/db    #用于存放MongoDB的数据
mkdir -p /data/logs  #用于存放MongoDB的运行日志
cd /data/logs         #切换到logs日志文件夹下
touch mongod.log      #创建日志文件存储日志
mkdir -p /data/config #用于存放MongoDB的配置文件
cd /data/config       #切换到config目录下
touch mongod.conf     #创建mongoDB的配置文件,以后的启动都使用这个配置文件

```
3.6.16的配置文件这里就不多做介绍了,网上有很多,这里只介绍一下最主要的几个配置

``` bash
vim /data/config/mongod.conf
```
mongod.conf的配置如下:

``` bash
storage:    
  dbPath: /data/db              #数据存储目录
systemLog:
  destination: file             #日志存储类型,建议使用file
  path: /data/logs/mongod.log   #日志存储文件目录
processManagement:
  fork: true                    #是否fork,fork后进入后台
  pidFilePath: /data/mongod.pid #记录pid,可删除此行
net:          
  bindIp: 0.0.0.0               #允许访问的ip地址,3.6.16版本默认是127.0.0.1,即本机,0.0.0.0是允许所有
  port: 27017                   #端口,默认是27017
security:
  authorization: enabled        #如果允许远程访问,最好开启,否则连带security一并用#注释掉
```
至此,配置MongoDB基本完成

* 启动/停止MongoDB

启动mongodb相对较烦~~

1.直接启动

``` bash
mongod --config /data/config/mongod.conf
```

因为我们的配置文件里面写了fork,所以执行此命令之后,只要没看到fail之类的字眼出现,基本就可以继续执行

```
mongo
```
这里就可以进入mongo的命令界面,如何操作不多做赘述

2.添加mongod到service服务

个人习惯将mongod添加到systemctl里面作为service启动

*话说,用yum install的MongoDB似乎可以直接作为service启动*

``` bash
vim /lib/systemd/system/mongod.service
```

**如果提示没有mongod.service文件,请用touch命令手动创建**

``` bash
[Unit]  

Description=mongodb   #mongodb这个描述是作为启动用的
After=network.target remote-fs.target nss-lookup.target  
[Service]  
Type=forking  
#execStart=mongodb的可执行bin路径的mongod 这里后续跟了配置文件,意思就是以此配置文件启动
ExecStart=/usr/local/mongoDB/bin/mongod --config /data/etc/mongod.conf 
#重启命令,照写即可
ExecReload=/bin/kill -s HUP $MAINPID  
#停止命令
ExecStop=/usr/local/mongoDB/bin/mongod --shutdown --config /data/etc/mongod.conf 
PrivateTmp=true  

[Install] 
WantedBy=multi-user.target 
```

**设置权限**
``` bash
chmod 754 mongodb.service 
```

至此,我们就可以使用以下命令,愉快地使用MongoDB:
``` bash
systemctl start mongodb       #启动MongoDB
systemctl restart mongodb     #重启MongoDB
systemctl stop mongodb        #关闭MongoDB
systemctl status mongodb      #查看MongoDB状态,如果MongoDB启动失败,这个命令极好用
```
