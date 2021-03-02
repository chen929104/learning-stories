const bubbleSort = (arr) => {
  const array = arr;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i; j += 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

export default bubbleSort;
