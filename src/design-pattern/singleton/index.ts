// class Singleton {
//   private instance;
//   public name = 'Singleton';
//   constructor() {
//     if (this.instance) {
//       return this.instance;
//     } else {
//       this.instance = new Singleton();
//       return this.instance;
//     }
//   }
// }

// console.log(new Singleton() === new Singleton());

const Singleton = (function () {
  let instance;
  return function () {
    if (!instance) {
      instance = {};
      return instance;
    }
    return instance;
  };
})();

console.log(Singleton() === Singleton());
