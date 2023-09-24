class Calculator {
  num1
  num2

  add() {
    console.log(this.num1 + this.num2);
  }

  subtract() {
    console.log(this.num1 - this.num2);
  }

  multiply() {
    console.log(this.num1 * this.num2);
  }

  divide() {
    console.log(this.num1 / this.num2);
  }
}

let calculator = new Calculator();
calculator.num1 = 4;
calculator.num2 = 8;
calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();

