/*****************************************************************
 * Exercise 3:
 *
 * Solve the Project Euler Problem 1 by implementing the following functions.
 *
 * Project Euler Problem 1 is the following:
 *
 *  "If we list all the natural numbers below 10 that are multiples of 3 or 5,
 *   we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *   Find the sum of all the multiples of 3 or 5 below 1000."
 *
 * You will need to use recursion, immutable variables, and higher order functions.
 */

/**
 * @param x Number to check
 * @returns True if x is divisible by three or five, false otherwise
 */
const isDivisibleByThreeOrFive = function (x) {
  return x % 3 === 0 || x % 5 === 0 ? true : false; // using ternary operator to simplify code
};

/**
 * Sum up to a specified number, ignoring values.
 *
 * /Hint/: This should be recursive
 *
 * @param f Function that returns true if we should keep the value, false otherwise
 * @param n Number to sum to (inclusive)
 * @returns the sum
 */
const selectiveSummer = f => n => {
  const summer_aux = n => {
    if (n < 0) {
      // base case
      return 0;
    } else {
      return f(n) ? n + summer_aux(n - 1) : summer_aux(n - 1);
    }
  };

  return summer_aux(n);
};

/**
 * Solves the project euler problem 1 for some number
 *
 * /Hint/: Remember to exclude the target number from the sum
 *
 * @param n Target number
 * @returns The sum of numbers up to but not including n that are divisible by three or five
 */
const filteredSum = n => {
  return selectiveSummer(isDivisibleByThreeOrFive)(n - 1);
};

/**
 * @returns Answer to project euler problem 1
 */
const projectEulerProblem1 = () => filteredSum(1000);
