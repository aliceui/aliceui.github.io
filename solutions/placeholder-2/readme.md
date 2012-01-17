### 跨浏览器 Placeholder 2：

- 适用场景：

 - 登陆页的文本框 [http://mail.qq.com/cgi-bin/loginpage]()
 - 搜索框 [http://getk2.com]()
 - 。。。

-   使用方法：

        <div class="sl-placeholder">
          <label class="sl-placeholder-label" for="username" data-placeholder="username">username</label>
          <input type="text" class="sl-placeholder-input" id="username" size="30" />
        </div>

-   实现代码：

        function placeholder(el) {
          el = $(el);
          var label = $('.sl-placeholder-label', el);
          var defaultText = label.data('placeholder');
          var input = $('.sl-placeholder-input', el).focus(function() {
            el.addClass('sl-placeholder-focus');
          }).blur(function() {
            el.removeClass('sl-placeholder-focus');
            checkInputVal();
          }).keydown(function(e) {
            var keyCode = e.keyCode;
            //控制字符不可见
            if (keyCode >= 0  && keyCode <= 31 || keyCode >= 127  && keyCode <= 157) {
              return;
            }
            label.text('');
          }).keyup(function() {
            checkInputVal();
          });

          function checkInputVal() {
            if (input.val().length == 0) {
              label.text(defaultText);
            }
          }
        }

        $('.sl-placeholder').each(function(index, el) {
          placeholder(el);
        });

-   说明：

    以上实现依赖于jQuery。