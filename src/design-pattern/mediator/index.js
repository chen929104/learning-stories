/**
 * 中介者模式
 * 中介者模式可以解除对象和对象之间交换的耦合性，当对象的复杂度提高时，可能会增加中介者的复杂度，使得中介者变得难以维护
 */

class A {
  constructor(num) {
    this.num = num;
  }

  setNum(num, mediator) {
    this.num = num;
    if (mediator) {
      mediator.setB(num);
    }
  }
}

class B {
  constructor(num) {
    this.num = num;
  }

  setNum(num, mediator) {
    this.num = num;
    if (mediator) {
      mediator.setA(num);
    }
  }
}

class Mediator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  setA(num) {
    this.a.setNum(num);
  }

  setB(num) {
    this.b.setNum(num);
  }
}

const a = new A(10);
const b = new B(20);

const mediator = new Mediator(a, b);

console.log(a.num, b.num);
a.setNum(20, mediator);
console.log(a.num, b.num);
b.setNum(30, mediator);
console.log(a.num, b.num);
