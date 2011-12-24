### 跨浏览器 HTML5 Placeholder

- 使用方法：

 跟 HTML5 的使用方法一样。在 `input` 中添加属性 `placeholder`: 
 
 <pre>&lt;input placeholder="aliceui.com" /&gt;</pre>

- 实现代码：

<pre>
var doc = document,
inputs = doc.getElementsByTagName('input'),

// 检测 placeholder 支持
supportPlaceholder = 'placeholder' in doc.createElement('input'),

/* 
 * 创建 placeholder
 * @param {ELEMENT} input 传入的 input 对象
 * @return {VOID}
 * @author: sofish Lin http://sofish.de
 * /
placeholder = function (input) {
	var text = input.getAttribute('placeholder'),
		defaultValue = input.defaultValue;

	// 制作一个假 placeholder
	// 需要 css 配合，在 JS 中设置 style 并不太好
	input.value = text;

	// 聚焦去掉假 placeholder
	input.onfocus = function () {
		if (input.value === defaultValue || input.value === text) {
			this.value = '';
		}
	}

	// 当失焦值为空时，补回 placeholder 的值
	input.onblur = function () {
		if (input.value === '') {
			this.value = text;
		}
	}
};

if (!supportPlaceholder) {
	for (var i = 0, len = inputs.length; i < len; i++) {
		var input = inputs[i],
			text = input.getAttribute('placeholder');

		// 当 input[type=text] 并且 placeholder 值不为空是执行
		if (input.type === 'text' && text) {
			placeholder(input);
		}
	}
}          
</pre>