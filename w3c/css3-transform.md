<h1>CSS3: Transform</h1>
1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [参考文献](#spec-ref)

<h2 id="spec-browser">一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder"  summary="Browser support for HTML5 Forms Inputs" height="162" width="920">
<tbody>
<tr>
<th class="primary-heading" scope="row"><span class="offScreen">Platform</span></th>
<th class="primary-heading" colspan="4" scope="colgroup">MAC</th>
<th class="primary-heading" colspan="8" scope="colgroup">WIN</th>
<th class="offScreen">%</th>
</tr>
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
<tr id="k0.1">
<th class="row-heading" scope="row">CSS Transforms</th>
<td class="supported">√<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-excellent support-grade"> 81%</td>
</tr>
<tr id="np86">
<th class="row-heading" scope="row">CSS Transforms 3D</th>
<td>-<br>
</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="grade-poor support-grade"> 11% </td>
</tr>
</tbody>
</table>
<h2 id="spec-api">二、API 参考</h2>

1. **API SPEC:**<br>
    **(1) transform 2D**[http://www.w3.org/TR/css3-2d-transforms](http://www.w3.org/TR/css3-2d-transforms/ "http://www.w3.org/TR/css3-2d-transforms/")<br>
    **(2) transform 3D**[http://www.w3.org/TR/css3-3d-transforms/](http://www.w3.org/TR/css3-3d-transforms/ "http://www.w3.org/TR/css3-3-transforms/")
2. **CSS:**
    **(1) transform 2D**

<table class="proptable zeroBorder" style=";margin-right:auto;text-align:left" height="250" width="920">
<tbody>
<tr>
<th>属性<br>
</th>
<th>值<br>
</th>
<th>初始值 </th>
<th>Applies to </th>
<th>描述 </th>
</tr>
</tbody>
 
<tbody>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-2d-transforms/#effects">transform</a></td>
<td style="text-align:left">none | &lt;transform-function&gt; [ &lt;transform-function&gt; ]* </td>
<td style="text-align:left">none </td>
<td style="text-align:left">block-level 和inline-level 元素 </td>
<td style="text-align:left">变形。接受两种类型的值：<br>
<ol><li>none, 所有元素都不变形</li>
<li>&lt;transform-function&gt;, 可以同时使用多个 &lt;transform-function&gt;<br>
</li>
</ol>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-2d-transforms/#transform-origin">transform-origin</a></td>
<td style="text-align:left">[ [ &lt;percentage&gt; | &lt;length&gt; | left | center | right ] [ &lt;percentage&gt; | &lt;length&gt; | top | center | bottom ]? ] | [ [ left | center | right ] || [ top | center | bottom ] ] </td>
<td style="text-align:left">50% 50% </td>
<td style="text-align:left">同上</td>
<td style="text-align:left">transform 的原点。<br>
</td>
</tr>
</tbody>
</table>
<br>
<table class="proptable zeroBorder" style=";margin-right:auto;text-align:left" height="118" width="946">
<tbody>
<tr>
<th>transform-fucntion<br>
</th>
<th>描述<br>
</th>
</tr>
<tr valign="baseline">
<td style="text-align:left"><br>
<br>
matrix(a, c, b, d, tx, ty)<br>
</td>
<td style="text-align:left">
┌&nbsp;&nbsp;&nbsp;&nbsp; ┐&nbsp; <br>
 │ a b │&nbsp;tx, ty 是 translate 的值。关于 matrix，还挺复杂的（I hate math）<a href="http://www.mathamazement.com/Lessons/Pre-Calculus/08_Matrices-and-Determinants/coordinate-transformation-matrices.html" id="ns_9" title="Coordinate Transformation Matrices"></a><br>
 │ c d │&nbsp;可以看一下这个介绍 <a href="http://www.mathamazement.com/Lessons/Pre-Calculus/08_Matrices-and-Determinants/coordinate-transformation-matrices.html" id="n5gk" title="Coordinate Transformation Matrices">Coordinate Transformation Matrices</a><br>
 └&nbsp;&nbsp;&nbsp;&nbsp; ┘<br>
<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left">ratate(angle)<br>
</td>
<td style="text-align:left">扭曲。等价于 matrix(cos(angle), sin(angle), -sin(angle), cos(angle), 0, 0)。<br>
angle, 角度。<br>
</td>
</tr>
<tr>
<td style="text-align:left">scale(sx [, sy])<br>
</td>
<td style="text-align:left">缩放。sx, sy, 分别指水平和垂直方向上的缩放的倍数，如果只有 sx 一个值，视为 sy = sx。<br>
</td>
</tr>
<tr>
<td style="text-align:left">scaleX(value)<br>
</td>
<td style="text-align:left">等价于 scale(value, 1)<br>
</td>
</tr>
<tr>
<td style="text-align:left">scaleY(value)<br>
</td>
<td style="text-align:left">等价于 scale(1, value)<br>
</td>
</tr>
<tr>
<td style="text-align:left">skew(ax [, ay])<br>
</td>
<td style="text-align:left">倾斜。ax, ay，分别指水平和垂直方向上的倾斜角度，如果只有 ax 一个值，则只倾斜水平方向。<br>
</td>
</tr>
<tr>
<td style="text-align:left">skewX(angle)<br>
</td>
<td style="text-align:left">等价于 skew(angle)<br>
</td>
</tr>
<tr>
<td style="text-align:left">skewY(angle)<br>
</td>
<td style="text-align:left">等价于 skew(0, angle)<br>
</td>
</tr>
<tr>
<td style="text-align:left">translate(tx [, ty])<br>
</td>
<td style="text-align:left">移位。tx, ty, 分别指水平和垂直方向上的移位距离，如果只有 tx, 一个值，则只在水平方向上移位。<br>
</td>
</tr>
<tr>
<td style="text-align:left">translateX(length)<br>
</td>
<td style="text-align:left">等价于 translate(length)<br>
</td>
</tr>
<tr>
<td style="text-align:left">translateY(length)<br>
</td>
<td style="text-align:left">等价于 translate(0, length)<br>
</td>
</tr>
</tbody>
</table>
<br>
<table class="proptable zeroBorder" style=";margin-right:auto;text-align:left" height="118" width="946">
<tbody>
<tr>
<th>transform-origin 的值<br>
</th>
<th>描 述<br>
</th>
</tr>
<tr valign="baseline">
<td style="text-align:left"><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
总述<br>
</td>
<td style="text-align:left">
1. 坐标相对于元素原来的位置，调整 transform 的坐标原点，将会让 transform 的结果不同。<br>
<br>
<div id="zvlp" style="text-align:left"><img src="/images/css3-transform.png" style="height:210px;width:556px"></div>
<br>
<br>
>2. 接受1个或者2个值。<br>
<ul><li>当只有1个值是，这个值被作为水平位置上的值，垂直方向上被设置为 50%;</li>
<li>当有2值时，分别应用到水平和垂直方向上；</li>
<li>默认两个值是 50%， 50%。</li></ul>
<br>
3. 值可以是&lt;length&gt;, &lt;percentage&gt;, left, right, top, bottom。但如果混用的话，left, right 只能用于第一个值，top, bottom 只能用于第二个值；负值是被允许的。<br>
<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left">&lt;precentage&gt;<br>
</td>
<td style="text-align:left">百分比，如 transition-origin: 0% 0%; 相当于把原点移向元素原始位置的左上角<br>
</td>
</tr>
<tr>
<td style="text-align:left">&lt;length&gt;<br>
</td>
<td style="text-align:left">长度值，如 transition-origin: 10px 10px;<br>
</td>
</tr>
<tr>
<td style="text-align:left">top left | left top<br>
</td>
<td style="text-align:left">等价于 0 0<br>
</td>
</tr>
<tr>
<td style="text-align:left">top | top center | center top<br>
</td>
<td style="text-align:left">等价于 50% 0<br>
</td>
</tr>
<tr>
<td style="text-align:left">right top| top right<br>
</td>
<td style="text-align:left">等价于 100% 0<br>
</td>
</tr>
<tr>
<td style="text-align:left">left | left center | center left<br>
</td>
<td style="text-align:left">等价于 0 50%<br>
</td>
</tr>
<tr>
<td style="text-align:left">center | center center<br>
</td>
<td style="text-align:left">默认值，等价于 50% 50%<br>
</td>
</tr>
<tr>
<td style="text-align:left">right | right center | center right<br>
</td>
<td style="text-align:left">等价于 100% 50%<br>
</td>
</tr>
<tr>
<td style="text-align:left">bottom left | left bottom<br>
</td>
<td style="text-align:left">等价于 0 100%<br>
</td>
</tr>
<tr>
<td style="text-align:left">bottom | bottom center | center bottom<br>
</td>
<td style="text-align:left">等价于 50% 100%<br>
</td>
</tr>
<tr>
<td style="text-align:left">bottom right | right bottom<br>
</td>
<td style="text-align:left">等价于 100% 100%<br>
</td>
</tr>
</tbody>
</table>

** (2) transfrom 3D **

Transform 3D 目前只有 safari 5 支持。大家自己瞄规范吧。

<h2 id="spec-demo">三、DEMO</h2>

* Matrix:[https://developer.mozilla.org/en/CSS/-moz-transform#Live_Examples](https://developer.mozilla.org/en/CSS/-moz-transform#Live_Examples "https://developer.mozilla.org/en/CSS/-moz-transform#Live_Examples")
* transform-function:[https://developer.mozilla.org/En/CSS/-moz-transform-origin#Live_Examples](https://developer.mozilla.org/En/CSS/-moz-transform-origin#Live_Examples "https://developer.mozilla.org/En/CSS/-moz-transform-origin#Live_Examples")

<h2 id="spec-caution">四、注意事项</h2>
* matrix(a, c, b, d, tx, ty)，在 Firefox 中，tx, ty 允许是长度单位，而 webkit 只允许数字
* 在 IE6～8 中，可以使用 Microsoft [Matrix Filter](http://msdn.microsoft.com/en-us/library/ms533014%28VS.85,loband%29.aspx "http://msdn.microsoft.com/en-us/library/ms533014(VS.85,loband).aspx") 
<h2 id="spec-ref">五、参考文献</h2>
* [CSS3 2D Transforms](http://www.w3.org/TR/css3-2d-transforms/ "http://www.w3.org/TR/css3-2d-transforms/#transform-origin-property")
* [-moz-transform](https://developer.mozilla.org/en/CSS/-moz-transform#Live_Examples "-moz-transform")
* [HTML5 & CSS3 Support, Web Design Tools & Support](http://www.findmebyip.com/litmus "HTML5 & CSS3 Support, Web Design Tools & Support")
