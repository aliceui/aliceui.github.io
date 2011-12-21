<h1>HTML5: Geolocation API</h1>
<ol><li><a href="#spec-browser" target="_self">浏览器支持</a></li>
<li><a href="#spec-api" target="_self">API 参考</a></li>
<li><a href="#spec-demo" target="_self">DEMO</a></li>
<li><a href="#spec-caution" target="_self">注意事项</a></li>
<li><a href="#spec-solution" target="_self">兼容解决方案</a></li>
<li><a href="#spec-ref" target="_self">参考文献</a></li>
</ol>
<h2 id="spec-browser">一、浏览器支持</h2>
<table class="litmus-browser-support-results zeroBorder" summary="Browser support for HTML5 
Web Applications" height="125" width="920">
<tbody></tbody>
 
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
<tr id="b4mc">
<th class="row-heading" scope="row">GeoLocation</th>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td>N</td>
<td>N</td>
<td class="supported">Y</td>
<td class="supported">Y</td>
<td class="grade-excellent support-grade"> 80%</td>
</tr>
</tbody>
</table>
<h2 id="spec-api">二、API 参考</h2>
<div style=""><b>1.</b> <b>API SPEC:</b> <a href="http://dev.w3.org/geo/api/spec-source.html" id="l8tt" title="http://dev.w3.org/geo/api/spec-source.html">http://dev.w3.org/geo/api/spec-source.html</a><br>
</div>
<div style=""><br>
<b>2. Geoloation 数据来源：</b><br>
<br>
 &nbsp;&nbsp;&nbsp; 注：Geolocation 获取的经纬度是数字格式的，如：Latitude: 39.17222, Longitude: -120.13778，而非 39°10'20'。<br>
 &nbsp;&nbsp; </div>
<ul style=""><li>IP address-based getlocation data<br>
</li></ul>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">Pros(优点)<br>
</th>
<th style="text-align:left">Cons（不足）<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">运行于任何地方<br>
</td>
<td style="text-align:left">不精确。通常只能有城市级的精确度（accurate only to the city level）<br>
</td>
</tr>
<tr>
<td style="text-align:left">受服务端保护<br>
</td>
<td style="text-align:left">运作需要大笔费用<br>
</td>
</tr>
</tbody>
</table>
<br>
<br>
<ul style=""><li>GPS-based geolocation data<br>
</li></ul>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">Pros<br>
</th>
<th style="text-align:left">Cons<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">非常精确<br>
</td>
<td style="text-align:left">
<ol><li>需要等待一段时间来返回数据</li>
<li>费电</li>
<li>室内运行状态不是很号</li>
<li>可能需要额外硬件设备<br>
</li>
</ol>
</td>
</tr>
</tbody>
</table>
<br>
<br>
<ul style=""><li>Wi-Fi-based geolocation data<br>
</li></ul>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">Pros<br>
</th>
<th style="text-align:left">Cons<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">精确，室内运行良好，便宜，并且可以快速获取数据<br>
</td>
<td style="text-align:left">不适应在热点不多的城郊地区应用<br>
</td>
</tr>
</tbody>
</table>
<br>
<br>
<ul style=""><li>Cell phone-based geolocation data<br>
</li></ul>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">Pros<br>
</th>
<th style="text-align:left">Cons<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">比较精确<br>
</td>
<td style="text-align:left">需要一个设备来访问电话，或者手机的 Modem（cell modem）<br>
</td>
</tr>
<tr>
<td style="text-align:left">室内运行良好<br>
</td>
<td style="text-align:left">不适应在手机比较少的城郊应用<br>
</td>
</tr>
<tr>
<td style="text-align:left">便宜、速度快<br>
</td>
<td style="text-align:left"><br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<br>
<ul style=""><li>User-Defined-based geolocation data<br>
</li></ul>
<div style=""><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">Pros<br>
</th>
<th style="text-align:left">Cons<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">用户通常持有比机器计算出来更精确的地理数据<br>
</td>
<td style="text-align:left">也可能是非常不精确的，特别是当位置搬迁时（especially if the location changes）<br>
</td>
</tr>
<tr>
<td style="text-align:left">当服务点搬迁时用户可以随时变更<br>
</td>
<td style="text-align:left"><br>
</td>
</tr>
<tr>
<td style="text-align:left">用户记录可能比检测更快<br>
</td>
<td style="text-align:left"><br>
</td>
</tr>
</tbody>
</table>
<br>
<b>&nbsp;&nbsp; &nbsp; <br>
 &nbsp;&nbsp; &nbsp; 3.</b><b>位置数据请问方式<br>
</b><br>
<table class="zeroBorder" style="">
<tbody>
<tr>
<th style="text-align:left">方式<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">One-shot<br>
</td>
<td style="text-align:left">数据只在请求时获取<br>
</td>
</tr>
<tr>
<td style="text-align:left">Repeated<br>
</td>
<td style="text-align:left">在请求后，会按一定频率返回数据。直到用户停止它。<br>
</td>
</tr>
</tbody>
</table>
<br>
<div style=""><br>
<b>4.</b><b>Script</b><br>
</div>
<div> &nbsp;&nbsp;&nbsp; <br>
var geoLocation = navigator.geolocation;<br>
</div>
<div style=""><br>
<b> &nbsp;&nbsp;&nbsp; (1)浏览器检测</b><br>
<br>
</div>
<div>var hasGeolocation = !!(navigator.geolocation);<br>
<br>
</div>
<div style=""><b>&nbsp;&nbsp; &nbsp;(2)Scripting API<br>
 &nbsp;&nbsp;&nbsp; <br>
</b></div>
<b>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;</b>&nbsp;&nbsp; &nbsp; &lt;1&gt; 获取 geolocation 数据模式：<br>
<br>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">方式<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">One-shot<br>
</td>
<td style="text-align:left">数据只在请求时获取<br>
</td>
</tr>
<tr>
<td style="text-align:left">Repeated<br>
</td>
<td style="text-align:left">在请求后，会按一定频率返回数据。直到用户停止它(clearWatch(watchPositionHandler))。<br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<div><b>&nbsp;</b>&nbsp; &nbsp; <br>
&nbsp;&nbsp; &nbsp; &lt;2&gt; navigator.geolocation 方法:<br>
<br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">用于<br>
</th>
<th>&nbsp;方法<br>
</th>
<th style="text-align:left">参数描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">One-shot<br>
</td>
<td style="text-align:left">getCurrentPosition(<b>successCallback</b> [, <b>errorCallBack</b>, [, <b>positionOptions</b>])<br>
</td>
<td rowspan="3" style="text-align:left">
<ol><li>successCallback: 成功请求时调用的 callback；</li>
<li>errorCallBack: 请求出现异常时调用的 callback， 可选；<br>
</li>
<li>positionOptions: 对得于的位置进得微调。<br>
</li>
</ol>
</td>
</tr>
<tr>
<td rowspan="2" style="text-align:left">Repeated<br>
</td>
<td style="text-align:left">var watchPositionHandler = watchPosition(<b>successCallback</b> [, <b>errorCallBack</b>, [, <b>positionOptions</b>])<br>
</td>
</tr>
<tr>
<td style="text-align:left">clearWatch(watchPositionHandler)<br>
</td>
</tr>
</tbody>
</table>
 &nbsp;&nbsp; &nbsp; <b>&nbsp;&nbsp; </b>&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &lt;3&gt; 方法参数解释：<br>
<br>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">successCallback(position)<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">position.coords<br>
</td>
<td style="text-align:left">位置的坐标属性。<br>
</td>
</tr>
<tr>
<td style="text-align:left">position.coords.latitude<br>
</td>
<td style="text-align:left">纬度，return {Number}<br>
</td>
</tr>
<tr>
<td style="text-align:left">position.coords.longitude<br>
</td>
<td style="text-align:left">经度，return {Number}<br>
</td>
</tr>
<tr>
<td style="text-align:left">position.coords.altitude<br>
</td>
<td style="text-align:left">海拔, return {Number}<br>
</td>
</tr>
<tr>
<td style="text-align:left">position.coords.accuracy<br>
</td>
<td style="text-align:left">实际位置与经纬度之前的距离，单位米（meter），约 95% 精确度可以保证，retrun {Number}</td>
</tr>
<tr>
<td style="text-align:left">postion.timestamp<br>
</td>
<td style="text-align:left">获取数据的时间。被解析为 <a href="http://dev.w3.org/geo/api/spec-source.html#ref-domtimestamp">[DOMTIMESTAMP]</a> 方式的数据。return {Number}<br>
</td>
</tr>
<tr>
<td style="text-align:left">altitude, altitudeAccuracy, heading, speed<br>
</td>
<td style="text-align:left">这些属性不一定被支持。详情大家可以看一下官方规范的描述。大概意思如字义。<br>
</td>
</tr>
</tbody>
</table>
<div style="margin-left:80px"><br>
</div>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">errorCallback(error)<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">error.code<br>
</td>
<td style="text-align:left">返回 4 种类型的错误, return {Number}：<br>
<ul><li>0, UNKNOWN_ERROR<br>
</li>
<li>1, PERMISSION_DENIED<br>
</li>
<li>2, POSITION_UNAVAILABLE <br>
</li>
<li>3, TIMEOUT<br>
</li></ul>
</td>
</tr>
<tr>
<td style="text-align:left">error.message<br>
</td>
<td style="text-align:left">error code 对应的错误信息。return {String}。在 Firefox 3.6 似乎运行有问题。</td>
</tr>
</tbody>
</table>
<table class="zeroBorder">
<tbody>
<tr>
<th style="text-align:left">positionOptions Object<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">enableHighAccuracy = {Boolean}<br>
</td>
<td style="text-align:left">让浏览器使用更高精确度的数据计算，{enableHighAccuracy: true}，这将会花费比一般水平精确度更多的时间，默认为 false。<br>
</td>
</tr>
<tr>
<td style="text-align:left">timeout = {milliseconds}<br>
</td>
<td style="text-align:left">请求超时的时间，单位为毫秒。默认为不限制时间。<br>
</td>
</tr>
<tr>
<td style="text-align:left">maximumAge = {milliseconds}<br>
</td>
<td style="text-align:left">浏览器对地址数据存储的时间，决定本次请求的数据是否重新获取。如果设置为 10000，那么 10 秒内有两次请求的话，第二次请求不会重新计算，而是应用第一次获取到的数据。默认为0，即所有请求都会实时计算。<br>
</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-demo">三、DEMO</h2>
&nbsp;&nbsp;&nbsp; <a href="http://sofish.de/file/html5/geolocation/" id="uylx" title="HTML5 Geolocation">HTML5 Geolocation</a><br>
&nbsp;&nbsp; &nbsp;<a href="http://www.ip2location.com/html5geolocationapi.aspx" id="sx3t" title="Using the traditional Geolocation via IP address">Using the traditional Geolocation via IP address</a><br>
<h2 id="spec-caution">四、注意事项</h2>
<ul><li>Geolocation 涉及到用户隐私。在用的时候应该慎重。在获取 Geolocation 的时候，一定要征求用户的意思。这是规范中设定的。这就是为什么很多服务都会问你要不要分享自己的位置时有一个Checkbox选项。比较 twitpic.com。在发送用户隐私的时候，可能需要做加密。在隐藏保护的架构上：</li></ul>
<div id="tw2n" style=";text-align:left">&nbsp;&nbsp;&nbsp; <img src="/images/HTML5-Geolocation.png" style="height:286px;width:558px"><br>
</div>
<div id="tw2n" style=";text-align:left">
<ol><li>Geolocation Application 是不能直接访问设备的，只能通过请求浏览器来访问设备；</li>
<li>网站页面下载 后，Geolocation Application 调用请求，浏览器截取之，将请求用户的意见；</li>
<li>浏览器内部包含通过 IP 地址、Wi-Fi、GPS 获取坐标的功能；</li>
<li>浏览器发送的地址信息，可以被 HTML5 Geolocation Application 返回。</li>
</ol>
<br>
</div>
<h2 id="spec-solution">五、兼容解决方案</h2>
&nbsp;&nbsp;&nbsp; Geolocation 目前没有比较好的前端兼容解决方案。可能 IP 地址配对的后端方法可以与之结合。不过，Geolocation 可能将来会大部分应用在手持设备上，像 android 和 iOS 的 webkit 都是已经支持的了。<br>
<br>
<h2 id="spec-ref">六、参考文献</h2>
<ul><li>BOOK:《Pro HTML5 Programming》</li>
<li><a href="http://dev.w3.org/geo/api/spec-source.html#timestamp" id="wmdp" title="HTML5 Geolocation API">HTML5 Geolocation API</a><br>
</li>
<li><a href="http://www.findmebyip.com/litmus" title="HTML5 &amp; 
CSS3 Support, Web Design Tools &amp; Support">HTML5 &amp; CSS3 Support, Web Design Tools &amp; Support</a></li></ul>
<br>

