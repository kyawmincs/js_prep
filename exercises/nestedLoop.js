let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated'],
];

for (let innerArray of vocabulary) {
  for (let element of innerArray) {
    console.log(element);
  }
}

for (let i = 0; i < vocabulary.length; i++) {
  for (let j = 0; j < vocabulary[i].length; j++) {
    console.log(vocabulary[i][j]);
  }
}
