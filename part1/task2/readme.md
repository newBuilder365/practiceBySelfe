# JavaScript 异步编程

## 异步模式

- javascript 代码执行是同步执行的，但是内部的api是另外启动线程去执行的
- 运行环境提供的api，有的是同步的例如console.log()，有点是异步的例如setTimeOut()

## promise链式调用

- promise函数的then方法会返回一个全新的promise对象

- 后面的then方法就是在为上一个then返回的promise对象注册的回调
- 前面then方法中回调函数的返回值，会作为后一个then回调函数的参数
- 如果then中的回调的返回值是promise，那么后面的then中的回调回等待这个promise执行结束再执行

