class Employee {
  name
  salary

}

class Manager extends Employee {
  department

  constructor(name, salary, department) {
    super();
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  displayInformation(name, salary, department) {
    console.log(name, salary, department);
  }
}

class Seller extends Employee {
  comissionPercentage

  constructor(comissionPercentage, name, salary) {
    super();
    this.comissionPercentage = comissionPercentage;
    this.name = name;
    this.salary = salary;
  }

  calculateSalary(salary, comissionPercentage) {
    salaryWithComission = salary + comissionPercentage;
    return salaryWithComission;
  }

  displayInformation(name, salary, salaryWithComission, comissionPercentage) {
    console.log(name, salary, salaryWithComission, comissionPercentage);
  }
}