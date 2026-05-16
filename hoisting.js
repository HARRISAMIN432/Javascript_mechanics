/*
1. WHAT IS HOISTING?

Hoisting is JavaScript's behavior where:

   Variable and function declarations are
   moved (conceptually) to the top of their scope
   during the compilation phase.

BUT IMPORTANT:
- Only declarations are hoisted
- NOT initializations
*/

// 2. VAR HOISTING (FUNCTION SCOPED)

console.log(a); // undefined (NOT error)

var a = 10;

/*
Behind the scenes JS behaves like:

var a;
console.log(a); // undefined
a = 10;

👉 var is hoisted AND initialized as undefined
*/

// 3. LET & CONST HOISTING (TDZ)

// console.log(b); //  ReferenceError (TDZ)
let b = 20;

// console.log(c); // ReferenceError (TDZ)
const c = 30;

/*
IMPORTANT:
- let and const ARE hoisted
- BUT NOT initialized
- They exist in Temporal Dead Zone (TDZ)
*/

// 4. FUNCTION HOISTING (FULL HOISTING)

sayHello(); // Works!

function sayHello() {
  console.log("Hello from function hoisting");
}

/* Function declarations are fully hoisted. You can call them before they are defined
 */

// 5. FUNCTION EXPRESSIONS (NOT FULLY HOISTED)
// greet(); // TypeError: greet is not a function

var greet = function () {
  console.log("Hello from function expression");
};

/*
Why error?
- Only variable declaration is hoisted
- NOT the function assignment

Behind the scenes:

var greet;
greet(); // undefined()

greet = function() {}
*/

// 6. ARROW FUNCTIONS (BEHAVIOR LIKE EXPRESSIONS)

// hi(); Error

const hi = () => {
  console.log("Arrow function example");
};

/*
Arrow functions behave like const/let variables
→ They are in TDZ until initialized
*/

// 7. SUMMARY (VERY IMPORTANT)

/*
VAR:
- Hoisted
- Initialized as undefined

LET / CONST:
- Hoisted
- Not initialized (TDZ)

FUNCTION DECLARATION:
- Fully hoisted
- Can be called before definition

FUNCTION EXPRESSIONS:
- Variable hoisted only
- Function assigned later
*/
