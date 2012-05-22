### IE z-index bug

#### 解决方法：

 两个元素的平等级别祖先元素z-index高的，显示于上面。俗称：`后台硬占据最高点`。
 
 祖先元素必须是同一级别的，比如比较两个 `span` 谁盖在上面，应该比较的不是 `p` 和 `li` 的 z-index，而应该是 `li` 与 `li` 这两个平行级别的元素：
 
 <pre>
 // jQuery 解决方案
 $(function() {
      var zIndexNumber = 1000;
      // Put your target element(s) in the selector below!
      $("div").each(function() {
          $(this).css('zIndex', zIndexNumber);
          zIndexNumber -= 10;
      });
  });
  
 // MooTools 解决方案
 if(Browser.Engine.trident){
     var zIndexNumber = 1000;
     // Put your target element(s) in the selector below!
     $$('div').each(function(el,i){
         el.setStyle('z-index',zIndexNumber);
         zIndexNumber -= 10;
     });
 };
 
 &lt;ul&gt;
    &lt;li&gt;
        &lt;p&gt;
            &lt;span&gt; 第一个元素 &lt;/span&gt;
        &lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
        &lt;span&gt; 第一个元素 &lt;/span&gt;
    &lt;/li&gt;
    ...
</pre>