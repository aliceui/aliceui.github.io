<h1>CSS3:Multiple Columns</h1>
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
<th style="text-align:left" bgcolor="#ffffff">columns<br>
</th>
<td>√<br>
</td>
<td>-<br>
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
<td>-<br>
</td>
<td>√<br>
</td>
<td><br>
</td>
</tr>
<tr>
<th class="row-heading" scope="row">column-width<br>
</th>
<td>√<br>
</td>
<td>-<br>
</td>
<td class="supported">√<br>
</td>
<td class="supported">√<br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td class="supported">√<br>
</td>
<td>-<br>
</td>
<td class="supported">√<br>
</td>
<td class="grade-limited support-grade"><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-count<br>
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
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-gap<br>
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
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-rule<br>
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
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-rule-width<br>
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
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-rule-style<br>
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
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-rule-color<br>
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
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-span<br>
</th>
<td>√<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>√<br>
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
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-fill<br>
</th>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-break-before<br>
</th>
<td>-<br>
</td>
<td>-<br>
</td>
<td>&nbsp;√&nbsp;&nbsp; <br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-break-after<br>
</th>
<td>-<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">column-break-inside<br>
</th>
<td>-<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td>√<br>
</td>
<td>-<br>
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
**（1）API SPEC:**[http://www.w3.org/TR/css3-multicol](http://www.w3.org/TR/css3-multicol "http://www.w3.org/TR/css3-multicol")<br/>
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
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#columns0">columns</a><br>
</td>
<td style="text-align:left">&lt;‘column-width’&gt; || &lt;‘column-count’&gt; <br>
</td>
<td style="text-align:left">参考column-width和column-count<br>
</td>
<td style="text-align:left">不可替换的块级元素（除了table），table-cells,inline-block<br>
</td>
<td style="text-align:left">设置或检索对象的列数和每列的宽度。<b>复合属性</b><br>
<ul><li>对应的脚本特性为<b>columns</b>。</li></ul>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-width">column-width</a><br>
</td>
<td style="text-align:left">&lt;length&gt; | auto <br>
<br>
<div class="cont">
<ul><li>&lt;length&gt;：用长度值来定义列宽。不允许负值</li>
<li>auto：根据column-count自定分配宽度 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">auto <br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">设置或检索对象的每列的宽度<br>
<ul><li>对应的脚本特性为<b>columnWidth</b>。</li></ul>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-multicol/#column-count" id="t2yr" title="http://www.w3.org/TR/css3-multicol/#column-count">column-count</a><br>
</td>
<td style="text-align:left">&lt;integer&gt; | auto <br>
<br>
<div class="cont">
<ul><li>&lt;integer&gt;：用整数值来定义列数。不允许负值</li>
<li>auto：根据column-width自定分配宽度 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">auto <br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象的列数
<ul><li>对应的脚本特性为<b>columnCount</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-gap0">column-gap</a><br>
</td>
<td style="text-align:left">&lt;length&gt; | normal <br>
<br>
<div class="cont">
<ul><li> &lt;length&gt;：用长度值来定义列与列之间的间隙。不允许负值</li>
<li><i>normal</i>：与<i>font-size</i>大小相同。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">normal<br>
</td>
<td style="text-align:left">多列（multicol）元素<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象的列与列之间的间隙
<ul><li>对应的脚本特性为<b>columnGap</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-rule0">column-rule</a><br>
</td>
<td style="text-align:left">&lt;‘column-rule-width’&gt; || &lt;‘column-rule-style’&gt; || [ &lt;‘column-rule-color’&gt; | transparent ] <br>
<br>
</td>
<td style="text-align:left">复合属性，参考具体的属性<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象的列与列之间的边框。复合属性。类似border属性 
<ul><li>对应的脚本特性为<b>columnRule</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-rule-width">column-rule-width</a><br>
</td>
<td style="text-align:left">&lt;length&gt; | thin | medium | thick<br>
<br>
<div class="cont">
<ul><li>&lt;length&gt;：用长度值来定义边框的厚度。不允许负值</li>
<li>medium：定义默认厚度的边框。</li>
<li>thin：定义比默认厚度细的边框。</li>
<li>thick：定义比默认厚度粗的边框。 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">medium<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象的列与列之间的边框厚度。参阅border-width属性 
<ul><li>如果column-rule-style设置为none，本属性将失去作用。 </li>
<li>对应的脚本特性为<b>columnRuleWidth</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-rule-style">column-rule-style</a><br>
</td>
<td style="text-align:left">none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset<br>
<br>
<div class="cont">
<ul><li> none：无轮廓。column-rule-color与column-rule-width将被忽略</li>
<li>hidden：隐藏边框。</li>
<li>dotted：点状轮廓。</li>
<li>dashed：虚线轮廓。</li>
<li>solid：实线轮廓</li>
<li>double：双线轮廓。两条单线与其间隔的和等于指定的column-rule-width值</li>
<li>groove：3D凹槽轮廓。ridge：3D凸槽轮廓。</li>
<li>inset：3D凹边轮廓。outset：3D凸边轮廓。 </li></ul>
</div>
</td>
<td style="text-align:left">none <br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象的列与列之间的边框样式。参阅border-style属性 
<ul><li>如果column-rule-width等于0，本属性将失去作用。</li>
<li>对应的脚本特性为<b>columnRuleStyle</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-rule-color">column-rule-color</a><br>
</td>
<td style="text-align:left">&lt;color&gt; <br>
</td>
<td style="text-align:left">和color属性一样<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象的列与列之间的边框颜色。参阅border-color属性 
<ul><li>如果column-rule-width等于0或column-rule-style设置为none，本属性将被忽略。</li>
<li>对应的脚本特性为<b>columnRuleWidth</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-span0">column-span</a><br>
</td>
<td style="text-align:left">none | all <br>
<br>
<div class="cont">
<ul><li> none：不跨列</li>
<li>all：横跨所有列 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">none<br>
</td>
<td style="text-align:left">块级元素（除了浮动元素，和绝对定位元素）<br>
</td>
<td style="text-align:left">
<div class="cont"> 设置或检索对象元素是否横跨所有列<b>。</b>
<ul><li>对应的脚本特性为<b>columnSpan</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#column-fill">column-fill</a><br>
</td>
<td style="text-align:left">auto | balance <br>
<br>
<div class="cont">
<ul><li> auto：列高度自适应内容</li>
<li>balance：所有列的高度以其中最高的一列统一 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">balance<br>
</td>
<td style="text-align:left">多列（multicol）元素<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象所有列的高度是否统一。
<ul><li>对应的脚本特性为<b>columnFill</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#break-before">column-break-before</a><br>
</td>
<td style="text-align:left">auto | always | avoid | left | right | page | column | avoid-page | avoid-column <br>
<br>
<div class="cont">
<ul><li> auto：既不强迫也不禁止在元素之前断行并产生新列</li>
<li>always：总是在元素之前断行并产生新列</li>
<li>avoid：避免在元素之前断行并产生新列 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">auto<br>
</td>
<td style="text-align:left">块级元素<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象之前是否断行<b>。</b>
<ul><li>对应的脚本特性为<b>columnBreakBefore</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">paged(分页？)<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#break-after">column-break-after</a><br>
</td>
<td style="text-align:left">auto | always | avoid | left | right | page | column | avoid-page | avoid-column <br>
<br>
<div class="cont">
<ul><li> auto：既不强迫也不禁止在元素之后断行并产生新列</li>
<li>always：总是在元素之后断行并产生新列</li>
<li>avoid：避免在元素之后断行并产生新列 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">auto<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象之后是否断行<b>。</b>
<ul><li>对应的脚本特性为<b>columnBreakAfter</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">paged<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-multicol/#break-inside">column-break-inside</a><br>
</td>
<td style="text-align:left">auto | avoid | avoid-page | avoid-column <br>
<br>
<div class="cont">
<ul><li> auto：既不强迫也不禁止在元素内部断行并产生新列</li>
<li>avoid：避免在元素内部断行并产生新列 </li></ul>
</div>
<br>
</td>
<td style="text-align:left">auto<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象内部是否断行<b>。</b>
<ul><li>对应的脚本特性为<b>columnBreakInside</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">paged<br>
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
* column-width，即使设置了每列的宽度，如果没有width的限制，则多列宽度自适应。
* 如果设置了width，且width&gt;多列宽度的总和（包括 column-gap），宽度还是会自适应整个宽度。或者width&lt;多列宽度的总和，则列数会减小。
* column-gap是指列之间的距离，包括了column-rule-width（貌似~~）,如果column-gap&lt; column-rule-width，那么，column-rule将不会显示出来。
* 浏览器兼容性需要注意，而且某些东西在未来可能会变化。

<h2 id="spec-ref">五、参考文献</h2>
* [https://developer.mozilla.org](https://developer.mozilla.org "https://developer.mozilla.org")
* [http://www.w3.org/TR/css3-multicol](http://www.w3.org/TR/css3-multicol "http://www.w3.org/TR/css3-multicol")
* [http://www.w3schools.com/cssref](http://www.w3schools.com/cssref "http://www.w3schools.com/cssref")
* [css88](http://www.css88.com/book/css/ "http://www.css88.com/book/css/")
* [css3中文手册](http://isd.tencent.com/css3/ "http://isd.tencent.com/css3/")

