function foo(a, b) {
  // Check if both inputs are numbers before adding them
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    //Handle the error in a better way, you could throw an error, or return a default value
    return 0;
  }
}

console.log(foo(1, '2')); // Output: 0
console.log(foo(1, 2)); // Output: 3