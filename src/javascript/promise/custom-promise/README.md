# Promise/A+规范

Promise 表示一个异步操作的最终结果。与 Promise 最主要的交互方法是通过将函数传入它的 then 方法从而获取得 Promise 最终的值或 Promise 最终最拒绝（reject）的原因。

## 1. 术语

promise 是一个包含了兼容 promise 规范 then 方法的对象或函数， thenable 是一个包含了 then 方法的对象或函数。 value 是任何 Javascript 值。 (包括 undefined, thenable, promise 等). exception 是由 throw 表达式抛出来的值。 reason 是一个用于描述 Promise 被拒绝原因的值。

## 2. 要求

### 2.1 Promise 状态

一个 Promise 必须处在其中之一的状态：pending, fulfilled 或 rejected.

- 如果是 pending 状态,则 promise：
- - 可以转换到 fulfilled 或 rejected 状态。
- 如果是 fulfilled 状态,则 promise：
- - 不能转换成任何其它状态。
- - 必须有一个值，且这个值不能被改变。
- 如果是 rejected 状态,则 promise 可以：
- - 不能转换成任何其它状态。
- - 必须有一个原因，且这个值不能被改变。

”值不能被改变”指的是其 identity 不能被改变，而不是指其成员内容不能被改变。

### 2.2 then 方法