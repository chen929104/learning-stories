import fibonacciNumberRecursive from './fibonacci-number-recursive';
import fibonacciNumber from './fibonacci-number';

test('fibonacciNumberRecursive', () => {
  expect(fibonacciNumberRecursive(10)).toEqual(55);
  expect(fibonacciNumberRecursive(1)).toEqual(1);
  expect(fibonacciNumberRecursive(2)).toEqual(3);
  expect(fibonacciNumberRecursive(20)).toEqual(210);
  expect(fibonacciNumberRecursive(100)).toEqual(5050);
  expect(fibonacciNumberRecursive(500)).toEqual(125250);
  expect(fibonacciNumberRecursive(9999)).toEqual(49995000);
});
test('fibonacciNumber', () => {
  expect(fibonacciNumber(10)).toEqual(55);
  expect(fibonacciNumber(1)).toEqual(1);
  expect(fibonacciNumber(2)).toEqual(3);
  expect(fibonacciNumber(20)).toEqual(210);
  expect(fibonacciNumber(100)).toEqual(5050);
  expect(fibonacciNumber(500)).toEqual(125250);
  expect(fibonacciNumber(9999)).toEqual(49995000);
});
