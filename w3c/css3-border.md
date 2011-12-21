<h1>CSS3: Border</h1>

1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [参考文献](#spec-ref)

<h2 id="spec-browser">一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for HTML5 Forms Inputs" height="197" width="920">
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
<th style="text-align:left" bgcolor="#ffffff">Border-colors<br>
</th>
<td>-<br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>22%<br>
</td>
</tr>
<tr>
<th class="row-heading" scope="row">Border-radius<br>
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
<td class="grade-limited support-grade">100%<br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">Border-image<br>
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
<td>-<br>
</td>
<td>√<br>
</td>
<td>89%<br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">Box-shadow<br>
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
<td>100%<br>
</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-api">二、API 参考</h2>
**（1）API SPEC:**[http://www.w3.org/TR/css3-background/#borders](http://www.w3.org/TR/css3-background/#borders "http://www.w3.org/TR/css3-background/#borders")<br>
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
<td style="text-align:left"><a href="https://developer.mozilla.org/en/CSS/-moz-border-top-colors" id="agb-" title="https://developer.mozilla.org/en/CSS/-moz-border-top-colors">Border-colors</a></td>
<td style="text-align:left">&lt;‘border-top-colors’&gt; || &lt;‘border-bottom-colors’&gt; || &lt;‘border-left-colors’&gt; || &lt;‘border-right-colors’&gt;&nbsp; </td>
<td style="text-align:left">See individual properties <br>
</td>
<td style="text-align:left">所有元素<br>
<br>
</td>
<td style="text-align:left">设置或检索对象边框的多重颜色.<br>
 border的width为(n)px，那么最多可以设置n组边框色，每组边框色宽度为1px；如果border的width为10px，却只设置了6组边框色，那么最后一组边框色将自动渲染剩余的宽度。<br>
<b style="background-color:#ffffff">本属性为伪属性</b>，其分裂后的border-top-colors, border-right-colors, border-bottom-colors, border-left-colors才是有效属性。<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="https://developer.mozilla.org/en/CSS/-moz-border-top-colors" id="mmq3" title="https://developer.mozilla.org/en/CSS/-moz-border-top-colors">border-top-colors</a><br>
</td>
<td style="text-align:left">[&lt;color&gt;]* &lt;color&gt; | none</td>
<td style="text-align:left">none<br>
</td>
<td style="text-align:left">同上</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-radius" id="tpqh" title="http://www.w3.org/TR/css3-background/#border-radius">Border-radius</a></td>
<td style="text-align:left">[ &lt;length&gt; | &lt;percentage&gt; ]{1,4} [ / [ &lt;length&gt; | &lt;percentage&gt; ]{1,4} ]? </td>
<td style="text-align:left">0<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont"> 设置或检索对象使用圆角边框。提供2个参数，2个参数以“/”分隔，每个参数允许设置1~4个参数值，第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数 
<ul><li>水平半径：如果提供全部四个参数值，将按上左(top-left)、上右(top-right)、下右(bottom-right)、下左(bottom-left)的顺序作用于四个角。</li>
<li>如果只提供一个，将用于全部的于四个角。</li>
<li>如果提供两个，第一个用于上左(top-left)、下右(bottom-right)，第二个用于上右(top-right)、下左(bottom-left)。</li>
<li>如果提供三个，第一个用于上左(top-left)，第二个用于上右(top-right)、下左(bottom-left)，第三个用于下右(bottom-right)。</li>
<li>垂直半径也遵循以上4点。</li>
<li>对应的脚本特性为<b>borderRadius</b>。</li></ul>
</div>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-image" id="jjhh" title="http://www.w3.org/TR/css3-background/#border-image">Border-image</a><br>
</td>
<td style="text-align:left"> &lt;‘<a href="http://www.w3.org/TR/css3-background/#border-image-source">border-image-source</a>’&gt; || &lt;‘<a href="http://www.w3.org/TR/css3-background/#border-image-slice">border-image-slice</a>’&gt; [ / &lt;‘<a href="http://www.w3.org/TR/css3-background/#border-image-width">border-image-width</a>’&gt;? [ / &lt;‘<a href="http://www.w3.org/TR/css3-background/#border-image-outset">border-image-outset</a>’&gt; ]? ]? || &lt;‘<a href="http://www.w3.org/TR/css3-background/#border-image-repeat">border-image-repeat</a>’&gt;</td>
<td style="text-align:left">See individual properties <br>
</td>
<td style="text-align:left">同上</td>
<td style="text-align:left">
<div class="cont"> 设置或检索对象的边框样式使用图像来填充。 
<ul><li>使用图像替代<i>border-style</i>去定义边框样式。当<i>border-image</i>为none或图像不可见时，将会显示<i>border-style</i>所定义的边框样式效果。</li>
<li>对应的脚本特性为borderImage。</li></ul>
</div>
</td>
<td style="text-align:left">视觉 </td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-image-source">Border-image-source</a><br>
</td>
<td style="text-align:left">none | <a href="http://www.w3.org/TR/css3-background/#ltimagegt">&lt;image&gt;</a><br>
</td>
<td style="text-align:left">none<br>
</td>
<td style="text-align:left">所有元素（除了border-collapse=collapse的table元素）<br>
</td>
<td style="text-align:left">
<p>该属性用于指定是否用图像定义边框样式或图像来源路径。</p>
</td>
<td style="text-align:left">视觉 </td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-image-slice">Border-image-slice</a><br>
</td>
<td style="text-align:left">[&lt;number&gt; | &lt;percentage&gt;]{1,4} &amp;&amp; fill? <br>
</td>
<td style="text-align:left">100% <br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">该属性用于指定对边框背景图的分割方式<br>
<br>
 fill 关键字如果存在的話，將會保留 border-image 中間的部分(預設是丟棄中間部分，留空處理)。<br>
<b>注意：</b>但是，目前的浏览器都是<b>强制</b>显示中间部分，如果你不想中间内容部分有背景图片，就让中间部分的图片留白。（不知道说明白了没有）<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-image-width">Border-image-width</a><br>
</td>
<td style="text-align:left">[ &lt;length&gt; | &lt;percentage&gt; | &lt;number&gt; | auto ]{1,4} <br>
</td>
<td style="text-align:left">1<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<p>该属性用于指定边框宽度。该属性可省略，由外部的<i>border-width</i>来定义</p>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-image-outset">Border-image-outset</a><br>
</td>
<td style="text-align:left">[ &lt;length&gt; | &lt;number&gt; ]{1,4} <br>
</td>
<td style="text-align:left">0<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">该属性用于指定对边框背景图的扩展<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-image-repeat">Border-image-repeat</a><br>
</td>
<td style="text-align:left">[ stretch | repeat | round ]{1,2} <br>
</td>
<td style="text-align:left">stretch <br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<ol><li>stretch：指定用拉伸方式来填充边框背景图。</li>
<li>repeat：指定用平铺方式来填充边框背景图。当图片碰到边界时，如果超过则被截断。</li>
<li>round：指定用平铺方式来填充边框背景图。图片会根据边框的尺寸动态调整图片的大小直至正好可以铺满整个边框。</li>
<li>space:指定用平铺方式来填充边框背景图。If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles. <br>
</li>
</ol>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#box-shadow" id="irme" title="http://www.w3.org/TR/css3-background/#box-shadow">Box-shadow</a><br>
</td>
<td style="text-align:left">none | <a href="http://www.w3.org/TR/css3-background/#ltshadowgt">&lt;shadow&gt;</a> [ , <a href="http://www.w3.org/TR/css3-background/#ltshadowgt">&lt;shadow&gt;</a> ]* <br>
<br>
&lt;shadow&gt; = inset? &amp;&amp; [ &lt;length&gt;{2,4} &amp;&amp; <a href="http://www.w3.org/TR/css3-background/#ltcolorgt">&lt;color&gt;</a>? ]<br>
</td>
<td style="text-align:left">none<br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">
<div class="cont">
<ul><li> none：无阴影</li>
<li>第1个长度值用来设置对象的阴影水平偏移值。可以为负值</li>
<li>第2个长度值用来设置对象的阴影垂直偏移值。可以为负值</li>
<li>如果提供了第3个长度值则用来设置对象的阴影模糊值。<b>不允许负值</b></li>
<li>如果提供了第4个长度值则用来设置对象的阴影外延值。<b>不允许负值</b></li>
<li>设置对象的阴影的颜色。</li>
<li>inset：设置对象的阴影类型为内阴影。该值为空时，则对象的阴影类型为外阴影 </li></ul>
</div>
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
* Border-colors兼容性差，只有在firefox下可以。
* Border-radius可以又很多兼容性解决方案，推荐在高级浏览器下实现圆角，低级的浏览器忽略之。
* Border-image-slice这个属性需要注意，划分为9宫格后，中间部分的图片最好留空。推荐看下[understanding-border-image](http://css-tricks.com/6883-understanding-border-image/ "http://css-tricks.com/6883-understanding-border-image/")
* Box-shadow在ie下的解决方案[内网文档](http://arale.alipay.net/alice/solution/dropshadow/dropshadow.php "http://arale.alipay.net/alice/solution/dropshadow/dropshadow.php")
* 部分属性需要浏览器私有属性实现 -moz- -webkit- -o-

<h2 id="spec-ref">五、参考文献</h2>
* [css3-background](http://www.w3.org/TR/css3-background "http://www.w3.org/TR/css3-background")
* [border-image](http://blog.beyes.tw/487 "http://blog.beyes.tw/487")
* [https://developer.mozilla.org](https://developer.mozilla.org "https://developer.mozilla.org")
* [understanding-border-image](http://css-tricks.com/6883-understanding-border-image/ "http://css-tricks.com/6883-understanding-border-image/")
* [css88](http://www.css88.com/book/css/ "http://www.css88.com/book/css/")
* [css3中文手册](http://isd.tencent.com/css3/ "http://isd.tencent.com/css3/")

