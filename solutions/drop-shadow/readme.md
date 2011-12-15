### 跨浏览器投影

使用 CSS filter 实现像 CSS3 的 `box-shadow` 效果，使用控制不同方向的投影来消除 filter 实现投影有噪点的不足。

- 注意：记得添加 background 属性，防止 IE 把投影转移到文字上

- 用法：
 <pre>
    &lt;div class=&quot;sl-shadow&quot;&gt;
        &lt;-- your context to go --&gt;
    &lt;/div&gt;&lt;!-- .sl-shadow --&gt;
 </pre>