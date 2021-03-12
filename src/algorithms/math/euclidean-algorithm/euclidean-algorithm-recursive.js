const euclideanAlgorithmRecursive = (originalA, originalB) => {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return b === 0 ? a : euclideanAlgorithmRecursive(b, a % b);
};

export default euclideanAlgorithmRecursive;
