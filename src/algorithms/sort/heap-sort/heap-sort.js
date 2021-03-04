const heapAjust = (array, current, len) => {
  // 左节点
  let child = 2 * current + 1;
  while (child < len) {
    // 找出大的子节点
    if (child + 1 <= len && array[child + 1] > array[child]) {
      child += 1;
    }
    if (array[child] > array[current]) {
      [array[child], array[current]] = [array[current], array[child]];
      // 遍历接下来的节点
      current = child;
      child = 2 * current + 1;
    } else {
      break;
    }
  }
};
export const buildHeap = (array) => {
  const len = array.length;
  for (let i = Math.floor(len / 2); i >= 0; i -= 1) {
    heapAjust(array, i, len);
  }
};

const heapSort = (array) => {
  buildHeap(array);
  for (let i = array.length - 1; i >= 0; i -= 1) {
    // 互换数据
    [array[i], array[0]] = [array[0], array[i]];
    // 将前面的元素重新调整成大根堆
    heapAjust(array, 0, i - 1);
  }
  return array;
};
export default heapSort;
