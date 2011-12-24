### @font-face

- HTML:
 <pre>&lt;h1&gt;font&lt;/h1&gt;</pre>
 
- CSS:
 <pre>
    /* 设置font-face */
    @font-face{
      font-family: 'AlipayWD'; /* 字体名，可自定义 */
      font-style: normal;
      font-weight: normal;
      
    /*
     local('PC自带字体')
     url('字体服务器地址') format('[truetype|eot|woff|svg|etc.]帮助浏览器识别')
     可通过fontsquirrel提供的在线字体转换获取所需格式
    */
      src: url('./JennaSue.eot'); /* fix IE9 */
      src: local('JennaSue'), /* 本地可选 */
      url('./JennaSue.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('./JennaSue.ttf') format('truetype');/* modern browsers, Android, iOS */
    }
    
    /* 通过font-family引用 */
    h1 {
      font-family: 'alipayWD', arial, serif;/* 可设置替补字体 */
    }
 </pre>