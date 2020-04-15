---
title: Markdown内容折叠
date: 2020-03-24 16:20:50
tags: 
- Blogs
- Markdown
category: Markdown
mathjax: true
---
- - -
本小子由`Hexo`入了`Markdown`的坑，这种标签标记语言用起来十分方便，其排版极为简洁且支持内嵌`HTMl`等代码获得更多的效果。作为一名理工狗，咱的文章中不乏代码、表格或者流程图等元素，这些内容很占版面，影响观感，若是将其折叠起来，需要的时候自行展开查看，岂不美哉？

`Markdown`引入折叠功能需要用到`HTML`中的`<details>`标签——用于描述文档或文档某部分的细节。其在`HTML`中的用法为：
```
<details>
<summary>Click me to see more...</summary>
<p> - Yeah! You see me!</p>
<p>¡Buenos días! Adiós mis amigos.</p>
</details>
```
其中`<details>`为折叠语法标签，`<summary>`为可见标题，上述代码的实际效果如下。
<details>
<summary>Click me to see more...</summary>
<p> - Yeah! You see me!</p>
<p>¡Buenos días! Adiós mis amigos.</p>
</details>

在`Markdown`中使用时，可以省略`<p>`标签，直接书写被折叠部分的内容。
````
<details>
<summary>Click to see more...</summary>
```
$ sudo shutdown -s -t 0
```
</details>
````
其实际效果如下。
<details>
<summary>Click to see more...</summary>
```
$ sudo shutdown -s -t 0
```
</details>
<br>
前面已经看到代码折叠效果，下面分别对公式、表格和流程图进行折叠测试：

+ 折叠公式
<details>
<summary>点击查看公式</summary>
$$\lambda_{cmn}=\frac{2}{\sqrt{(\frac{m}{a})^2+(\frac{n}{b})^2}}$$
</details>

+ 折叠表格
<details>
<summary>点击查看表格</summary>
然而并不支持Markdown表格(-_-)
| a | b |
|:-:|:-:|
| c | d |
</details>

+ 折叠流程图
<details>
<summary>点击查看流程图</summary>
```flow
st=>start: 开始
opera1=>operation: operation
cond=>condition: 准备结束?
respY=>operation: 是
respN=>operation: 否
ed=>end: 结束

st->opera1->cond
cond(yes)->respY->ed
cond(no)->respN(right)->opera1

```
</details>

可以看到，`<details>`标签并不支持折叠`Markdown`表格，并且会对流程图进行压缩，要想获得更好的体验仍需进一步调节参数。
