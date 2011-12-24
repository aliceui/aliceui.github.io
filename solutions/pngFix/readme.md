### PNG 半透明：

- CSS 滤镜

 <pre>
filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='image.png', sizingMethod='scale');
 </pre>
 
-  注意点：

 - 使用了scale, 这个会适应元素宽度，所以需要设置固定的高度或宽度
 - filter是应该避免的，所以避免index transparent外的 PNG 透明元素
 - IE6 默认支持index transparent 的 PNG
 - src的路径相对于当前文档来说的，不过，我们一般用绝对路径，就没什么问题了


- 语法：

 <pre>filter : progid:DXImageTransform.Microsoft.AlphaImageLoader ( enabled=bEnabled , sizingMethod=sSize , src=sURL )</pre>

- 属性：

 - enabled: 可选项。布尔值(Boolean)。设置或检索滤镜是否激活
 - true  : 默认值。滤镜激活
 - false:滤镜被禁止
 - sizingMethod: 可选项。字符串(String)。设置或检索滤镜作用的对象的图片在对象容器边界内的显示方式 
 - crop: 剪切图片以适应对象尺寸 
 - image: 默认值。增大或减小对象的尺寸边界以适应图片的尺寸 
 - scale: 缩放图片以适应对象的尺寸边界 
 - src: 必选项。字符串(String)。使用绝对或相对 url 地址指定背景图像。假如忽略此参数，滤镜将不会作用
 
- 特性：

 - Enabled: 可读写。布尔值(Boolean)。参阅 enabled 属性
 - sizingMethod: 可读写。字符串(String)。参阅 sizingMethod 属性
 - src: 可读写。字符串(String)。参阅 src 属性

- 说明：

 在对象容器边界内，在对象的背景和内容之间显示一张图片。并提供对此图片的剪切和改变尺寸的操作。如果载入的是PNG(Portable Network Graphics)格式，则0%-100%的透明度也被提供。PNG(Portable Network Graphics)格式的图片的透明度不妨碍你选择文本。也就是说，你可以选择显示在PNG(Portable Network Graphics)格式的图片完全透明区域后面的内容。