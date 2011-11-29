---
title: CSS 开发规范
layout: doc
categories:
- alice
---

# CSS 开发规范
## 本规范概述
制定本规范的目的在于使我们的CSS代码更加易于维护和重用，从而提升效率执行本规范时建议的流程<br>
建议使用D(esign)C(oding)D(ebug)V(alidate)R(oundup)，即DCDVR的流程。首先需要规划样式并分为共有样式和页面个性化样式，然后才开始编码，编码的同时进行Debug，Validate和代码片断的总结，而不是在所有模板都完成后才进行这三个步骤。
## 一、关于 alice v3 & style lib 开发规范
详见：[https://docs.google.com/Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfMThjanM5NWJjaA](Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfMThjanM5NWJjaA "https://docs.google.com/Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfMThjanM5NWJjaA")
## 二、selector 命名规范：
* 命名除 .fn- / .ui- / .sl- 外，可自定义命名。请慎用 selected current disabled first last success error
* 一般情况下，如果命名比较通用，比如 current，请限定在相应的上下文环境中。比如其父节点ID为#parent 等比较通用的命名，建议写成 #parent .current{}，而非 .current{}，即使是为了重用，也应该注意。只有在非常明确不会影响到其他组件工作，并且其他人不会写这种命名的情况下，才让它变成全局通用的。
* 作为JS接口的class或者ID，必须是以 J- 前缀开头的。除 JS 接口命名外，其他命名一律使用小写字母

## 三、注释：
* 组件注释:


    /**
      * @name: 组件名
      * @overview: 组件介绍
      * @require: 依赖的样式
      * @author: 小鱼(sofish@163.com)
      */


* 块状或行内元素，都请使用 /* comment */ 注释，注释文字前后端保持各有一个空格
* 为了您的体验着想，一目了解的代码，就不要注释了，比如 “display:none; /* 让元素看不见 */” 工作还有很多啊，同学，请为了自己的体力着想。

## 四、CSS文件

* 文件编码必须使用utf-8（无BOM）
* 文件一律通过 link 链入 (NOT @import)
* 当只是单个页面使用时，才写在 &lt;head&gt; 的 &lt;style&gt; 中

## 五、Hack 规则

* 一般情况下，不要使用 IE 条件注释： <!--[if IE]><![endif]-->
* 通用 Hack


    .all-IE{property:value\9;}
    .gte-IE-8{property:value\0;}
    .lte-IE-7{*property:value;}
    .IE-7{+property:value;}
    .IE-6{_property:value;}
    .not-IE{property//:value;}
    @-moz-document url-prefix() { .firefox{property:value;} }
    @media all and (-webkit-min-device-pixel-ratio:0) { .webkit{property:value;} }
    @media all and (-webkit-min-device-pixel-ratio:10000),not all and (-webkit-min-device-pixel-ratio:0) { .opera{property:value;} }
    @media screen and (max-device-width: 480px) { .iphone-or-mobile-s-webkit{property:value;} }


* 当然，强烈建议你使用更优雅的hack方式。那就是避免hack。或者在书写上，做点小trick。比如：


    .selector .child{property:value;} /* for ie-6 */
    .selector > .child{property:value;} /* except ie-6 */


* 关于Hack: 在firefox写完，IE有问题？还是其他浏览器也出现了。你知道IE Hack 能解决。我想，你也可能知道，用其他方法也能绕过。建议少用Hack。

## 六、书写规范：

**1. 以如下写法为例：**<br>
第一种方式：（强烈推荐）


    /* 区域模块-1 */
    .tech, .ued{
        background:#f60 url(alipay.com/orange.png) no-repeat 0 0;
    }
    /* 区域模块-2 */
    .tech{
        width:950px;
        margin:0 auto;
    }
    .tech .wd{
        width:620px;
        float:left;
    }

第二种方式：（如果让其他看，请先格式化）

    /* 区域模块-3 */
    .ued{width:100%;padding:30px 50px;}
    .ued .visual{display:inline-block;font:700 normal 12px/1.5 arail;} 

**2. 非常重要，需要你注意的点:**

* 区域模块间用空行分隔
* 多个选择器写一起时，逗号（,）后紧跟一个空格
* 避免行内样式，即使是JS，也应该尽量使用class/ID来决定显示，而非行内样式
* 避免使用低效选择器（所以，别滥用class；当然，不滥用ID我相信你是知道的）

详见：[http://code.google.com/speed/page-speed/docs/rendering.html](http://code.google.com/speed/page-speed/docs/rendering.html "http://code.google.com/speed/page-speed/docs/rendering.html")

* 尽量使用缩写，比如 font:700 normal 12px/1.5 arial; 一般不要写成

    font-weight:600;
    font-style:normal;
    font-size:12px;
    line-height:1.5;
    font-family:arail;

通常需要使用缩写规则的:

    padding: top right bottom left; <--> padding: top-bottom right+left; <--> padding: top left-right bottom; <--> padding: top-right-bottom-left; 如：padding:1px 2px 3px 4px;
    margin: 同上
    color: red; color;#FFF; color:#ABCABC （颜色名>16进制写法；颜色名采用小写，16进制使用大写；写3位，还是6位，自便）
    background: color imageUrl repeat attachment position; 如：background:#ddd url(alipay-wd.png) no-repeat scroll 10px 20px;
    border: size style color; 如: border:1px solid #ddd;
    font: weight variant style size/lineHeight family; 如 font:700 small-caps italic 12px/1.5 "Courier New"; font-weight 统一用 500 代替 normal, 用 700 代替 bold;
    list-style: type position image; 如：list-style: square inside url(alipay-wd.png); 不过，通常我们要使用的是 list-style:none;

* CSS3 书写规范：浏览器私有写法在前，标准写法在后

    -moz-box-shadow: 1px 2px 3px #ddd;
    -webkit-box-shadow: 1px 2px 3px #ddd;
    box-shadow: 1px 2px 3px #ddd;

* 书写顺序
不强制书写顺序。但我们应该养成良好的习惯，让看代码的人更易理解。易读对于团队协作来说是非常重要的：

1. 框架为先，细节次之
比如写一个浮动容器的样式，我们应该先让这个容器的框架被渲染出来，让大家看到基本的网站框架。然后再再去渲染容器里面的内容。最终呈现给用户. 通常像 color font padding 之类的，写在后面。
           .selector{float:left;width:300px;height:200px;font-size:14px;color:#f36;}
2. 有因才有果
* 比如想使用”图片替换文字“技术，通常要使用的text-indent。如果我们使用标签的是 span：<span class="thepic">这个文字将被图片替换</span>

* 我们应该是先将 span 变成”块级元素“（使用 display:block，虽然他永远不是块级元素），再将文字 indent。而不是先 indent 再变成块级的： .thepic{display:block;text-indent:-9999em;}
* 又如我们，如果想让一个 span 使用 margin, 那么我们应该这样写： span{display:block;margin-bottom:10px;} 而非 span{margin-bottom:10px;display:block;} 因为没有 display 之前，行内元素是没有 margin 的。

## 七、IE私有特性
1. expression<br>
记住一句话：无论什么时候，都不要使用它。用 Javascript 吧。更优雅，更灵活。
2. filter

    * 应该尽量避免使用 AlphaImageLoader
    * 可以适当在投影/发光/渐变/去色方面上使用

3. IE bug<br>
常见BUG，详见：[http://ued.alipay.com/wd/2010/07/28/ie-beat-the-holy-canon-css-bug-table/](http://ued.alipay.com/wd/2010/07/28/ie-beat-the-holy-canon-css-bug-table/ "http://ued.alipay.com/wd/2010/07/28/ie-beat-the-holy-canon-css-bug-table/")

## 八、如何规划你的 CSS 文件结构
* **一定要有全局设置**<br>
  全局设置可以避免重复书写同样的东西。比如3人在一个项目中，假设项目中涉及到的链接有 10 种颜色，如果有全局重设，我们就可以统一设置颜色。如果没有，我们可能每个都会为自己所负责部分的链接定义相应的颜色。这样一来就导致多处定义，且定义不统一。以后维护需要到各个地方都改。这是很麻烦的事。另外就是css文件也会因此变大。所以，在写之前，大家应该先分析视觉稿，统一全局设置。

     /* global reset */
     body{padding:0;margin:0;font.....}
     a{color:#07f;}
     a:hover{color:#555;}

需要注意的是，一般情况下，不要直接给标签写样式。而应该使用 class。像下面这种写法，并不是很合适: 

    h1{font-size:30px}
    h2{font-size:20px}
    h3{font-size:10px;}

如果有另外一个 h2 也要使用 10px 的，而其他的都仍使用 20px 的，那可就不好办了。所以，推荐用这种方法：

    /* global classes */
    .text-size30{font-size:30px;}
    .text-size20{font-size:20px;}
    .text-size10{font-size:10px;}
    。。。

    <h2 class="text-size20">...
    <h2 class="text-size10">...

* **一定要模块化**<br>
有两点需要注意的，一是，注意代码重用的模块化；一是，注意 HTML 结构的模块化，而不是分块。
    * 我们是这样重用的：

    <div id="module-1" class="module">
        <h3>TITLE</h3>
        <p class="module-item">
            some text
        </p>
    </div>

    <div id="module-2" class="module">
        < h3>TITLE</h3>
        <p class="module-item">
            some text
        </p>
    </div>
   
    /* module, reuse style in module scrope*/
    .module{}
    .module-status{}
    .module-item{}
    .module-status .module-1-item{}
   
    /* customize */
    #module-1 .module-item{}
    #module-2 .module-item{}

* HTML 的模块化：<br>
我们应该这样写（他们的视觉是一体的，代码也应该是一体的）：

    <div id="module-1" class="module">
        <h3>TITLE</h3>
        <p class="module-item">
            some text
        </p>
     </div> <!-- #module .module -->

而不是这样写：

    <h3>TITLE</h3> <!-- 第一块 -->

     <div id="module-1" class="module>
        <p class="module-item">
            some text
        </p>
     </div> <!-- 第二块 -->   

## 九、值得注意的事
1. **Background Color:**
    * 一般我们都会写: background:url(path/to/image) no-repeat 0 0;
    * 当元素背景是深色的时候，比如#000，我们通常会选择一种比较浅的颜色来做为文本的颜色，比如#fff，为了避免网速缓慢导致CSS已经 加载，而图片仍未加载完成或图片服务器挂掉时文本不可见，请尽量使用加上CSS定义的背景颜色，如：background:#e8edef url(path/to/image) no-repeat 0 0;
2. **has Layout**<br>
别用轻易使用hack，IE下很多兼容性问题都是 has Layout 引起的。试着给元素加上:

    display: inline-block
    height: (除 auto 外任何值)
    width: (除 auto 外任何值)
    float: (left 或 right)
    position: absolute
    writing-mode: tb-rl
    zoom: (除 normal 外任意值) 

3. **代码测试:**<br>
一般情况下，我们需要测试通过的是电脑端的A-Grade浏览器：

<table class="zeroBorder" style="font-family:Courier New;margin-left:40px" summary="This chart lists browsers that receive A-Grade support 
as defined by Graded Browser Support.">
<tbody>
<tr>
<td><br>
</td>
<th>Win XP</th>
<th>Win 7</th>
<th>Mac 10.6.†</th>
<th>iOS 3.†</th>
<th>iOS 4.†</th>
<th>Android 2.2.†</th>
</tr>
</tbody>
<tbody>
<tr>
<th>Safari 5.†</th>
<td><br>
</td>
<td><br>
</td>
<td>A-grade</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th>Chrome † (latest stable)</th>
<td>A-grade</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th>Firefox 4.†</th>
<td><br>
</td>
<td>A-grade (upon GA release)</td>
<td>A-grade (upon GA release)</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th>Firefox 3.6.†</th>
<td>A-grade</td>
<td>A-grade</td>
<td>A-grade</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th>IE 9.0</th>
<td><br>
</td>
<td class="future">A-grade (upon GA release)</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th>IE 8.0</th>
<td>A-grade</td>
<td>A-grade</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th>IE 7.0</th>
<td>A-grade</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th>IE 6.0</th>
<td>A-grade</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<th id="e1_2" scope="row">Safari for iOS</th>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td>A-grade</td>
<td>A-grade</td>
<td><br>
</td>
</tr>
<tr>
<th id="vppu" scope="row">WebKit for Android OS</th>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td><br>
</td>
<td>A-gradea</td>
</tr>
</tbody>
</table>

更多关于这个列表的资料，请看：[http://developer.yahoo.com/yui/articles/gbs/](http://developer.yahoo.com/yui/articles/gbs/ "A-Grade browsers")

