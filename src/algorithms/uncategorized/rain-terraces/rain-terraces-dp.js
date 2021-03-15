const rainTerracesDP = (terraces) => {
  // 水的总量
  let waterAmount = 0;
  // 初始化数组保留左右的最大值
  const leftMaxLevels = new Array(terraces.length).fill(0);
  const rightMaxLevels = new Array(terraces.length).fill(0);

  // 从左边开始计算露台的最高级别
  [leftMaxLevels[0]] = terraces;
  for (let current = 1; current < terraces.length; current += 1) {
    leftMaxLevels[current] = Math.max(terraces[current], leftMaxLevels[current - 1]);
  }
  // 从左边开始计算露台的最高级别
  rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];
  for (let current = terraces.length - 2; current >= 0; current -= 1) {
    rightMaxLevels[current] = Math.max(terraces[current], rightMaxLevels[current + 1]);
  }
  // 先计算一个露台可以积攒多少水，在吧露台减去值就可以得出可以积累多少水
  for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex += 1) {
    // 选择左右两边的最小值
    const currentTerraceBoundary = Math.min(
      rightMaxLevels[terraceIndex],
      leftMaxLevels[terraceIndex],
    );
    // 当前值小于但前露台的最大积水量就可以积水
    if (currentTerraceBoundary > terraces[terraceIndex]) {
      waterAmount += currentTerraceBoundary - terraces[terraceIndex];
    }
  }
  return waterAmount;
};

export default rainTerracesDP;
