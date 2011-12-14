### iframe 跨域自适应

- iframe 透明背景（IE6这些老掉牙的浏览器）：
    - 添加属性 `allowTransparency="true"`
	- 在 iframe 源上把 `body` 设置为 `background-color:transparent;`
- 自适应高度：支持跨域 | 动态高度


### 跨域原理:

- 同域可通讯：

 在引用页(B)上创建一个隐藏的 iframe，引用与本页(A)同域的代理页面(C)，并将B的高度作为 C.location的hash 值, C获取这个 hash 值。因为C与A同域，可以通信，因此将这个 hash 传给A来设置 iframe 的高度

 <pre>
(function () {
    var getHeight = function () {
            return Math.min(document.documentElement.scrollHeight, document.body.scrollHeight);
        };

    var preHeight = getHeight(),
        agent_iframe;

    var createIframe = function (height) {
            agent_iframe = document.createElement("iframe");
            agent_iframe.style.height = "0";
            agent_iframe.style.width = "0";
            agent_iframe.style.border = "none";
            agent_iframe.src = "C页面地址#" + height;
            document.body.appendChild(agent_iframe);
        }

    createIframe(preHeight);

    var checkHeight = function () {
            var currentHeight = getHeight();
            if (currentHeight != preHeight) {
                agent_iframe.src = "C页面地址#" + currentHeight;
                preHeight = currentHeight;
            }
            setTimeout(checkHeight, 500);
        }

    setTimeout(checkHeight, 500);
})();
 </pre>
 <pre>
// C页面脚本
(function () {
    var preHeight = parseInt(window.location.hash.substring(1), 10),
        ifrmae = window.top.document.getElementById("A页面iframe的ID");

    ifrmae.height = preHeight;
    setInterval(function () {
        var newHeight = parseInt(window.location.hash.substring(1), 10);
        if (newHeight !== preHeight) {
            ifrmae.height = newHeight;
            preHeight = newHeight;
        }
    }, 500);
})();       
 </pre>

- 同域自适应:

 <pre>
(function(){
	// 使用了arale DOM
    frame = D.get("frame_content_parent");
	function reSetIframe(){
			var frameContent = frame.contentWindow.document,
					bodyHeight = Math.max(frameContent.documentElement.scrollHeight,frameContent.body.scrollHeight);
			if (bodyHeight != D.getStyle(frame, "height")){
					D.setStyle(frame, "height", bodyHeight + "px");
			}
	}
	if(frame){
			D.setStyle(frame,"height","auto");
			setInterval(reSetIframe,300);
	}
})();
 </pre>

 动态高度原理: 用 setInterval 来持续检测


详细说明：[http://www.zhouqicf.com/javascript/iframe-auto-height]();