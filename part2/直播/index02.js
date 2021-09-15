function Foo() {
    this.m = 10
    this.n = 24
    this.getM = function () {
      console.log(this.m)
    }
  }
  Foo.prototype.getM = function () {
    console.log(this.m)
  }
  
  Foo.prototype.getN = function () {
    console.log(this.n)
  }
  
  let foo1 = new Foo
  let foo2 = new Foo
  console.log(foo1.getM === foo2.getM)  
  console.log(foo1.getN === foo2.getN)
  console.log(foo1.__proto__.getN === Foo.prototype.getN)  
  console.log(foo1.__proto__.getM === foo2.getM) 
  console.log(foo1.getM === Foo.prototype.getM) 
  console.log(foo1.constructor) 
  console.log(Foo.prototype.__proto__.constructor) 
  foo1.getM()  
  foo1.__proto__.getM() 
  foo2.getN()  
  Foo.prototype.getN() 