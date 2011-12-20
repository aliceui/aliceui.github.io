<h1>HTML5: Web Workers API</h1>
<ol><li><a href="#spec-browser" target="_self">浏览器支持</a></li>
<li><a href="#spec-api" target="_self">API 参考</a></li>
<li><a href="#spec-demo" target="_self">DEMO</a></li>
<li><a href="#spec-caution" target="_self">注意事项</a></li>
<li><a href="#spec-solution" target="_self">兼容解决方案</a></li>
<li><a href="#spec-ref" target="_self">参考文献</a></li>
</ol>
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
<th class="row-heading" scope="row">Worker</th>
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
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 78%</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-api">二、API 参考</h2>
<div><b>1. API SPEC:</b> <a href="http://www.whatwg.org/specs/web-workers/current-work/" id="q622" title="http://www.whatwg.org/specs/web-workers/current-work/">http://www.whatwg.org/specs/web-workers/current-work/</a><br>
<br>
<b>2. 浏览器检测:</b><br>
<br>
&nbsp;&nbsp; var hasWorker = typeof(Worker) !== 'undefined';<br>
<br>
<b>3. Scripting API:</b><br>
<br>
&nbsp;&nbsp; &nbsp; var worker = new Worker('worker.js')<br>
<br>
</div>
<table class="zeroBorder"  height="317" width="712">
<tbody>
<tr>
<th style="text-align:left">API<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
<tr>
<td style="text-align:left">new Worker(scriptURL)<br>
</td>
<td style="text-align:left">scriptURL, 可以是绝对路径，也可以是相对路径。当是相对路径时，它相对于页面路径而言。包括 host/path/port。<br>
<br>
<font color="#999999">如: new Worker('http://sofish.de/worker.js')</font><br style="color:#999999">
<font color="#999999">new Worker('worker.js')</font><br>
</td>
</tr>
<tr>
<td style="text-align:left">worker.postMessage(data, url)<br>
</td>
<td style="text-align:left">同 Communication API 中的 postMessage API。同时支持 message 事件。<br>
</td>
</tr>
<tr>
<td style="text-align:left">worker.terminate()<br>
</td>
<td style="text-align:left">中止 Worker<br>
</td>
</tr>
<tr>
<td style="text-align:left">importScripts(scriptURL [, scriptURL])<br>
</td>
<td style="text-align:left">导入 scirpt 文件。Web Workers 不能访问文档，HTML5 提供了一个全局的函数来导入 script 文件。多个文件可以使用分号隔开。<br>
<br>
<font color="#999999">注：Script 文件可能按不同的顺序下载。但执行会按照导入的顺序执行。</font><br>
</td>
</tr>
<tr>
<td style="text-align:left">navigator<br>
</td>
<td style="text-align:left">返回 navigator 对象<br>
</td>
</tr>
<tr>
<td style="text-align:left">location<br>
</td>
<td style="text-align:left">返回当前页面的 location 对象<br>
</td>
</tr>
<tr>
<td style="text-align:left">self<br>
</td>
<td style="text-align:left">指向全局 Worker 对象<br>
</td>
</tr>
</tbody>
</table>
<br>
&nbsp;&nbsp;&nbsp; <br>
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; window.onerror = function(e) {<br>
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; console.log(e.message);<br>
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; } &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <br>
<br>
<table class="zeroBorder"  height="108" width="728">
<tbody>
<tr>
<th style="text-align:left">onerror 事件<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
<tr>
<td style="text-align:left">e.message<br>
</td>
<td style="text-align:left">错误信息<br>
</td>
</tr>
<tr>
<td style="text-align:left">e.filename<br>
</td>
<td style="text-align:left">出错的 script 文件名<br>
</td>
</tr>
<tr>
<td style="text-align:left">e.lineno<br>
</td>
<td style="text-align:left">出错文件的行数<br>
</td>
</tr>
</tbody>
</table>
<div style=""><br>
</div>
<h2 id="spec-demo" >三、DEMO</h2>
&nbsp;&nbsp;&nbsp; <a href="http://sofish.de/file/html5/worker/" id="e8m4" title="Web Workers Demo">Web Workers Demo</a><br>
<h2 id="spec-caution" >四、注意事项</h2>
&nbsp;&nbsp;&nbsp; null<br>
<h2 id="spec-solution" >五、兼容解决方案</h2>
&nbsp;&nbsp;&nbsp; JS 本身就是单线程的。只能做相应的模仿。<br>
<h2 id="spec-ref" >六、参考文献</h2>
<ul><li>BOOK:《Pro HTML5 Programming》</li>
<li><a class="internal" href="https://developer.mozilla.org/En/DOM/Worker" rel="internal">Worker</a><br>
</li>
<li><a href="https://developer.mozilla.org/En/Using_web_workers" id="vaie" title="Using web workers">Using web workers</a></li>
<li><a href="http://dev.opera.com/articles/view/web-workers-rise-up/" id="f4tw" title="Web Workers rise up!">Web Workers rise up!</a></li>
<li><a href="http://answers.oreilly.com/topic/1358-introducing-the-web-workers-api/">Introducing the Web Workers API</a><br>
</li>
<a href="http://dev.opera.com/articles/view/web-workers-rise-up/" id="nncz" title="Web Workers rise up!"></a><li><a href="http://www.findmebyip.com/litmus" title="HTML5 &amp; CSS3 Support, Web Design Tools &amp; Support">HTML5 &amp; CSS3 Support, Web Design Tools &amp; Support</a></li></ul>
