const rainTerracesStack = (terraces) => {
  let waterAmount = 0;

  // 初始化数组成为一个栈 存放数组的下标
  const stack = [];
  // 初始化一个下标
  let current = 0;
  // 遍历整个数组
  // 当栈不为空时 并且当前的边界大于上一个边界 进入内循环 只有这样才能积水
  // 内循环每一次遍历都是以自身为底进行计算储水
  while (current < terraces.length) {
    while (stack.length !== 0 && terraces[current] > terraces[stack[stack.length - 1]]) {
      // 把栈顶元素出栈
      const top = stack.pop();
      // 前面没有边界时break
      if (stack.length === 0) {
        break;
      }
      // 计算两个边界的距离
      const distance = current - stack[stack.length - 1] - 1;
      // 计算两个边界最小值
      const currentTerraceBoundary = Math.min(terraces[current], terraces[stack[stack.length - 1]]);
      // 边界乘与距离则为储水量
      const boundedHeight = currentTerraceBoundary - terraces[top];
      waterAmount += distance * boundedHeight;
    }
    stack.push(current);
    current += 1;
  }
  return waterAmount;
};

export default rainTerracesStack;
