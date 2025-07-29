let input = 'launch school tech & talk';

function makeCapital(inputString) {
  let arr = [];
  arr = inputString.split(' ');
  return arr
    .map(element => element[0].toUpperCase() + element.slice(1))
    .join(' ');
}

console.log(makeCapital(input));
