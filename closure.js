var num1 = 2;
var num2 = 3;

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(1, 2)); // Prints 3

function sum1() {
  return num1 + num2;
}

console.log(sum1()); // Prints 5 as num1 and num2 are at root

// Every function in JS acts as an object
console.dir(sum1); // dir acts as extended version of log. Its shows that properties of object that log() can't

// A closure is such that a child accesses data from its parent
function sum2() {
  // num2 is LOCAL to sum2()
  // It is recreated fresh every time sum2() is called
  var num2 = 3;

  // Returning an inner function creates a CLOSURE
  // The returned function "remembers" num2
  return function () {
    // num1 is NOT defined here → it is taken from GLOBAL scope
    let temp = num1 + num2;

    // IMPORTANT:
    // This modifies num2 (from closure), NOT num1
    num2++;

    return temp;
  };
}

console.log(sum2()());
// Step 1: sum2() runs → creates num2 = 3
// Step 2: returns inner function (closure created)
// Step 3: inner function executes immediately
// num1 = 2 (global), num2 = 3 (local closure)
// temp = 2 + 3 = 5
// num2 becomes 4 (inside closure)
// Output: 5

console.log(sum2()());
// Step 1: NEW call to sum2() → new num2 = 3 again
// Step 2: new function returned (new closure)
// num1 = 2 still (unchanged globally)
// temp = 2 + 3 = 5
// num2 becomes 4
// Output: 5

var myFunc = sum2();
// sum2() runs → creates a NEW closure with num2 = 3
// myFunc now holds that function + its memory (closure)

console.log(myFunc());
// num1 = 2 (global)
// num2 = 3 → temp = 2 + 3 = 5
// num2 becomes 4 (stored in closure)
// Output: 5

console.log(myFunc());
// num1 = 2
// num2 = 4 → temp = 2 + 4 = 6
// num2 becomes 5
// Output: 6
