# 每周总结可以写在这里
#### 1.选择器
- 简单选择器
    - `*`
    - div svg|a
    - .cls
    - #id
    - [attr=value] [attr|=value] [attr~=value]
    - :hover
    - ::before
- 复合选择器
  - eg:.box-container.box-title
- 复杂选择器
  - <复合选择器>`<sp>`<复合选择器> // eg: .a .b 子孙关系 a下的b
  - <复合选择器>">"<复合选择器>// 子一级
  - <复合选择器>"~"<复合选择器>// select level3
  - <复合选择器>"+"<复合选择器>// select level3
  - <复合选择器>"||"<复合选择器>// select level4
- 选择器列表
    - eg：.a,.b
#### 2.选择器优先级
优先级关系：
内联>ID选择器> 类选择器> 标签选择器
[A,B,C,D]

A：内联样式出现总次数
B:ID选择器出现总次数
C:类选择器：类选择器、属性选择器、伪类出现总次数
D：标签选择器、伪元素出现总次数


- div#a.b .c[id=x]   【0,1,2,1】 0131
- #a:not(#b)         【0,2,1,0】 0200
- *.a                【0,0,0,2】 0010
- div.a              【0,0,1,1】


00：47

#### 3.伪类
- 链接/行为
    - ：any-link
    - :link :visited
    - :hover
    - :active
    - :focus
    - :target
- 树结构
    - ：empty
    - ：nth-child（）
    - ：nth-last-child（）
    - ：first-child :last-child :only-child
- 逻辑型
    - ：not
    - ：where ：has
#### 4.伪元素
 - ：：before
 - ：：after
 - ：：firstLine
 - ：：firstLetter
  
  可用属性：
  待截图

  思考：为什么first line 不支持float




