执行上下文

```
var scope = "global scope";
var a = function(){
  var scope = "local scope";
  function f (){
    console.log(scope)
  };
  return f();
};
a();

////////////////////////////////////////////////////////////////////////

var scope = "global scope";
var a = function(){
  var scope = "local scope";
  function f(){
    console.log(scope)
  };
  return f;
};
a()();

```

# 1 执行上下文是什么

执行上下文是在 js 代码中的运行环境的抽象概念。
