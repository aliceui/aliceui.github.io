<h1>CSS3: user-interface</h1>
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
<th style="text-align:left" bgcolor="#ffffff">box-sizing<br>
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
<tr>
<th class="row-heading" scope="row">resize<br>
</th>
<td>-<br>
</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td class="grade-limited support-grade">44%<br>
</td>
</tr>
<tr>
<th style="text-align:left" bgcolor="#ffffff">outline<br>
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
<tr>
<th style="text-align:left" bgcolor="#ffffff">nav-up、nav-right、na-bottom、nav-left<br>
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
**（1）API SPEC:**[http://www.w3.org/TR/css3-ui/](http://www.w3.org/TR/css3-ui/ "http://www.w3.org/TR/css3-ui/")<br/>
**（2）CSS:**
<table class="proptable zeroBorder" style="" height="1036" width="920">
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
<td style="text-align:left"><a href="https://developer.mozilla.org/en/CSS/-moz-border-top-colors" id="agb-" title="https://developer.mozilla.org/en/CSS/-moz-border-top-colors"></a><a href="http://www.w3.org/TR/css3-ui/#appearance0">appearance</a></td>
<td style="text-align:left">normal | &lt;appearance&gt; | inherit </td>
<td style="text-align:left">normal <br>
</td>
<td style="text-align:left">所有元素<br>
<br>
</td>
<td style="text-align:left">可以用来制造一个元素看起来像标准的用户界面元素的平台<br>
</td>
<td style="text-align:left">视觉、互动<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#box-sizing0">box-sizing</a><br>
</td>
<td style="text-align:left">content-box | border-box | inherit</td>
<td style="text-align:left">content-box <br>
</td>
<td style="text-align:left">所有元素都接受宽度和高度</td>
<td style="text-align:left">box-sizing一共有content-box和border-box两个属性，其中content-box是默认属性：<br>
<b>content-box:</b> element width=content+border+padding（此值维持css2.1盒模型的组成模式）<br>
<b>border-box:</b>element width=content（此值改变css2.1盒模型组成模式）<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-background/#border-radius" id="tpqh" title="http://www.w3.org/TR/css3-background/#border-radius"></a><a href="http://www.w3.org/TR/css3-ui/#content">content</a></td>
<td style="text-align:left">icon </td>
<td style="text-align:left"> normal<br>
</td>
<td style="text-align:left"><br>
</td>
<td style="text-align:left">
<div class="cont">content 属性与 :befor 及 :after 伪元素配合使用，来插入生成内容，用于定义元素之前或之后放置的生成内容。默认地，这往往是行内内容，不过该内容创建的框类型可以用属性 display 控制。<br>
</div>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#cursor0">cursor</a><br>
</td>
<td style="text-align:left"> [ [&lt;uri&gt; [&lt;x&gt; &lt;y&gt;]?,]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll ] ] | inherit </td>
<td style="text-align:left">auto <br>
</td>
<td style="text-align:left">所有元素</td>
<td style="text-align:left">
<div class="cont">用户代理从指定的资源检索光标<br>
</div>
</td>
<td style="text-align:left">视觉、互动</td>
</tr>
<tr valign="baseline">
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#font">font</a><br>
</td>
<td style="text-align:left">&lt;appearance&gt; | status-bar | message-box | caption | small-caption | inherit <br>
</td>
<td style="text-align:left"><br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">
<p>设置字体元素的样式，新增的appearance的值允许设置字体文本一样设置系统控制的样式<br>
</p>
</td>
<td style="text-align:left">视觉 </td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#icon">icon</a><br>
</td>
<td style="text-align:left">auto | &lt;uri&gt; [, &lt;uri&gt;]* | inherit <br>
</td>
<td style="text-align:left">auto <br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">允许设置任意元素一个对等的图标，注意：一个元素的图标只有在content属性设置为icon时才能使用<br>
</td>
<td style="text-align:left">全部<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#nav-index0">nav-index</a><br>
</td>
<td style="text-align:left">auto | &lt;number&gt; | inherit <br>
</td>
<td style="text-align:left">auto <br>
</td>
<td style="text-align:left">所有使能元素<br>
</td>
<td style="text-align:left">
<p>指定了元素的导航顺序。'1'意味着最先被导航。当若干个元素的nav-index值相同时，则按照文档的先后顺序进行导航。<br>
</p>
</td>
<td style="text-align:left">互动<br>
</td>
</tr>
<tr>
<td style="text-align:left"><span class="property"><a href="http://www.w3.org/TR/css3-ui/#nav-up">nav-up</a></span>, <span class="property"><a href="http://www.w3.org/TR/css3-ui/#nav-right">nav-right</a></span>, <span class="property"><a href="http://www.w3.org/TR/css3-ui/#nav-down">nav-down</a></span>, <span class="property"><a href="http://www.w3.org/TR/css3-ui/#nav-left">nav-left</a></span><br>
</td>
<td style="text-align:left">auto | &lt;id&gt; [ current | root | &lt;target-name&gt; ]? | inherit <br>
</td>
<td style="text-align:left">auto <br>
</td>
<td style="text-align:left">所有使能元素<br>
</td>
<td style="text-align:left">定向聚焦导航栏<br>
</td>
<td style="text-align:left">互动<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#outline0">outline</a><br>
</td>
<td style="text-align:left">[ &lt;'outline-color'&gt; || &lt;'outline-style'&gt; || &lt;'outline-width'&gt; ] | inherit <br>
</td>
<td style="text-align:left">自定义<br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">
<ol><li>outline （轮廓）是给元素周围绘制轮廓外边框，通过设置一个数值使边框边缘的外围偏移，可起到突出元素的作用。 </li>
<li>outline 属性可设置元素周围的轮廓线。 </li>
<li>轮廓线不会占据空间，也不一定是矩形。 </li>
<li>outline 属性是一个简写属性，用于设置元素周围的轮廓线</li>
</ol>
<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#outline-color0">outline-color</a><br>
</td>
<td style="text-align:left">&lt;color&gt; | invert | inherit <br>
</td>
<td style="text-align:left">invert <br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">指定轮廓边框颜色 <br>
</td>
<td style="text-align:left">视<br>
<br>
<br>
 觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#outline-offset0">outline-offset</a><br>
</td>
<td style="text-align:left">&lt;length&gt; | inherit <br>
</td>
<td style="text-align:left">0 <br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">指定轮廓边框偏移位置的数值<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#outline-style0">outline-style</a><br>
</td>
<td style="text-align:left">auto | &lt;border-style&gt; | inherit <br>
</td>
<td style="text-align:left">none <br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left">指定轮廓边框轮廓<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#outline-width0">outline-width</a><br>
</td>
<td style="text-align:left">&lt;border-width&gt; | inherit <br>
</td>
<td style="text-align:left">medium <br>
</td>
<td style="text-align:left">所有元素<br>
</td>
<td style="text-align:left"><br>
 指定轮廓边框宽度<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://www.w3.org/TR/css3-ui/#resize0">resize</a><br>
</td>
<td style="text-align:left">none | both | horizontal | vertical | inherit <br>
</td>
<td style="text-align:left">none <br>
</td>
<td style="text-align:left">overflow属性值中除去visible<br>
</td>
<td style="text-align:left">它允许浏览者可以重新改变元素的大小。目前只有webkit内核的浏览器支持<br>
</td>
<td style="text-align:left">视觉<br>
</td>
</tr>
</tbody>
</table>
<b><br>
<br>
</b>
<table id="eqvn" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="874" width="920">
<tbody>
<tr>
<td bgcolor="#ffffcc" colspan="2"><b>appearance的值<br>
</b></td>
<td bgcolor="#ffffcc" width="33.333333333333336%"><b>描述<br>
</b></td>
</tr>
<tr>
<td colspan="2"><b>icon</b><br>
</td>
<td width="33.333333333333336%">一个小图片代表一个对象，通常有一个名字或标签<br>
</td>
</tr>
<tr>
<td rowspan="5"><b>window</b><br>
</td>
<td width="33.333333333333336%"><b>desktop</b><br>
</td>
<td width="33.333333333333336%">一个窗口用来代表一个系统作为整体，通常包含别的窗口<br>
</td>
</tr>
<tr>
<td><b>workspace</b><br>
</td>
<td valign="top" width="33.333333333333336%">一个窗口用来表示一个项目或应用程序可能包含其他窗口，通常有一个titlebar显示该工程的项目名称或应用程序<br>
</td>
</tr>
<tr>
<td><b>document</b><br>
</td>
<td width="33.333333333333336%">一个窗口用来表示它的用户文件，通常有一个titlebar显示它的名字。<br>
</td>
</tr>
<tr>
<td><b>tooltip</b><br>
</td>
<td width="33.333333333333336%">一个窗口用来暂时显示一个对象的信息或帮助。<br>
</td>
</tr>
<tr>
<td><b>dialog</b><br>
</td>
<td width="33.333333333333336%">用来呈现一个通知或可供用户选择的一个行动的一部分<br>
</td>
</tr>
<tr>
<td rowspan="6"><b>button</b><br>
</td>
<td width="33.333333333333336%"><b>push-button</b><br>
</td>
<td width="33.333333333333336%">一个按钮有一个边境围绕着，经常以三维的形式出现<br>
</td>
</tr>
<tr>
<td><b>hyperlink</b><br>
</td>
<td width="33.333333333333336%">超链接<br>
</td>
</tr>
<tr>
<td><b>radio-button</b><br>
</td>
<td valign="top" width="33.333333333333336%">一个按钮显示是否选择旁边的一个小圆按钮标签<br>
</td>
</tr>
<tr>
<td><b>checkbox</b><br>
</td>
<td valign="top" width="33.333333333333336%">一个按钮显示是否选择旁边的一个小盒子按钮标签<br>
</td>
</tr>
<tr>
<td><b>menu-item</b><br>
</td>
<td valign="top" width="33.333333333333336%">在菜单中的选项也可以作为一个嵌套的标签<br>
</td>
</tr>
<tr>
<td><b>tab</b><br>
</td>
<td valign="top" width="33.333333333333336%">标签<br>
</td>
</tr>
<tr>
<td rowspan="8"><b>menue</b><br>
</td>
<td valign="top" width="33.333333333333336%"><b>menubar</b><br>
</td>
<td valign="top" width="33.333333333333336%">菜单条<br>
</td>
</tr>
<tr>
<td><b>pull-down-menu</b><br>
</td>
<td valign="top" width="33.333333333333336%">菜单选项被隐藏起来了，直到用户启动菜单<br>
</td>
</tr>
<tr>
<td><b>pop-up-menu</b><br>
</td>
<td valign="top" width="33.333333333333336%">当前选择的选项未发现直到用户启动菜单<br>
</td>
</tr>
<tr>
<td><b>list-menu</b><br>
</td>
<td valign="top" width="33.333333333333336%">一个编辑选项列表供用户选择<br>
</td>
</tr>
<tr>
<td><b>radio-group</b><br>
</td>
<td valign="top" width="33.333333333333336%">菜单显示为radio-button选项<br>
</td>
</tr>
<tr>
<td><b>checkbox-group</b><br>
</td>
<td valign="top" width="33.333333333333336%">菜单显示为复选框<br>
</td>
</tr>
<tr>
<td><b>outline-tree</b><br>
</td>
<td valign="top" width="33.333333333333336%">通过小工具控制菜单选项的显示和隐藏<br>
</td>
</tr>
<tr>
<td><b>range</b><br>
</td>
<td valign="top" width="33.333333333333336%">控制显示当前选择<br>
</td>
</tr>
<tr>
<td rowspan="3"><b>field</b><br>
</td>
<td valign="top"><b>combo-box</b><br>
</td>
<td valign="top">通过预设值快速进入普通或典型值<br>
</td>
</tr>
<tr>
<td><b>signature</b><br>
</td>
<td valign="top">一个field的进入署名<br>
</td>
</tr>
<tr>
<td><b>password</b><br>
</td>
<td valign="top">一个field的进入密码<br>
</td>
</tr>
</tbody>
</table>

**（3）user interface支持的伪类：**

* :hover
* :active
* :focus
* :enabled
* :disabled
* :checked
* :indeterminate

**新增的伪类：**

* :default ：适用于一个或多个用户界面中默认的一套类似的元素
* :valid and :invalid :对于数据的有效性语义定义一个不同的规格
* :in-range and :out-of-range ：元素只有单元范围的限制，元素的外观被限制在范围内或范围外
* :required and :optional：设置form提交时元素是必须还是可选
* :read-only and :read-write&nbsp; ：元素的内容是只读还是读写

**user interface 分段元素的伪元素：**

* ::selection
* ::value：一个表单可能包含一个标签和它的数据值，::value这个伪元素表示数据自身的值，然后可以设置数据自身的风格
* ::choices：一个表单可能包含一个选项列表和选项本身，::choices选择选项本身，然后就可以对选项本身设置风格
* ::repeat-item：描述一个重复序列的一项
* ::repeat-index：代表重复序列的当前选项

<h2 id="spec-demo">三、DEMO</h2>

<h2 id="spec-caution">四、注意事项</h2>
* 一个元素的图标只有在content属性设置为icon时才能使用
* 当若干个元素的nav-index值相同时，则按照文档的先后顺序进行导航。

<h2 id="spec-ref">五、参考文献</h2>
* [css3中文手册](http://isd.tencent.com/css3/ "http://isd.tencent.com/css3/")
* [http://www.w3.org/TR/css3-ui/](http://www.w3.org/TR/css3-ui/ "http://www.w3.org/TR/css3-ui/")
* [http://www.css3.info/preview/](http://www.css3.info/preview/ "http://www.css3.info/preview/")

