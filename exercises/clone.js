function clone(obj) {
  let copiedObj = {};
  for (let key in obj) {
    copiedObj[key] = obj[key];
  }
  return copiedObj;
}

let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true,
  },
  age: 33,
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age); // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName); // false
console.log(clonedPerson.name.isStageName); // false
