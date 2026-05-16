var x = 23;
console.log(window.x); // Prints 23 in browser
// Global object
// let and const can be accessed anywhere in the script but hidden bu global object

function myFunc() {
  var x = 43; // Creates a new variable x = 43 inside the function
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log("a: ", a);
  // console.log("b: ", b);  Reference Error
  var y = 10;
}

myFunc();

// Variables declared with var are limited to whole function no matter in which block they are defined
// Variables declared with let are only limited to the block scope

// Global object in browser is window
// Global object in terminal is global

// Any var variable declared within root becomes global variable
