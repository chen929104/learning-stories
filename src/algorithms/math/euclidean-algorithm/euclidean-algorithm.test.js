import euclideanAlgorithmRecursive from './euclidean-algorithm-recursive';
import euclideanAlgorithm from './euclidean-algorithm';

test('euclideanAlgorithmRecursive', () => {
  expect(euclideanAlgorithmRecursive(1, 1)).toEqual(1);
  expect(euclideanAlgorithmRecursive(24, 18)).toEqual(6);
  expect(euclideanAlgorithmRecursive(13, 17)).toEqual(1);
  expect(euclideanAlgorithmRecursive(99, 9)).toEqual(9);
  expect(euclideanAlgorithmRecursive(100000, 10)).toEqual(10);
});
test('euclideanAlgorithm', () => {
  expect(euclideanAlgorithm(1, 1)).toEqual(1);
  expect(euclideanAlgorithm(24, 18)).toEqual(6);
  expect(euclideanAlgorithm(13, 17)).toEqual(1);
  expect(euclideanAlgorithm(99, 9)).toEqual(9);
  expect(euclideanAlgorithm(100000, 10)).toEqual(10);
});
