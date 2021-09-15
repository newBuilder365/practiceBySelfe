function Foo(m, n) {
    let ret = m + n
    this.m = m
    this.n = n
    return 30
  }
  
  // 01 普通函数调用
  let ret = Foo(10, 20)   
  console.log(ret)   //30
  
  // 02 构造函数执行
  let res = new Foo(20, 20)  
  console.log(res)  //{ m:20, n:20 }