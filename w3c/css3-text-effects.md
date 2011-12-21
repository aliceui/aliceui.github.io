<h1>CSS3: Text Effects</h1>
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
<th style="text-align:left" bgcolor="#ffffff">text-shadow<br>
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
<th class="row-heading" scope="row">text-overflow<br>
</th>
<td>√<br>
</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>√</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td>√<br>
</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"><br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">word-wrap<br>
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
<th style="text-align:left" bgcolor="#ffffff">word-break<br>
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
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-text/#text-shadow" id="y4ru" title="http://www.w3.org/TR/css3-text/#text-shadow">text-shadow</a><br>
</td>
<td style="text-align:left">none | [<a href="http://www.w3.org/TR/css3-text/#ltshadowgt">&lt;shadow&gt;</a>, ] * <a href="http://www.w3.org/TR/css3-text/#ltshadowgt">&lt;shadow&gt;</a><br>
&lt;shadow&gt; = [ &lt;length&gt;{2,3} &amp;&amp; <a href="http://www.w3.org/TR/css3-background/#ltcolorgt">&lt;color&gt;</a>? ]<br>
<br>
<div class="cont"> none：无阴影<br>
 &lt;length&gt;①：第1个长度值用来设置对象的阴影水平偏移值。可以为负值<br>
 &lt;length&gt;②：第2个长度值用来设置对象的阴影垂直偏移值。可以为负值<br>
 &lt;length&gt;③：如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值<br>
 &lt;color&gt;：设置对象的阴影的颜色。</div>
</td>
<td style="text-align:left">none<br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索对象中文本的文字是否有阴影及模糊效果<b>。</b>参阅box-shadow属性。 
<ul><li>可以设定多组效果，每组参数值以逗号分隔。</li>
<li>对应的脚本特性为<b>textShadow</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/2010/WD-css3-text-20101005/#text-overflow0" id="ceqk" title="http://www.w3.org/TR/2010/WD-css3-text-20101005/#text-overflow0">text-overflow</a><br>
</td>
<td style="text-align:left">
<div class="cont">
<p>clip | ellipsis | <i>string</i><br>
</p>
<p><br>
</p>
<p>clip：当对象内文本溢出时不显示省略标记（...），而是将溢出的部分裁切掉。<br>
 ellipsis：当对象内文本溢出时显示省略标记（...）。</p>
<p>string：用string替换默认的省略标记（...）,貌似没有浏览器支持。<br>
</p>
</div>
</td>
<td style="text-align:left">clip<br>
</td>
<td style="text-align:left">块级元素<br>
</td>
<td style="text-align:left">
<div class="cont">设置或检索是否使用一个省略标记（...）标示对象内文本的溢出。 
<ul><li>对应的脚本特性为textOverflow。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/2010/WD-css3-text-20101005/#word-wrap0" id="jvds" title="http://www.w3.org/TR/2010/WD-css3-text-20101005/#word-wrap0">word-wrap</a><br>
</td>
<td style="text-align:left">normal | break-word<br>
<br>
 normal：允许内容顶开或溢出指定的容器边界。<br>
 break-word：内容将在边界内换行。如果需要，单词内部允许断行。<br>
</td>
<td style="text-align:left">normal<br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">
<div class="cont">检索或设置对象中的单词之间间隔<b>。</b>
<ul><li>对应的脚本特性为<b>wordWrap</b>。</li></ul>
</div>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/2010/WD-css3-text-20101005/#word-break0" id="x8vk" title="http://www.w3.org/TR/2010/WD-css3-text-20101005/#word-break0">word-break</a><br>
</td>
<td style="text-align:left">normal|break-all|hyphenate<br>
<br>
<ul><li>normal：根据特定非东亚文字自己的规则来决定是否自动断行</li>
<li>break-all:允许非东亚语言文本行的任意字内断开。该值适合包含一些非东亚文本的东亚文本</li>
<li>keep-all:不允许非东亚语言文本行的任意字内断开。该值适合包含一些东亚文本的非东亚文本</li>
<li>hyphenation:文本会在合适的连字符处断开，这需要浏览器的支持</li></ul>
<br>
<br>
</td>
<td style="text-align:left">normal<br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">断行的规则，针对非东亚文字<br>
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
* firefox不支持text-overflow
* word-wrap, line-break, word-break 这几个属性都是 MS 的独立实现，随后其他浏览器也不同程度地实现了其中的某些，之后，这几个属性都被吸纳为 CSS3 标准。
* 现有的都是一些css3的草案，之后可能会发生变化。

<h2 id="spec-ref">五、参考文献</h2>
* [https://developer.mozilla.org](https://developer.mozilla.org "https://developer.mozilla.org")
* [css参考手册](http://www.css88.com/book/css/ "http://www.css88.com/book/css/")
* [css3中文手册](http://isd.tencent.com/css3/ "http://isd.tencent.com/css3/")
* [http://www.w3schools.com/cssref](http://www.w3schools.com/cssref "http://www.w3schools.com/cssref")
* [word-wrap解惑](http://ued.taobao.com/blog/2010/10/14/research-of-word-wrap/ "http://ued.taobao.com/blog/2010/10/14/research-of-word-wrap/")
* [http://www.w3.org/TR/2010/WD-css3-text-20101005/](http://www.w3.org/TR/2010/WD-css3-text-20101005/ "http://www.w3.org/TR/2010/WD-css3-text-20101005/")
