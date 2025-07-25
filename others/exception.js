let names = ['bob', 'joe', 'steve', undefined, 'frank'];

try {
  names.forEach(name => {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  });
} catch (exception) {
  console.log('Something went wrong.');
}
