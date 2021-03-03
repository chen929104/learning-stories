const selectionSort = (arr) => {
  const array = arr;
  for (let i = 0; i < array.length; i += 1) {
    let min = i;
    for (let j = i; j < array.length; j += 1) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[min], array[i]] = [array[i], array[min]];
    }
  }
  return array;
};

export default selectionSort;
