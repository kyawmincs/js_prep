let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray[i].length; j++) {
//     if (myArray[i][j] % 2 == 0) console.log(myArray[i][j]);
//   }
// }

myArray.forEach(nestArray => {
  nestArray.forEach(element => {
    if (element % 2 == 0) console.log(element);
  });
});

let myArray2 = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let stringArray = myArray2.map(element => {
  if (element % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

// let stringArray = [];
// for (let i = 0; i < myArray.length; i++) {
//   stringArray[i] = [];
//   for (let j = 0; j < myArray[i].length; j++) {
//     stringArray[i][j] = myArray[i][j] % 2 == 0 ? 'Even' : 'Odd';
//   }
// }

console.log(stringArray);
