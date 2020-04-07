---
title: 偏爱WPS for Linux简洁界面的我在U盘安装Kali linux
date: 2019-08-23 20:35:23
tags: Blogs
category: Blogs
---
> 浏览网页时无意间瞥到一部叫做[《普通攻击是全体攻击而且能二次攻击的妈妈你喜欢嘛》](http://www.yhdm.tv/show/4589.html)的日漫，惊叹还能如此起名咩？！于是灵机一动坏水外涌便汇聚成这篇文章的标题。

咱们书归正文，言归正传，笑谈归笑谈，撒旦的归撒旦。仍然不忍放弃Linux的操作逻辑，加上某人~~(偷懒)~~闲暇时看到油管视频中随插随用极其方便的系统盘，手痒之下便有了这么一出。

## 预期目标
- 在U盘中安装一个可以使用的Kali Linux(Live)操作系统；
- 设置此Live系统持续化。
- - - 
## 系统安装

### 材料准备

- 一个32G的闪迪USB3.0存储盘；
- 一台电脑；
- [kali Linux操作系统iso文件](https://www.kali.org/downloads/)；
- 下载刻录工具**Win32DiskImager**(下面简称Win32D)和**MiniToolPartitionWizard**(下面简称MiniTool)。

### 安装步骤

- 分别安装MiniTool和Win32D；
- 运行Win32D，在弹出界面的“设备”中选择U盘的盘符，
  然后将“映像文件”的位置指向系统iso文件的存放位置，点击“写入”；
- 等待写入成功后，U盘被分出两个分区，此时取消电脑弹出两个“格式化U盘”窗口；
- 打开Minitool软件，在弹出的窗口中进入“Disk & Partition Management”；
- 选中U盘，右键选择“creat”新的“primary”分区[^1]，分区标签为“persistence”，
  文件类型为[“Ext4”](https://www.cnblogs.com/daduryi/p/6619028.html),并创建；
- 等待数据写入成功后依旧取消弹出的“格式化U盘”窗口。

### BIOS设置

- 为了使计算机从U盘启动，需要设置开机首选项(BIOS)；
- 我手头的是联想笔电，在关机重启时连击“F12”按键进入快捷启动菜单，进入“USB HDD”；
- 如果一切顺利的话，此时电脑会进入Kali Linux的启动菜单；
- 选择“persistence”模式并启动，此时便打开了我们的Live kali Linux系统；

### 检测版本号

- 使用**“uname -a”**命令查看安装系统的版本。<br>

至此，系统成功安装并运行。

- - - 

## 系统持续化

### 储存设置
- 在命令行中使用下面的指令创建并更改相关储存设置。
```
root@kali:~# fdisk -l
root@kali:~# mkdir -p /mnt/linux
root@kali:~# mount /dev/sdb3 /mnt/linux/
root@kali:~# echo "/ union" > /mnt/linux/persistence.conf
root@kali:~# umount /dev/sdb3
```
- 直接物理断电重启，进入Kali Linux中，此时系统已经可持续化。


[^1]: Primary即主分区，[和逻辑分区不同](https://blog.csdn.net/q_l_s/article/details/50150045)。