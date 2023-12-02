class Employee {
  constructor(name, salary) {
    this.Name = name;
    this.Salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.Department = department;
  }

  DisplayInformation() {
    console.log(
      `name: ${this.Name}, salary: ${this.Salary}, department: ${this.Department}`
    );
  }
}

class Seller extends Employee {
  constructor(name, salary, commissionPercentage) {
    super(name, salary);
    this.CommissionPercentage = commissionPercentage;
  }

  CalculateSalary() {
    let commission = this.Salary * (this.CommissionPercentage / 100);
    return this.Salary + commission;
  }

  DisplayInformation() {
    console.log(
      `name: ${this.Name}, salary: ${
        this.Salary
      }, salary with commission: ${this.CalculateSalary()}, commission percentage: ${
        this.CommissionPercentage
      }`
    );
  }
}

class Product {
  constructor(name, value) {
    this.Name = name;
    this.Value = value;
  }
}

class Sale {
  constructor(seller, totalValue) {
    this.Seller = seller;
    this.TotalValue = totalValue;
    this.ProductList = [];
  }

  AddProduct(name, value) {
    const product = new Product(name, value);
    this.ProductList.push(product);
  }

  CalculateTotal() {
    this.TotalValue = 0;
    for (let i = 0; i < this.ProductList.length; i++) {
      this.TotalValue += this.ProductList[i].Value
    };
  }

  FinalizeSale() {
    console.log(
      `seller's name: ${this.Seller.Name}, total value sale: ${this.TotalValue}`
    );
  }
}

const employee = new Employee("Pedro", 1500);
const manager = new Manager("Erandir", 14300, "Technology");
const seller = new Seller("João", 5400, 5);
const product = new Product("Perfume", 75);

const sale = new Sale(seller, 0);

sale.AddProduct('Smartwatch', 350);
sale.CalculateTotal();
sale.FinalizeSale();

