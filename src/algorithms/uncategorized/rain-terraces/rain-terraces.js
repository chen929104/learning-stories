const rainTerraces = (terraces) => {
  // 水的总量
  let waterAmount = 0;

  for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex += 1) {
    // 左边的最高点
    let leftHighestLevel = 0;
    for (let leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {
      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
    }
    // 右边最高点
    let rightHighestLevel = 0;
    for (let rightIndex = terraceIndex + 1; rightIndex < terraces.length; rightIndex += 1) {
      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
    }

    // 最大的积水量以最小的边为准
    const terraceBoundaryLevel = Math.min(rightHighestLevel, leftHighestLevel);
    if (terraceBoundaryLevel > terraces[terraceIndex]) {
      // 把积水量加上
      waterAmount += terraceBoundaryLevel - terraces[terraceIndex];
    }
  }
  return waterAmount;
};

export default rainTerraces;
