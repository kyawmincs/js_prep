const evenOrOdd = input => {
  if (!Number.isInteger(input)) {
    console.log('input is not a number');
    return;
  }

  if (input % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};

evenOrOdd('23');
