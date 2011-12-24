<h1>HTML5: DOM Storage API</h1>
1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [兼容解决方案](#spec-solution)
6. [参考文献](#spec-ref)

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
<th class="row-heading" scope="row">localStorage sessionStorage<br>
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
<td>√<br>
</td>
<td>√<br>
</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade">86%</td>
</tr>
</tbody>
</table>
<br>
<h2 id="spec-api">二、API 参考</h2>
**1. localStorage vs sessionStorage**
<table class="litmus-browser-support-results zeroBorder" summary="Browser support for HTML5 Forms Inputs" height="62" width="481">
<tbody>
<tr>
<th class="tertiary-heading" scope="col"><br>
</th>
<th class="tertiary-heading" scope="col"> sessionStrage<br>
</th>
<th class="tertiary-heading" scope="col"> localStorage<br>
</th>
</tr>
<tr>
<td style="text-align:left">生命周期<br>
</td>
<td style="text-align:left">窗口(tab)存在的周期<br>
</td>
<td class="supported" style="text-align:left">存于本地，与浏览器一周存在<br>
</td>
</tr>
<tr>
<td style="text-align:left">共享范围<br>
</td>
<td style="text-align:left">同一窗口(tab)<br>
</td>
<td style="text-align:left">同一个域上的所有窗口(tab)<br>
</td>
</tr>
<tr>
<td style="text-align:left">应用场景<br>
</td>
<td style="text-align:left">只需要短期存储<br>
</td>
<td style="text-align:left">长期、本地存储<br>
</td>
</tr>
</tbody>
</table>
**2. 存储大小对比**
<table class="zeroBorder" height="115" width="478">
<tbody>
<tr>
<th style="text-align:left">方式<br>
</th>
<th style="text-align:left">大小<br>
</th>
</tr>
<tr>
<td style="text-align:left">cookie<br>
</td>
<td style="text-align:left">4 KB<br>
</td>
</tr>
<tr>
<td style="text-align:left">flash Storage<br>
</td>
<td style="text-align:left">100 KB<br>
</td>
</tr>
<tr>
<td style="text-align:left">userData<br>
</td>
<td style="text-align:left">1 MB<br>
</td>
</tr>
<tr>
<td style="text-align:left">DOM Storage<br>
</td>
<td style="text-align:left">5 M</td>
</tr>
</tbody>
</table>
**3. Scripting API**<br>
(1) 浏览器检测

javascript
    var hasSessionStorage = !!(window.sessionStorage);
                 hasLocalStorage = !!(window.localStorage);

(2) Storage 对象公用 API
<table class="zeroBorder" height="326" width="716">
<tbody>
<tr>
<th style="text-align:left">API<br>
</th>
<th style="text-align:left">描述<br>
</th>
</tr>
<tr>
<td style="text-align:left">length<br>
</td>
<td style="text-align:left">key-value 对的长度。只读。<br>
</td>
</tr>
<tr>
<td style="text-align:left">key(index)<br>
</td>
<td style="text-align:left">key-value 对的 key 索引。index，像一般的索引一样，以 0 作为开始点。返回 key 名。<br>
</td>
</tr>
<tr>
<td style="text-align:left">getItem(key)<br>
</td>
<td style="text-align:left">在 local Storage 获取名为 key 值。<br>
</td>
</tr>
<tr>
<td style="text-align:left">setItem(key, value)<br>
</td>
<td style="text-align:left">存储数据。key-value 的形式。value 可以用是对象。可用 JSON.stringify 进行转换，在使用时用 JSON.parse 来解释。<br>
<br>
 如果存储的数据超过 Storage 的最大存储值，则会返回 QUOTA_EXCEEDED_ERR 错误。<br>
</td>
</tr>
<tr>
<td style="text-align:left">removeItem(key)<br>
</td>
<td style="text-align:left">删除某个名为 key 的 key-value 对<br>
</td>
</tr>
<tr>
<td style="text-align:left">clear()<br>
</td>
<td style="text-align:left">删除所有存储的数据<br>
</td>
</tr>
</tbody>
</table>
(3) Storage 事件

javascript
    window.onstorage = function(e) {
            alert(" key: " + e.key + "\n newValue: " + e.newValue + "\n oldValue: " + e.oldValue +"\n url: " + e.url + "\n storageArea: " + e.storageArea);
         }

注: 在目前的所有浏览器中测试，都失败 (2010.12.23)

<table class="zeroBorder" height="252" width="728">
<tbody>
<tr>
<th style="text-align:left">API<br>
</th>
<th style="text-align:left">描述<br>
</th>
<th style="text-align:center">只读<br>
</th>
</tr>
<tr>
<td style="text-align:left" valign="middle">e.key<br>
</td>
<td style="text-align:left">被更新或被删除的 key<br>
</td>
<td style="text-align:center">√<br>
</td>
</tr>
<tr>
<td style="text-align:left">e.newValue<br>
</td>
<td style="text-align:left">key-value 对的值有变化时，newValue 为最新的值<br>
</td>
<td style="text-align:center">√<br>
</td>
</tr>
<tr>
<td style="text-align:left">e.oldValue<br>
</td>
<td style="text-align:left">key-value 对的值有变化时，oldValue 为变前的值<br>
</td>
<td style="text-align:center">√<br>
</td>
</tr>
<tr>
<td style="text-align:left">e.url<br>
</td>
<td style="text-align:left">Storage 事件发生的域<br>
</td>
<td style="text-align:center">√<br>
</td>
</tr>
<tr>
<td style="text-align:left">strageArea<br>
</td>
<td style="text-align:left">创建一个引用到更新的 sessionStorage/localStorage 中<br>
</td>
<td style="text-align:center">√<br>
</td>
</tr>
</tbody>
</table>

<h2 id="spec-demo">三、DEMO</h2>
* [LocalStorage vs IE-userData](http://sofish.de/file/html5/localStorage/ "LocalStorage vs IE-userData")

<h2 id="spec-caution">四、注意事项</h2>
* localStorage 在 Firefox 中，需要服务器支持。本地调试可能出现异常；
* 注意安全问题。因为 localStorage 在没有被清除的状况下，会一直存在。

<h2 id="spec-solution">五、兼容解决方案</h2>
**1. 在 IE6-7 中使用 userData**
 使用参考：[http://msdn.microsoft.com/en-us/library/ms531424%28v=vs.85%29.aspx](http://msdn.microsoft.com/en-us/library/ms531424%28v=vs.85%29.aspx "http://msdn.microsoft.com/en-us/library/ms531424%28v=vs.85%29.aspx")<br>
 userData 相比 localStorage 更简单。它的工作就是下载 DOM attribute。我们可以 setAttribute --&gt; save() --&gt; load() --&gt; setAttribute 这样的流程来例其工作。而要这样做的前提是在要 set attribute 的 DOM Element 中添加 CSS behavior。示例如下：
* **CSS:** #selector{*behavior:url(#default#userData);}
* **Javascript**

javascript
    var hasLocalStorage, trigger = document.getElementById('newSliderPage');

        // 检测localstorage
        try {
            hasLocalStorage = ('localStorage' in window) && window['localStorage']
        } catch(msg) {
            hasLocalStorage = false;
        };        
              
        if(hasLocalStorage){
            // doSomething();
        } else if('\v' == 'v') { // if isIE
            trigger.load('')
            trigger.setAttribute('')
            trigger.save('')
        };

**2. 使用** [Flash Local Storage](http://www.macromedia.com/support/documentation/en/flashplayer/help/help02.html "http://www.macromedia.com/support/documentation/en/flashplayer/help/help02.html") **(淘宝首页手机充值使用 flash 来存储)，优点是跨浏览器，但需要 flash plugin 支持**

<h2 id="spec-ref">六、参考文献</h2>
* BOOK:《Pro HTML5 Programming》
* [HTML5 Spec: DOM storage](http://dev.w3.org/html5/webstorage/#storage-0 "HTML5 Spec: DOM storage")
* [DOM Storage](https://developer.mozilla.org/en/dom/storage "DOM Storage")
* [HTML5 & CSS3 Support, Web Design Tools & Support](http://www.findmebyip.com/litmus "HTML5 & 
CSS3 Support, Web Design Tools & Support")

