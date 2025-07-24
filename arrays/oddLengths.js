// const oddLengths = inputArray => {
//   let lengthArray = [];
//   lengthArray = inputArray.map(element => element.length);
//   return lengthArray.filter(element => element % 2 == 1);
// };

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
