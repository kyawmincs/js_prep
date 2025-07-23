let rlSync = require('readline-sync');

const multiply = () => {
  let num1 = rlSync.question('What is the first number?\n');
  let num2 = rlSync.question('What is the second number?\n');
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
};

multiply();
