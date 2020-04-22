# 每周总结可以写在这里

<a name="tQsKw"></a>
## 2020.4.18-第五节课
<a name="fmPzb"></a>
#### 1.any Unicode pointer
[https://www.fileformat.info/info/unicode/](https://www.fileformat.info/info/unicode/)

- blocks
- [Categories](https://www.fileformat.info/info/unicode/category/index.htm)
<a name="YTU4H"></a>
#### 2.词法
InputElement<br />whiteSpace - 空格<br />LineTerminator - 回车<br />Comment - 注释<br />Token - js代码中有效的词
<a name="PYUNv"></a>
#### 2.1.空格
-多种空格
<a name="rx0Ug"></a>
#### 2.2 换行符

- 4种换行符

  \n
<a name="piSZh"></a>
#### 2.3 注释
单行注释、多行注释
<a name="0JSLZ"></a>
#### 2.4 token

- Identifier 标识符
- Punctuator 
- Keywords
- Literal - 直接量 true、false
- <br />
<a name="vcUmH"></a>
#### String
97 .toString(2)<br />转成2进制，空格为了不将97当作浮点型<br />
<br />
<br />
<br />=== 待查<br />codePointerAt()<br />java中的tab和空格混用和js中tab和空格混用的区别<br />Unit8Array<br />Float64Array<br />
<br />=== 小作业<br />写一个正则表达式，匹配js所有Number<br />20:59<br />
<br />
<br />
<br />
<br />

<a name="w49ny"></a>
## 2020.4.16-第四节课
<a name="bo2JA"></a>
### 1.编程语言通识

- 非形式语言
- 形式语言（乔姆斯基谱系）
  - 0型 无限制文法：并不是无限制，有限制，只是与其他3型不同
  - 1型 上下文相关文法：放这放那意思不一样
  - 2型 上下文无关发 ：放这放那意思一样
  - 3型 正则文法：能用正则表达式解析的文法，会限制表达能力

词法：用正则<br />文法
<a name="vZSTs"></a>
### 2.产生式（BNF）

<br />-课件截图 TODO<br />demo：
```javascript
"a"

"b"

<Projram>:="a"+ | "b"+
<Projram>:=("a"+ | "b"+)+
            
abababbbbbabab

// 整数加法
<Number> = "0" | "1" | "2" | ...| "9"
<DecimalNumber> = "0" | (("1" | "2" | ...| "9")<Number>*)

<AdditiveExpression> = <DecimalNumber> | <AdditiveExpression> "+"<DecimalNumber>
  
<MultiplicativeExpression> = <DecimalNumber> | <MultiplicativeExpression> "*"<DecimalNumbe

```
正则文法：只能出现左递归<br />
<br />A:1 Grammar<br />A:1-A:5<br />

- 现代语言的特例

 -- 截图// TODO<br />

<a name="Xu7gK"></a>
### 3.图灵完备性
什么是图灵完备性？<br />[https://www.jianshu.com/p/a04b16c5bbda](https://www.jianshu.com/p/a04b16c5bbda)
<a name="NUC59"></a>
### 4.动态和静态
[https://www.cnblogs.com/raind/p/8551791.html](https://www.cnblogs.com/raind/p/8551791.html)<br />[https://www.jianshu.com/p/83a47cc71aff](https://www.jianshu.com/p/83a47cc71aff)
<a name="uEfpR"></a>
### 5.类型系统
无隐式转换-强类型<br />有隐式转换-弱类型
<a name="CyJZ2"></a>
### 6.一般命令式编程语言
--截图 // TODO<br />