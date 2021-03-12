import fibonacciNumberRecursive from './fibonacci-number-recursive';
import fibonacciNumber from './fibonacci-number';

test('fibonacciNumberRecursive', () => {
  expect(fibonacciNumberRecursive(10)).toEqual(3628800);
  expect(fibonacciNumberRecursive(1)).toEqual(1);
  expect(fibonacciNumberRecursive(2)).toEqual(2);
  expect(fibonacciNumberRecursive(10)).toEqual(3628800);
  expect(fibonacciNumberRecursive(20)).toEqual(2432902008176640000);
});
test('fibonacciNumber', () => {
  expect(fibonacciNumber(10)).toEqual(3628800);
  expect(fibonacciNumber(1)).toEqual(1);
  expect(fibonacciNumber(2)).toEqual(2);
  expect(fibonacciNumber(10)).toEqual(3628800);
  expect(fibonacciNumber(20)).toEqual(2432902008176640000);
});
