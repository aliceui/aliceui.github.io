<h1>HTML5: Offline Web Application</h1>
<ol><li><a href="#spec-browser" target="_self">浏览器支持</a></li>
<li><a href="#spec-api" target="_self">API 参考</a></li>
<li><a href="#spec-demo" target="_self">DEMO</a></li>
<li><a href="#spec-caution" target="_self">注意事项</a></li>
<li><a href="#spec-solution" target="_self">兼容解决方案</a></li>
<li><a href="#spec-ref" target="_self">参考文献</a></li>
</ol>
<h2 id="spec-browser">一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for HTML5 Forms Inputs" height="162" width="920">
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
<th class="row-heading" scope="row">offline<br>
</th>
<td>√<br>
</td>
<td>√<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>√</td>
<td>√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 77%</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-api">二、API 参考</h2>
<div style=""><b>1. API SPEC</b>: <a href="http://www.w3.org/TR/offline-webapps/" id="mgxz" title="http://www.w3.org/TR/offline-webapps/">http://www.w3.org/TR/offline-webapps/</a><br>
<br>
<b>2. HTML<br>
<br>
&nbsp;&nbsp;</b> 1. 在 &lt;html /&gt; 中添加 manifest 属性：<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="pun">&lt;</span><span class="tag">html</span> <span class="atn">manifest</span><span class="pun">=</span><span class="atv">"http://www.example.com/example.manifest"</span><span class="pun">&gt;</span><span class="pln"><br>
&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;...<br>
</span><span class="pun">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/</span><span class="tag">html</span><span class="pun">&gt;</span><br>
<br>
&nbsp;&nbsp; 2. 创建 manifest 文件：foo.manifest<br>
</div>
<div style="margin-left:80px"><span class="pln">&nbsp;</span>
<table id="vssq" bgcolor="#f3f3f3" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="349" width="572">
<tbody>
<tr>
<td style="text-align:left" width="100%"><span class="pln"><span class="pln">&nbsp;CACHE MANIFEST</span></span><span class="pln"><span class="pun"><br>
&nbsp;# <span class="pln"><span class="pun">'#'号是注释，变更注释，也会重新缓存，因些我们常用它来做版本标记</span></span><br style="color:#999999">
</span></span><span class="pln"><span class="pun">&nbsp;# version 0.3 2010.10.23</span></span><br>
<span class="pln"><span class="pun">&nbsp;&nbsp; &nbsp;&nbsp; </span></span><br>
<span class="pln"><span class="pun">&nbsp;# 在 .manifest 文件中的路径，默认会被缓存</span></span><br style="color:#999999">
<span class="pln"><span class="pun">&nbsp;# 路径可以是相对的，也可以是绝对的</span></span><br>
<span class="pln"><span class="pun">&nbsp;img/</span><span class="pln">a</span><span class="pun">.</span><span class="pln">png</span></span><br>
<br>
<span class="pln">&nbsp;# CACHE 标记下面的文件都会被缓存<br>
<span class="pln">&nbsp;CACHE</span><span class="pun">:</span><br>
</span><span class="pln">&nbsp;img/b.img</span><br>
<span class="pln">&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; </span><br>
<span class="pln">&nbsp;# NETWORK 标记下面的文件都会保持在线</span><br>
<span class="pln">&nbsp;NETWORK:</span><br>
<span class="pln">&nbsp;*</span><br>
<br>
<span class="pln">&nbsp;# FALLBACK 是当文件有网络请求，但又处于离线状态的一种替代方案<br>
&nbsp;FALLBACK:<br>
&nbsp;/ajax /ajax_offline</span><br>
</td>
</tr>
</tbody>
</table>
<br>
</div>
<div style=""><br>
</div>
<div style=""><b>3. Scripting API</b><br>
<br>
</div>
<div style="margin-left:80px"><b>(1) 浏览器检测<br>
&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;</b>&nbsp; var hasApplicationCache = !!(window.applicationCache);<br>
<br>
<b><br>
(2) 在线还是离线?<br>
<br>
</b>
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for HTML5 Forms Inputs" height="57" width="495">
<tbody>
<tr>
<th class="tertiary-heading" scope="col"> navigator 属性<br>
</th>
<th class="tertiary-heading" scope="col"> 描述<br>
</th>
</tr>
<tr>
<td style="text-align:left">navigator.onLine<br>
</td>
<td style="text-align:left">if(navigator.onLine) {<br>
&nbsp;&nbsp;&nbsp; // 当前在线<br>
} else {<br>
&nbsp;&nbsp;&nbsp; // 当前离线<br>
}<br>
</td>
</tr>
</tbody>
</table>
<br>
&nbsp;&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp;&nbsp;&nbsp; window.online = function(){<br>
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; // 离线<br>
&nbsp;&nbsp; &nbsp; }<br>
<br>
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for HTML5 Forms 
Inputs" height="57" width="495">
<tbody>
<tr>
<th class="tertiary-heading" scope="col"><b> 事件</b><br>
</th>
<th class="tertiary-heading" scope="col"><b> 描述</b><br>
</th>
</tr>
<tr>
<td style="text-align:left">online<br>
</td>
<td style="text-align:left">在线状态<br>
</td>
</tr>
<tr>
<td style="text-align:left">offline<br>
</td>
<td style="text-align:left">离线事件<br>
</td>
</tr>
</tbody>
</table>
<b><br>
&nbsp;&nbsp;&nbsp;</b> <b><br>
(3) MIME Type<br>
<br>
&nbsp;&nbsp;&nbsp;</b> text/cache-manifest<b><br>
<br>
<br>
(4) Cache States</b><br>
&nbsp;&nbsp; &nbsp;
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for 
HTML5 Forms 
Inputs" height="57" width="495">
<tbody>
<tr>
<th class="tertiary-heading" scope="col"><b> 状态码</b><br>
</th>
<th class="tertiary-heading" scope="col"><b> 描述</b><br>
</th>
</tr>
<tr>
<td style="text-align:left">0<br>
</td>
<td style="text-align:left">UNCACHED<br>
</td>
</tr>
<tr>
<td style="text-align:left">1<br>
</td>
<td style="text-align:left">IDLE<br>
</td>
</tr>
<tr>
<td style="text-align:left">2<br>
</td>
<td style="text-align:left">CHECKING<br>
</td>
</tr>
<tr>
<td style="text-align:left">3<br>
</td>
<td style="text-align:left">DOWNLOADING<br>
</td>
</tr>
<tr>
<td style="text-align:left">4<br>
</td>
<td style="text-align:left">UPDATEREADY<br>
</td>
</tr>
<tr>
<td style="text-align:left">5<br>
</td>
<td style="text-align:left">OBSOLETE<br>
</td>
</tr>
</tbody>
</table>
<br>
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for 
HTML5 Forms 
Inputs" height="57" width="495">
<tbody>
<tr>
<th class="tertiary-heading" scope="col"><b> 状态事件</b><br>
</th>
<th class="tertiary-heading" scope="col"><b> 事件对应的状态</b><br>
</th>
</tr>
<tr>
<td style="text-align:left">onchecking<br>
</td>
<td style="text-align:left">CHECKING<br>
</td>
</tr>
<tr>
<td style="text-align:left">ondownloading<br>
</td>
<td style="text-align:left">DOWNLOADING<br>
</td>
</tr>
<tr>
<td style="text-align:left">onupdateready<br>
</td>
<td style="text-align:left">UPDATEREADY<br>
</td>
</tr>
<tr>
<td style="text-align:left">onobsolete<br>
</td>
<td style="text-align:left">OBSOLETE<br>
</td>
</tr>
<tr>
<td style="text-align:left">oncached<br>
</td>
<td style="text-align:left">IDLE<br>
</td>
</tr>
<tr>
<td style="text-align:left">onerror<br>
</td>
<td style="text-align:left">发生错误<br>
</td>
</tr>
<tr>
<td style="text-align:left">onnoupdate<br>
</td>
<td style="text-align:left">没有变更<br>
</td>
</tr>
<tr>
<td style="text-align:left">onprogress<br>
</td>
<td style="text-align:left">正在缓存中<br>
</td>
</tr>
</tbody>
</table>
<b><br>
(5) 更新缓存</b><br>
&nbsp;&nbsp; &nbsp;
<table class="litmus-browser-support-results zeroBorder" style="" summary="Browser support for 
HTML5 Forms 
Inputs" height="57" width="495">
<tbody>
<tr>
<th class="tertiary-heading" scope="col"><b> 方法</b><br>
</th>
<th class="tertiary-heading" scope="col"><b> 描述</b><br>
</th>
</tr>
<tr>
<td style="text-align:left">window.applicationCache.update()<br>
</td>
<td style="text-align:left">请求浏览器更新离线数据的缓存<br>
</td>
</tr>
</tbody>
</table>
<br>
</div>
<h2 id="spec-demo">三、DEMO&nbsp;&nbsp; </h2>
&nbsp;&nbsp;&nbsp; <a href="http://sofish.de/file/html5/offline/" id="t1rk" title="HTML5 application Cache">HTML5 application Cache</a><br>
<h2 id="spec-caution">四、注意事项</h2>
<ul><li>因为 cache manifest 的主要应用对象是离线应用，因此其会缓存引用 manifest 的页面。如果在一般页面中使用，一定要非常明确自己的使用方法和地方是否正确，不注意的话，容易导致更新不会被显示出来。</li>
<li>在 Firefox 的 about:cache 可以查看缓存的设备</li></ul>
<br>
<h2 id="spec-solution">五、兼容解决方案</h2>
&nbsp;&nbsp;&nbsp; 1. 离线缓存 Apache Cache 等，没有前端的缓存解决方案。<br>
&nbsp;&nbsp;&nbsp; 2. 页面引用文件缓存，使用 iframe： <a href="http://sofish.de/1449" rel="bookmark" title="Permanent Links to
 HTML5 缓存: cache manifest">HTML5 缓存: cache manifest</a><br>
<h2 id="spec-ref">六、参考文献</h2>
<ul><li>BOOK:《Pro HTML5 Programming》</li>
<li><a href="http://www.w3.org/TR/offline-webapps/" id="is2o" title="HTML5 SPEC: offline web application">HTML5 SPEC: offline web application</a></li>
<li><a href="http://www.html5rocks.com/tutorials/appcache/beginner/" id="iw6t" title="A Beginner's Guide to Using the Application Cache">A Beginner's Guide to Using the Application Cache</a><br>
</li>
<li><a href="http://www.findmebyip.com/litmus" title="HTML5 &amp; CSS3 Support, Web Design Tools &amp; Support">HTML5 &amp; CSS3 Support, Web Design Tools &amp; Support</a></li></ul>
