const sumOfSquares = inputArray => {
  return inputArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue * currentValue,
    0,
  );
};

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
