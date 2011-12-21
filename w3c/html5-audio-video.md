<h1>HTML5: Audio &amp; Video API</h1>
1. [浏览器支持](#spec-browser)
2. [规范 API](#spec-api)
3. [DEMO](#spec-demo)
4. [注意事项](#spec-caution)
5. [兼容解决方案](#spec-solution)
6. [参考文献](#spec-ref)

<h2 id="spec-browser">一、浏览器支持</h2>
**1. Audio Codecs**
<table class="litmus-browser-support-results zeroBorder" summary="Browser support for HTML5 Audio Codecs" height="256" width="920">
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
<tr id="mdz_audio_ogg">
<th class="row-heading" scope="row"> Audio: ogg/vorbis</th>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td> -<br>
</td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td> - </td>
<td> - </td>
<td> - </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="grade-good support-grade"> 66%</td>
</tr>
<tr id="mdz_audio_mp3">
<th class="row-heading" scope="row"> Audio: mp3 </th>
<td> -<br>
</td>
<td> -<br>
</td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td> - </td>
<td> - </td>
<td> - </td>
<td class="supported"> √ </td>
<td> - </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="grade-limited support-grade"> 35%&nbsp;</td>
</tr>
<tr id="mdz_audio_wav">
<th class="row-heading" scope="row"> Audio: wav </th>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td> - </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td> - </td>
<td> - </td>
<td> - </td>
<td class="supported"> √ </td>
<td class="grade-good support-grade"> 52%&nbsp;</td>
</tr>
<tr id="mdz_audio_m4a">
<th class="row-heading" scope="row"> Audio: AAC </th>
<td> -</td>
<td>-</td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td> - </td>
<td> - </td>
<td> - </td>
<td class="supported"> √ </td>
<td> - </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="supported"> √ </td>
<td class="grade-limited support-grade"> 35%&nbsp;</td>
</tr>
</tbody>
</table>
**2. Video Codes**
<table class="litmus-browser-support-results zeroBorder" summary="Browser support for 
HTML5 Video Codecs" height="223" width="920">
<tbody>
<tr>
<th class="primary-heading" scope="row"><span class="offScreen">Platform</span></th>
<th class="primary-heading" colspan="4" scope="colgroup">MAC</th>
<th class="primary-heading" colspan="10" scope="colgroup">WIN</th>
<th class="offScreen">% Support</th>
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
<th class="browser-id browser-ie secondary-heading" colspan="4" scope="colgroup"><a href="http://www.microsoft.com/ie/" target="_blank" title="Download the Ie web browser">IE</a></th>
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
<th class="tertiary-heading" scope="col"> 6 </th>
<th class="tertiary-heading" scope="col"> 7 </th>
<th class="tertiary-heading" scope="col"> 8 </th>
<th class="tertiary-heading" scope="col"> 9 </th>
<th class="tertiary-heading" scope="col"> 7 </th>
<th class="tertiary-heading" scope="col"> 8 </th>
<th class="offScreen">&nbsp;</th>
</tr>
</tbody>
 
<tbody>
<tr id="cre8">
<th class="row-heading" scope="row"> Video: ogg/theora </th>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-good support-grade"> 66%&nbsp;</td>
</tr>
<tr id="qf7i">
<th class="row-heading" scope="row"> Video: H.264 </th>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-limited support-grade"> 34%&nbsp;</td>
</tr>
<tr id="lhu7">
<th class="row-heading" scope="row"> Video: WebM </th>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td>-</td>
<td class="supported">√</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td class="supported">√</td>
<td class="supported">√</td>
<td class="grade-poor support-grade"> 21%&nbsp;</td>
</tr>
</tbody>
</table>

<h2 id="spec-api">二、API 参考</h2>
**（1）API SPEC:**[http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html](http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html "http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html")

* &lt;audio&gt;
* &lt;video&gt;[](http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#video "http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#video")
* &lt;source&gt;[](http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element "http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-source-element")
* &lt;track&gt;[](http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-track-element "http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#the-track-element")

**2. HTML 写法：**

    <video controls>
        <source src="video.mp4" type="video/mp4" />
        <source src="video.ogv" type="video/ogg" />
        <track kind=subtitles src=brave.en.srt srclang=en label="English">
        <track kind=captions src=brave.en.srt srclang=en label="English for the Hard of Hearing">
        <track kind=subtitles src=brave.fr.srt srclang=fr label="Français">
        <track kind=subtitles src=brave.de.srt srclang=de label="Deutsch">
        audio not supported
    </video>

    <audio controls>
        <source src="demo-audio.ogg" />
        <source src="demo-audio.mp3" />
        audio not supported
    </audio>

**3.Script:**

javascript

    var audio = document.getElementsByTagName('audio')[0];
        if( !audio.autoplay ) audio.autoplay = true;

**(1)浏览器检测：**

    try {
                var hasVideo = !!(document.createElement('video').canPlayType);
            } catch(msg) {}

           // audio 同 video。

**(2)媒体控制**
<table class="zeroBorder" height="205" width="920">
<tbody>
<tr>
<th style="text-align:left">Function<br>
</th>
<th style="text-align:left">Behavior<br>
</th>
</tr>
</tbody>
 
<tbody>
<tr>
<td style="text-align:left">load()<br>
</td>
<td style="text-align:left">下载媒体源<br>
除非是动态生成的元素，一般情况下并不需要这个来调用源。可以用其来进行预加载<br>
</td>
</tr>
<tr>
<td style="text-align:left">play()<br>
</td>
<td style="text-align:left">播放<br>
</td>
</tr>
<tr>
<td style="text-align:left">pause()<br>
</td>
<td style="text-align:left">暂停<br>
</td>
</tr>
<tr>
<td style="text-align:left">canPlayType(type)<br>
</td>
<td style="text-align:left">可以播放的类型（MIME type）<br>
检测是否支持 fooType 这样的 MIME type !!(document.createElement('video').canPlayType(‘fooType’));<br>
</td>
</tr>
</tbody>
</table>

**（3）属性**
<table class="zeroBorder" border="0" cellpadding="1" cellspacing="2" height="527" width="920">
<tbody>
<tr>
<th>属性<br>
</th>
<th>属性值</th>
<th>只读<br>
</th>
<th style="text-align:center">&lt;video /&gt;<br>
 ONLY<br>
</th>
</tr>
</tbody>
<tbody>
<tr>
<td style="text-align:left">duration <br>
</td>
<td style="text-align:left">媒体播放时间的长度。返回 Number，单位是秒; 如果播放时间不确定，则返回 NaN。<br>
</td>
<td>√</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">paused<br>
</td>
<td style="text-align:left">当媒体处于暂停状态，返回 true；当媒体未被播放，默认为 true。<br>
</td>
<td>√</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">ended<br>
</td>
<td style="text-align:left">当媒体播放结束，返回 true。<br>
</td>
<td>√</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">startTime<br>
</td>
<td style="text-align:left">通常返回 0.0。当是流式媒体，duration 不确定，媒体内容可能不在缓冲区内，返回媒体最早的开始点。<br>
</td>
<td>√</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">error<br>
</td>
<td style="text-align:left">当发生错误时，发出警告。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">currentSrc<br>
</td>
<td style="text-align:left">返回一段代表浏览器选择的媒体源文件的 String。<br>
</td>
<td>√</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">autopaly<br>
</td>
<td style="text-align:left">返回循环的状态（Boolean），或者设置自动播放。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">loop<br>
</td>
<td style="text-align:left">返回循环的状态（Boolean），或者设置循环。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">currentTime<br>
</td>
<td style="text-align:left">返回播放开始到现在的时间的秒数，或者设置一个值做为其播放点。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">controls<br>
</td>
<td style="text-align:left">显示是否有控制条（Boolean），或者设置隐藏/显示控制条。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">volume<br>
</td>
<td style="text-align:left">设置媒体的音量（0.0 ~ 1.0），或者获取音量的值。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">muted<br>
</td>
<td style="text-align:left">设置静音，或者获取当前是否静音的状态。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">autobuffer<br>
</td>
<td style="text-align:left">设置媒体是否在播放之前自动缓冲。如果媒体已经被设置自动播放，则些属性自动被忽略。<br>
</td>
<td><br>
</td>
<td><br>
</td>
</tr>
<tr>
<td style="text-align:left">poster<br>
</td>
<td style="text-align:left">返回媒体封面图片（POSTER）,或者设置其封面图片地址。<br>
</td>
<td><br>
</td>
<td>√<br>
</td>
</tr>
<tr>
<td style="text-align:left">width,height<br>
</td>
<td style="text-align:left">设置或获取媒体的视觉宽高。<br>
</td>
<td><br>
</td>
<td>√<br>
</td>
</tr>
<tr>
<td style="text-align:left">videoWidth<br>
 videoHight<br>
</td>
<td style="text-align:left">获取媒体的原始(intrinsic or natural) 宽高。<br>
</td>
<td><br>
</td>
<td>√<br>
</td>
</tr>
</tbody>
</table>

<h2 id="spec-demo">三、DEMO</h2>
* [HTML5 Video](http://sofish.de/file/html5/video/index.html "HTML5 Video")

<h2 id="spec-caution">四、注意事项</h2>
* 一般下载 video 都需要一段时间，建议给每一个 video 设置一个 Poster

<h2 id="spec-solution">六、兼容解决方案</h2>
在 video / audio 标签中包含 Flash。这是目前比较好的 Fallback 方案，如 video 我们通常这样做：

    <video width="640" height="360" src="http://www.youtube.com/demo/google_main.mp4" autobuffer controls poster="whale.png">
        <object classid="clsid:02bf25d5-8c17-4b23-bc80-d3488abddc6b" width="640"height="360" codebase="http://www.apple.com/qtactivex/qtplugin.cab">
        <param value="http://www.youtube.com/demo/google_main.mp4">
        <param value="true">
        <param value="false">
        <embed src="http://www.youtube.com/demo/google_main.mp4" width="640"height="360" autoplay="true" controller="false" pluginspage="http://www.apple.com/quicktime/download/">
        </embed>
        </object>
    </video>

<h2 id="spec-ref">五、参考文献</h2>
* BOOK:《Pro HTML5 Programming》
* [The video elemen - HTML5 Draft](http://www.whatwg.org/specs/web-apps/current-work/multipage/video.html#video)
* [The Video Element](http://html5doctor.com/the-video-element/ "The Video Element")
* [Native Audio In The Browser](http://html5doctor.com/native-audio-in-the-browser/ "Native Audio In The Browser")
* [Introduction to HTML5 video](http://dev.opera.com/articles/view/introduction-html5-video/ "Introduction to HTML5  video")
* [Everything you need to know about HTML5 video and audio](http://dev.opera.com/articles/view/everything-you-need-to-know-about-html5-video-and-audio/ "Everything you need to know  about HTML5 video and audio")
* [HTML5 & CSS3 Support, Web Design Tools & Support](http://www.findmebyip.com/litmus "HTML5 & 
CSS3 Support, Web Design Tools & Support")

