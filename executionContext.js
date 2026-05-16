/*
1. WHAT IS EXECUTION CONTEXT?

An Execution Context is the environment in which JavaScript code is evaluated and executed.

👉 It contains everything needed to run code:
   - Variables
   - Functions
   - Scope
   - this binding
   - Lexical environment

Every time JS runs code, it creates an execution context.
*/

// 2. TYPES OF EXECUTION CONTEXT

/*
1. Global Execution Context (GEC)
   - Created when JS file starts
   - Only ONE per program

2. Function Execution Context (FEC)
   - Created whenever a function is called
   - Can have many

3. Eval Execution Context (rare)
*/

// 3. TWO PHASES OF EXECUTION CONTEXT

/*
Each Execution Context has 2 phases:

1. Creation Phase (Memory Allocation)
2. Execution Phase (Code runs line by line)
*/

// 4. CREATION PHASE (VERY IMPORTANT)

/*
During Creation Phase:

 var variables → initialized as undefined
 function declarations → fully stored in memory
 let/const → hoisted but NOT initialized (TDZ)
 this → assigned based on context
*/

console.log(a); // undefined (var hoisting)
var a = 10;

sayHi(); // works (function hoisting)

function sayHi() {
  console.log("Hello Execution Context");
}

// 5. EXECUTION PHASE

/*
Now code runs line by line
*/

var x = 5;
var y = 10;

function add() {
  var result = x + y;
  return result;
}

console.log(add());

// 6. FUNCTION EXECUTION CONTEXT (FEC)

/*
When add() is called:

A new Execution Context is created:

 Memory Phase:
   - result = undefined
   - x, y are NOT copied, they are referenced via scope chain

 Execution Phase:
   - result = x + y
   - return result
*/

// 7. SCOPE CHAIN (LEXICAL ENVIRONMENT)

/*
Each execution context has access to:

 Its own variables
 Outer scope variables
 Global variables

This chain of access is called SCOPE CHAIN
*/

var globalVar = "global";

function outer() {
  var outerVar = "outer";

  function inner() {
    var innerVar = "inner";

    console.log(innerVar); // own scope
    console.log(outerVar); // outer scope
    console.log(globalVar); // global scope
  }

  inner();
}

outer();

// 8. LEXICAL ENVIRONMENT

/*
Lexical Environment =
   - Local Memory + Reference to Outer Environment

This is what enables:
 Scope chain
 Closures
*/

// 9. THIS KEYWORD IN EXECUTION CONTEXT

/*
Value of 'this' depends on context:

1. Global context → window (browser) / global (Node)
2. Function → undefined (strict mode) or global object
3. Object method → object itself
*/

function showThis() {
  console.log(this);
}

showThis();

const obj = {
  name: "JS",
  method: function () {
    console.log(this.name);
  },
};

obj.method();

// 10. CALL STACK RELATIONSHIP

/*
Execution contexts are managed using CALL STACK

Example:

1. Global EC pushed
2. functionA EC pushed
3. functionB EC pushed
4. functionB finishes → popped
5. functionA finishes → popped
6. Global EC remains
*/

function A() {
  B();
}

function B() {
  console.log("Inside B");
}

A();

/*
When JS runs code:

1. Global Execution Context is created
2. Memory is allocated (hoisting)
3. Code runs line by line
4. Each function call creates new Execution Context
5. Contexts are stacked in Call Stack
6. Scope Chain + Lexical Environment resolve variables
*/
