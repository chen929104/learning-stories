# React

> 我们认为，React 是用 JavaScript 构建快速响应的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。

可见，关键是实现快速响应。那么制约快速响应的因素是什么呢？

我们日常使用 App，浏览网页时，有两类场景会制约快速响应：

当遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿。

发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应。

这两类场景可以概括为：

- CPU 的瓶颈

- IO 的瓶颈

React15 架构可以分为两层：

- Reconciler（协调器）—— 负责找出变化的组件
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

在 Reconciler 中，mount 的组件会调用 mountComponent (opens new window)，update 的组件会调用 updateComponent (opens new window)。这两个方法都会递归更新子组件。

React16 架构可以分为三层：

Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入 Reconciler Reconciler（协调器）—— 负责找出变化的组件 Renderer（渲染器）—— 负责将变化的组件渲染到页面上可以看到，相较于 React15，React16 中新增了 Scheduler（调度器），让我们来了解下他。
