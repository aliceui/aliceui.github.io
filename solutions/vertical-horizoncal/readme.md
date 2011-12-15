### 垂直/水平居中

垂直/水平居中的几种方法:

- [原理] 设定宽度和高度，父节点为 position:relative; CSS是这样写的:

 <pre>
position:absolute;left:50%;top:50%;
margin-left:-元素自身宽度的一半;
margin-top:-元素自身高度的一半;
 </pre>

- [原理] table, 用起来就更简单了, 只要添加:

 <pre>
text-algin:center;
vertical-align:middle;
 </pre>

- [方法] 提供模板化的CSS class方法, 规则如下:

 <pre>
&lt;div class="sl-hvalign" style="width:500px"&gt; &lt;!-- 记得加宽度, 不要写行内样式, 这里只是一个提示 --&gt;
     &lt;div class="sl-hvalign-cnt"&gt;
             &lt;div class="sl-hvalign-cnt-inner"&gt;
                   &lt;!-- your code --&gt;
             &lt;/div&gt;
     &lt;/div&gt;
&lt;/div&gt; &lt;!-- .sl-hvalign --&gt;
 </pre>