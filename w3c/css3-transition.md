<h1>CSS3: Transition</h1>
1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [参考文献](#spec-ref)

<h2 id="spec-browser">一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder" summary="Browser support for HTML5 Forms Inputs" height="162" width="920">
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
<tr>
<th class="row-heading" scope="row">transition<br>
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
<td class="supported">√</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 44%</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-api">二、API 参考</h2>
**（1）API SPEC:**[http://www.w3.org/TR/css3-transitions/](http://www.w3.org/TR/css3-transitions/ "http://www.w3.org/TR/css3-transitions/")<br/>
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
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-transitions/#transition">transition</a></td>
<td style="text-align:left">[&lt;‘transition-property’&gt; || &lt;‘transition-duration’&gt; || &lt;‘transition-timing-function’&gt; || &lt;‘transition-delay’&gt; [, [&lt;‘transition-property’&gt; || &lt;‘transition-duration’&gt; || &lt;‘transition-timing-function’&gt; || &lt;‘transition-delay’&gt;]]* </td>
<td style="text-align:left">同下<br>
</td>
<td style="text-align:left">所有元素, :before and :after 伪类元素<br>
</td>
<td style="text-align:left">同下<br>
</td>
<td style="text-align:left">交互<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-transitions/#transition-delay">transition-delay</a></td>
<td style="text-align:left">&lt;time&gt; [, &lt;time&gt;]* </td>
<td style="text-align:left">0<br>
</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">时间，可以有多个，与 transition-property 的值对应。 取值从 0 开始。 </td>
<td style="text-align:left">交互</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-transitions/#transition-duration">transition-duration</a></td>
<td style="text-align:left">&lt;time&gt; [, &lt;time&gt;]* </td>
<td style="text-align:left">0<br>
</td>
<td style="text-align:left">同上</td>
<td style="text-align:left">同上<br>
</td>
<td style="text-align:left">交互 </td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-transitions/#transition-property">transition-property</a></td>
<td style="text-align:left">none | all | [ &lt;IDENT&gt; ] [ ‘,’ &lt;IDENT&gt; ]* </td>
<td style="text-align:left">all<br>
</td>
<td style="text-align:left">同上</td>
<td style="text-align:left">1、none, 所有都不应用 transition;<br>
 2、all, 所有都应用;<br>
 3、&lt;IDENT&gt;, 可以有多个值，可以为 color, length 等。</td>
<td style="text-align:left">视觉 </td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a class="property" href="http://www.w3.org/TR/css3-transitions/#transition-timing-function">transition-timing-function</a></td>
<td style="text-align:left">ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;) [, ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(&lt;number&gt;, &lt;number&gt;, &lt;number&gt;, &lt;number&gt;)]* </td>
<td style="text-align:left">ease </td>
<td style="text-align:left">同上</td>
<td style="text-align:left">与 transition-property 的值对应。<br>
</td>
<td style="text-align:left">交互 </td>
</tr>
</tbody>
</table>
<br>
<table class="proptable zeroBorder" style="" height="369" width="920">
<tbody>
<tr>
<th>transition-timing-function 的值<br>
</th>
<th>描述<br>
</th>
</tr>
<tr valign="baseline">
<td style="text-align:left">关于 timing function<br>
</td>
<td style="text-align:left">这个属性通过 <a href="http://en.wikipedia.org/wiki/B%C3%A9zier_curve#Cubic_B.C3.A9zier_curves" id="h.yd" title="贝塞尔曲线">贝塞尔曲线</a> 来决定元素在视觉上的变化。像 photoshop 中的钢笔工具，通常通过来个控制点 p1, p2 来控制 p0, p3 这条线的外观。 
<div id="qeqo" style="text-align:left"><img src="/images/css3-transition.png" style="height:351px;width:379px"></div>
<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left">ease<br>
</td>
<td style="text-align:left">逐渐减慢，等价于 cubic-bezier(0.25, 0.1, 0.25, 1.0)<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left">linear</td>
<td style="text-align:left">匀速变化，等价于 cubic-bezier(0, 0, 1.0, 1.0)</td>
</tr>
<tr valign="baseline">
<td style="text-align:left">ease-in</td>
<td style="text-align:left">加速，等价于 cubic-bezier(0.42, 0, 1.0, 1.0)</td>
</tr>
<tr valign="baseline">
<td style="text-align:left">ease-out</td>
<td style="text-align:left">减速，等价于 cubic-bezier(0, 0, 0.58, 1.0)</td>
</tr>
<tr>
<td style="text-align:left">ease-in-out<br>
</td>
<td style="text-align:left">先加速后减速，等价于 cubic-bezier(0.42, 0, 0.58, 1.0)<br>
</td>
</tr>
<tr>
<td style="text-align:left">cubic-bezier(x1, y1, x2, y2)<br>
</td>
<td style="text-align:left">四个值用来控制 p1(x1, y1) 与 p2(x2, y2)，所有的值都规定在 0.0 ～ 1.0 这个区间<br>
</td>
</tr>
</tbody>
</table>
**（3）触发交互: 伪类** （JS-evnet-like?）
<div style="">&nbsp;&nbsp; &nbsp; 
<table class="zeroBorder" border="0" cellpadding="3" height="159" width="920">
<tbody>
<tr>
<th style="text-align:left">
<p>伪类<br>
</p>
</th>
<th style="text-align:left">
<p>作用域<br>
</p>
</th>
<th style="text-align:left">
<p>描述</p>
</th>
</tr>
<tr>
<td style="text-align:left">
<p>:link</p>
</td>
<td style="text-align:left">
<p>仅链接</p>
</td>
<td style="text-align:left">
<p>一般链接</p>
</td>
</tr>
<tr>
<td style="text-align:left">
<p>:visited</p>
</td>
<td style="text-align:left">
<p>仅链接<br>
</p>
</td>
<td style="text-align:left">
<p>已经访问链接</p>
</td>
</tr>
<tr>
<td style="text-align:left">
<p>:hover</p>
</td>
<td style="text-align:left">
<p>所有元素</p>
</td>
<td style="text-align:left">
<p>鼠标在其上面的状态<br>
</p>
</td>
</tr>
<tr>
<td style="text-align:left">
<p>:active</p>
</td>
<td style="text-align:left">
<p>同上</p>
</td>
<td style="text-align:left">
<p>激活状态</p>
</td>
</tr>
<tr>
<td style="text-align:left">
<p>:focus</p>
</td>
<td style="text-align:left">
<p>可以选中的所有元素</p>
</td>
<td style="text-align:left">
<p>被选中状态</p>
</td>
</tr>
<tr>
<td style="text-align:left">
<p>None</p>
</td>
<td style="text-align:left">
<p>所有元素</p>
</td>
<td style="text-align:left">
<p>默认值<br>
</p>
</td>
</tr>
</tbody>
</table>
</div>

<h2 id="spec-demo">三、DEMO</h2>
[CSS3 Transition](http://sofish.de/file/html5/transition/ "CSS3 Transition")

<h2 id="spec-caution">四、注意事项</h2>
* Transition 的变化原理：[Animation of property types](http://www.w3.org/TR/css3-transitions/#animation-of-property-types-)

<h2 id="spec-ref">五、参考文献</h2>
* [CSS Transition Module Level3](http://www.w3.org/TR/css3-transitions/ "CSS Transition Module Level3")
* [-moz-transition-timing-function](https://developer.mozilla.org/en/CSS/-moz-transition-timing-function "-moz-transition-timing-function")
* [CSS Transition 101](http://www.webdesignerdepot.com/2010/01/css-transitions-101/ "CSS Transition 101")
* [HTML5 & CSS3 Support, Web Design Tools & Support](http://www.findmebyip.com/litmus "HTML5 & CSS3 Support, Web Design Tools & Support")

