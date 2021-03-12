const euclideanAlgorithm = (a, b) => {
  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }
  return a || b;
};

export default euclideanAlgorithm;
