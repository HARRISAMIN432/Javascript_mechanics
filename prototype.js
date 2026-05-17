let person = {}; // Object created

person.name = "Shaheen"; // Attribute name added to person object
person.age = 26; // // Attribute age added to person object

person.eat = function () {
  console.log("Person is eating");
};

person.sleep = function () {
  console.log("Person is sleeping");
};

console.dir(person);
/*
{
  name: 'Shaheen',
  age: 26,
  eat: [Function (anonymous)], 
  sleep: [Function (anonymous)]
}
*/

// Create Person Object Creator
// function Person(name, age) {
//   let person = {};
//   person.name = name;
//   person.age = age;

//   person.eat = function () {
//     console.log("Person is eating");
//   };

//   person.sleep = function () {
//     console.log("Person is sleeping");
//   };

//   return person;
// }

// const Babar = Person("Babar", 31);
// console.log(Babar);

// Instead of creating eat() and sleep() for every object. We can use common methods for all objects

const PersonMethods = {
  eat() {
    console.log("Person is eating");
  },

  sleep() {
    console.log("Person is sleeping");
  },
};

// Every function starting with a capital letter is a constructor function
function Person(name, age) {
  let person = {};
  person.name = name;
  person.age = age;
  person.eat = PersonMethods.eat();
  person.sleep = PersonMethods.sleep();
  return person;
}

const Babar = Person("Babar", 31);
console.log(Babar);

// We can use Object.create() so we dont have to change methods in PersonMethods and object twice

const captain = {
  name: "Shan",
  age: 36,
  country: "Pakistan",
};

const player = Object.create(captain);
console.log("Player: ", player); // Empty Object
console.log(player.name); // Prints Shan

// Even though Player was empty. Its parent is captain and can access its properties
// This is called prototype. Object.create(parentObj) creates a child Obj that is empty but it can access all properties of its parent

Person.prototype.sayHi = () => {
  console.log("Hi!");
}; // Global method
