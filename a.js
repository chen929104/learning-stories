// const tasks = []; // 这里存放异步操作的 Promise
// const output = (i) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(new Date(), i);
//       resolve();
//     }, 1000 * i);
//   });

// // 生成全部的异步操作
// for (var i = 0; i < 5; i++) {
//   tasks.push(output(i));
// }

// // 异步操作完成之后，输出最后的 i
// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date(), i);
//   }, 1000);
// });

// Function.prototype.myCall = function (that, ...res) {
//   if (typeof this !== 'function') {
//     throw '';
//   }
//   const obj = new Object(that);
//   const _fn = this;
//   obj._fn = _fn;
//   return obj._fn(...res);
// };

// const a = function () {
//   console.log(this.a);
// }

// a.myCall({ a: 1 });

// const a = function (a) {
//   console.log(a, this.c, 4);
// };
// Function.prototype.myBind = function (thisArg) {
//   const self = this;
//   return function () {
//     return self.apply(thisArg, [].slice.call(arguments));
//   };
// };

// const b = a.myBind({ c: 1 });
// console.log(b(223));

// prototype  _proto_ constructor

// const obj = {};
// console.dir(Array.prototype);
// console.log(Array instanceof Object);

Object.hasProperty();
