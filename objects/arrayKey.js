let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keyArray = Object.keys(obj).map(element => element.toUpperCase());
console.log(keyArray);
