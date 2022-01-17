# Prototype

Prototype 的定义是共享单元对象，是一个对象只是根据其职能不同给予的一个名称函数独有的

# _proto_

*proto*是历史遗留问题，原来根据设计 Prototype 是隐式引用，隐式引用是在对象上无法访问到 Prototype 对象只能通过 Object.getPrototypeOf(obj)方法来间接获取到对象的 Prototype 但是由于各大游览器的设计出现了*proto*来显式访问，故而在语言设计上进行了妥协承认了*proto*存在，可以通过 obj.*proto*和 Object.getProtoTypeOf(obj)来访问 Prototype 对象，通过 obj._proto_ = obj1 和 Object.setProtoType(obj,obj1)来设置 Prototype 对象对象独有的

```js
const obj = new Object({});

obj._proto_ === Object.getProtoTypeOf(obj); // true
```

# constructors

对象独有的,对象指向一个函数，这个函数也就是该对象的构造函数

# typeof

# instanceof

# ES5 中继承

## 显式继承

## 隐式继承

# new 关键字

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sex = 'male';
}

Person.prototype.isHandsome = true;
Person.prototype.sayName = function () {
  console.log(`Hello , my name is ${this.name}`);
};

let handsomeBoy = new Person('xiaoming', 25);
console.log(handsomeBoy.name);
console.log(handsomeBoy.sex);
console.log(handsomeBoy.isHandsome);
handsomeBoy.sayName();
```

1 创建一个新的空对象， 2 把对象的*proto* 指向构造函数的 Prototype 3 访问到构造函数里的属性 4 绑定 this

```js
function objectFactory() {
  const obj = new Object();

  Constructor = [].shift.call(arguments);

  const F = function () {};

  F.prototype = Constructor.prototype;

  obj = new F();

  Constructor.apply(obj, arguments);

  return obj;
}
```
