## nodemon配置说明
### [默认配置](https://github.com/remy/nodemon/blob/master/lib/config/defaults.js)
```javascript
var ignoreRoot = require('ignore-by-default').directories();

// default options for config.options
module.exports = {
  restartable: 'rs',
  colours: true,
  execMap: {
    py: 'python',
    rb: 'ruby',
    ts: 'ts-node',
    // more can be added here such as ls: lsc - but please ensure it's cross
    // compatible with linux, mac and windows, or make the default.js
    // dynamically append the `.cmd` for node based utilities
  },
  ignoreRoot: ignoreRoot.map(_ => `**/${_}/**`),
  watch: ['*.*'],
  stdin: true,
  runOnChangeOnly: false,
  verbose: false,
  signal: 'SIGUSR2',
  // 'stdout' refers to the default behaviour of a required nodemon's child,
  // but also includes stderr. If this is false, data is still dispatched via
  // nodemon.on('stdout/stderr')
  stdout: true,
  watchOptions: {

  },
};
```

### restartable:
重启的命令，默认是 rs ，可以改成你自己喜欢的字符串。当用 nodemon 启动应用时，可以直接键入 rs 直接重启服务。除了字符串值外，还可以设置 false 值，这个值的意思是当 nodemon 影响了你自己的终端命令时，设置为 false 则不会在 nodemon 运行期间监听 rs 的重启命令

### ignore
忽略的文件后缀名或者文件夹，文件路径的书写用相对于 nodemon.json 所在位置的相对路径，下同。nodemon 会默认忽略一些文件，默认忽略的文件有：.git, node_modules, bower_components, .sass-cache，如果这些文件想要加入监控，需要重写默认忽略参数字段 ignoreRoot，比如加入：“ignoreRoot”: [".git", “bower_components”, “.sass-cache”]，然后在 watch 中将 node_modules 文件路径加入监控，那么 node_modules 内的文件也加入了监控了

### execMap
 运行服务的后缀名和对应的运行命令，“js”: “node --harmony” 表示用 nodemon 代替 node --harmony 运行 js 后缀文件；"" 指 www 这些没有后缀名的文件；默认的 defaults.js 配置文件会识别一些文件：py: ‘python’,rb: ‘ruby’

### events
这个字段表示 nodemon 运行到某些状态时的一些触发事件，总共有五个状态
- start:子进程（即监控的应用）启动
- crash:子进程崩溃，不会触发 exit
- exit:子进程完全退出，不是非正常的崩溃
- restart:子进程重启
- config:update - nodemon 的 config 文件改变
状态后面可以带标准输入输出语句，比如 package.json 系统下设置： 'start': 'yarn dev'，那么启动应用时会运行yarn dev。除此之外，也可以写js来监控，github 上有介绍： [events.md](https://github.com/remy/nodemon/blob/master/doc/events.md#Using_nodemon_as_child_process)

### watch
监控的文件夹路径或者文件路径

### env
例如：
```javascript
 "env":{
         "NODE_ENV": "development",
         "PORT": "3000"
    }
```

### ext
监控指定后缀名的文件，用空格间隔。默认监控的后缀文件：.js, .coffee, .litcoffee, .json。但是对于没有文件后缀的文件，比如 www 文件，我暂时找不到怎么用 nodemon 去监控，就算在 watch 中包含了，nodemon 也会忽略掉
>注：关于监控以及忽略文件修改有个顺序的问题，或者说优先级，首先 nodemon 会先读取 watch 里面需要监控的文件或文件路径，再从文件中选择监控 ext 中指定的后缀名，最后去掉从 ignore 中指定的忽略文件或文件路径。

### legacy-watch
nodemon 使用 Chokidar 作为底层监控系统，但是如果监控失效，或者提示没有需要监控的文件时，就需要使用轮询模式（polling mode），即设置 legacy-watch 为 true，也可以在命令行中指定:
```bash
nodemon --legacy-watch
# 简写
nodemon -L 
```