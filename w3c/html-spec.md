---
title: HTML 开发规范
layout: doc
categories:
- alice
---

# HTML 开发规范

制定本规范的目的在于使我们的(X)HTML能够适应更多的客户端，符合标准的好处就在于此，而不在于机械化的执行。<br>
建议使用D(esign)C(oding)D(ebug)V(alidate)R(oundup)，即DCDVR的流程。首先对 (X)HTML模板 进行规划，然后才开始编码，编码的同时进行Debug，Validate和代码片断的总结，而不是在所有模板都完成后才进行这三个步骤。

## 一、在HTML 5标准上的强化规则

1. **一般规则**
    * 所有非空元素必须有闭合tag，如 &lt;p&gt;这是一个段落&lt;/p&gt;
        * 元素名称和属性名称全部小写
    * 属性值必须使用双引号包围
    * 在某些脚本必要的地方才使用 name 属性，否则一律使用id属性
    * 禁止 id 属性重复
    * 在属性值和元素内容出现的地方，如果有字符&、< 、 > 、那么应当分别使用 ", &amp;amp;、 &amp;lt;、 &amp;gt;
2. **样式分离规则**
    * 样式统一在 head 元素中使用 link 元素引用，不得在 head 元素以外的地方添加样式，不得在元素中使用 style 属性，不应当在元素中使用其他样式属性，如 background 等，不应当使用具有样式特征的元素，如 br, hr 等，其中br元素代表语气停顿，通常用于诗句，但这并不表示任何需要换行的地方就应当使用br元素。
    * 可以将样式统一写在 &lt;head&gt; 元素中的 &lt;style&gt; 元素中，但必须保证该样式是当前页面的唯一样式，如果该样式被其他页面同时使用，那么应当考虑抽离出来形成外部文件，除非样式只在当前页面调用。
3. **脚本分离规则**
    * 脚本仅能出现在 head 元素内和 body 元素闭合tag即 &lt;/body&gt; 前。不得在任何元素中使用event相关属性，如 onclick 等。

## 二、内容模型
1. 本规范的内容模型应当遵循HTML 5 提供的内容模型，其中的主要规则总结如下： 
    * 能够包含块级元素和行级元素的元素有 fieldset, div, li, object
    * 只能包含行级元素的元素有 h1 - h6, pre, p, address, 其他行级元素如 a 等
    * 只能包含块级元素的元素有 noscript, blockquote, form
    * 其余元素只能包含一些特定的元素，包括 table, ul, ol, dl, select

## 三、Doctype
一律使用使用W3C的HTML 5标准，文档以下内容规定了符合该Doctype需要满足的要求

    <!doctype html>
    <html>
    <head>
    <meta charset="gb2312" />
    <link rel="stylesheet" href="" charset="utf-8" />
    <title></title>
    <style type="text/css"></style>
    </head>
    <body>
    <script charset="utf-8"></script>
    </body>
    </html>

禁止强制浏览器渲染模式，像 &lt;meta http-equiv="x-ua-compatible" content="ie=7" /&gt;

## 四、TITLE元素
* head 元素中必须包含 title 元素

## 五、META元素
* 必须包含<meta charset="gbk" />或<meta charset="gb2312"> ，VM是使用GBK编码，所以页面也需要GBK解码。但静态的js和css文件是UTF-8编码的，所以在导入时需加上charset=“utf-8”。 如<script type=“text/javascript” src=“xxx.js” charset=“utf-8” />，推荐写法是： <meta charset="gb2312" /> 或 <meta charset="gbk" />
* 必须作为 head 元素的第一个子元素出现

## 六、TABLE元素
* 最好指定 summary 属性
* 必须显示包含 tbody 元素

## 七、TH元素
* 最好指定 scope 属性

## 八、A元素
* 不应当使用 name 属性，而用 id 替代
* 当 input 元素的顺序由于样式需要调整时，应当指定 tabindex 属性
* 关键的链接处应当指定 accesskey 属性
* 作为链接使用时，必须添加 href 属性，特别是有 a:hover状态时
* 解决怪异的虚线框，为IE6 添加 hidefocus=“true”，其他浏览器使用CSS outline:none，firefox有个bug, 请用 ::moz-focus-inner{border:0;}

## 九、LINK元素
* 当 link 元素用于引用CSS文档时，默认 media 是 screen，如为特殊终端提供样式，请指定 media 属性，如 media="print"

## 十、IMG元素
* 必须指定 alt 属性
* frame、iframe、img、embed标签必须带上src属性

## 十一、FORM元素
* form中严禁再嵌套form元素
* 推荐是form>fieldset

## 十二、INPUT元素
* 一个form有且只有一个type=“submit”的input按钮
* 禁止在form表单中使用<a />绑定onclick等事件来替代input[type=submit]提交表单
* 当 input 元素的顺序由于样式需要调整时，应当指定 tabindex 属性。密码控件下载的链接有点变成，因为代码里让链接失焦，所以tabindex会有问题。我的做法是，用 AlieditControl.url.downSrc获取当前系统的下载链接，删除js勾子，并把链接替换掉当前的#号，设置正确的tabindex就 正常了。
* 关键的控件处应当指定 accesskey 属性 可参考的accesskey标准
* 禁用&lt;input /&gt; 嵌套在 &lt;table&gt; &lt;tr&gt; 之间

## 十三、LABEL元素
* 与控件对应的文本必须使用 label 元素标记，且使用 for 属性指向该控件 id

## 十四、EMBED元素
* 不得使用该元素嵌入对象，如果需要在页面中嵌入flash，应当使用javascript
* 如果使用该元素，要遵循“frame、iframe、img、embed标签必须带上src属性

## 十五、IFRAME元素
* 尽量不要使用iframe元素
* frame、iframe、img、embed标签必须带上src属性，且为https引用。如果是空地址，请使用以下方法： <iframe src="javascript:'';"></iframe>

## 十六、(X)HTML注释
需要注释的内容有：
* 注意事项，或是给其他人的提醒
* 模块：在跨越很多很多行的包裹元素的闭合标签位置添加 <!-- #ID or .class-->

## 十七、HTML书写规范
* DOCTYPE声明和html元素之前不用空格，其余元素均根据父元素的位置缩进一个tab的距离，tab距离为4个空格。

## 十八、HTML常见错误举例
* 重复ID项，没有名为submit等保留字的ID的元素或者name的元素

## 十九、Flash相关
* 动态变量：&lt;param name= "flashvars" value="变量名=值&变量名2=值2&变量名3=值3"/&gt; 比如Flash中有链接，但这个链接没确定，我们可以把链接写在vm中。如：传变量liks1 liks2 liks3 这3个变量：&lt;param name= "flashvars" value="liks1=$userModule.setTarget('login.vm')&liks2=$productModule.setTarget('productDetail.vm').addQueryData('id','9')&liks3=$productModule.setTarget('disPackage.vm')" /&gt;
* 背景透明： &lt;param name="wmode" value="transparent" /&gt;
* 低z-index： &lt;param name="wmode" value="opaque" /&gt;
* 跨域访问： &lt;param name="allowScriptAccess" value="always" /&gt;
* 推荐写法： 

```
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" WIDTH="100%" HEIGHT="100%" id="someflash">
<param name="movie" value="someflash.swf" />

<param name="quality" value="high" />

<param name="wmode" value="transparent" />

<embed src="someflash.swf" quality="high" wmode="transparent" width="100%" height="100%" name="someflash" align="" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>

</object>
```

## 二十、请不要使用已过时的标记 如font,s,u等





