class Employee {
  Name
  Salary

  constructor(name, salary) {
    this.Name = name;
    this.Salary = salary;
  }
}

class Manager extends Employee {
  Department

  constructor(name, salary, department) {
    super(name, salary);
    this.Department = department;
  }

  DisplayInformation() {
    console.log(`name: ${this.Name}, salary: ${this.Salary}, department: ${this.Department}`);
  }
}

class Seller extends Employee{
  CommissionPercentage

  constructor(name, salary, commissionPercentage) {
    super(name, salary);
    this.CommissionPercentage = commissionPercentage;
  }

  CalculateSalary() {
    let comission = this.Salary * (this.CommissionPercentage / 100);
    return this.Salary + comission;
  }

  DisplayInformation() {
    console.log(`name: ${this.Name}, salary: ${this.Salary}, salary with comission ${this.CalculateSalary()},commission percentage: ${this.CommissionPercentage}`);
  }
}

const employee = new Employee('Pedro', 1500);
const manager = new Manager('Erandir', 14300, 'Technology');
const seller = new Seller('João', 5400, 5);
