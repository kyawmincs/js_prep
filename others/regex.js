let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

// function allMatches(inputString, searchPattern) {
//   let matches = [];
//   for (let i = 0; i < words.length; i++) {
//     if (searchPattern.test(words[i])) {
//       matches.push(words[i]);
//     }
//   }
//   return matches;
// }

function allMatches(words, pattern) {
  return words.filter(word => pattern.test(word));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
