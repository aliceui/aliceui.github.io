<!doctype html>
<html>
<head>
<meta charset="gb2312">
<title>跨浏览器剪贴功能- 兼容解决方案</title>
	<link rel="stylesheet" href="../../../media/style.css" charset="utf-8" />
	<link rel="stylesheet" charset="utf-8" href="../../base.min.css" />
	<link rel="stylesheet" charset="utf-8" href="../../../static/style.css" /> <!-- for pages -->
	<link rel="stylesheet" charset="utf-8" href="../../../static/hl-default.css" /> <!-- syntax highlight -->
	<!-- CSS 文件 -->
</head>

<body>
<?php
$page = "doc";
include('../../head.php');
?>
<div id="wrapper" class="single">
	<div id="sub-nav">
		<h2>兼容解决方案 &raquo; 跨浏览器剪贴功能</h2>
		
		
		<a class="action-back" href="#">Back</a>
	</div><!-- #nav -->
	
	<div id="container">
	
		<div class="howto">
		<h4>跨浏览器剪贴功能:</h4>
		<ol>
			<li>IE本身有提供了原生的支持: <code>clipboardData</code> 和 <code>setData</code>。Firefox 等都没有，因此利用 flash 来做跨浏览器支持。
			</li>
			<li>使用：ZeroClipboard （目前最好的解决方式）
<pre>
// 设置 flash 地址, 创建实例
ZeroClipboard.setMoviePath('SWF文件的地址');
var clip = new ZeroClipboard.Client();

// 详情: http://www.deluxeblogtips.com/2010/06/javascript-copy-to-clipboard.html
clip.setText(''); 

// js中提供了事件处理器, 等arale可用后再替换
clip.addEventListener('mouseDown', function(){
	var pre = document.getElementById('pre');
	clip.setText(pre.innerHTML);
});

// copy是复制按钮的ID
clip.glue('copy');
</pre>
			</li>
		</ol>
	</div><!-- .howto -->			
		
	<div class="helper">
		<div class="source">
		<!-- START 源代码 -->
		详见本演示站点的复制功能，如实现多个复制，需要创建多个实例，自己写了个简单的，你也可以自己写：内容是隐藏的，用查看源码看。
			
		<script type="text/javascript">
			var copyTriggle = function (buttonID, identity, cnt) {
				
				
		        ZeroClipboard.setMoviePath('flash文件位置');
		        identity = new ZeroClipboard.Client();
		        identity.setHandCursor(true);
		        identity.setText('');
		        
		        identity.addEventListener('mouseDown', function () {
		            identity.setText(cnt);
		            var t = document.getElementById(buttonID);
		            t.innerHTML = '复制成功';
		            t.style.color = '#888';
	        	});
	
	        identity.glue(buttonID);
	
	    	};
	    	
	    	// 使用: copyTriggle(buttonID, identity, cnt)
	    	// copyTriggle(复制按钮id, 自定义实例名(一定要不同名), 想要复制的内容)
	    </script>
		
		
		<!-- END 源代码 -->
		</div><!-- .source -->
	</div><!-- .helper -->
		
	</div><!-- #container -->
	
</div><!-- #wrap -->
<?php include('../../foot.php') ?>

<script type="text/javascript" src="../../../static/jquery.js" charset="utf-8"></script>
<script type="text/javascript" src="../../../static/hl-core.js" charset="utf-8"></script><!-- syntax highlight -->
<script type="text/javascript" src="../../../static/hl-xml.js" charset="utf-8"></script><!-- syntax highlight -->
<script type="text/javascript" src="../../../static/clipboard.js" charset="utf-8"></script><!-- for source copy -->
<script type="text/javascript" src="../../../static/alice.js" charset="utf-8"></script>
</body>
</html>
