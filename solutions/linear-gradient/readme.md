### 跨浏览器线性渐变

- 代码不好看，但兼容所有A-Grade浏览器：
 <pre>
background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#f4f5f6));
background: -moz-linear-gradient(top,  #fff,  #f4f5f6);
background: -o-linear-gradient(top, #fff, #f4f5f6);
filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f4f5f6');
 </pre>

- 没有现成的 `class` 提供样式 | 记得 `ie` 的 `color` 要写全6位，不然显示不正常 

- Demo 引用了1px圆角
 在实际项目中只能使用二梯度二色线性渐变，多梯度渐变请暂时不要使用。
 
 - 二梯度渐变生成器：<a href="http://css3please.com/" target="_blank">在线二
      梯度渐变生成器</a>。
 - 在内部产品可以使用多梯度渐变：<a href="http://www.colorzilla.com/gradient-editor/" target="_blank">在线多梯度渐变</a>