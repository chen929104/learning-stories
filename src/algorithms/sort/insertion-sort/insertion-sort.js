const insertionSort = (arr) => {
  const array = arr;
  for (let i = 0; i < array.length; i += 1) {
    let current = i;
    while (array[current - 1] !== undefined && array[current] < arr[current - 1]) {
      [array[current - 1], array[current]] = [array[current], array[current - 1]];
      current -= 1;
    }
  }
  return array;
};
export default insertionSort;
