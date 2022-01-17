class Animal {
  age;
  name;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  run() {
    console.log('Animal run');
  }
  eat() {
    console.log('Animal eat');
  }
  sleep() {
    console.log('Animal sleep');
  }
  toString() {
    console.log(`Animal to name: ${this.name} age: ${this.age}`);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }
  run() {
    console.log('Dog run');
  }
  eat() {
    console.log('Dog eat');
  }
  sleep() {
    console.log('Dog sleep');
  }
  toString() {
    console.log(`Dog to name: ${this.name} age: ${this.age}`);
  }
}

class Pig extends Animal {
  constructor(name, age) {
    super(name, age);
  }
  run() {
    console.log('Pig run');
  }
  eat() {
    console.log('Pig eat');
  }
  sleep() {
    console.log('Pig sleep');
  }
  toString() {
    console.log(`Pig to name: ${this.name} age: ${this.age}`);
  }
}

class Factory {
  createClass(name, age, createName) {
    let fn;
    switch (createName) {
      case 'Dog':
        fn = Dog;
        break;
      case 'Pig':
        fn = Pig;
        break;
      default:
        break;
    }
    return new fn(name, age);
  }
}

const factory = new Factory();
const dog = factory.createClass('dog', 3, 'Dog');
const pig = factory.createClass('pig', 4, 'Pig');

dog.run();
dog.eat();
dog.sleep();
dog.toString();

pig.run();
pig.eat();
pig.sleep();
pig.toString();
