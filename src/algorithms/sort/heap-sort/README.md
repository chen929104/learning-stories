# 堆排序

对排序是一种基本排序方式,利用堆的特性，大根堆跟节点为最大的值,将最大的值与最后进行交换,获得一个新的数组,并进行重新生成一个新的堆,依次进行排序。可以将 Heapsort 视为一种改进的选择排序：类似于该算法，它将输入分为已排序和未排序的区域，并通过提取最大元素并将其移至已排序的区域来迭代地缩小未排序的区域。改进包括使用堆数据结构，而不是使用线性时间搜索来找到最大值

![堆排序](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## 复杂度

| 名称         |     最好      |     平均      |     最坏      | 内存 | 稳定 |
| ------------ | :-----------: | :-----------: | :-----------: | :--: | :--: |
| **冒泡排序** | n&nbsp;log(n) | n&nbsp;log(n) | n&nbsp;log(n) |  1   |  no  |
