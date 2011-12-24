<h1>HTML5: Form API</h1>
1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [兼容解决方案](#spec-solution)
6. [参考文献](#spec-ref)

<h2 id="spec-browser">一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for HTML5 Forms Inputs" height="472" width="920">
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
<tr id="ophd">
<th class="row-heading" scope="row">Form: Search</th>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 38%</td>
</tr>
<tr id="bncl">
<th class="row-heading" scope="row">Form: Phone</th>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 38%</td>
</tr>
<tr id="oh4w">
<th class="row-heading" scope="row">Form: URL</th>
<td class="supported">√</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 38%</td>
</tr>
<tr id="tyzw">
<th class="row-heading" scope="row">Form: Email</th>
<td class="supported">√</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 38%</td>
</tr>
<tr id="awxf">
<th class="row-heading" scope="row">Form: DateTime</th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="grade-poor support-grade"> 4%</td>
</tr>
<tr id="w2jf">
<th class="row-heading" scope="row">Form: Date</th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="grade-poor support-grade"> 4%</td>
</tr>
<tr id="gywi">
<th class="row-heading" scope="row">Form: Month</th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="grade-poor support-grade"> 4%</td>
</tr>
<tr id="cxc6">
<th class="row-heading" scope="row">Form: Week</th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>Y<br>
</td>
<td class="grade-poor support-grade"> 4%</td>
</tr>
<tr id="q.3h">
<th class="row-heading" scope="row">Form: Time</th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="grade-poor support-grade"> 4%</td>
</tr>
<tr id="bp1z">
<th class="row-heading" scope="row">Form: LocalTime</th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="grade-poor support-grade"> 4%</td>
</tr>
<tr id="w7ea">
<th class="row-heading" scope="row">Form: Number</th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="grade-poor support-grade"> 5%</td>
</tr>
<tr id="lh0-">
<th class="row-heading" scope="row">Form: Range</th>
<td class="supported">√</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 37%</td>
</tr>
<tr id="lr-b">
<th class="row-heading" scope="row">Form: Colour</th>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="grade- support-grade"><br>
</td>
</tr>
</tbody>
</table>

<h2 id="spec-api">二、API 参考</h2>
**1.API SPEC：**

* &lt;form/&gt;, &lt;fieldset/&gt;, &lt;legend/&gt;, &lt;label/&gt;:[http://www.w3.org/TR/html5/forms.html](http://www.w3.org/TR/html5/forms.html "http://www.w3.org/TR/html5/forms.html")
* &lt;input/&gt;:[http://www.w3.org/TR/html5/the-input-element.html](http://www.w3.org/TR/html5/the-input-element.html "http://www.w3.org/TR/html5/the-input-element.html")
* &lt;input/&gt; 类型:[http://www.w3.org/TR/html5/states-of-the-type-attribute.html](http://www.w3.org/TR/html5/states-of-the-type-attribute.html#states-of-the-type-attribute "http://www.w3.org/TR/html5/states-of-the-type-attribute.html#states-of-the-type-attribute")
* &lt;input/&gt; 属性:[http://www.w3.org/TR/html5/common-input-element-attributes.html](http://www.w3.org/TR/html5/common-input-element-attributes.html "http://www.w3.org/TR/html5/common-input-element-attributes.html")
* &lt;button/&gt;、&lt;option/&gt;、&lt;textarea/&gt;:[http://www.w3.org/TR/html5/the-button-element.html](http://www.w3.org/TR/html5/the-button-element.html "http://www.w3.org/TR/html5/the-button-element.html")

**2. HTML 写法:**[http://sofish.de/file/html5/form/](http://sofish.de/file/html5/form/ "http://sofish.de/file/html5/form/")


    <form id="form" action="" method="">
            <fieldset>
                <legend> Pizza Size </legend>
                <input type=TYPE value="" name="" autofocus required pattern="" placeholder="" />
                <textarea name="">
                </textarea>
            </fieldset>
    <form>

<table class="zeroBorder" height="202" width="755">
<tbody>
<tr>
<th style="text-align:left">新 Form 属性<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
<tr>
<td style="text-align:left">accept-charset = value<br>
</td>
<td style="text-align:left">支持的编码。value, {String}<br>
</td>
</tr>
<tr>
<td style="text-align:left">autocomplete = value <br>
</td>
<td style="text-align:left">自动完成，有三个值：<br>
<ol><li>on, 开启自动完成</li>
<li>off, 不启用自动完成</li>
<li>没有值，设置为默认， 默认为 on</li>
</ol>
</td>
</tr>
<tr>
<td style="text-align:left">novalidate = value<br>
</td>
<td style="text-align:left">不需要校验表单。 value, {Boolean}。默认为 true<br>
</td>
</tr>
</tbody>
</table>

<table class="zeroBorder" id="rps6" height="393" width="757">
<tbody>
<tr>
<th style="text-align:left"> 新的 input 类型<br>
</th>
<th style="text-align:left"> 状态<br>
</th>
<th style="text-align:left"> Data type </th>
<th style="text-align:left"> Control type </th>
</tr>
</tbody>
<tbody>
<tr>
<td style="text-align:left">search</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#text-state-and-search-state" title="attr-input-type-search">Search</a></td>
<td style="text-align:left"> 不换行的文本</td>
<td style="text-align:left"> 搜索域 </td>
</tr>
<tr>
<td style="text-align:left">tel</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#telephone-state" title="attr-input-type-tel">Telephone</a></td>
<td style="text-align:left"> 不换行的文本</td>
<td style="text-align:left"> 文本域</td>
</tr>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#url-state" title="attr-input-type-url">URL</a></td>
<td style="text-align:left"> 一个绝对地址 </td>
<td style="text-align:left"> 文本域<br>
</td>
</tr>
<tr>
<td style="text-align:left">email</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#e-mail-state" title="attr-input-type-email">E-mail</a></td>
<td style="text-align:left">一个 e-mail 或 e-mail 列表&nbsp; </td>
<td style="text-align:left"> 文本域</td>
</tr>
<tr>
<td style="text-align:left">datetime</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#date-and-time-state" title="attr-input-type-datetime">Date and Time</a></td>
<td style="text-align:left">日期和时间<br>
</td>
<td style="text-align:left"> 日期和时间的控制栏<br>
</td>
</tr>
<tr>
<td style="text-align:left">date</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#date-state" title="attr-input-type-date">Date</a></td>
<td style="text-align:left"> 日期</td>
<td style="text-align:left"> 日期控制栏 </td>
</tr>
<tr>
<td style="text-align:left">month</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#month-state" title="attr-input-type-month">Month</a></td>
<td style="text-align:left">月份</td>
<td style="text-align:left"> 月份控制栏 </td>
</tr>
<tr>
<td style="text-align:left">week</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#week-state" title="attr-input-type-week">Week</a></td>
<td style="text-align:left">星期<br>
</td>
<td style="text-align:left"> 星期控制栏</td>
</tr>
<tr>
<td style="text-align:left">time</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#time-state" title="attr-input-type-time">Time</a></td>
<td style="text-align:left"> 时间</td>
<td style="text-align:left"> 时间控制栏</td>
</tr>
<tr>
<td style="text-align:left">datetime-local</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/states-of-the-type-attribute.html#local-date-and-time-state" title="attr-input-type-datetime-local">Local Date and Time</a></td>
<td style="text-align:left"> 本地时间</td>
<td style="text-align:left"> 日期和时间控制栏 </td>
</tr>
<tr>
<td style="text-align:left">number</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/number-state.html#number-state" title="attr-input-type-number">Number</a></td>
<td style="text-align:left"> 数字</td>
<td style="text-align:left"> 数据文本域&amp;控制栏 </td>
</tr>
<tr>
<td style="text-align:left">range</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/number-state.html#range-state" title="attr-input-type-range">Range</a></td>
<td style="text-align:left"> 区间 </td>
<td style="text-align:left"> 一个 slider 控制栏<br>
</td>
</tr>
<tr>
<td style="text-align:left">color</td>
<td style="text-align:left"><a href="http://www.w3.org/TR/html5/number-state.html#color-state" title="attr-input-type-color">Color</a></td>
<td style="text-align:left"> 8-bit 的 sRGB 颜色</td>
<td style="text-align:left"> 颜色控制栏<br>
</td>
</tr>
</tbody>
</table>

<table class="zeroBorder" height="617" width="758">
<tbody>
<tr>
<th style="text-align:left">新 INPUT/TEXTEARA 属性<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">placeholder = value<br>
</td>
<td style="text-align:left">一段默认的描述文字，鼠标聚集的时候消失，失焦并且没有值时显示。<br>
</td>
</tr>
<tr>
<td style="text-align:left">autocomplate = value<br>
</td>
<td style="text-align:left">同 Form。<br>
</td>
</tr>
<tr>
<td style="text-align:left">autofocus<br>
</td>
<td style="text-align:left">自动聚集<br>
</td>
</tr>
<tr>
<td style="text-align:left">list = DATALIST ID<br>
</td>
<td style="text-align:left">看代码可以更直观：<br>
<br>
&lt;input type="email" <b style="color:#000000">list</b>="<b style="background-color:#ffffff;color:#000000">list-id</b>" /&gt;<br style="color:#999999">
<br style="color:#999999">
&lt;datalist id="<b>list-id</b>"&gt;<br style="color:#999999">
&nbsp;&nbsp;&nbsp; &lt;option value="a@alipay.com" /&gt;<br style="color:#999999">
&nbsp;&nbsp;&nbsp; &lt;option value="i@sofish.de" /&gt;<br style="color:#999999">
&lt;/datalist&gt;<br>
<br>
</td>
</tr>
<tr>
<td style="text-align:left">min/max = value<br>
</td>
<td style="text-align:left">用于 input[type='range']，创建一个数字区间。可以只使用 min 或者 max<br>
</td>
</tr>
<tr>
<td style="text-align:left">step = value<br>
</td>
<td style="text-align:left">用于 input[type='range']，把区间分成 N（value）个颗粒，调动只能按颗粒来调动<br>
<br style="color:#999999">
如：&lt;input id="confidence" name="level" type="range" min="0" max="100" step="10" value="0"&gt;，只有0, 10, 20, 30 ... 100 这些数是调动点，而不能用 11 这样的数字。<br>
</td>
</tr>
<tr>
<td style="text-align:left">required<br>
</td>
<td style="text-align:left">当有 require 项被正确填上，表单才能提交<br>
</td>
</tr>
<tr>
<td style="text-align:left">pattern = value<br>
</td>
<td style="text-align:left">较验。value, 正则表达式。<br>
</td>
</tr>
<tr>
<td style="text-align:left">formmethod = value<br>
</td>
<td style="text-align:left">应用于 type 为 image 或者 submit 的 input。如果定义，将会重写 form 的 method 属性。有两种类型的值：<br>
<ol><li>get</li>
<li>post<br>
</li>
</ol>
</td>
</tr>
</tbody>
</table>
**3. Scripting API:**
<table class="zeroBorder" height="139" width="755">
<tbody>
<tr>
<th style="text-align:left">Form 方法/属性<br>
</th>
<th style="text-align:left">Behavior<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">form.item(index)<br>
</td>
<td style="text-align:left">返回 Element。index, 序号，从 0 开始。<br>
</td>
</tr>
<tr>
<td style="text-align:left">form.namedItem(name)<br>
</td>
<td style="text-align:left">返回 name 属性等于 name 的 Element 或者包含匹配 Element 的数组<br>
</td>
</tr>
<tr>
<td style="text-align:left">form.checkValidity()<br>
</td>
<td style="text-align:left">检测表单项是否通过校验，返回 {Boolean}<br>
</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-demo">三、DEMO</h2>
* [HTML5 Form](http://sofish.de/file/html5/form/ "HTML5 Form")

<h2 id="spec-caution">四、注意事项</h2>
* HTML5 Form 的支持还非常差，并且一些 input type 的外观在各浏览器中表现不一致；
* 把握 HTML5 Form 的关键是，它更注重的是功能和主义，而非外观。比较新的 input type，新的功能性属性；
* 枚举类 HTML 属性，如果没有给出特定的值，通常都会有一个默认的值。比较 autocomplete, contenteditable。

<h2 id="spec-solution">五、兼容解决方案</h2>
目前的解法方案大多是用 JS 来实现表现上的模仿，用 CSS 实现外观的模仿。没有真正的解法方案。不过，值得注意的是，因为 Form 表单都采用了优雅降级的兼容方式，因此，我们可能逐步为未来做准备，比如：

* 作用 placeholder 来做 input 的描述
* 使用 pattern 来做正测自己定义的属性
* 用 type='email' 这样的新 input 类型来做特定类型的标签，因为如果浏览器检测不到，默认会理解为 type="text"

<h2 id="spec-ref">六、参考文献</h2>
* BOOK:《Pro HTML5 Programming》
* [HTML5 SPEC：Forms](http://www.w3.org/TR/html5/forms.html#dom-form-nameditem "HTML5 SPEC：Forms")
* [MDC: Forms in HTML5](https://developer.mozilla.org/en/HTML/HTML5/Forms_in_HTML5 "MDC: Forms in HTML5")
* [MDC: input](https://developer.mozilla.org/en/HTML/Element/input#attr-formmethod "MDC: input")
* [HTML5 & CSS3 Support, Web Design Tools & Support](http://www.findmebyip.com/litmus "HTML5 & 
CSS3 Support, Web Design Tools & Support")

