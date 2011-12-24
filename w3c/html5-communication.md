<h1>HTML5: Communication API</h1>
1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [兼容解决方案](#spec-solution)
6. [参考文献](#spec-ref)

<h2 id="spec-browser">一、浏览器支持</h2>
<table class="zeroBorder" height="178" width="920">
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
<th class="row-heading" scope="row"><a class="pseudo" href="http://www.findmebyip.com/litmus#mdz_geolocation"></a>Post Message<br>
</th>
<td class="supported">√<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√<br>
</td>
<td class="supported">√</td>
<td class="supported">√<br>
</td>
<td class="supported">√<br>
</td>
<td class="supported">√</td>
<td>√<br>
</td>
<td>√<br>
</td>
<td class="supported">√<br>
</td>
<td class="supported">√<br>
</td>
<td class="grade-excellent support-grade"> 94%</td>
</tr>
<tr>
<th>HTML5 XHR Level 2<br>
</th>
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
<td>√<br>
</td>
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
<td>64%<br>
</td>
</tr>
</tbody>
</table>
<h2 id="spec-api">二、API 参考</h2>
**（1）API SPEC:**

* Post Message:[http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html](http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html "http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html")
* XMLHttpRequest Level 2:[http://www.w3.org/TR/2010/WD-XMLHttpRequest2-20100907/](http://www.w3.org/TR/2010/WD-XMLHttpRequest2-20100907/ "http://www.w3.org/TR/2010/WD-XMLHttpRequest2-20100907/")

**2. SCRIPT**

1.  **浏览器检测:**<br>
Post Message

javascript
    var hasXHR_2 = typeof window.postMessage !== undefined;

XMLHttpRequest

javascript
    var hasXHR_2 = typeof (new XMLHttpRequest()).withCredentials !== undefined;


2. **Scripting API:**<br>
Post Message:

>发送方:

javascript
     var win = document.getElementById('iframe').contentWindow;
        win.postMessage('hi, sofish', 'http://sofish.de');

>接收方:

javascript
    window.addEventListener('message',function(evt){
        if(evt.orgin === 'http://source/domain/') {
            element.textContent = evt.data;
        }
    }, true)


<div>
<table id="j4ex" style="" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="132" width="622">
<tbody>
<tr>
<th>postMessage(message, targetOrigin, [, ports]);<br>
</th>
<th>描述<br>
</th>
</tr>
<tr>
<td style="text-align:left">message<br>
</td>
<td style="text-align:left">要发送的数据<br>
</td>
</tr>
<tr>
<td style="text-align:left">targetOrigin<br>
</td>
<td style="text-align:left">{String}，目标域<br>
</td>
</tr>
<tr>
<td style="text-align:left">ports<br>
</td>
<td style="text-align:left">端口数组，可选<br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<table id="gqid" style="" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="132" width="623">
<tbody>
<tr>
<th>message 事件<br>
</th>
<th>描述<br>
</th>
<th>只读<br>
</th>
</tr>
</tbody>
<tbody>
<tr>
<td align="left">evt.data<br>
</td>
<td style="text-align:left" align="left">返回接收到的数据<br>
</td>
<td style="text-align:left" align="left">√<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">evt.origin<br>
</td>
<td style="text-align:left" align="left">返回 <a href="http://dev.w3.org/html5/eventsource/" id="xywc" title="server-sent event">server-sent event</a> 和 cross-document messageing 中发送数据的域<br>
</td>
<td style="text-align:left" align="left">√<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">evt.source<br>
</td>
<td style="text-align:left" align="left">数据源的 window object<br>
</td>
<td style="text-align:left" align="left">√<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">evt.ports<br>
</td>
<td style="text-align:left" align="left">返回数据源的端口数组对象<br>
</td>
<td style="text-align:left" align="left">√<br>
</td>
</tr>
</tbody>
</table>

XMLHttpRequest

<table id="v_as" style="" border="1" bordercolor="#000000" cellpadding="3" cellspacing="0" height="352" width="621">
<tbody>
<tr>
<th>New XMLHttpRequest Level 2 <a href="http://www.w3.org/TR/2010/WD-XMLHttpRequest2-20100907/#event-xhr-loadstart" id="m6ve" title="progress event">progress event</a> names<br>
</th>
<th>描述<br>
</th>
</tr>
<tr>
<td align="left">loadstart<br>
</td>
<td style="text-align:left" align="left">请求开始<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">progress<br>
</td>
<td style="text-align:left" align="left">正在下载或发送<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">abort<br>
</td>
<td style="text-align:left" align="left">请求停止。使用 abort() 停止请求<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">error<br>
</td>
<td style="text-align:left" align="left">请求失败<br>
注：我们可以用它来替换 onreadystatechange 来检测错误状态<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">load<br>
</td>
<td style="text-align:left" align="left">请求成功<br>
注：我们可以用它来替换 onreadystatechange 来检测成功状态<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">timeout<br>
</td>
<td style="text-align:left" align="left">超时<br>
</td>
</tr>
<tr>
<td style="text-align:left" align="left">loadend<br>
</td>
<td style="text-align:left" align="left">请求已经完结，无论状态是成功还是失败<br>
</td>
</tr>
</tbody>
</table>
<br>
</div>

<h2 id="spec-demo">三、DEMO</h2>
**(1) Post Message**<br>
 注：新建一个 HTML 文件，本地运行吧


    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Sample</title>
    </head>
    <body>

        <iframe id="iframe" src="http://sofish.de/file/html5/communication/postmessage.html" height="200" width="500"></iframe>

        <form id="form" action="">
            <input id="message" type="text" />
            <input type="submit" value="send it" />
        </form>

        <script type="text/javascript">

            var win = document.getElementById('iframe').contentWindow;
            document.getElementById('form').onsubmit = function(e){
                win.postMessage(document.getElementById('message').value, 'http://sofish.de');
                e.preventDefault();
            }

        </script>

    </body>
    </html>


**(2) XMLHttpRequest Level 2：**[DEMO](http://arunranga.com/examples/access-control/ "DEMO")

<h2 id="spec-caution">四、注意事项</h2>
* 即使 PostMessage 的数据是来源于可信站点，也要隐患，因为这些数据可能是这篡改的，一些最佳实践：
* 不要轻易执行第三数提供的字符串。在自己的程序中，应避免使用 eval 来处理某些字符串，相反，可以使用 JSON, JSON parser 会把它变得安全；
* 不要直接把接收的数据作为页面结构直接使用 element.innerHTML = e.data, 我们可以先让接收的数据变成文本 element.textContent = e.data。
* 关于 XMLHttpRequest 的内容很多，更多的可以看看以下扩展阅读：
* [MDC: XMLHttpRequest](https://developer.mozilla.org/en/XMLHttpRequest "MDC: XMLHttpRequest")
* [cross-site xmlhttprequest with CORS](http://hacks.mozilla.org/2009/07/cross-site-xmlhttprequest-with-cors/ "cross-site xmlhttprequest with CORS")
* [Http Access Control](https://developer.mozilla.org/En/HTTP_Access_Control "Http Access Control")

<h2 id="spec-solution">五、兼容解决方案</h2>
* [Alice Solution: 跨域](http://arale.alipay.net/alice/solution/killIframe/killIframe.php "Alice Solution: 跨域")
* [IE8 XDomainRequest object](http://msdn.microsoft.com/en-us/library/cc288060%28VS.85%29.aspx "IE8 XDomainRequest object")

<h2 id="spec-ref">六、参考文献</h2>
* BOOK:《Pro HTML5 Programming》
* [HTML5: Communication](http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#dom-messageevent-lasteventid "HTML5: Communication")
* [Cross-Window Messaging](http://ejohn.org/blog/cross-window-messaging/ "Cross-Window Messaging")
* [MDC: window.postMessage](https://developer.mozilla.org/en/DOM/window.postMessage "MDC: window.postMessage")
* [XMLHttpRequest Level 2](http://www.w3.org/TR/2010/WD-XMLHttpRequest2-20100907/ "XMLHttpRequest Level 2")
* [Cross-domain Ajax with Cross-Origin Resource Sharing](http://www.nczonline.net/blog/2010/05/25/cross-domain-ajax-with-cross-origin-resource-sharing/ "Cross-domain Ajax with Cross-Origin Resource Sharing")
* [MDC: XMLHttpRequest](https://developer.mozilla.org/en/XMLHttpRequest "MDC: XMLHttpRequest")
* [HTML5 & CSS3 Support, Web Design Tools & Support](http://www.findmebyip.com/litmus "HTML5 & 
CSS3 Support, Web Design Tools & Support")

