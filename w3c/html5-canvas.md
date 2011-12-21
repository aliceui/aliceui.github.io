<h1>HTML5: Canvas API</h1>
1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [兼容解决方案](#spec-solution)
6. [参考文献](#spec-ref)

<h2>一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder" summary="Browser support for HTML5 Graphics &amp; Embedded 
Content" height="190" width="920">
<tbody>
<tr>
<th class="primary-heading" scope="row"><span class="offScreen">Platform</span></th>
<th class="primary-heading" colspan="4" scope="colgroup">MAC</th>
<th class="primary-heading" colspan="8" scope="colgroup">WIN</th>
<th class="offScreen">%<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<th class="row-heading secondary-heading" scope="row"><span class="offScreen">Browser</span></th>
<th class="browser-id browser-opera secondary-heading" colspan="1" scope="col"><a href="http://www.opera.com/browser/" target="_blank" title="Download the Opera web browser">OPERA</a></th>
<th class="browser-firefox browser-id secondary-heading" colspan="1" scope="col"><a href="http://www.mozilla-europe.org/en/firefox/" target="_blank" title="Download the Firefox web browser">FIREFOX</a></th>
<th class="browser-id browser-safari secondary-heading" colspan="1" scope="col"><a href="http://www.apple.com/safari/download/" target="_blank" title="Download the Safari web browser">SAFARI</a></th>
<th class="browser-chrome browser-id secondary-heading" colspan="1" scope="col"><a href="http://www.google.com/chrome/" target="_blank" title="Download the Chrome web browser">CHROME</a></th>
<th class="browser-id browser-opera secondary-heading" colspan="1" scope="col"><a href="http://www.opera.com/browser/" target="_blank" title="Download the Opera web browser">OPERA</a></th>
<th class="browser-firefox browser-id secondary-heading" colspan="2" scope="colgroup"><a href="http://www.mozilla-europe.org/en/firefox/" target="_blank" title="Download the Firefox web browser">FIREFOX</a></th>
<th class="browser-id browser-safari secondary-heading" colspan="1" scope="col"><a href="http://www.apple.com/safari/download/" target="_blank" title="Download the Safari web browser">SAFARI</a></th>
<th class="browser-id browser-ie secondary-heading" colspan="2" scope="colgroup"><a href="http://www.microsoft.com/ie/" target="_blank" title="Download the Ie web browser">IE</a></th>
<th class="browser-chrome browser-id secondary-heading" colspan="2" scope="colgroup"><a href="http://www.google.com/chrome/" target="_blank" title="Download the Chrome web browser">CHROME</a></th>
<th class="offScreen">&nbsp;</th>
</tr>
<tr>
<th class="row-heading tertiary-heading" scope="row"><span class="offScreen">Version</span></th>
<th class="tertiary-heading" scope="col"> 10.63 </th>
<th class="tertiary-heading" scope="col"> 3.6 </th>
<th class="tertiary-heading" scope="col"> 5 </th>
<th class="tertiary-heading" scope="col"> 7 </th>
<th class="tertiary-heading" scope="col"> 10.63 </th>
<th class="tertiary-heading" scope="col"> 3.6 </th>
<th class="tertiary-heading" scope="col"> 4.03 </th>
<th class="tertiary-heading" scope="col"> 5 </th>
<th class="tertiary-heading" scope="col"> 8 </th>
<th class="tertiary-heading" scope="col"> 9 </th>
<th class="tertiary-heading" scope="col"> 7 </th>
<th class="tertiary-heading" scope="col"> 8 </th>
<th class="offScreen">&nbsp;</th>
</tr>
</tbody>
 
<tbody>
<tr id="ukik">
<th class="row-heading" scope="row">Canvas</th>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-excellent support-grade"> 84%</td>
</tr>
<tr id="hqtt">
<th class="row-heading" scope="row">Canvas Text</th>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-excellent support-grade"> 82% </td>
</tr>
</tbody>
</table>

<h2 id="spec-api">二、API 参考</h2>
**（1）API SPEC:**[http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html")

* &lt;canvas&gt;

**2. HTML 写法：**

 Canvas 生成的时候默认是不可见的。但我们可以通过 CSS 来改变它的外观。其 HTML 写法也像其他 HTML5 新增的标签一样简洁。Global Attribute 也只有 height 和 width，主要还是用 Javascript 来对其进行操作。

    <canvas id="diagonal" style="border: 1px solid;" width="200" height="200">
            canvas is not supported
    </canvas>

**3.Script**

javascript

    function drawDiagonal() {

        // Get the canvas element and its drawing context
        var canvas = document.getElementById('diagonal');
        var context = canvas.getContext('2d');
        
        // Create a path in absolute coordinates
        context.beginPath();

        context.moveTo(70, 140);
        context.lineTo(140, 70);
        
        // Stroke the line onto the canvas
        context.stroke();
    }
        
    window.addEventListener("load", drawDiagonal, true);


**(1)浏览器检测**

javascript
    try {
        var hasCanvas = !!(document.createElement('canvas').getContext('2d'));
    } catch(msg) {}


**(2)Scripting API**
Canvas: var canvas  = document.getElementById('canvas')<br>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">canvas 对象属性<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">toDataUrl([Optional], [Variadic])<br>
</td>
<td style="text-align:left">返回 string<br>
</td>
</tr>
<tr>
<td style="text-align:left">getContext(string Context Type)<br>
</td>
<td style="text-align:left">返回 object<br>
</td>
</tr>
</tbody>
</table>
Context: var ctx = canvas.getContext('2d');

注：x, y 通常代指坐标点的 x 和 y轴<br>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">矩形<br>
</th>
<th>描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">fillRect(x, y, width, height)<br>
</td>
<td style="text-align:left">画一个矩形<br>
</td>
</tr>
<tr>
<td style="text-align:left">strockRect(x, y, width, height)<br>
</td>
<td style="text-align:left">画一个矩形外框<br>
</td>
</tr>
<tr>
<td style="text-align:left">clearRect(x, y, width, height)<br>
</td>
<td style="text-align:left">类似于打孔效果，把某个层清除，将其成变透明区<br>
</td>
</tr>
<tr>
<td style="text-align:left">rect(x, y, width, height)<br>
</td>
<td style="text-align:left">x,y 新矩形的 top 和 left 值。当这个方法被调用，默认调用 moveTo(0,0)<br>
</td>
</tr>
</tbody>
</table>
<table class="zeroBorder" height="468" width="826">
<tbody>
<tr>
<th>绘制路径<br>
</th>
<th>描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">beginPath()<br>
</td>
<td style="text-align:left">告诉浏览器，你要开始绘制。当 beginPath() 被调用，是另一个过程的开始。<br>
 相当于 html 中的起始标签。<br>
</td>
</tr>
<tr>
<td style="text-align:left">closePath()<br>
</td>
<td style="text-align:left">结构一个绘制过程。<br>
 相当于 html 中的结束标签。<br>
</td>
</tr>
<tr>
<td style="text-align:left">stroke()</td>
<td style="text-align:left">绘制形状外框<br>
</td>
</tr>
<tr>
<td style="text-align:left">fill()<br>
</td>
<td style="text-align:left">绘制实心形状。一旦 fill() 被调用，形状的绘制将被结束，不再需要 closePath()<br>
</td>
</tr>
<tr>
<td style="text-align:left">clip()<br>
</td>
<td style="text-align:left">把后续特性限制在剪接的图形内。<br>
</td>
</tr>
<tr>
<td style="text-align:left">moveTo(x, y)<br>
</td>
<td style="text-align:left">描述虚拟的“画笔”放到要开始绘制的点<br>
</td>
</tr>
<tr>
<td style="text-align:left">lineTo(x, y)<br>
</td>
<td style="text-align:left">绘制线条，x, y 表示线条的结束点坐标。<br>
</td>
</tr>
<tr>
<td style="text-align:left">arc(x, y, radius,startAngle, endAngle, anticlockwise)<br>
</td>
<td style="text-align:left">绘制弧形、圆形。x, y 是圆的中心坐标；radius 半径；startAngle, endAngle，圆形弧度的开始点和结束点，以X轴为准；anticlockwise，逆时针旋转，Boolean。<br>
<br>
注：Angle 是靠弧度来计算的，而不是以旋转的度数来计算。<br style="color:#999999">
var var degree = 270, // 度数<br style="color:#999999">
radians = (Math.PI/180)*degree; // 弧度<br>
</td>
</tr>
<tr>
<td style="text-align:left">quadraticCurveTo(cp1x, cp1y, x, y)<br>
</td>
<td rowspan="2" style="text-align:left">x, y 为结束点坐标；cp1x, cp1y 为第一个控制点的坐标;同上；cp2x, cp2y 为第二个控制点的坐标。<br>
<br>
注：quadratic curve 只有一个控制点，而bezier curve有两个控制点。所以，别把数字 1 写成字母 L 的小写。<br>
<img src="/images/HTML5-Canvas-bezierCurveTo.png" style="height:190px;width:190px"><br>
</td>
</tr>
<tr>
<td style="text-align:left">bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)<br>
</td>
</tr>
</tbody>
</table>
<table class="zeroBorder" height="85" width="598">
<tbody>
<tr>
<th>图片<br>
</th>
<th>描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">drawImage(image, x, y [, width, height])<br>
</td>
<td style="text-align:left">1. imgage, 图片，或者我们的 canvas 对象。如 var img = new image(); <br>
 2. x, y 在 canvas 中放置图片的坐标，想当于 CSS 的 top, left;<br>
 3. width, height，生成图片的宽高。<br>
</td>
</tr>
<tr>
<td style="text-align:left">drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)<br>
</td>
<td style="text-align:left">1. image 同上；<br>
 2. 其他属性用图示比较容易理解：<br>
 &nbsp;&nbsp; s = source, d = destination canvas；<br>
 &nbsp;&nbsp; sx, sy, 截取原始变成目标图片的开始坐标点；<br>
 &nbsp;&nbsp; swidth, sheight 想实现目标图片的大小；<br>
 &nbsp;&nbsp; dx, dy, 目标图片在画面中的位置坐标点；<br>
 &nbsp;&nbsp; dwidth, dheight 目标图片在画布中的大小。<br>
<div id="bqa0" style="text-align:left"><img src="/images/HTML5-Canvas-drawImage.jpg" style="height:290px;width:300px">&nbsp; &nbsp;&nbsp; <br>
</div>
</td>
</tr>
<tr>
<td style="text-align:left">createPattern(image, type)<br>
</td>
<td style="text-align:left">1. image 同上；<br>
2. type 有 repeat, repeat-x, repeat-y, no-repeat。意思同 CSS 中的 background-repeat。<br>
</td>
</tr>
</tbody>
</table>
<table class="zeroBorder">
<tbody>
<tr>
<th>颜色<br>
</th>
<th>描述<br>
</th>
</tr>
</tbody>
 
<tbody align="left">
<tr>
<td style="text-align:left">fillStyle = color<br>
</td>
<td style="text-align:left">填充颜色<br>
注：color 可以是 CSS 颜色中的任何一种。<a class="external" href="http://www.w3.org/TR/2003/CR-css3-color-20030514/#numerical" rel="external nofollow" style="color:#999999" target="_blank" title="http://www.w3.org/TR/2003/CR-css3-color-20030514/#numerical">CSS3 color values</a><br>
</td>
</tr>
<tr>
<td style="text-align:left">strokeStyle = color<br>
</td>
<td style="text-align:left">绘制线条颜色。color value 同上<br>
</td>
</tr>
<tr>
<td style="text-align:left">globalAlpha = transparentcy value</td>
<td style="text-align:left">transparency value 可以在 0.0 ~ 1.0 之间的值。表示 alpha 透明。类似于设置 CSS 的 opacity。</td>
</tr>
</tbody>
</table>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">线条<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">lineWidth = value<br>
</td>
<td style="text-align:left">线条的大小。必须是正值。默认值是 1.0。<br>
</td>
</tr>
<tr>
<td style="text-align:left">lineCap = type<br>
</td>
<td style="text-align:left">线条起始点模式。type 有 3 种：butt/round/square。默认为 butt。<br>
注：butt 与 spuare 的区别是，spuare 的半个 spuare 在基准线给的两端突出。如图：<br>
<div id="du53" style="text-align:left"><img src="/images/HTML5-Canvas-lineCap.png" style="height:190px;width:190px"></div>
</td>
</tr>
<tr>
<td style="text-align:left">lineJoin = type<br>
</td>
<td style="text-align:left">线组合模式。type 有 3 种：round/bevel/miter。默认为 miter。<br>
<div id="muct" style="text-align:left"><img src="/images/HTML5-Canvas-lineJoin.png" style="height:190px;width:190px"></div>
</td>
</tr>
<tr>
<td style="text-align:left">miterLimit = value<br>
</td>
<td style="text-align:left">线条组件斜面的最大值。<br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th>渐变<br>
</th>
<th>描述<br>
</th>
</tr>
</tbody>
 
<tbody align="left">
<tr>
<td style="text-align:left">createLinearGradient(x1, y1, x2, y2)<br>
</td>
<td style="text-align:left">线性渐变。x1, y1，渐变起始点的坐标；x2, y2 渐变结束点的坐标轴。<br>
</td>
</tr>
<tr>
<td style="text-align:left">createRadiaGradient(x1, y1, r1, x2, y2, r2)<br>
</td>
<td style="text-align:left">放射线渐变。x1, y1, x2, y2 同上。r1 表示起始点的半径，r2 表示结束点的半径。<br>
</td>
</tr>
<tr>
<td style="text-align:left">addColorStop(position, color)<br>
</td>
<td style="text-align:left">添加渐变起始点或结束点的渐变颜色。position 的值是： 0.0~1.0; Color 为 CSS3 允许的颜色值。<br>
<br>
注：用于 gradient 上。<br style="color:#999999">
var lGradient = ctx.createLinearGradient(0, 0, 0, 150);<br style="color:#999999">
lGradient.addColorStop(0.6, 'red');<br>
</td>
</tr>
</tbody>
</table>
<div style="">&nbsp; <br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">投影<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">shadowOffsetX = value<br>
</td>
<td style="text-align:left">x 方面投影大小，{Number}<br>
</td>
</tr>
<tr>
<td style="text-align:left">shadowOffsetY = value<br>
</td>
<td style="text-align:left">y 方向投影大小，{Number}<br>
</td>
</tr>
<tr>
<td style="text-align:left">shadowBlur = value<br>
</td>
<td style="text-align:left">扩散投影大小，{Number}</td>
</tr>
<tr>
<td style="text-align:left">shadowColor = color<br>
</td>
<td style="text-align:left">投影颜色。color, CSS3 支持的颜色<br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">存储<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">save()<br>
</td>
<td style="text-align:left">保存。<br>
</td>
</tr>
<tr>
<td style="text-align:left">restore()<br>
</td>
<td style="text-align:left">恢复。一旦被调用，将会恢复到上一次保存的样式。<br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">变形<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">translate(x, y)<br>
</td>
<td style="text-align:left">把 canvas 的原点行动到 x, y 作为其新原点。<br>
<div id="eapv" style="text-align:left"><img src="/images/HTML5-Canvas-translate.png" style="height:220px;width:220px"></div>
</td>
</tr>
<tr>
<td style="text-align:left">rotate(angle)<br>
</td>
<td style="text-align:left">&nbsp;顺时间旋转。angle 是指弧度，像 arc 的 startAngle 和 endAngle。<br>
<div id="j90c" style="text-align:left"><img src="/images/HTML5-Canvas-rotate.png" style="height:220px;width:220px"></div>
</td>
</tr>
<tr>
<td style="text-align:left">scale(x, y)<br>
</td>
<td style="text-align:left">x, y 水平和垂直方向的缩放比率，值在 -1～1之间。<br>
</td>
</tr>
<tr>
<td style="text-align:left">transform(m11, m12, m21, m22, dx, dy)<br>
</td>
<td style="text-align:left">变换矩阵（transformation matrix）。<br>
官方 和 MDC 的描述都不是很清楚。大家用到的时候搜索一下。<br>
</td>
</tr>
<tr>
<td style="text-align:left">setTransform(m11, m12, m21, m22, dx, dy)<br>
</td>
<td style="text-align:left">设置变形的值。参数同上。<br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">组合<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">globalCompositeOperation = type<br>
</td>
<td style="text-align:left"><br>
共 12 种状态。有多层的状态下。会稍有不同。大家自己手写一下，印象会更深刻一点。分别如下图显示：<br>
<br/>
<div id="arl7" style="text-align:left"><img src="/images/HTML5-Canvas-globalCompositeOperation.png" style="height:492px;width:610px"></div>
<br>
</td>
</tr>
</tbody>
</table>
**4. Cheetsheet**
<div id="b.g-" style=";text-align:left"><img src="/images/HTML5-Canvas-Cheetsheet.png" style="height:1027px;width:1388px"></div>

<h2 id="spec-demo">三、DEMO</h2>
* [Deviant Art Muro](http://muro.deviantart.com/ "Deviant Art Muro")

<h2 id="spec-caution">四、注意事项</h2>
* 创建的 Canvas 默认是不可见的，需要用 CSS 来样式化。
* 如果不设置宽度，默认宽高分别是 300px 150px。
* 目前 Context Type 只有 2D 是被支持的，因此检测其支持状态时，我们用的是 getContext('2D')。
* 外观都是根据其 Context 来创建的，而非 Canvas 本身。
* Canvas 绘制的是位图，而不是 SVG 那种矢量图。

<h2 id="spec-solution">五、兼容解决方案</h2>
* 目前比较好的兼容方案是，在 IE6-8 中使用开源的 Explore Canvas。
* Open source on Google Code：[http://code.google.com/p/explorercanvas/](http://code.google.com/p/explorercanvas/ "http://code.google.com/p/explorercanvas/")

<h2 id="spec-ref">六、参考文献</h2>
* BOOK:《Pro HTML5 Programming》
* [Canvas tutorial](https://developer.mozilla.org/en/canvas_tutorial "Canvas tutorial")
* [HTML5 Spec: the canvas element](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html "HTML5 Spec: the canvas element")
* [HTML5 Canvas CheetSheet](http://blog.nihilogic.dk/2009/02/html5-canvas-cheat-sheet.html "HTML5 Spec: the canvas element")
* [HTML5 & CSS3 Support, Web Design Tools & Support](http://www.findmebyip.com/litmus "HTML5 & 
CSS3 Support, Web Design Tools & Support")

