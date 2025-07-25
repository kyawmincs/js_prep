function maxValInList(inputArray) {
  let max = inputArray[0];
  for (let element of inputArray) if (element > max) max = element;
  return max;
}

maxValInList([1, 6, 3, 2]);
maxValInList([-1, -6, -3, -2]);
maxValInList([2, 2]);
