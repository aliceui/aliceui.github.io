### 1像素圆角：

- 好处：跨浏览器，自适应高度和宽度
- 缺点：外观太简单

 最好不要给 `INPUT[type=submit[button]] || BUTTON` 直接添加border，避免 lte IE7 出现的1px 黑边 bug

- 结构：支持 `-hover`, `hover` 时为 `class=".sl-rc .sl-rc-hover"`
    <pre name="colorcode" class="html">
    &lt;a class="sl-rc"&gt;
      &lt;span class="sl-rc-cnt"&gt;
        context
      &lt;/span&gt;
    &lt;/a&gt;
    </pre>