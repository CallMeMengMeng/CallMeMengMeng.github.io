---
title: U盘分区合并
date: 2019-09-01 18:22:35
tags: Blogs
category: Blogs
---
> 前段时间在U盘中安装了个Kali Linux[(关于这件事可以扒拉前面的故事)](https://callmemengmeng.github.io/2019/08/23/L-Linux%E7%9A%84%E7%AE%80%E6%B4%81%E6%88%91%E5%9C%A8U%E7%9B%98%E5%AE%89%E8%A3%85Kalili-linux/)，某人迈出了通向“脚本小崽子”的第一步，于是睡前也不看书了，瞪着小眼研究Kali。然乐极生悲，忘记系统盘的存在直接拔出，遂使得系统数据损坏而只得格式化重装矣。没有什么一帆风顺的事情，使用Windows自带的磁盘格式化软件可以执行“删除卷”操作，但依旧显示为两个分区。无奈“狗狗”一下后豁然开朗。

## 预期目标

- 将U盘分区合并。

## 分区合并

### 材料准备

- 我那可怜的便宜U盘；
- 我的联想笔电。

### 合并操作

- 使用按键“Win+R”打开运行界面，键入“cmd”进入命令提示符窗口；
- 在命令行中键入“diskpart”进入“DISKPART”交互界面；
- 键入“lis dis”查看包括所有挂载盘的磁盘；
- 键入“select dis X”，选定磁盘X(X为上一步骤中U盘对应磁盘序号)；
- 键入“clean”，删除被选择磁盘X(U盘)下的所有分区；
- 键入“create partition primary”来创建主分区；
- 键入“active”激活主分区；
- 键入“format fs=fat32 quick”快速格式化主分区为FAT32格式；
- 键入“exit”退出DISKPART交互界面。
