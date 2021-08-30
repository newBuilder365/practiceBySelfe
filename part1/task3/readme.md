# Promise源码实现
## Promise的一些特性

- Promise就是一个类， 在执行这个类的时候会传递一个执行器进去，这个执行器会立即执行
- Promise中有三种状态，pending-等待  fulfilled-成功 rejected-失败  默认为pengding 
- promise中的状态一旦发生改变就不会再发生更改
- resolve resject是用来改变状态的 resolve ===>fulfilled   reject ===>rejected、
- then方法是可以被链式调用的，当前then方法回调里面的参数，实际上是上一个then方法内回调的返回结果
- then方法里的回调函数可以返回一个常量，这个常量会作为下一个then方法里第一个回调函数里的参数
- then方法里的回调函数也可以返回一个promise对象，会将这个promise对象的状态传递到下一个then方法的h=回调函数中去

