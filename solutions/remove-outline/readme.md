### 去除虚线框

一般情况下，链接的 `outline` 可以不去除。如果 `outline` 形状极丑陋的情况下，视觉效果很差，则使用些方法：

- IE 添加 HTML 属性 `hidefocus="true"`

- Firefox按钮
 <pre>
/* for Firefox */
input[type=submit]::-moz-focus-inner,input[type=button]::-moz-focus-inner{    
  border : 0px; 
}
/* for IE8 */
input[type=submit]:focus, input[type=button]:focus{      
    outline : none;  
} 
 </pre>

更多，参见：[http://sofish.de/1366/]()
