/*

In TypeScript, implements and extends are used to establish relationships between classes and interfaces.

implements is used to indicate that a class implements an interface, which means that the class must provide an implementation for all the members of the interface.

extends is used to indicate that a class extends another class, which means that the subclass inherits all the members of the superclass and can also add its own members.

The main difference between implements and extends is that implements is used for implementing interfaces, while extends is used for inheriting from classes.

*/



interface Shape {
  area(): number;
}

// class of Rectangle
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area() {
    return this.width * this.height;
  }
}

// class of Circle
class Circle implements Shape {
  constructor(private radius: number) {}
  area() {
    return Math.PI * this.radius ** 2;
  }
}


// class of Square
class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }
}

// create objects of the classes




const rectangle = new Rectangle(5, 10);
console.log(rectangle.area()); // Output: 50

const circle = new Circle(3);
console.log(circle.area()); // Output: 28.274333882308138

const square = new Square(4);
console.log(square.area()); // Output: 16




// second example with different implementation and extend

interface IEmployee {
    empCode: number;
    name: string;
    
}


class Employee implements IEmployee {

    empCode: number;
    name: string;
    
    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    displayEmployee() {
        console.log(`Employee Code: ${this.empCode}, Employee Name: ${this.name}`);
    }
}


// class of Manager that extends the Employee class


class Manager extends Employee {
    constructor(code: number, name: string, department: string) {
        super(code, name);
        this.department = department;
    }

    department: string;

    // method to display the manager details
    displayManager() {
        console.log(`Manager Name: ${this.name}, Manager Code: ${this.empCode}, Manager Department: ${this.department}`);
    }
}



// create an object of the Employee class
let emp1 = new Employee(1, "John");
emp1.displayEmployee();

// create an object of the Manager class
let manager1 = new Manager(2, "Mary", "Sales");