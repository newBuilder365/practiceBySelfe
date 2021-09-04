# TypeScript

#### 强类型与弱类型（类型安全角度）

-  强类型不允许随意的隐式类型转换，而弱类型可以

-  变量类型允许随时改变的特点，不是强弱类型的区别



#### 静态类型与动态类型（类型检查角度）

- 静态类型，参数类型一旦定义就不能改变

- 动态类型，参数类型可以改变

#### 强类型的优势

- 错误更早的暴露，不需要等到代码执行阶段才暴露

- 代码更智能，编码更准确
- 重构更牢靠
- 减少不必要的类型判断

#### Typescript 是JavaScript的超集

#### TypeScript包含 JavaScript  类型系统  ES6+

#### typescript选择编译成es5以及下时，使用es6的Symbol会报错，可以在tsConfig中的lib中添加ES2915以及“DOM”解决

#### typescript显示中文错误消息的方法

```js
tsc --locale zh-CN
```

##### 类型断言

告诉编辑器当前确定会是什么类型

```tsx
const num1 = res as number
const num2 = <number>res   //JSX 下不能使用
```

##### 抽象类

```tsx
abstract class Animal {}
//前面加关键字 abstract  只能被继承，不能new
```

##### 泛型

将定义时不能确定的类型作为参数传进去

