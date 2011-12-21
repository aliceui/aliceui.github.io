# CSS3: Backgrounds

1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [参考文献](#spec-ref)

<h2 id="spec-browser">一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder" summary="Browser support for HTML5 Forms Inputs" height="197" width="920">
<tbody>
<tr>
<th class="primary-heading" scope="row"><span class="offScreen">Platform</span></th>
<th class="primary-heading" colspan="4" scope="colgroup">MAC</th>
<th class="primary-heading" colspan="5" scope="colgroup">WIN</th>
<th class="offScreen">%</th>
</tr>
<tr>
<th class="row-heading secondary-heading" scope="row"><span class="offScreen">Browser</span></th>
<th class="browser-id browser-opera secondary-heading" colspan="1" scope="col"><a href="http://www.opera.com/browser/" target="_blank" title="Download the Opera web browser">OPERA</a></th>
<th class="browser-firefox browser-id secondary-heading" colspan="1" scope="col"><a href="http://www.mozilla-europe.org/en/firefox/" target="_blank" title="Download the Firefox web browser">FIREFOX</a></th>
<th class="browser-id browser-safari secondary-heading" colspan="1" scope="col"><a href="http://www.apple.com/safari/download/" target="_blank" title="Download the Safari web browser">SAFARI</a></th>
<th class="browser-chrome browser-id secondary-heading" colspan="1" scope="col"><a href="http://www.google.com/chrome/" target="_blank" title="Download the Chrome web browser">CHROME</a></th>
<th class="browser-id browser-opera secondary-heading" colspan="1" scope="col"><a href="http://www.opera.com/browser/" target="_blank" title="Download the Opera web browser">OPERA</a></th>
<th class="browser-firefox browser-id secondary-heading" colspan="1" scope="colgroup"><a href="http://www.mozilla-europe.org/en/firefox/" target="_blank" title="Download the Firefox web browser">FIREFOX</a></th>
<th class="browser-id browser-safari secondary-heading" colspan="1" scope="col"><a href="http://www.apple.com/safari/download/" target="_blank" title="Download the Safari web browser">SAFARI</a></th>
<th class="browser-id browser-ie secondary-heading" colspan="1" scope="colgroup"><a href="http://www.microsoft.com/ie/" target="_blank" title="Download the Ie web browser">IE</a></th>
<th class="browser-chrome browser-id secondary-heading" colspan="1" scope="colgroup"><a href="http://www.google.com/chrome/" target="_blank" title="Download the Chrome web browser">CHROME</a></th>
<th class="offScreen">&nbsp;</th>
</tr>
<tr>
<th class="row-heading tertiary-heading" scope="row"><span class="offScreen">Version</span></th>
<th class="tertiary-heading" scope="col"> 11.50 </th>
<th class="tertiary-heading" scope="col">&nbsp;&nbsp; 5 </th>
<th class="tertiary-heading" scope="col">&nbsp;&nbsp; 5 </th>
<th class="tertiary-heading" scope="col">&nbsp;&nbsp; 12 </th>
<th class="tertiary-heading" scope="col"> 11.50 </th>
<th class="tertiary-heading" scope="col">&nbsp;&nbsp;&nbsp; 5<br>
</th>
<th class="tertiary-heading" scope="col">&nbsp;&nbsp; 5 </th>
<th class="tertiary-heading" scope="col">&nbsp;9<br>
</th>
<th class="tertiary-heading" scope="col">&nbsp;&nbsp; 12<br>
</th>
<th class="offScreen">&nbsp;</th>
</tr>
</tbody>
 
<tbody>
<tr>
<th style="text-align:left" bgcolor="#ffffff">Background-origin<br>
</th>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td><br>
</td>
</tr>
<tr>
<th class="row-heading" scope="row">Background-clip<br>
</th>
<td>√<br>
</td>
<td>√<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>√</td>
<td>√<br>
</td>
<td class="supported">√</td>
<td>√<br>
</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">background-size<br>
</th>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">Mutiple backgrounds<br>
</th>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td><br>
</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-api">二、API 参考</h2>

**（1）API SPEC:**[http://www.w3.org/TR/css3-background/](http://www.w3.org/TR/css3-background/#borders "http://www.w3.org/TR/css3-background/#borders")<br/>

**（2）CSS:**

<table class="proptable zeroBorder" style="" height="369" width="920">
<tbody>
<tr>
<th>属性<br>
</th>
<th>值<br>
</th>
<th>初始化<br>
</th>
<th>应用元素<br>
</th>
<th>描述<br>
</th>
<th>类型<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#background-origin" id="o6zc" title="http://www.w3.org/TR/css3-background/#background-origin">Background-origin</a><br>
</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#ltboxgt">&lt;box&gt;</a> [ , <a href="http://www.w3.org/TR/css3-background/#ltboxgt">&lt;box&gt;</a> ]* <br>
&lt;box&gt; = border-box | padding-box | content-box<br>
<br>
<div class="cont">
<ul><li> padding-box：从padding区域（含padding）开始显示背景图像。</li>
<li>border-box：从border区域（含border）开始显示背景图像。</li>
<li>content-box：从content区域开始显示背景图像。 </li></ul>
</div>
</td>
<td style="text-align:left">padding-box <br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象的背景图像计算<a href="http://www.w3.org/TR/css3-background/#background-position" id="l7mu" title="http://www.w3.org/TR/css3-background/#background-position">background-position</a>时的参考原点(位置)。<br>
对应的脚本特性为<b>backgroundOrigin</b>。</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#background-clip" id="ibyx" title="http://www.w3.org/TR/css3-background/#background-clip">Background-clip</a><br>
</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#ltboxgt">&lt;box&gt;</a> [ , <a href="http://www.w3.org/TR/css3-background/#ltboxgt">&lt;box&gt;</a> ]* <br>
&lt;box&gt; = border-box | padding-box | content-box<br>
<br>
<ul><li>
<div class="cont"> padding-box：从padding区域（不含padding）开始向外裁剪背景。</div>
</li>
<li>
<div class="cont">border-box：从border区域（不含border）开始向外裁剪背景。</div>
</li>
<li>
<div class="cont">content-box：从content区域开始向外裁剪背景。 </div>
</li></ul>
<br>
</td>
<td style="text-align:left">border-box <br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">指定对象的背景图像向外<b>裁剪</b>的区域。<br>
<div style="text-align:left">对应的脚本特性为<b>backgroundClip</b>。</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#background-size" id="dek8" title="http://www.w3.org/TR/css3-background/#background-size">background-size</a><br>
</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#ltbg-sizegt">&lt;bg-size&gt;</a> [ , <a href="http://www.w3.org/TR/css3-background/#ltbg-sizegt">&lt;bg-size&gt;</a> ]* <br>
&lt;bg-size&gt; = [ &lt;length&gt; | &lt;percentage&gt; | auto ]{1,2} | cover | contain<br>
<br>
<div class="cont">&lt;length&gt;：用长度值指定背景图像大小。不允许负值。<br>
&lt;percentage&gt;：用百分比指定背景图像大小。不允许负值。<br>
auto：背景图像的真实大小。<br>
cover：将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。<br>
contain：将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。 </div>
</td>
<td style="text-align:left">auto<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">检索或设置对象的背景图像的尺寸大小。
<ul><li>该属性提供2个参数值(特性值cover和contain除外)。</li>
<li>如果提供两个，第一个用于定义背景图像的宽度，第二个用于定义背景图像的高度。</li>
<li>如果只提供一个，该值将用于定义背景图像的宽度，第2个值默认为auto，即高度为auto，此时背景图以提供的宽度作为参照来进行等比缩放。</li>
<li>对应的脚本特性为<b>backgroundSize</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#layering" id="on1o" title="http://www.w3.org/TR/css3-background/#layering">Mutiple backgrounds</a><br>
</td>
<td style="text-align:left">background ： [background-image] | [background-origin] | [background-clip] | [background-repeat] | [background-size] | [background-position]<br>
<br>
</td>
<td style="text-align:left">none<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">复合属性。多重背景图象，可以把不同背景图象只放到一个块元素里。（背景色background-color不能设置多重）。
<ul><li>一个元素可以设置多重背景图像。</li>
<li>每组属性间使用逗号分隔。</li>
<li>如果设置的多重背景图之间存在着交集（即存在着重叠关系），前面的背景图会覆盖在后面的背景图之上。</li></ul>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
</tbody>
</table>
<br>
<br>
<br>
<h2 id="spec-demo">三、DEMO</h2>
附件
<h2 id="spec-caution">四、注意事项</h2>

* border-image的图片（如果有），是在background之上的。

* 背景色在所有背景图片之下。*<br>

* 顺序如下，由左到右，左边的在上面。*<br>

* border-image&gt;background-image第1个参数的图片&gt;background-image第2个参数的图片&gt;.....&gt;background-color*

<h2 id="spec-ref">五、参考文献</h2>

* [css3-background](http://www.w3.org/TR/css3-background "http://www.w3.org/TR/css3-background")
* [https://developer.mozilla.org](http://www.w3.org/TR/css3-background "http://www.w3.org/TR/css3-background")
* [css参考手册](http://www.css88.com/book/css/ "http://www.css88.com/book/css/")
* [css3中文手册](http://isd.tencent.com/css3/ "http://isd.tencent.com/css3/")
