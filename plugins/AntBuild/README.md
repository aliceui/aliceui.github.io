###关于本工具
本工具使用ant+yuicompressor来实现 base.css 和 相关 Solutions的压缩合并

>Ant是一种基于Java的build工具。理论上来说，它有些类似于（Unix）C中的make ，但没有make的缺陷。目前的最新版本为：Ant 1.8.2。
官方站点<http://ant.apache.org/>

有问题欢迎联系我Twitter <https://twitter.com/#!/iamued>

###使用方法
***windows***

进入Alice目录\plugins\AntBuild目录 执行ant.bat 等待运行完成

就会在Alice目录生成build文件夹里面就是啦

目录结构如下
<pre>
build/
├── alice-all-min.css  //base.min.css+solutions-all-min.css
├── base-min.css       //base.css压缩后的文件
├── min                //solution压缩后的单体文件夹
│   ├── 1px-round-corner-min.css
│   ├── base-min.css
│   ├── custom-file-min.css
│   ├── drop-shadow-min.css
│   ├── equal-height-layout-min.css
│   ├── float-center-min.css
│   ├── force-wrap-min.css
│   ├── ime-disabled-min.css
│   ├── position-fixed-min.css
│   ├── remove-outline-min.css
│   ├── rotate-min.css
│   ├── select-mask-min.css
│   └── vertical-horizoncal-min.css
└── solutions-all-min.css //合并压缩后的solutions.css 不包含base.css
</pre>


####附：Window下安装Ant方法

######一.下载 & 安装JDK (如本地已经有了可以跳过)
Ant是基于java环境的构建工具 所以必须要安装JDK
<http://www.oracle.com/technetwork/java/javase/downloads/index.html>
下载后直接安装

然后配置环境变量：右击“我的电脑”-->"高级"-->"环境变量"

1. 在系统变量里新建“JAVA_HOME”变量，变量值为：C:\Program Files\Java\jdk1.6.0_14（根据自己的安装路径填写）

2. 新建“classpath”变量，变量值为：.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\tools.jar

3. 在path变量（已存在不用新建）添加变量值：%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin（注意变量值之间用“;”隔开）

4. “开始”-->“运行”-->输入“cmd”-->"Enter"-->执行“javac”，如果能正常打印用法说明配置成功！

######二.下载 & 安装Ant (如本地已经有了可以跳过)
下载ant安装文件 <http://ant.apache.org/bindownload.cgi>

目前最新版本 <http://labs.renren.com/apache-mirror//ant/binaries/apache-ant-1.8.2-bin.zip>

下载后解压即可,假定Ant解压在c:\ant\目录下。
然后配置环境变量：右击“我的电脑”-->"高级"-->"环境变量"

1. 在系统变量里新建“ANT_HOME”变量，变量值为：：C:\Program Files\Java\jdk1.6.0_14（根据自己的安装路径填写）

2. 在path变量（已存在不用新建）添加变量值：%ANT_HOME%\bin（注意变量值之间用“;”隔开）

3. “开始”-->“运行”-->输入“cmd”-->"Enter"-->执行"ant -version"命令，如果能正常打印ant版本配置成功！


