# Promise

## 1 为什么要用 Promise

在 js 中有同步和异步两种任务,同步由上而下执行,异步的时候我们往往不能直接拿到结果,需要等结果放回的时候进行回调,将结果给回调函数进行操作,当情况比较复杂时,很容易就会造成'回调地狱'。使代码的可阅读性变得很差因此出现了 Promise。

## 用法

```
let bool=false

 function fn (){
   retuen New Promise((resolve,reject)=>{
     if(bool){
       resolve('执行成功');
     }else{
       reject('执行失败‘);
     }
   })
 }
 //注意，成功和失败的回调函数都只能接收一个参数
 fn().then(data=>{console.log(data),error=>console.log(error)})
```
