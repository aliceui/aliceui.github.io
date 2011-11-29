---
title: Alice v3 规范
layout: doc
categories:
- alice
---

是否记得这样的试题？用一套同样的HTML结构，生成不同 的视觉效果。CSS 的最大好处就是，灵活。比如同样的HTML结构，可以实现不同的外观；又比如，同样的外观，可以用不同的方式不实现。但灵活的同时也给我们带来麻烦。团队 协作时，大家的编码风格各异，其他人要看懂/debug的成本也因此提高。这时，我们需要一个规范，一个像红灯亮起我们就不能擅闯的规范。
 
在 Alipay 前端，Alice 框架有这样一套规范，让大家的协作更方便。这套规范基于 Alice，属于 Alice 的一部分。其最基本的原则是，同样的结构，产出不同的视觉效果。

![相同的结构构建不同的视觉效果](/Alice/images/alice-006.png)		

注：所有样式的创建，都必须基于[Alipay前端CSS规范](https://docs.google.com/Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfOWRrcGhmeDhy)进行


##一、Alice 设计模式        

![Alice 设计模式](/Alice/images/alice-008.png)(https://docs.google.com/File?id=dcbzbj8j_26fc2jxsrb_b)
		
##二、关于 Alice v3

检出 Alice 前端解决方案的所有代码: svn co http://sources.alipay.net/svn/ueddocs/dev/alice/

###1. 文件结构：
- 基类：base.css	 
- 模板：tpl.css ( &amp; tpl.html)	 
- 方案：solution(N).css	 
	- 各个解决方案		  
- 系统：SYS(N).css	 
	- 各个系统的CSS
	
详见：<http://arale.alipay.net/alice/documentation.php>
标红点的，都打包在tpl.css中

###2. base.css 的作用
* CSS reset
* 小功能： 
	* .fn-clear 清除浮动
	* .fn-hide/.fn-show 相当于display:block;/display:none;
	* .fn-left/.fn-right 相当于 float:left;/float:right;

###3. 命名规范：
注意：非组件/解决方案，请不要使用.ui-/.sl-作为前缀 
	
* .ui- 组件前缀
* .sl- 解决方案前端

###4. 注释：以一个组件结构为例
    /* 
     *@name: ui-组件名
     *@overview: 组件描述
     *@required: 与其他组件的依赖关系，一般为null
     */
 
    /* 一般模块注释 
       一般单行或块状注释
       注明 overwrite 的是可以覆的，没注明的是必须的
     */
 
    .ui-someuiorsl{
        display:block;
        overflow:hidden;
        width:999px; /* overwrite */ 
    }	

##三、如何使用
###1. 如何使用alice v3构建 Style Lib (系统样式)

#### __A. 分析视觉稿__
虽 然视觉稿是多变的，但 Alice 模块的结构是不变的。因此，我们拿到视觉稿的第一时间（白板的时候，其实已经可以开始寻找），就是分析视觉稿。确认哪些资源是我们相要的。而 Alice 方面，我们要分析的是，全局设置的有那些，可以使用 Alice 模块的有哪些。

通常，需要确定的全局设置包括：
- 颜色：文字、边框、背景
- 字体：种类、大小
- 布局：模块、分栏
- 图标：.ui-icon .ui-icon-NAME

以 home 例，我们为全局设置创建一个单独的 global.css 。

而那些应该做为组件？一般情况下 TPL（下详）中的 14 个通用组件是必要的。另外需要根据页面使用的实际情况抽象。越多的组件，我们的编码就越统一、能创建越多的代码片段，这无论是对我们的协作，还是效率的提 升，都是非常有益的。下面这个 CheckList 可以作为你规范样式库的参考：

![Check List](/Alice/images/alice-001.png)
	
至于如何规划一个 CSS 文件，请参考《[Alipay 前端 CSS 规范](https://docs.google.com/Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfOWRrcGhmeDhy)》

#### __B. 使用tpl.css / tpl.html (命名规范在下面)__ 
	
下载：svn co <http://sources.alipay.net/svn/ueddocs/dev/alice/tpl/>
	
tpl.css 是一套 CSS 模板。如果你要构建新的组件。那么，你可以直接使用它。而不是引入+覆盖她。TPL 中包括了，全局设置/ 布局 / 列表 / 标题 / 切换 / 表单 / 表格 / 按钮 / 对话框。从 checklist 中可以看出已有组件列表。如果你的组件是已经有的，那么，参照已有的结构去构建。如果你新建一个新的组件，那么，使用下图所示的方法来构建：
	
记住： 不同外观的相同组件，HTML不要相互嵌套，CSS 推荐嵌套。
		
推荐的:

    <ul class="ui-nav">
        <li class="ui-nav-item"> some text
            <ul class="ui-nav-item-child">
                <li> some text
                    <ul class="ui-list">
                        <li class="ui-list-iem"> some text
                        </li>
                    </ul>
            </ul>
        </li>
        <li...
    </ul>


不推荐的:

    <ul class="ui-nav">
        <li class="ui-nav-item"> some text
            <ul class="ui-nav-item-child">
                <li > some text
                    <ul class="ui-nav">
                        <li class="ui-nav-iem"> some text
                        </li>
                    </ul>
            </ul>
        </li>
        <li...
    </ul>

		
推荐的：

    /* global scrope */
    .ui-icon-rarr{background:...}
    .ui-icon-larr{background:...}
    .ui-title{font-size:...}

    /* component only */
    .ui-nav .ui-list{...}
    .ui-table .ui-list{...}


不推荐的：(除非需要重用)

    /* set everything into a global scrope */
    .ui-icon-rarr{background:...}
    .ui-icon-larr{background:...}
    .ui-title{font-size:...}
    .ui-list{}
    .ui-nav{}
            
在模块化和命名上，以一个Tab组件为例，分解如下：
![Tab1](/Alice/images/alice-003.png)
![Tab2](/Alice/images/alice-002.png)
	
__值得注意的是：__
	
* 组件名是必选的
* 状态请参照下文中“状态的规范”
* 在组件窗口最外一层添加状态，而非给每一个内容添加状态。除非内容有独立的状态
	
比如，我们可以这样写：
		
    <div class="ui-new ui-new-hover">
        <h3> TITLE </h3>
        <p class="ui-new-cnt">
            ....
        </p>
    </div>
     
但不要这样写：

    <div class="ui-new">
        <h3 class="ui-new-title-hover">TITLE</h3>
        <p class="ui-new-cnt ui-new-cnt-hover">
            ....
        </p>
    </div>
		 
* 直接使用 TPL，而不是覆盖 TPL
	
![TPL](/Alice/images/alice-005.png)
		
* 充分考虑组件标签的语义化和层级的灵活性
	
语义化是什么？什么样的写法才是正确的。这里给一个建议，把你将要构建的页面当成一本书。是段落的，你就用P(aragraph)；是标题的，就用 H(eader)；是引用的，就用Blockquote()。而不是简单的，块状的东西由块状元素包含，行内的元素用行内的标签包含。这里有点要求就是， 去深入了解每个HTML标签的用法。关于灵活。像 “在组件窗口最外一层添加状态，而非给每一个内容添加状态。除非内容有独立的状态” 就是一种灵活性的表现。让你更灵活去地改变状态。

	
###2.如何使用 style lib （系统样式）
* 已有组件：直接使用
* 组件有更改：与 owner 确认，并经过全面测试，才能修改组件 
* 新样式：基于Alice v3 TPL，创建新样式

		
###3. Alice 组件命名规范 (参照图示)
	
![Alice 组件命名规范](/Alice/images/alice-004.png)
		
* __组件名__
		
尽量让人看到名字就能知道是什么组件，比较 ui-tab，比如 ui-nav 这样的命名。
有小图标都使用 .ui-icon .ui-icon- 前缀， 建议同一系统（域）人的常用小图标全部合成 sprite。用<span class="ui-icon ui-icon-NAME">HTML ENTRY</span>来引用，不要写空标签，应使用 HTML ENTRY 来替代，以达到语义化的要求。HTML ENTRY 请参考这个文档:<https://docs.google.com/Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfMTVmaHZtOWNkeg>
		
* __组件整体状态 = 组件名 + 状态__
		
常用的状态有：hover, current, selected, disabled, focus, blur, checked, success, error 等。通常你的命名应该看起来像 .ui-name-hover, .ui-name-error 这样。
		 
* __组件模块 = 组件名 + 模块名__

常用模块名有：cnt(content), hd(header), text(txt), img(images/pic),item, cell 等，只要词义表达了组件要实现的功能或者要表现出来的的外观就可以了。
		
* __组件模块状态 = 组件模块 + 状态__
		
参照常用状态
		
命名注意：
		
* __组件嵌套：__ 大组件可有子组件命名。拿官网的[.ui-nav](http://arale.alipay.net/alice/sys/home/ui-nav.html)为例，如果有多级，可以这样命名：
			
ui-nav > ui-subnav(ui-nav的子类) > ui-list(嵌套进去的其他组件)
			 
    <ul class="ui-nav">
        <li class="ui-nav-item">
           <a href="#" >nav Triggle Link</a>
              <ul class="ui-subnav">
                  <li class="ui-subnav-item">
                     <a href="#" >subNav Triggle Link</a>
                        <ul class="ui-list" ....
						
* __多状态：__ 多状态时，用唯一的命名来代替，而非抽象名词。拿 ui-button 为例：
			
ui-button ui-button-1pxcorner [, ui-button-indexsign [, ui-button-SOMEID]]
			 
而不要用 ui-button-round，这样，就可能会有： ui-button-round-a ui-button-round-b ... 了。按钮又有多个状态，命名就会太长了 ui-button-round-a-disabled
			 
* __统一：__ 
			
比如你比较喜欢 ui-tip-container ，另外的一个相同作用的地方，就不要写 ui-message-cnt 了，用 [ui-tip-container ui-message-container] 或 [ui-tip-cnt ui-messages-cnt] 这样会是更好的选择
			 
* __关于 .ui-icon-方向：__ 
			
 一般情况下，我们经常遇到方向需要用单独标签来作为小图标的例子。比如几乎每个系统都会有的 ui-message 和 ui-tip，都可能会有上下两个部分。推荐这样写：
			 
<table>
<thead><tr>
<th>CLASS</th>
<th>SPELL</th>
<th>HTML ENTRIES</th>
</tr></thead>
<tbody>
<tr><td>.ui-icon-uarr</td><td>Upward Arrow</td><td>&amp;uarr;</td></tr>
<tr><td>.ui-icon-darr</td><td>Downtward Arrow</td><td>&amp;darr;</td></tr>
<tr><td>.ui-icon-rarr</td><td>Rightward Arrow</td><td>&amp;rarr;</td></tr>
<tr><td>.ui-icon-larr</td><td>Leftward Arrow</td><td>&amp;larr;</td></tr>
</tbody>
</table>
		
##四、样式库维护

###1. 目录结构
	
使用Maven管理
		
目录设置：
首先确保已安装Maven，然后在命令行中，转到自己的本地Maven目录， 跳转到目录 trunk/css/system，创建一个文件夹（名称为系统简写，如个人版：pa）。
		
    - system
       - pa
         - resource
         － demo                    ---------------------->   组件静态demo目录
              - ui-xxx.html         ---------------------->   单个组件静态demo源文件
              - ui-xxx.html
         - thumb                    ---------------------->   组件截图目录
              - ui-xxx.png          ---------------------->   单个组件截图
              - ui-xxx.png        
         - global.css               ---------------------->   系统全局样式
         - ui-xxx.css               ---------------------->   单个组件样式源文件

            ...                     ---------------------->   
         - index.html               ---------------------->   系统组件库首页
					
同步到展示平台：

跳转到pa根目录，执行 mvn clean deploy，等待 2分钟，完成部署。
		
提示：将 ui-xxx.css 拷贝至根目录，建立 demo、thumb文件夹，demo用来存储ui-xxx.html，thumb用来存储 ui-xxx.png.在index.html中修改自己的频道名称（JS变量），然后将负责人信息填写好。

###2. 打包工具
	
在每个系统目录下，都有一个打包工具。包含在 build 目录下。build.xml 是配置文件。使用此工具需要有 java 环境（mac 默认有了）。

打包工具下载：<http://sources.alipay.net/svn/ueddocs/dev/alice/tools/css-compress-tool/>
		
**(1) 使用方法：**		
			
1.切换到目标样式库目录下
2.使用 ant 命令行（不需要其他参数）
			
以 home 为例：
			 
    $ cd home/
    $ ant

**(2) 配置build.xml （如图示）**
		
1.修改输出文件名（输入结果：NAME.css［合并的文件］ NAME.min.css［合并&压缩过的文件］)

2.添加需要打包的文件
			
注意引用与 style lib/ 同一目录下的 base.css, 以 home 为例：
			 
    <concat destfile="home.css" encoding="UTF-8" append="false">
        <filelist dir="src">
            <file name="../../../base.css" />
            <file name="global.css" />
            <file name="ui-button.css" />
            ...
					
![code](/Alice/images/alice-007.png)
			
默认打包文件放在 src/ 目录下（dir="src"），如果组件都不相互依赖的话，也可以使用 shell 命令行来打包：
			
    $ cd src/
    $ cat *.css > NAME.css
    $ java -jar ../build/yuicompressor-2.4.4.jar NAME.css -o NAME.min.css
					 
不过，建议使用配置文件的方法，方便安排文件的优先级，也方便其他合作者的使用。
			 
**(3) 关于压缩版本的注释**
		
打包产生的两个文件，其中以 .min.css 作为后缀的，是被压缩过的文件。如果有些注释不想在压缩的时候删除，可以使用标识符来告诉程序，标识符是一个感叹号 “!”，示例如下：
			
`/*! 这是不会被压缩掉的注释 */` --> `/*!这是不会被压缩掉的注释*/`
			
但因为 `/*中文*/` 这样的注释，如果没有空格把注释隔开可能有问题。所以，当你不想格式化注释，并希望上线的话，请确保注释是英文的，或者有空格把之隔开的中文注释。
			
			
而一般的 hack 注释是不会被压缩的，如：
			
压缩前：

    html >/**/ body p {
        color: blue;
    }

压缩后：
    
    html>/**/body p{color:blue}
			  
###3. 展示平台
	
目前的展示平台在：<http://arale.alipay.net/alice/documentation.php>

		
###4. 测试规则
	
组件应经过严格测试。测试规则详见：《[Alipay 前端 CSS 规范](https://docs.google.com/Doc?docid=0AWiI12yCmwaoZGNiemJqOGpfOWRrcGhmeDhy)]》

##五、Alice 解决方案

解决方案的规范，同组件。不同的是：
		
*解决方案要实现的是兼容，实现通常需要各种 trick，它是一种手段；而组件则是一个用各种手段实现出来的结果
*解决方案的通用是指，偏向于指功能的通用；而组件则指视觉效果的通用
		
解决方案（solution）详见：<http://arale.alipay.net/alice/documentation.php>
		
##六、整合至展示平台

样式库展示平台，是通过缩略图直观展示系统通用组件的平台。目前仍为人工添加阶段。系统样式库展示平台首页网址类似于 http://arale.alipay.net/alice/gallery-sys.php?channel=home 后接一个参数，即频道英文名（示例中的网址是用户之家频道）。

重构步骤：

1.先了解alice目录结构，请参考《四、样式库维护——目录结构》。
2.在自己负责的系统中找出tpl列表中的14个组件。
3.拷贝tpl.css中的选择器建立对应的 ui-组建名.css，拷贝 tpl.html中的dom结构。http://arale.alipay.net/alice/tpl/tpl.html
4.开始css编码，将｛｝区域填满，根据需要增删选择器。
5.测试各个浏览器。
6.将遇到的问题及解决方案记录下来。
7.将重构好的样式及demo文件拷贝至svn目录，部署至alice展示平台。即完成。
			
通过svn检出 gallery.php 添加 switch case 代码区域。可以通过拷贝 home 频道的代码，查找替换，快速完成。组件缩略图，请使用 ui-组建名.png 命名，并保存为 png8（128x80px），请放在 img-gallery/系统英文名 目录下。

将全部 ui-组件名.css 统一放在 src 目录，将全部 ui-组件名.php 统一放在 demo 目录。
		
ssh root@10.2.4.20 password:213456qw  进入 /var/www/arale-web/alice 目录，对应的svn地址：http://sources.alipay.net/svn/ueddocs/dev/alice/style Lib/
		
##七、问题反馈

规范、技术支持：小鱼、欣欣、左宜
		
样式库 owner：

- 个人版：徐干、季顺前(收银台)
- 生活助手：大高、小高
- 商家服务：追然
- 会员线：天作
- 官网：小鱼

单独组件问题，请联系源码注释中的作者。
