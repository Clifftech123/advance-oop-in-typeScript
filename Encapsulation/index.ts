/*
Encapsulation is a concept in object-oriented programming that allows you to hide the internal state of an object and only expose it through public methods. In TypeScript, you can achieve encapsulation through access modifiers.
*/


class Person {
  constructor(private name: string, private age: number) {}
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  setName(name: string) {
    this.name = name;
  }
  setAge(age: number) {
    this.age = age;
  }
}

const person = new Person('John', 30);
person.sayHello(); // Output: 'Hello, my name is John and I'm 30 years old.'
console.log(person.getName()); // Output: 'John'
console.log(person.getAge()); // Output: 30

person.setName('Jane');
person.setAge(25);

person.sayHello(); // Output: 'Hello, my name is Jane and I'm 25 years old.'
console.log(person.getName()); // Output: 'Jane'
console.log(person.getAge()); // Output: 25




// Public access modifier

class Student {

    public Name: string;
    public Age: number;

    constructor(name: string, age: number) {
        this.Name = name;
        this.Age = age;
    }
  
}
// create an instance

const student = new Student('John', 30);
console.log(student.Name); // Output: 'John'
console.log(student.Age); // Output: 30



// Private access modifier

class Person2 {
  private age: number;
  constructor(age: number) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

const person2 = new Person2(30);
console.log(person.getAge()); // Output: 30
// person.age = 25; // Error: Property 'age' is private and only accessible within class 'Person'.

class Animal {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  getName() {
    return this.name;
  }
}

const dog = new Dog('Fido');
console.log(dog.getName()); // Output: 'Fido'
// console.log(dog.name); // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.