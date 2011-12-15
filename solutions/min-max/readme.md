### min/max height/widget

- 方法：这个东西还是用JS解决吧，除 `min-height`，CSS 方法还不是那靠谱：
 <pre>
/* min-height */
.min-height:200px;height:auto;
_height:200px; /* hack for ie6 */
 </pre>
- JS 方法：

 max Height
    <pre>
function setMaxHeight(elementId, height){
    var container = document.getElementById(elementId);
    container.style.height = (container.scrollHeight > (height - 1)) ? height + "px" : "auto";
} 
    </pre>

 min Width
     <pre>
function setMinWidth(elementId, width){
    var container = document.getElementById(elementId);
    container.style.width = (container.clientWidth < width) ? width + "px" : "auto";
} 
     </pre>  

 max Width
     <pre>
function setMaxWidth(elementId, width){
    var container = document.getElementById(elementId);
    container.style.width = (container.clientWidth > (width - 1)) ? width + "px" : "auto";
} 
     </pre>