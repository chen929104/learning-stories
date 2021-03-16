const rainTerracesDoublePointer = (terraces) => {
  let waterAmount = 0;
  // 定义左指针位置
  let left = 0;
  // 定义右指针位置
  let right = terraces.length - 1;
  // 定义左边最大值
  let leftMax = 0;
  // 定义右边最大值
  let rightMax = 0;

  // 循环，两边同步循环,以两边指针数值的最小值为准
  // 如果左侧大就移动右边的，加上注水量
  // 如果右侧大就移动左边的，加上注水量
  // 有较小的那一侧有较大的那一边保底可以直接使用
  while (left < right) {
    if (terraces[left] < terraces[right]) {
      if (terraces[left] > leftMax) {
        // 把左侧的最大值记录
        leftMax = terraces[left];
      } else {
        // 加上注水量
        waterAmount += leftMax - terraces[left];
      }
      left += 1;
    } else {
      if (terraces[right] > rightMax) {
        // 记录右侧最大值
        rightMax = terraces[right];
      } else {
        waterAmount += rightMax - terraces[right];
      }
      right -= 1;
    }
  }
  return waterAmount;
};

export default rainTerracesDoublePointer;
