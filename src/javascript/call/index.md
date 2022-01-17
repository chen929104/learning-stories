# Call

```js
Function.prototype.myCall = function (thisArg, ...res) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`);
  }
  if (typeof thisArg === undefined || thisArg === null) {
    thisArg = window;
  }
  const obj = new Object(thisArg);
  const _fn = this;
  obj._fn = _fn;
  return obj._fn(...res);
};
```

# Apply

```js
Function.prototype.myApply = function (thisArg, args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a function`);
  }
  if (typeof args !== 'object') {
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }
  const obj = new Object(thisArg);
  const _fn = this;
  obj_fn = _fn;
  return obj._fn(...args);
};
```

# bind

```js
Function.prototype.myBind = function (thisArg) {
  const self = this;
  return function () {
    return self.apply(thisArg, [].slice.call(arguments));
  };
};
```
