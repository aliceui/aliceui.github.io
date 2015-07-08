# JavaScript

- order: 4
- category: alice

---

> I'm going to make him an offer he can't refuse.
*「 The GodFather 」1972*

只有样式模块是无法开发页面的，现在我们需要一些 JavaScript 的功能。

万幸，我们有 [Arale](http://aralejs.org/) 。本页面将用几个常用的范例介绍如何搭配使用 Alice 模块和 Arale 的 JS 模块。

![](https://i.alipayobjects.com/e/201303/2MPpg2ju9k.jpg)

---

## 在 Arale 中使用样式

Alice 是 Arale 整个前端解决方案的子集，有些简单页面使用 Alice 通用模块就可以搭建出来了，有些则需要配合 JavaScript 才能实现。那么如何在 Arale 中使用 Alice 呢？

在 Arale 的解决方案中，使用样式主要有两种方式。

1. 用标准的 link 标签来调用 Alice 。

    此方案的优点是标准，样式无闪烁，统一可控，适合所有场景（特别是纯展现型的页面。）

    ```html
    <link href="alice-modules.css" rel="stylesheet">
    ```

    在 Alice 中，一般可以新建一个模块，打包出一个 CSS 文件再 link 到相应的位置就可以了。

2. 使用 JavaScript 实现的 [importStyle](https://github.com/spmjs/spm/issues/641) 功能在页面中动态插入 style 标签。

    ```js
    require('./style.css');
    ```

    优点是可以在 JavaScript 中统一调用样式模块（和 JS 模块保持一致），使用者可以不用关心样式，十分方便。

    缺点也很明显，样式只有等到 JS 生效后才会载入，展现型的页面会出现样式闪烁。
    而且在 IE 下有 style 标签数量限制的[问题](http://social.msdn.microsoft.com/Forums/en-US/iewebdevelopment/thread/ad1b6e88-bbfa-4cc4-9e95-3889b82a7c1d/)。

    适合场景：需要 CSS 辅助的 JS 组件，比如 Calendar 日历组件，以及其他的应用型页面。

    在 Arale 的模块中，可以直接 `require('alice-poptip')` 来调用 Alice 模块。
    这样 Arale 模块就依赖了 Alice 的样式模块，无须再去单独打包引用样式。


以上是使用样式的两种方式，下面将针对如何结合 Alice 的模块和 Arale 的模块完成功能。

## Switchable

[Switchable](http://aralejs.org/switchable) 是 Arale 中的一个 JS 组件，主要负责面板切换等功能。
Alice 中的 tab 模块就非常适合和 Switchable 进行配合。


````html
<style>
.panel {
    display: none;
}
</style>

<div class="ui-tab">
    <ul class="ui-tab-items">
        <li class="ui-tab-item ui-tab-item-current">
            <a href="javascript:;">全部交易</a>
        </li>
        <li class="ui-tab-item">
            <a href="javascript:;">进行中的交易</a>
        </li>
        <li class="ui-tab-item">
            <a href="javascript:;">等待发货的交易</a>
        </li>
        <li class="ui-tab-item">
            <a href="javascript:;">未确认收获的交易</a>
        </li>
    </ul>
</div>

<ul class="panels">
    <li class="panel">面板一的内容</li>
    <li class="panel">面板二的内容</li>
    <li class="panel">面板三的内容</li>
    <li class="panel">面板四的内容</li>
</ul>
````

上面是 DOM 结构和样式文件。然后加上 Switchable 的代码。更多使用方式请访问 [文档](http://aralejs.org/switchable) 。

````js
require('alice-tab');
var Switchable = require('arale-switchable');

new Switchable.Tabs({
    element: '.ui-tab',
    triggers: '.ui-tab-item',
    panels: '.panel',
    triggerType: 'click',
    activeTriggerClass: 'ui-tab-item-current'
}).render();
````

## AutoComplete

[AutoComplete](http://aralejs.org/autocomplete) 是自动完成组件，
可以和 [alice.select](http://aliceui.org/select/) 进行配合。

````html
<input type="text" id="input" placeholder="请输入 a">
````

````js
require('alice-select');
var $ = require('jquery');
var AutoComplete = require('arale-autocomplete');
new AutoComplete({
    trigger: '#input',
    dataSource: ['abc', 'abd', 'abe', 'acd'],
    width: 230
}).render();
````

## Popup

[Popup](http://aralejs.org/popup) 的职责是有触发元素的浮层交互，可以和 [alice/button-dropdown](http://aliceui.org/button-dropdown/) 配合使用。

````html
<div class="ui-button-dropdown">
    <a class="ui-button ui-button-lorange ui-dbutton ui-dbutton-orange" id="popup-trigger">
        <span class="ui-dbutton-self">下拉菜单</span>
        <i class="ui-dbutton-arrow iconfont" title="下三角形">&#xF03C;</i>
    </a>
    <ul class="ui-button-dropdown-large" id="popup-element">
        <li class="ui-button-dropdown-item">
            <a href="#">设置代扣</a>
        </li>
        <li class="ui-button-dropdown-item">
            <a href="#">标为已缴</a>
        </li>
    </ul>
</div>

<style>
.ui-button-dropdown-large {
    display: none;
}
</style>
````

````js
require('alice-button-dropdown');
var Popup = require('arale-popup');
new Popup({
    trigger: '#popup-trigger',
    element: '#popup-element'
});
````

## Tip

[Tip](http://aralejs.org/tip) 是典型的应用型组件，样式可以使用 JS 来进行载入。

在 [arale/tip](https://github.com/aralejs/tip/blob/master/src/tip.js#L7) 的代码中有这样的调用：

```js
require('./poptip.css');
```

使得 tip 不用需要单独引用相关的样式，使用起来非常方便。

````html
<div id="tip-element">Please hover me!!!</div>
````

<style>
#tip-element {
    background:rgb(255, 223, 176);
    display:inline-block;
    padding: 3px 5px;
}
</style>

````js
var Tip = require('arale-tip');

new Tip({
    trigger: '#tip-element',
    content: '我是 Tip 的内容'
});
````

## Dialog

[Dialog](http://aralejs.org/dialog) 模块和 Tip 类似，也是通过 JS 来内联需要的样式。
不过 Dialog 没有依赖外部的 Alice 模块，因为它的样式只有他自己会使用，于是就把对应的样式
放在 Dialog 的模块内进行管理。（这也是一种样式的实践方式！）

这里演示一下 Dialog 下的 Confirmbox 模块的使用。

````html
<button class="ui-button ui-button-lorange" id="confirmbox">Please click me!!!</button>
````

````js
require('arale-dialog/src/dialog.css');
var Dialog = require('arale-dialog');

new Dialog.ConfirmBox({
    trigger: '#confirmbox',
    title: '您好~',
    message: '啊哦，您打开了一个对话框！'
});
````

## 更多功能

上面几个示例是常见的 Arale 模块的使用范例，
Arale 提供了完善的 JavaScript 解决方案，
更多功能和演示请访问 [http://aralejs.org/](http://aralejs.org/) 。 
