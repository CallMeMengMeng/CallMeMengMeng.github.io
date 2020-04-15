---
title: FlowChart流程图
date: 2020-04-11 12:46:32
tags: 
- Blogs
- Markdown
category: Markdown
mathjax: true
---
- - - 
## 前言

高中数学第一次接触程序就一直是手绘流程图，后来学C时老师推荐使用[ProcessOn](https://www.processon.com/)绘制，最近写汇编程序又要用到，码字时总要登陆网页先绘制再下载之后还得贴到文字内容的相应位置，尤其在需要绘制多张流程图时略显麻烦(比如[这种](https://callmemengmeng.github.io/2020/04/07/)工作量)，所以考虑使用Markdown直接绘(**手**)制(**写**)。

本着搬轮子的指导思想，本小子放狗搜了一圈后发现Markdown支持绘制流程图的插件还真不少，结合Hexo框架的具体实际最终选择基于[`flowchart.js`](http://flowchart.js.org/)的[`hexo-filter-flowchart`](https://github.com/bubkoo/hexo-filter-flowchart)插件。

## 安装

轮子的好处就在于省事儿，Hexo的这些插件基本上都可一句话安装：
```
$ npm install --save hexo-filter-flowchart
```

## 配置

在Hexo的`_config.yml`文件(注意不是主题的`_config.yml`)中添加如下代码：
```
flowchart:
  # raphael:   # optional, the source url of raphael.js
  # flowchart: # optional, the source url of flowchart.js
  options: # options used for `drawSVG`
```
但和[这位老哥](https://www.liuyude.com/How_to_make_your_HEXO_blog_support_handwriting_flowchart.html)发现的问题一样，插件安装成功后未在`_config.yml`中配置也能直接使用，这一点挺神奇的！

## 使用

由于这个`hexo-filter-flowchart`插件基于`flowchart.js`，实际上使用的是后者的语法`name=>type: content:>url`。其中，
+ **name**为元素的名称；
+ **type**为元素所在的流程类型，包括：
  - start，
  - end，
  - operation，
  - subroutine，
  - condition，
  - input/output，
  - parallel；
+ **content**为文本内容(自定义)；
+ **url**为文本中随附的链接。

比如插件作者给出的这个例子：
```
\`\`\`flow		# 使用时删去'\'符号
st=>start: Start|past:>
e=>end: End:>https://github.com/bubkoo/hexo-filter-flowchart
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>https://github.com/bubkoo/hexo-filter-flowchart
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
\`\`\`		# 使用时删去'\'符号
```
效果如下：
```flow
st=>start: Start|past:>
e=>end: End:>https://github.com/bubkoo/hexo-filter-flowchart
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>https://github.com/bubkoo/hexo-filter-flowchart
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|request

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```