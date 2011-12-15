### 跨浏览器文本存储

- 用法：与 HTML5 的 localStorage 一致

 - 获取 `key` 的值：`localStorage.getItem('key');`
 - 设定一个 `key` 的值：`localStorage.setItem('key', 'value');`
 - 删除一个存储的文本：`localStorage.removeItem('key');`
    
- 原理：

 在支持 `localStorage` 的浏览器中直接使用 `localStroage` 的 API, 在不支持的 IE6 ~ IE7 中使用 `USERDATA` 来实现。具体参见源代码。