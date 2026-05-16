var num1 = 2;
var num2 = 3;

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 3)); // Prints 5

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

// ===============================
// WHY CLOSURES ARE USED IN JS
// ===============================

/*
1. Preserve state without using global variables

Without closures, you'd need global variables:
- These can be modified by any part of the code
- This leads to bugs and poor control

Closures allow "private state"
*/

function counter() {
  let count = 0;

  return function () {
    count++; // value is preserved between calls
    return count;
  };
}

/*
2. Create private variables (encapsulation)

JavaScript does NOT have true private variables (in older syntax),
so closures are used to hide data from outside access.
*/

function bankAccount() {
  let balance = 1000; // private variable

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}

/*
3. Function factories (custom behavior generators)

Closures allow functions to "remember" configuration values.
*/

function multiplier(x) {
  return function (y) {
    return x * y; // x is remembered from outer function
  };
}

/*
4. Caching / memoization

Closures help store previous results without global variables.
*/

function memo() {
  let cache = {};

  return function (n) {
    if (cache[n]) return cache[n];

    cache[n] = n * n; // pretend expensive computation
    return cache[n];
  };
}

/*
5. Required for async operations (setTimeout, promises, callbacks)

Variables are still needed after outer function finishes,
so closures keep them alive.
*/

function delayedMessage(msg) {
  setTimeout(function () {
    console.log(msg); // msg is preserved via closure
  }, 1000);
}
