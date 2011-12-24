### IE6 浮层遮盖

被 `select` 穿透，是最常见的 `z-index` bug。用法：

- HTML:

 <pre>
&lt;div id=&quot;dd3&quot; class=&quot;sl-select-free&quot; style=&quot;background:#FF3366;&quot;&gt;
  内容&lt;br/&gt;
&lt;!--[if lte IE 6.5]&gt;&lt;iframe src=&quot;javascript:'';&quot;&gt;&lt;/iframe&gt;&lt;![endif]--&gt;
&lt;/div&gt;
 </pre>
 
- CSS:
 <pre>
.sl-selectmask {
	position: absolute;
	left:0;
	top:0;
	z-index: 10;
	overflow: hidden;
	width: 33em;
}
.sl-selectmask iframe {
	position: absolute;
	top: 0; 
	left: 0; 
	z-index: -1;
	border:none;
	filter: mask();
	width: 3000px; /* for any big value */
	height: 3000px /* for any big value */
}
</pre>

请注意，即使使用这种方法，半透明div下，`select` 会被彻底隐藏。这个问题还是没办法解决。