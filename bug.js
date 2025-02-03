function foo(a, b) {
  return a + b;
}

console.log(foo(1, '2')); // Output: "12"

//This is an example of type coercion in Javascript.  The number 1 is automatically coerced into a string, then concatenated with the string '2'.  This can lead to unexpected results.  It is important to be aware of type coercion and take steps to avoid it when necessary.