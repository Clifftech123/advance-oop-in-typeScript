/*

 Sure, in TypeScript, you can use the `get` keyword to define a getter method for a class property. A getter method allows you to retrieve the value of a property in a controlled way, and can perform additional logic before returning the value.

Here's an example:

*/

class Person {

    // private property
  private _age: number;

    // constructor
  constructor(public name: string, age: number) {
    this._age = age;
  }

    // getter method to get the value of the private property
  get age() {
    return this._age;
  }

    
    // set method to check the value of the private property
  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative.");
    }
    this._age = value;
  }

    
    // method to print the values to  the console
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// create two objects of the class
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);


// calling the method
person1.sayHello();
person2.sayHello();

person1.age = 30;
person1.sayHello();

// person1.age = -5; // Throws an error




// crating the setting and getting  methods to check if someone is eligible to vote


class Person1 {
    private _age: number;
    
    constructor(public name: string, age: number) {
        this._age = age;
    }
    

    //  getter method to get the value of the private property
    get age() {
        return this._age;
    }
    

    // set method to check the value of the private property
    set age(value: number) {
        if (value < 0) {
        throw new Error("Age cannot be negative.");
        }
        this._age = value;
    }
    
    // method to check if the person is eligible to vote
    checkEligibility() {
        if (this.age >= 18) {
        console.log(`${this.name} is eligible to vote.`);
        } else {
        console.log(`${this.name} is not eligible to vote.`);
        }
    }
}

// create two objects of the class


const person3 = new Person1("Alice", 25);
const person4 = new Person1("Bob", 30);
const person5 = new Person1("Charlie", 15);


/// calling the method


person3.checkEligibility();
person4.checkEligibility();
person5.checkEligibility();