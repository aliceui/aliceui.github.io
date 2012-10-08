### 检测文字是否为中文

```js
var isChinese = function(word) {
      return /[\u4E00-\uFA29]+|[\uE7C7-\uE7F3]+/.test(word)
    }

isChinese('汉'); // true
```
