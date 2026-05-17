/*
  ---------------------------------------------
  Complete Guide to Object-Oriented Programming in JavaScript
  ---------------------------------------------

  Topics covered:
  1. What is OOP?
  2. Objects & classes
  3. Encapsulation
  4. Abstraction
  5. Inheritance
  6. Polymorphism
  7. Prototype-based OOP
  8. ES6 classes
  9. Static methods
  10. Getters & Setters
  11. Composition vs Inheritance
*/

/*************************************************
 * 1. What is OOP?
 *************************************************/

// OOP is a programming paradigm based on objects
// that contain data (properties) and behavior (methods).

const user = {
  name: "Ali",
  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();

/*************************************************
 * 2. Objects & Classes
 *************************************************/

// Class = blueprint for creating objects

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
  }
}

const p1 = new Person("John", 25);
p1.introduce();

/*************************************************
 * 3. Encapsulation
 *************************************************/

// Encapsulation = hiding internal details

class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance());

// console.log(acc.#balance); // ERROR (private)

/*************************************************
 * 4. Abstraction
 *************************************************/

// Abstraction = hiding complex implementation

class CoffeeMachine {
  start() {
    this._boilWater();
    this._brew();
    console.log("Coffee ready!");
  }

  _boilWater() {
    console.log("Boiling water...");
  }

  _brew() {
    console.log("Brewing coffee...");
  }
}

const machine = new CoffeeMachine();
machine.start();

/*************************************************
 * 5. Inheritance
 *************************************************/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks");
  }
}

const d = new Dog("Tommy");
d.speak();

/*************************************************
 * 6. Polymorphism
 *************************************************/

// Same method behaves differently in different classes

class Cat extends Animal {
  speak() {
    console.log(this.name + " meows");
  }
}

const animals = [new Dog("Doggo"), new Cat("Kitty")];

animals.forEach((a) => a.speak());

/*************************************************
 * 7. Prototype-based OOP
 *************************************************/

function Car(model) {
  this.model = model;
}

Car.prototype.drive = function () {
  console.log(this.model + " is driving");
};

const c = new Car("Tesla");
c.drive();

/*************************************************
 * 8. ES6 Classes (syntactic sugar)
 *************************************************/

class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const u = new User("Alex");
u.greet();

/*************************************************
 * 9. Static Methods
 *************************************************/

class MathUtil {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtil.add(2, 3));

// static methods belong to class, not instance

/*************************************************
 * 10. Getters & Setters
 *************************************************/

class Product {
  constructor(price) {
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value > 0) this._price = value;
  }
}

const p = new Product(100);
p.price = 200;
console.log(p.price);

/*************************************************
 * 11. Composition vs Inheritance
 *************************************************/

// Composition = building objects using other objects

const canFly = {
  fly() {
    console.log("Flying...");
  },
};

const canSwim = {
  swim() {
    console.log("Swimming...");
  },
};

class Duck {}

Object.assign(Duck.prototype, canFly, canSwim);

const duck = new Duck();
duck.fly();
duck.swim();

/*
  KEY TAKEAWAYS
  ---------------------------------
  - OOP organizes code into objects
  - Encapsulation hides data
  - Abstraction hides complexity
  - Inheritance reuses code
  - Polymorphism changes behavior
  - JS uses prototype-based OOP under the hood
  - Composition is often better than deep inheritance
*/
