/**
 * 访问者模式
 * 访问者模式是在不改变基本类的情况下，修改一些逻辑，把逻辑都封装到了访问者中，只需要调用不同的访问者，能获取到不同的逻辑
 * 遵循了单一原则 提高了系统的复用性、可扩展性
 * 但是违背了开放封闭原则，修改基本类的时候需要修改所有访问者
 */

class VIP1 {
  visit(goods) {
    return goods.getPrice() * 0.9;
  }
}

class VIP2 {
  visit(goods) {
    return goods.getPrice() * 0.8;
  }
}

class Goods1 {
  constructor(price) {
    this.price = price;
  }

  accept(vip) {
    return vip.visit(this);
  }

  getPrice() {
    return this.price;
  }
}

class Goods2 {
  constructor(price) {
    this.price = price;
  }

  accept(vip) {
    return vip.visit(this);
  }

  getPrice() {
    return this.price;
  }
}

const goods1 = new Goods1(10);
const goods2 = new Goods2(20);
const vip1 = new VIP1();
const vip2 = new VIP2();

console.log(goods1.accept(vip1), goods1.accept(vip2));
console.log(goods2.accept(vip1), goods2.accept(vip2));
