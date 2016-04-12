/**
 * Zen Coding addCSSSetting
 * @author vickey chen (www@xiaogezi.cn)
 * @link http://xiaogezi.cn
 */
/* CSS snippets */
zen_coding.addCSSSetting('sl-file','/*\n\
	@ 名称: 自定义\ input[type=file]\n\
	@ 用法: 添加 class .sl-file\n\
	@ 例子：\n\
		 <span class="sl-file">\n\
			<input type="button" value="点击选择图片" />\n\
			<input type="file" class="sl\-file\-input" />\n\
		</span>\n\
*/\n\
\n\
/*\ 基础样式\ */\n\
.sl-file{\n\
	position:relative;\n\
	display:inline-block;\n\
	zoom:1;\n\
	cursor:pointer;\n\
	overflow:hidden;\n\
	vertical-align:middle;\n\
}\n\
\n\
/* 影响\ .ui-input-file\ 的样式\ */\n\
.sl-file .sl-file-input{\n\
	position:absolute;\n\
	right:0;\n\
	top:0;\n\
	_font-size:100px; /*\ overwrite\ */\n\
	_font-size:12px;\n\
	_zoom:10; /*\ overwrite\ */\n\
	height:100%;\n\
	_height:auto;\n\
	opacity:0;\n\
	filter:alpha(opacity=0);\n\
	-ms-filter:"alpha(opacity=0)";\n\
	cursor:pointer;\n\
}\n');

zen_coding.addCSSSetting('sl-floatcenter','/*\n\
	@名称: float center\n\
	@用法：\n\
\n\
	 1. 外框加上\ .sl-floatcenter,\ 子元素加上\ .sl-floatcenter-item，元素就可以自动根据父元素的宽度水平居中\n\
\n\
\n\
	 2. 结构\(例\:3栏\)：别忘记给每个栏加宽度\n\
		<ul class="sl-floatcenter clearfix">\n\
			<li class="sl-floatcenter-item">item1</li>\n\
			<li class="sl-floatcenter-item">item2</li>\n\
			<li class="sl-floatcenter-item">item3</li>\n\
		</ul>\n\
\n\
*/\n\
\n\
.sl-floatcenter{\n\
	display:block;text-align:center;\n\
\n\
	/*\ 解决间隙问题\ */\n\
	font-size:0;\n\
}\n\
.sl-floatcenter-item{\n\
	display:inline-block;*display:inline;*zoom:1;\n\
\n\
	/*\ 解决不能水平对齐问题\ */\n\
	vertical-align:top;\n\
\n\
	/*\ 解决间隙问题后遗症解决\ */\n\
	font-size:13px;\n\
}\n\
\n\
/* 让\ chrome\ 支持\ 12px\ 以下的字体\ */\n\
@media\ screen\ and\ (-webkit-min-device-pixel-ratio:0){\n\
	.sl-floatcenter{-webkit-text-size-adjust:none;font-size:1px;}\n\
}\n');
	
zen_coding.addCSSSetting('sl-ime-disabled', '/*\n\
	@ 名称: 禁用中文输入法\n\
	@ 用法:\n\
		在需要禁用的地方添加: .sl-ime-disabled;\n\
*/\n\
\n\
.sl-ime-disabled{\n\
	ime-mode:disabled!important;\n\
\n\
}\n');

zen_coding.addCSSSetting('sl-outline', '/*\n\
	@ 名称: 去除虚线框\n\
	@ 描述: 去除作为焦点的按钮的虚线框\n\
	@ 用法: 把css引入\n\
	@ 例子: IE 需要在标签中添加\ hidefocus\ 属性，值可以为空\，如\:\n\
\n\
		<input href="#"\ hidefocus value="alipay WD"\ type="button" />\n\
\n\
		<a\ />\ 标签同理。\n\
*/\n\
\n\
/* hack for Firefox */\n\
input[type=submit]::-moz-focus-inner,input[type=button]::-moz-focus-inner{\n\
	border : 0px;\n\
}\n\
\n\
/*\ 不要随便去掉虚线框\ */\n\
input[type=submit]:focus,\ input[type=button]:focus{\n\
	outline:\ none;\n\
}\n');

zen_coding.addCSSSetting('sl-rc', '/*\n\
  @ 名称: 1像素圆角\n\
  @ 描述: 需要自己设置宽度，或者高度，否则会随内容自适应\n\
  @ 用法:\n\
	最外层：.sl-rc\n\
	内容层：.sl-rc-cnt\n\
	鼠标经过：.sl-rc-hover\n\
*/\n\
\n\
/* base */\n\
.sl-rc{\n\
  display:inline-block;vertical-align: middle;\n\
  border-left:1px solid #ddd;border-right:1px solid #ddd;  /*\ 可重设\ */\n\
}\n\
\n\
/*\n\
  不要直接给\ BOTTON\ |\ INPUT[type=submit[button]]\ 添加边框\n\
  这会引发\ IE\ 的\ 1px\ 的黑边\ bug\n\
  Note:\ 一般不要把\ input\ 作为\ .sl-rc-cnt\ 层\n\
 */\n\
.sl-rc-cnt{\n\
  float:left;position:\ relative;\n\
  border-top:\ 1px solid #ddd;border-bottom:1px solid #ddd; /*\ 可重设\ */\n\
  margin:-1px\ 0;\n\
}\n\
\n\
/* HACK for ie6 7 */\n\
div.sl-rc, p.sl-rc, h2.sl-rc, h3.sl-rc, h4.sl-rc, h5.sl-rc, h6.sl-rc, ul.sl-rc, ol.sl-rc{\n\
  *display: inline;\n\
}\n\
\n\
/*\ 鼠标经过\ */\n\
.sl-rc-hover, .sl-rc-hover .sl-rc-cnt, .sl-rc:hover, .sl-rc:hover .sl-rc-cnt{\n\
  border-color: #aaa; /*\ 可重设\ */\n\
  text-decoration: none;\n\
}\n');

zen_coding.addCSSSetting('sl-rotate', '/*\n\
	@ 名称: 翻转90度\n\
	@ 用法: 添加\ .sl-rotate,\ 默认为顺时针旋转90度，\ 逆时针翻转需添加\ .sl-rotate-90ccw\n\
	@ 用法:\n\
\n\
		默认: <span class="sl-rotate sl-rotate-90">顺时针转\<\/span>\n\
			<span class="sl-rotate sl-rotate-90cw">顺时针转\<\/span>\n\
			<span class="sl-rotate sl-rotate-90ccw">逆时针转\<\/span>\n\
\n\
*/\n\
\n\
.sl-rotate{\n\
	zoom:1;\n\
}\n\
\n\
/* for inline elements */\n\
span.sl-rotate, em.sl-rotate, cite.sl-rotate, strong.sl-rotate, abbr.sl-rotate, li.sl-rotate{\n\
	display:inline-block;\n\
}\n\
\n\
/*\ 逆时针\ */\n\
.sl-rotate-90ccw{\n\
	-webkit-transform: rotate(-90deg);\n\
	-moz-transform: rotate(-90deg);\n\
	-o-transform: rotae(-90deg);\n\
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n\
	-ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n\
	transform: rotate(-90deg);\n\
}\n\
\n\
/*\ 顺时针\ */\n\
.sl-rotate-90cw, .sl-rotate-90{\n\
	-webkit-transform: rotate(90deg);\n\
	-moz-transform: rotate(90deg);\n\
	-o-transform: rotate(90deg);\n\
	filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n\
	-ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n\
	transform: rotate(90deg);\n\
}\n');

zen_coding.addCSSSetting('sl-selectmask', '/*\n\
	@ 名称: 解决\ <select />\ z-index\ 太高问题\n\
	@ 描述: 浮层被\ select\ 穿透，是最常见的\ z-index bug\n\
	@ 例子：\n\
		 <div id="dd3" class="sl-selectmask" style="background:#FF3366;">\n\
			内容<br/>\n\
		<!--[if lte IE 6.5]><iframe src="javascript:\'\';"></iframe><![endif]-->\n\
		</div>\n\
*/\n\
\n\
.sl-selectmask {\n\
	position: absolute;\n\
	left:0;\n\
	top:0;\n\
	z-index: 10;\n\
	overflow: hidden;\n\
	width: 33em;\n\
}\n\
.sl-selectmask iframe {\n\
	position: absolute;\n\
	top: 0;\n\
	left: 0;\n\
	z-index: -1;\n\
	border:none;\n\
	filter: mask();\n\
	width: 3000px; /* for any big value */\n\
	height: 3000px /* for any big value */\n\
}\n');

zen_coding.addCSSSetting('sl-shadow','/*\n\
	@ 名称: 投影\ | drop shadow\n\
	@ 用法: 添加\ .sl-shadow\n\
	@ 实例:\n\
\n\
	  <div class="sl-shadow">\n\
		<!-- your context to go -->\n\
	  </div><!-- .sl-shadow -->\n\
\n\
*/\n\
\n\
.sl-shadow{\n\
\n\
	/*\ modern web browsers */\n\
	-moz-box-shadow:1px 3px 12px #bbb;\n\
	-webkit-box-shadow:1px 3px 12px #bbb;\n\
	box-shadow:1px 3px 12px #bbb;\n\
\n\
	/*\ 一定要设置background，不然\ IE\ 会显示在字体上\ */\n\
	background: #fff;\n\
\n\
	/*\ gte=ie8\ */\n\
	-ms-filter:"progid:DXImageTransform.Microsoft.Glow(color=#aaaaaa,strength=3) progid:DXImageTransform.Microsoft.Shadow(color=#EEEEEE,direction=0,strength=6) progid:DXImageTransform.Microsoft.Shadow(color=#DDDDDD,direction=90,strength=10) progid:DXImageTransform.Microsoft.Shadow(color=#DDDDDD,direction=180,strength=6) progid:DXImageTransform.Microsoft.Shadow(color=#EEEEEE,direction=270,strength=6)";\n\
\n\
	/*\ lte=ie7\ */\n\
	*filter:\n\
	progid:DXImageTransform.Microsoft.Shadow(color=#EEEEEE,direction=0,strength=7)\n\
	progid:DXImageTransform.Microsoft.Shadow(color=#DDDDDD,direction=90,strength=10)\n\
	progid:DXImageTransform.Microsoft.Shadow(color=#DDDDDD,direction=180,strength=10)\n\
	progid:DXImageTransform.Microsoft.Shadow(color=#EEEEEE,direction=270,strength=7);\n\
}\n');


zen_coding.addCSSSetting('sl-wrap', '/*\n\
	@ 名称: 强制换行\n\
	@ 用法:\n\
			* 一般块级元素用：\.sl-wrap\n\
			* table标签中需添加：\.sl-wrap-table\n\
	@ 例子:\n\
			<p class="sl-wrap">\…\<\/p>\n\
\n\
			<table class="sl-wrap sl-wrap-table"></table>\n\
*/\n\
\n\
/* 一般\ block-level\ 元素\ */\n\
.sl-wrap,\ .sl-wrap td, .sl-wrap th{\n\
	word-wrap:break-word;word-break:break-all;\n\
}\n\
\n\
/*\ table\ */\n\
.sl-wrap-table{\n\
	table-layout:fixed;\n\
}\n');

/* HTML snippets */
zen_coding.addHTMLSetting('sl-file', '<span class="sl-file">\n\
	<input type="button" value="|点击选择图片" />\n\
	<input type="file" class="sl-file-input" />\n\
</span>\n');
zen_coding.addHTMLSetting('sl-floatcenter', '<ul class="sl-floatcenter clearfix">\n\
	<li class="sl-floatcenter-item">|1:item1</li>\n\
	<li class="sl-floatcenter-item">2:item2</li>\n\
	<li class="sl-floatcenter-item">3:item3</li>\n\
</ul>\n');
zen_coding.addHTMLSetting('sl-outline-input', '<input type="button" hidefocus value="|提交" />');
zen_coding.addHTMLSetting('sl-outline-button', '<button hidefocus type="button">|提交</button>');
zen_coding.addHTMLSetting('sl-outline-a', '<a href="#" hidefocus>|</a>');
zen_coding.addHTMLSetting('sl-rc', '<div class="sl-rc">\n\
	<div class="sl-rc-cnt">\n\
		${1:content here}\n\
	</div>\n\
</div>\n');
zen_coding.addHTMLSetting('sl-rotate','<span class="sl-rotate sl-rotate-90">|顺时针转一下\<\/span>');
zen_coding.addHTMLSetting('sl-rotate-90cw','<span class="sl-rotate sl-rotate-90cw">|顺时针转一下\<\/span>');
zen_coding.addHTMLSetting('sl-rotate-90ccw','<span class="sl-rotate sl-rotate-90ccw">|逆时针转一下\<\/span>');
zen_coding.addHTMLSetting('sl-shadow','<div class="sl-shadow">\n\
	|content\ here.\n\
</div><!-- .sl-shadow -->\n');
zen_coding.addHTMLSetting('sl-wrap','<div\ class="sl-wrap">|</div>');

/* HTML5 */
zen_coding.addHTMLSetting('html5','<!DOCTYPE HTML>\n\
<html>\n\
<head>\n\
<meta charset="UTF-8">\n\
<title></title>\n\
</head>\n\
<body>\n\
\n\
|\n\
\n\
</body>\n\
</html>');
