/*
GitHub Copilot: Sure, I can help you with that! 

In TypeScript, you can define a class to create objects that have properties and methods. A class is a blueprint for creating objects, and it defines the properties and methods that the objects will have. 

On the other hand, an object is an instance of a class. When you create an object, you are creating a new instance of the class, and you can set the properties and call the methods of that object.

*/


// Example with person class
class person {
  name: string;
  age: number;
  address: string;

  // constructor

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // methods to get the values

    displayMessage() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
        
  }
}


// create an object of the class

let person1 = new person("John", 25, "New York");

// person 2

let person2 = new person("Mary", 23, "London");



// call the method
person1.displayMessage();
person2.displayMessage();


// second example with car class

class car {
    model: string;
    color: string;
    price: number;
    
    // constructor
    
    constructor(model: string, color: string, price: number) {
        this.model = model;
        this.color = color;
        this.price = price;
    }
    
    // methods to get the values
    
        displayMessage() {
            console.log(`Model: ${this.model}, Color: ${this.color}, Price: ${this.price}`);
            
    }
}

// create an object of the class

let car1 = new car("BMW", "Black", 50000);

// car 2

let car2 = new car("Mercedes", "White", 60000);


// call the method

car1.displayMessage();
car2.displayMessage();



// third example with Animal


class Animal {
    name: string;


    // constructor

    constructor(name: string) {
        this.name = name;
    }

    // speak method that tells that the animal is making noise

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}


const animal1 = new Animal("Lion");

const animal2 = new Animal("Tiger");

animal1.speak(); // Lion makes a noise.

animal2.speak(); // Tiger makes a noise.



// example with Dog class that extends Animal class


class Dog extends Animal {
    breed: string;

    // constructor

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    // speak method that tells that the dog is barking

    speak() {
        console.log(`${this.name} barks ${this.breed}  .`);
    }
}


const dog1 = new Dog("Rex", "German Shepherd");

const dog2 = new Dog("Lassie", "Collie");

dog1.speak(); // Rex barks.

dog2.speak(); // Lassie barks.


