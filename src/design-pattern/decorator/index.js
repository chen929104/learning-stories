/**
 *  装饰者模式
 *  装饰器模式可以再不改变类的情况下，对于类进行一下修饰在,动态的增加一些逻辑。灵活的对类进行一些组合。
 */

// eslint-disable-next-line max-classes-per-file
class Car {
  star() {
    console.log('car start');
  }
}

class InvolvingCar {
  constructor() {
    this.car = new Car();
  }

  start() {
    this.car.start();
    console.log('InvolvingCars start');
  }
}

const car = new Car();
car.start();
const involvingCar = new InvolvingCar();
involvingCar.start();
