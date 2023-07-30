class Person {
  constructor(public name: string, public age: number) {}

    // methods to print the values to  the console
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.sayHello();
person2.sayHello();


// secpmd example with car class

class Car {
    constructor(public model: string, public color: string, public price: number) {}
    
    // methods to print the values to the console
    displayCarInfo() {
        console.log(
        `Model: ${this.model}, Color: ${this.color}, Price: ${this.price}`
        );
    }


    // method to calculate the price after discount


    calculateDiscount(discount: number) {
        
        let discountedPrice = this.price - discount;
        console.log(`Discounted Price: ${discountedPrice}`);
    }
}


// create an object of the class

let car1 = new Car("BMW", "Black", 300);
let car2 = new Car("Audi", "White", 400);


// calculate the discounted price

car1.calculateDiscount(50);
car2.calculateDiscount(40);


// having and interface and a class with the same name


// interface
interface IMessage {
  title: string;
  message: string;
  id: number;
}


// class
class Message {
  constructor(private message: IMessage) {}

    // method to display the message
  displayMessage() {
    console.log(
      `Title: ${this.message.title}\nMessage: ${this.message.message}\nID: ${this.message.id}`
    );
  }
}


// create an object of the class 
const message1 = new Message({
  title: "Hello",
  message: "This is a message",
  id: 1,
});


// create another object of the class
const message2 = new Message({
  title: "Greetings",
  message: "This is another message",
  id: 2,
});

// call the method
message1.displayMessage();
message2.displayMessage();