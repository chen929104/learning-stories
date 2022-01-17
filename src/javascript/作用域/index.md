# 作用域

1 词法作用域(静态作用域)和动态作用域

```
var value = 2 ;

var foo = function(){
  console.log(value);
}

var bar = function(){
  var value = 1;
  foo();
}
bar();


```
