function merge(arrLeft, arrRight) {
  const result = [];

  while (arrLeft.length > 0 && arrRight.length > 0) {
    if (arrLeft[0] > arrRight[0]) {
      result.push(arrRight.shift());
    } else {
      result.push(arrLeft.shift());
    }
  }
  return result.concat(arrLeft, arrRight);
}

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);

  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
