---
title: 常用的LaTeX符号和公式
date: 2020-01-08 12:53:15
tags: 
- Blogs
- 书摘
- Markdown
category: Markdown
mathjax: true
---
> 使用Markdown语法更新博文以及日常堆砌论文报告时经常遇到公式拦路的情况，往往是文章框架搭建完毕，文字内容亟待喷发，但却卡在${\LaTeX}$公式编辑的代码上。常常是看了忘，再碰到时候又得放狗去搜。遂整理在此，方便检索[^1]。

## 常用希腊字母
| 大写字母 | $间的代码 | 小写字母 | $间的代码 |
|:--------:|:---------:|:--------:|:---------:|
| $A$ | A | $\alpha$ | \alpha |
| $B$ | B | $\beta$ | \beta |
| $\Gamma$ | \Gamma | $\gamma$ | \gamma |
| $\Delta$ | \Delta | $\delta$ | \delta |
| $E$ | E | $\epsilon$ | \epsilon |
| $Z$ | Z | $\zeta$ | \zeta |
| $H$ | H | $\eta$ | \eta |
| $\Theta$ | \Theta | $\theta$ | \theta |
| $I$ | I | $\iota$ | \iota |
| $K$ | K | $\kappa$ | \kappa |
| $\Lambda$ | \Lambda | $\lambda$ | \lambda |
| $M$ | M | $\mu$ | \mu |
| $N$ | N | $\nu$ | \nu |
| $\Xi$ | \Xi | $\xi$ | \xi |
| $O$ | O | $\omicron$ | \omicron |
| $\Pi$ | \Pi | $\pi$ | \pi |
| $P$ | P | $\rho$ | \rho |
| $\Sigma$ | \Sigma | $\sigma$ | \sigma |
| $T$ | T | $\tau$ | \tau |
| $\Upsilon$ | \Upsilon | $\upsilon$ | \upsilon |
| $\Phi$ | \Phi | $\phi$ | \phi |
| $X$ | X | $\chi$ | \chi |
| $\Psi$ | \Psi | $\psi$ | \psi |
| $\Omega$ | \Omega | $\omega$ | \omega |

## 数学符号
| 运算 | $间的代码 | 效果 |
|:----:|:---------:|:----:|
| 上标 | x^n | $x^n$ |
| 下标 | x_n | $x_n$ |
| 求和 | \sum | $\sum$ |
| 无穷大 | \infty | $\infty$ |
| 中括号 | [s-s(a+1)] | $[s-s(a+1)]$ |
| 花括号 | \lbrace x-y \rbrace | $\lbrace x-y \rbrace$ |
| 正弦 | \sin(x) | $\sin(x)$ |
| 余弦 | \cos(x) | $\cos(x)$ |
| 正切 | \tan(x) | $\tan(x)$ |
| 对数 | \log_n m | $\log_n m$ |
| 自然对数 | \ln m | $\ln m$ |
| 矢量 | \vec{a} | $\vec{a}$ |
| 一阶导数 | \dot{x} | $\dot{x}$ |
| 二阶导数 | \ddot{x} | $\ddot{x}$ |
| 算数平均值 | \bar{x} | $\bar{x}$ |
| 概率分布 | \hat{x} | $\hat{x}$ |
| 虚数 | \imath、\jmath | $\imath$、$\jmath$ |
| 四种省略号 | a \ldots b \cdots c \vdots d \ddots e | $a \ldots b \cdots c \vdots d \ddots e$ |
| 下划线 | \underline{x-y} | $\underline{x-y}$ |
| 上大括号 | \overbrace{x+y+z}^3 | $\overbrace{x+y+z}^3$ |
| 下大括号 | x+\underbrace{y+z}_2 | $x+\underbrace{y+z}_2$ |
| 上位符号 | x\stackrel{def}{=}x_1+x_2+\ldots+x_n | $x\stackrel{def}{=}x_1+x_2+\ldots+x_n$ |
| 角括号 | \left \langle \frac{x}{y} \right \rangle | $\left \langle \frac{x}{y} \right \rangle$ |
| 取整函数 | \left \lfloor \frac{x}{y} \right \rfloor | $\left \lfloor \frac{x}{y} \right \rfloor$ |
| 取顶函数 | \left \lceil \frac{x}{y} \right \rceil | $\left \lceil \frac{x}{y} \right \rceil$ |
| 斜线与反斜线 | \left / \frac{x}{y} \right \backslash | $\left / \frac{x}{y} \right \backslash$ |
| 上下箭头 | \left \uparrow \frac{x}{y} \right \downarrow | $\left \uparrow \frac{x}{y} \right \downarrow$ |

## 基础运算符
| 运算 | $间的代码 | 效果 |
|:----:|:---------:|:----:|
| 乘以 | \times | $\times$ |
| 除以 | \div | $\div$ |
| 加减 | \pm | $\pm$ |
| 减加 | \mp | $\mp$ |
| 求和 | \sum | $\sum$ |
| 求积 | \prod | $\prod$ |
| 微分 | \partial | $\partial$ |
| 积分 | \int、\displaystyle\int | $\int$、$\displaystyle\int$ |
| 不等于 | \neq | $\neq$ |
| 大于等于 | \geq | $\geq$ |
| 小于等于 | \leq | $\leq$ |
| 约等于 | \approx | $\approx$ |
| 不大于等于 | x+y \ngeq z | $x+y \ngeq z$ |
| 不小于等于 | x+y \nleq z | $x+y \nleq z$ |
| 点乘 | a \cdot b | $a \cdot b$ |
| 星乘 | a \ast b | $a \ast b$ |
| 分式 | \frac{z}{x+y} | $\frac{z}{x+y}$ |

## 高级运算符
| 运算 | $间的代码 | 效果 |
|:----:|:---------:|:----:|
| 平均数运算 | \overline{xy} | $\overline{xy}$ |
| 开平方运算 | \sqrt{xy} | $\sqrt{xy}$ |
| 开方运算 | \sqrt[开方数]{被开方数} | $\sqrt[开方数]{被开方数}$ |
| 极限运算一 | \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}} | $\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$ |
| 极限运算二 | \displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}} | $\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$ |
| 求和运算一 | \sum^{x \to \infty}_{y \to 0}{\frac{x}{y}} | $\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$ |
| 求和运算二 | \displaystyle \sum^{x \to \infty}_{y \to 0}{\frac{x}{y}} | $\displaystyle \sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$ |
| 积分运算一 | \int^{\infty}_{0}{xdx} | $\int^{\infty}_{0}{xdx}$ |
| 积分运算二 | \displaystyle \int^{\infty}_{0}{xdx} | $\displaystyle \int^{\infty}_{0}{xdx}$ |
| 微分运算 | \frac{\partial x}{\partial y}、\frac{\partial^2x}{\partial y^2} | $\frac{\partial x}{\partial y}$、$\frac{\partial^2x}{\partial y^2}$ |

## 集合运算符
| 运算 | $间的代码 | 效果 |
|:----:|:---------:|:----:|
| 属于 | x \in y | $x \in y$ |
| 不属于 | x \notin y | $x \notin y$ |
| 子集 | x \subset y、x \supset y | $x \subset y$、$x \supset y$ |
| 真子集 | x \subseteq y、x \supseteq y | $x \subseteq y$、$x \supseteq y$ |
| 并集 | x \cup y | $x \cup y$ |
| 交集 | x \cap y | $x \cap y$ |
| 差集 | x \setminus y | $x \setminus y$ |
| 同或 | x \bigodot y | $x \bigodot y$ |
| 同与 | x \bigotimes y| $x \bigotimes y$ |
| 异或 | x \bigoplus y | $x \bigoplus y$ |
| 实数集 | \mathbb{R} | $\mathbb{R}$ |
| 自然数集 | \mathbb{Z} | $\mathbb{Z}$ |

## 基本函数表达式

### 行内公式
```
$\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}dt$
```
$\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}dt$

### 行间公式
```
$$y_k=\varphi(u_k+v_k)$$
```
$$y_k=\varphi(u_k+v_k)$$

## 分段函数表达式

### 分段函数
```
$$y=\begin{cases}
2x+1, & x \leq 0 \\\\
x, & x>0\\\\
\end{cases}$$
```
$$y=\begin{cases}
2x+1, & x \leq 0 \\\\
x, & x>0\\\\
\end{cases}$$

### 齐次方程
```
$$
\begin{cases}
\begin{array}{c}
a_1x+b_1y+c_1z=d_1\\\\
a_2x+b_2y+c_2z=d_2\\\\
a_3x+b_3y+c_3z=d_3\\\\
\end{array}
\end{cases}
$$
```
$$
\begin{cases}
\begin{array}{c}
a_1x+b_1y+c_1z=d_1\\\\
a_2x+b_2y+c_2z=d_2\\\\
a_3x+b_3y+c_3z=d_3\\\\
\end{array}
\end{cases}
$$

## 积分式

### 初等积分式
```
$$\int_{\theta_1(x)}^{\theta_2(x)}=l$$
```
$$\int_{\theta_1(x)}^{\theta_2(x)}=l$$

### 二重积分
```
$$\iint dx dy=\sigma$$
```
$$\iint dx dy=\sigma$$

### 三重积分
```
$$\iiint dx dy dz=\nu$$
```
$$\iiint dx dy dz=\nu$$

## 微分式

### 一阶微分方程
```
$$\frac{dy}{dx}+P(x)y=Q(x)$$
```
$$\frac{dy}{dx}+P(x)y=Q(x)$$

### 二阶微分方程
```
$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=f(x)$$
```
$$\frac{d^2y}{dx^2}+p\frac{dy}{dx}+qy=f(x)$$

## 矩阵和行列式

### 矩阵和行列式符号

#### 小括号边框矩阵
```
$$\begin{pmatrix}
1&2\\\\
3&4\\\\
\end{pmatrix}$$
```
$$\begin{pmatrix}
1&2\\\\
3&4\\\\
\end{pmatrix}$$

#### 中括号边框矩阵
```
$$\begin{bmatrix}
1&2\\\\
3&4\\\\
\end{bmatrix}$$
```
$$\begin{bmatrix}
1&2\\\\
3&4\\\\
\end{bmatrix}$$

#### 大括号边框矩阵
```
$$\begin{Bmatrix}
1&2\\\\
3&4\\\\
\end{Bmatrix}$$
```
$$\begin{Bmatrix}
1&2\\\\
3&4\\\\
\end{Bmatrix}$$

#### 单竖线边框行列式
```
$$\begin{vmatrix}
1&2\\\\
3&4\\\\
\end{vmatrix}$$
```
$$\begin{vmatrix}
1&2\\\\
3&4\\\\
\end{vmatrix}$$

#### 双竖线边框行列式
```
$$\begin{Vmatrix}
1&2\\\\
3&4\\\\
\end{Vmatrix}$$
```
$$\begin{Vmatrix}
1&2\\\\
3&4\\\\
\end{Vmatrix}$$

### 单位矩阵
```
$$\begin{bmatrix}
1&0&0\\\\
0&1&0\\\\
0&0&1\\\\
\end{bmatrix}$$
```
$$\begin{bmatrix}
1&0&0\\\\
0&1&0\\\\
0&0&1\\\\
\end{bmatrix}$$

### 任意矩阵
```
$$A=\begin{bmatrix}
{a_{11}}&{\cdots}&{a_{1n}}\\\\
{a_{21}}&{\cdots}&{a_{2n}}\\\\
{\vdots}&{\ddots}&{\vdots}\\\\
{a_{m1}}&{\cdots}&{a_{mn}}\\\\
\end{bmatrix}$$
```
$$A=\begin{bmatrix}
{a_{11}}&{\cdots}&{a_{1n}}\\\\
{a_{21}}&{\cdots}&{a_{2n}}\\\\
{\vdots}&{\ddots}&{\vdots}\\\\
{a_{m1}}&{\cdots}&{a_{mn}}\\\\
\end{bmatrix}$$

### 增广矩阵
```
$$\left[ \begin{array} {c c | c}
1&2&3\\\\
4&5&6\\\\
\end{array} \right]$$
```
$$\left[ \begin{array} {c c | c}
1&2&3\\\\
4&5&6\\\\
\end{array} \right]$$

### 行列式
```
$$D=\begin{vmatrix}
{a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\\\
{a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\\\
{\vdots}&{\vdots}&{\ddots}&{\vdots}\\\\
{a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\\\
\end{vmatrix}$$
```
$$D=\begin{vmatrix}
{a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\\\
{a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\\\
{\vdots}&{\vdots}&{\ddots}&{\vdots}\\\\
{a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\\\
\end{vmatrix}$$

## 极限表达式
```
$$f(n)=\lim_{n \rightarrow +\infty} \frac{1}{n(n+1)}$$
```
$$f(n)=\lim_{n \rightarrow +\infty} \frac{1}{n(n+1)}$$



[^1]: MathJax支持的$\LaTeX$公式种类丰富，这里只是罗列了较常用的部分，具体支持内容请见其[官网](https://www.mathjax.org/)。