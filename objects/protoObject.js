let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

console.log(myObj);

// "foo" -> primitive
// 3.1415 -> primitive
// false -> primitive
// undefined -> primitive
// array -> object
// function bar() { return "bar"; } --> object
// { a: 1, b: 2 } -> simple object
// foo -> identifier not an object
