// method

class Calculator {

    // method to add two numbers
  add(a: number, b: number) {
    return a + b;
    }
    
    // method to subtract two numbers
  subtract(a: number, b: number) {
    return a - b;
    }
    // method to multiply two numbers
  multiply(a: number, b: number) {
    return a * b;
    }
    
    // method to divide two numbers
  divide(a: number, b: number) {
    if (b === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return a / b;
  }
}

// add  two numbers
const calculator = new Calculator();
// add two numbers
let addTwoNumbers = calculator.add(10, 5);
// subtract two numbers
let subtractTwoNumbers = calculator.subtract(10, 5);
// multiply two numbers
let multiplyTwoNumbers = calculator.multiply(10, 5);

// divide two numbers
let divideTwoNumbers = calculator.divide(10, 5);

console.log(addTwoNumbers);
console.log(subtractTwoNumbers);
console.log(multiplyTwoNumbers);

console.log(divideTwoNumbers);