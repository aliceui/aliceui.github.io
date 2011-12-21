<h1>HTML5: Web Sockets API</h1>
<ol><li><a href="#spec-browser" target="_self">浏览器支持</a></li>
<li><a href="#spec-api" target="_self">API 参考</a></li>
<li><a href="#spec-demo" target="_self">DEMO</a></li>
<li><a href="#spec-caution" target="_self">注意事项</a></li>
<li><a href="#spec-solution" target="_self">兼容解决方案</a></li>
<li><a href="#spec-ref" target="_self">参考文献</a></li>
</ol>
<h2 id="spec-browser">一、浏览器支持</h2>
<table class="zeroBorder" height="166" width="920">
<tbody>
<tr>
<th class="primary-heading" scope="row"><span class="offScreen">Platform</span></th>
<th class="primary-heading" colspan="4" scope="colgroup">MAC</th>
<th class="primary-heading" colspan="8" scope="colgroup">WIN</th>
<th class="offScreen">% <br>
</th>
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
<th class="row-heading" scope="row">WebSockets<br>
</th>
<td class="supported">-<br>
</td>
<td class="supported">-</td>
<td class="supported">√</td>
<td class="supported">√<br>
</td>
<td class="supported">-</td>
<td class="supported">-<br>
</td>
<td class="supported">√<br>
</td>
<td class="supported">√</td>
<td>-<br>
</td>
<td>-<br>
</td>
<td class="supported">√<br>
</td>
<td class="supported">√<br>
</td>
<td class="grade-excellent support-grade"> 36%</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-api">二、API 参考</h2>
<div style=""><b>1. API SPEC</b>: <a href="http://dev.w3.org/html5/websockets/" id="ve.m" title="http://dev.w3.org/html5/websockets/">http://dev.w3.org/html5/websockets/</a><br>
<br>
<b>2. SCRIPT</b><br>
</div>
<div><br>
var socket = new <b>WebSocket</b>('ws://game.example.com:12010/updates');<br>
<br>
socket.onopen = function () {<br>
&nbsp;&nbsp; &nbsp;setInterval(function() {<br>
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;if (socket.<b>bufferedAmount</b> == 0)<br>
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;socket.<b>send</b>(getUpdateData());<br>
&nbsp;&nbsp; &nbsp;}, 50);<br>
};<br>
<br>
<b>(1) 浏览器检测:</b><br>
 &nbsp;&nbsp;&nbsp; <br>
 &nbsp;&nbsp;&nbsp; var hasWebSockets = !!(window.WebSocket);<br>
<br>
<b>(2) Scripting API:</b><br>
<br>
<table id="m:6l" style="" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="311" width="920">
<tbody>
<tr>
<th style="text-align:left">API<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">WebSocket(url, protocols)<br>
</td>
<td style="text-align:left">1. url: 要连接的地址<br>
2. protocols: {String} 或者 {Array}。当是 {String} 的时候相当于数组中的值 ['ws']；当是 {String} 的时候，表示一个协议集<br>
</td>
</tr>
<tr>
<td style="text-align:left">readyState<br>
</td>
<td style="text-align:left">WebSocket 属性。表示 WebSocket 的状态<br>
</td>
</tr>
<tr>
<td style="text-align:left">bufferAmount<br>
</td>
<td style="text-align:left">WebSocket 属性。返回 send() 排队队列中以 utf-8 编码文本的字节数<br>
</td>
</tr>
<tr>
<td style="text-align:left">send()<br>
</td>
<td style="text-align:left">WebSocket 方法。使用 WebSocket 传输数据<br>
</td>
</tr>
<tr>
<td style="text-align:left">close()<br>
</td>
<td style="text-align:left">WebSocket 方法。有下面几种情况：<br>
<ol><li>当 readyState 属性的状态是 CLOSING 或者 CLOSED，不做任何事</li>
<li>当 WebSocket 还没有建立链接。断掉链接，并把 readState 的状态设置为 CLOSING</li>
<li>当 WebSocket 还未进行关闭握手，开始关闭握手，并把 readState 的状态设置为 CLOSING</li>
<li>其他状态，把 readState 的状态设置为 CLOSING<br>
</li>
</ol>
</td>
</tr>
</tbody>
</table>
<br>
<table id="rnih" style="" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="181" width="678">
<tbody>
<tr>
<th>WebSocket 事件<br>
</th>
<th>描述<br>
</th>
</tr>
<tr>
<td style="text-align:left">onopen<br>
</td>
<td style="text-align:left">当 readyState 状态为 OPEN 时触发<br>
</td>
</tr>
<tr>
<td style="text-align:left">onmessage<br>
</td>
<td style="text-align:left">当 WebSocket 链接收到文本数据，客户端会创建一个 MessageEvent。触发些事件<br>
</td>
</tr>
<tr>
<td style="text-align:left">onerror<br>
</td>
<td style="text-align:left">当 WebSocket 出现异常时触发<br>
</td>
</tr>
<tr>
<td style="text-align:left">onclose<br>
</td>
<td style="text-align:left">当 WebSocket 已经关闭，客户端会通过 CloseEvent 创建一个 close 事件<br>
</td>
</tr>
</tbody>
</table>
<br>
<table id="m:6l" style="" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="175" width="530">
<tbody>
<tr>
<th>readyState 状态码<br>
</th>
<th>message<br>
</th>
<th>描述<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">0<br>
</td>
<td style="text-align:left">CONNECTING<br>
</td>
<td style="text-align:left">链接仍没有建立，连接中<br>
</td>
</tr>
<tr>
<td style="text-align:left">1<br>
</td>
<td style="text-align:left">OPEN<br>
</td>
<td style="text-align:left">建立 WebSocket 链接，可以进行交互<br>
</td>
</tr>
<tr>
<td style="text-align:left">2<br>
</td>
<td style="text-align:left">CLOSING<br>
</td>
<td style="text-align:left">正在进行关闭握手<br>
</td>
</tr>
<tr>
<td style="text-align:left">3<br>
</td>
<td style="text-align:left">CLOSED<br>
</td>
<td style="text-align:left">链接已经关闭，或者打不开<br>
</td>
</tr>
</tbody>
</table>
</div>
<br>
<h2 id="spec-demo">三、DEMO</h2>
 &nbsp;&nbsp;&nbsp; Kaazing 的 demo: <a href="http://kaazing.me/" id="bo1r" title="http://kaazing.me/">http://kaazing.me/</a><br>
<h2 id="spec-caution">四、注意事项</h2>
<ul><li>WebSocket 仍存在<a href="http://www.ietf.org/mail-archive/web/hybi/current/msg04744.html" id="vqi2" title="一些问题">一些问题</a>，Firefox 4 默认并没有打开。如要打开，需要在 about:config 中把下面两项设置为true：</li>
<ul><li>network.websocket.enabled</li>
<li>network.websocket.override-security-block</li></ul>
<li>使用它，更多的是关注后端的应该，前端方面只是简单的事件处理<br>
</li></ul>
<br>
<h2 id="spec-solution">五、兼容解决方案</h2>
<ul><li><a href="http://kaazing.com/" id="l..o" title="Kaazing WebSocket Gateway">Kaazing WebSocket Gateway</a> - 一个 Java 的解决方案，不依赖 Native WebSockets，兼容所有浏览器。支付宝刚好可以用上，但用上的可能性还是比较小的。因为跟一般的 XHR 不同，so... 大公司不好折腾。</li>
<li style="text-align:right"><a href="http://jwebsocket.org/" id="x1lm" title="jWebSocket">jWebSocket</a> - 一个纯 Java/Javascript 的解决方案。包括 Server/clients/flash 等支持。</li>
<li><a href="http://net.tutsplus.com/tutorials/javascript-ajax/start-using-html5-websockets-today/" id="isc6" title="Start Using HTML5 WebSockets Today">Start Using HTML5 WebSockets Today</a> - PHP solution。<br>
</li></ul>
<h2 id="spec-ref">六、参考文献</h2>
<ul><li>BOOK:《Pro HTML5 Programming》</li>
<li><a href="http://dev.w3.org/html5/websockets/" id="mh3w" title="HTML5 SPEC: WebSockets">HTML5 SPEC: WebSockets</a><br>
</li>
<li><a href="https://developer.mozilla.org/en/WebSockets" id="l80l" title="MDC: WebSockets">MDC: WebSockets</a><br>
</li>
<li><a href="http://www.findmebyip.com/litmus" title="HTML5 &amp; CSS3 Support, Web Design Tools &amp; Support">HTML5 &amp; CSS3 Support, Web Design Tools &amp; Support</a></li></ul>
<br>
<br>

