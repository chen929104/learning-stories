const fibonacciNumber = (number) => {
  let result = number;
  while (number > 1) {
    result += number - 1;
    number -= 1;
  }
  return result;
};

export default fibonacciNumber;
