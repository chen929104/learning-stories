# 栈

在计算机科学中，栈(Stack)是一种抽象的数据结构，用作表示元素的集合，主要是的操作有两种:

- push,添加元素到栈顶
- pop,把栈顶的元素弹出

以上两种操作可以简单的概括为"先进后出(LIFO = last in, first out)" 此外应该还有一些方法：

- peek,访问当前栈顶元素不去改动栈
- size,获取栈的长度

"栈"这个名称,可类比于一组物体的堆叠(一摞书,一摞盘子之类的)。

栈的 push 和 pop 操作的示意:

![Stack](https://upload.wikimedia.org/wikipedia/commons/b/b4/Lifo_stack.png)

栈是一种线性的数据结构,可以使用数组进行模拟,数组是一种连续的存储单元。可以很好的进行循环的遍历,但是在进行操作时大部分方法的时间复杂度是 O(n),另外数组是元素的一个有序集合，为了保证元素排列有序，它会占用更多的内存空间。在 js 中还有对象，我们可以用对象进行模拟栈,对象的操组比较灵活,因为存储空间不是连续的可以减少占用空间，可以直接通过索引来读取值,读取比较快。
