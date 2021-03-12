const fibonacciNumberRecursive = (number) => {
  return number > 1 ? number * fibonacciNumberRecursive(number - 1) : 1;
};
export default fibonacciNumberRecursive;
