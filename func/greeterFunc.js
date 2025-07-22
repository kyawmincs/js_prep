let rlSync = require('readline-sync');

const getName = prompt => {
  return rlSync.question(prompt);
};

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);
