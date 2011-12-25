### 等高栏

- 用法：
 
 等高栏的容器添加 .sl-equalheight <br />
 子元素添加 .sl-equalheight-item 可以实现等高

- 布局

 当需要而已的时候，如果有n栏，那么，&lt; n 的栏都用 .fn-left 让它float left；第n栏，也就是最近一栏使用 .fn-right向右浮动
 
- 等高栏

 在需要等高的栏中，都添加.sl-equalheight来让他们等高
  
- 结构(例:3栏)：别忘记给每个栏加宽度

 <pre>
    &lt;div class="sl-equalheight"&gt;
    	&lt;div class="sl-equalheight-item fn-left"&gt;...&lt;/div&gt;
    	&lt;div class="sl-equalheight-item fn-left"&gt;...&lt;/div&gt;
    	&lt;div class="sl-equalheight-item fn-right"&gt;...&lt;/div&gt;
    &lt;/div&gt;&lt;!-- .sl-equalheight --&gt;
 </pre>