# this

```
var name = "name";
var person = {
  name: "name1",
  getName: function(){
    return this.name;
  }
}
var getName = person.getName;
console.log(getName()); // name

```

this 指向触发事件的元素，也就是始事件处理程序所绑定到的 DOM 节点。

1.由 new 调用：绑定到新创建的对象 2.由 call 或 apply、bind 调用：绑定到指定的对象 3.由上下文对象调用：绑定到上下文对象 4.默认：全局对象

# 箭头函数
