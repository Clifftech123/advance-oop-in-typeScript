/*
Inheritance is a fundamental concept in object-oriented programming that allows a class to inherit properties and methods from another class. In TypeScript, you can use the extends keyword to create a subclass that inherits from a superclass.


*/


class Animal {
    // properties
    name: string;
    color: string;

    // constructor
    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    // methods
    speak() {
        console.log("Hi, I am ", this.name, "and I am ", this.color);
    }


}


// create an object of the class

let animal1 = new Animal("Lion", "golden");

animal1.speak();


// extends  the Animal class


class Lion extends Animal {

    // constructor
    constructor(name: string, color: string) {
        super(name, color);
    }

    // methods
    speak() {
        console.log("Hi, I am ", this.name, "and I am ", this.color);
    }

    // method to override the speak method
    roar() {
        console.log("ROAR!");
    }
}






// create an object of the class
let lion1 = new Lion("Mufasa", "golden");


// call the methods

lion1.speak();
lion1.roar();




// third example with person class

class Person {
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}


// create a subclass of the Person class
class Student extends Person {
  constructor(name: string, age: number, public grade: number) {
    super(name, age);
  }
  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

const person = new Person('John', 30);
person.sayHello(); // Output: 'Hello, my name is John and I'm 30 years old.'

const student = new Student('Jane', 15, 9);
student.sayHello(); // Output: 'Hello, my name is Jane and I'm 15 years old.'
student.study(); // Output: 'Jane is studying in grade 9.'