# 构建模块和样式库

- order: 6
- category: alice

---

> More power comes more responsibility. *「 Spider Man 」2012*

我相信，只是复制几个 Html 结构一定不是你的追求，Alice 可以让你做得更多。本页略长，请坐稳。

---

## 工具准备

本文默认在 Linux\Unix 环境下运行，在开始之前，我们先需要安装几个重要的工具。
若对这些工具的作用不了解，可以先阅读 [工具](/docs/tool.html) 。

遇到 `sudo` 的问题请参考[这里](http://aralejs.org/docs/installation.html#%E5%8E%BB%E9%99%A4-sudo)。

### 安装 spm

```
$ npm install spm -g
```

Alice 已全面迁移到 [spm3](https://github.com/spmjs/spm/issues/819) 上。

## 开发一个样式模块

我们的页面中总是存在的各式各样的模块化的 DOM 结构，
都可以依据其复用度来把其中一部分代码提炼成样式模块。

### 初始化模块

现在我们要开发一个 box 区块模块。首先建立一个文件夹，并使用 `spm init` 命令进行初始化。

```
$ mkdir alice-box
$ cd alice-box
$ spm init
```

```
Creating a spm package:
[?] Package name: alice-box
[?] Version: 0.0.0
[?] Description: my box style
[?] Author: afc163 <afc163@gmail.com>
Initialize a spm package Succeccfully!
```

这时程序会让你输入相关的信息，生成一个模块的初始目录结构如下。

```
README.md
HISTORY.md
package.json
index.js
```

其中 `HISTORY.md` 用于版本的升级记录，
`README.md` 是用来写文档和 DEMO 的地方，`package.json` 则存放模块的基本信息。我们这是一个样式模块，手动把 index.js 改为 box.css ，并把 package.json 中 `spm.main` 字段改为 `index.css`。

我们可以在 `package.json` 中的 spm 字段中的 dependencies 填写所需的依赖的别名。
这个 box 模块不需要依赖所以不需要填写。

### 写文档和设计 Html 结构

我们先打开 README.md 进行编辑。

    # box

    ---

    带边框和标题的标准区块。

    ---

    ## 演示文档

    <link type="text/css" rel="stylesheet" media="screen" href="box.css">

    ### 默认用法

    ````html
    <div class="ui-box">
        <div class="ui-box-head">
            <div class="ui-box-head-border">
                <h3 class="ui-box-head-title">区块标题</h3>
            </div>
        </div>
        <div class="ui-box-container"></div>
    </div>
    ````

可以看到我们在上面写了基本的模块描述，并引入了样式源文件，在最下面设计了 box 模块的 Html 结构。
这和 JS 模块的开发过程是类似的，先设计文档和接口再进行开发，而对于样式模块来说，Html 结构就是样式的接口。

像上面使用四个 ```` 符号来包裹代码是 [nico](http://lab.lepture.com/nico/) 的特性，这样可以把代码片段转换成实际的 DOM 结构，非常方便调试和文档生成。

### 编码和调试

接下来我们打开 box.css 进行编辑，现在就是熟悉的样式编码阶段了。
在这个阶段，我们可以到项目目录运行 `spm doc` 来打开 spm doc 的调试功能，
程序启动一个 livereload 服务监听生成的文档页面，我们可以用浏览器打开 http://127.0.0.1:8000 访问文档页面并进行调试。你会看到类似下图的页面。

![](https://i.alipayobjects.com/e/201303/2Ml1vh9J08.png)

### 构建和发布

开发测试完毕后，我们就可以通过一下目录构建出标准的 Alice 模块文件了。

```
$ spm build
```

这个命令会生成一个 dist 目录，里面存放我们构建出来的样式文件。它会读取 package.json 中 spm 字段下的 main 
字段来输出用户指定的文件。

```
$ spm publish
```

再通过 publish 命令可以把样式模块上传到源中，这样其他模块就可以依赖这个模块了。


### 源码托管和文档部署

最后，建议你将这个目录提交到 github 或 gitlab 中，统一管理你的样式模块。一个版本开发构建完成后，用版本号来打一个 [tag](https://github.com/aliceui/button/tree/1.1.0) 。
还可以利用 [源服务器](http://spmjs.io) 来部署模块的文档页面。

比如要把这个模块的静态文档托管到 spmjs.io 上，开发完毕后然后在模块根目录运行：

```
$ spm doc publish
```

这样可以发布页面到对应的源服务中，默认的地址为 http://spmjs.io/docs/{{name}}。
就可以访问 http://spmjs.io/docs/alice-box 来访问对应的文档页了。

> 注意：要使用 spmjs.io 的文档服务，你需要有这个模块的发布权限。


## 开发某页面的样式

这里你将会知道如何依赖和打包 alice 模块。

假设我们现在收到了一个 [我的支付宝](https://my.alipay.com) 页面的开发需求，
拿到 psd 稿后我们发现这个页面上有很多的 alice 通用模块，同时也有很多的个性化的样式需求。

这时会需要一个我的支付宝的样式模块，命名为 myalipay ，操作步骤和上面的 box 模块类似。
在 Alice 中，一切样式皆模块，所以这个 myalipay 其实和上面的 box 没有本质区别，
只不过它是直接用在页面上的。

生成目录后，我们打开 myalipay/package.json 文件，编辑其中的 spm.alias 字段。假设我们需要
用到 alice.box、alice.nav、alice.button 三个模块。

```js
{
  "name": "myalipay",
  "version": "1.0.0",
  ...
  "spm": {
    "dependencies": {
      "alice-box": "1.0.0",
      "alice-button": "1.0.0",
      "alice-nav": "1.0.0"
    },
    output: ["myalipay.css"]
  }
}
```

其中 dependencies 字段指明了依赖的模块的别名，output 字段指明了需要打包的目标文件，
然后打开 myalipay.css ，在文件前面写入

```css
@import url('~alice-box');
@import url('~alice-button');
@import url('~alice-nav');
```

通过这种类似于 Arale 中 `require('')` 的方式，引入了这三个模块。
在调试页面，文档生成工具会自动把所需依赖的外部样式模块引入。


接下来可以在 myalipay.css 的后面继续编写个性化的样式代码。

当然可以引入内部的模块，比如我们在根目录下建一个 user.css 文件，专门用来写和用户有关的样式。
在 myalipay.css 中可以这样引入：

```css
@import url('~alice-box');
@import url('~alice-button');
@import url('~alice-nav');

@import url('./user.css');  /* 引入内部文件 */
```

> `~` 表示引入外部模块，不加表示内部文件。

最后，和上面一样，用 `spm build` 命令打包出文件，你会发现在 dist 目录下多了
两个文件 myalipay.css 和 myalipay-debug.css ，包含了 box、button、nav、user.css 和 myalipay.css 自身的所有代码。
最后把 dist 下的文件部署服务器上并用 link 来引入就可以了。
