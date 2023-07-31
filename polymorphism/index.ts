//Polymorphism is a concept in object-oriented programming that allows objects of different classes to be treated as if they were objects of the same class. In TypeScript, you can achieve polymorphism through inheritance and interfaces.


//the main class 
class Shape {
    constructor(public name: string) { }

    getArea() {
        return 0;
    }
}


// Inheritance
class Rectangle extends Shape {
    constructor(public name: string, public width: number, public height: number) {
        super(name);
    }

    getArea() {
        return this.width * this.height;
    }
}


// Inheritance
class Circle extends Shape {
    constructor(public name: string, public radius: number) {
        super(name);
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Interface
const shapes: Shape[] = [new Rectangle("rectangle", 10, 5), new Circle("circle", 5)];

// 

shapes.forEach((shape) => {
  console.log(`${shape.name} has an area of ${shape.getArea()}.`);
});



// second example then


class person {
    constructor(public name: string) { }

    getNames() {
        return this.name;
    }
}


// Inheritance

class student extends person {
    constructor(public name: string, public age: number) {
        super(name);
    }

    getNames() {
        return this.name;
    }
}



// Interface
const persons: person[] = [new student("ahmed", 20), new student("ali", 25)];



persons.forEach((person) => {
    console.log(`${person.name} has an age of ${person.getNames()}.`);
})



// third example then


interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log('Woof!');
  }
}

class Cat implements Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log('Meow!');
  }
}

function makeAnimalSound(animal: Animal) {
  animal.makeSound();
}

const dog = new Dog('Fido');
const cat = new Cat('Whiskers');

makeAnimalSound(dog); // Output: 'Woof!'
makeAnimalSound(cat); // Output: 'Meow!'