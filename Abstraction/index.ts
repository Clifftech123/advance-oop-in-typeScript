/* 
Abstraction is a concept in object-oriented programming that allows you to hide the implementation details of a class and only expose the essential features to the outside world. In TypeScript, you can achieve abstraction through abstract classes and interfaces. 

*/


abstract class Animal {
    constructor(public name: string) { }
    abstract makeSound(): void;
   
}


//  the second the class 
class Dog extends Animal {
    makeSound(): void {
        console.log(this.name)
    }
}

//  the third class
class Cat extends Animal {
    makeSound(): void {
        console.log(this.name)
    }
}


// class instance


const dog = new Dog('dog')
const cat = new Cat('cat')


dog.makeSound()
cat.makeSound()




// ABSTRACTION WITH INTERFACE

// the interface
interface Shape {
  name: string;
  getArea(): number;
}


// the first class
class Rectangle implements Shape {
  constructor(public name: string, private width: number, private height: number) {}
  getArea() {
    return this.width * this.height;
  }
}

// the second class
class Circle implements Shape {
  constructor(public name: string, private radius: number) {}
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

// the function  tha loops through the classes
function printShapeArea(shape: Shape) {
  console.log(`${shape.name} has an area of ${shape.getArea()}.`);
}


const rectangle = new Rectangle('Rectangle', 5, 10);
const circle = new Circle('Circle', 3);

printShapeArea(rectangle); // Output: 'Rectangle has an area of 50.'
printShapeArea(circle); // Output: 'Circle has an area of 28.274333882308138.'