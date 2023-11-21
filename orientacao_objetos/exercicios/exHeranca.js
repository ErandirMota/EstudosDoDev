
class Employee {
  constructor(name, salary) {
    this.Name = name
    this.Salary = salary
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary)
    this.Department = department
  }

  DisplayInformations() {
    console.log(
      `Name: ${this.Name}, Salary: ${this.Salary}, Department: ${this.Department}`
    )
  }
}

class Seller extends Employee {
  constructor(name, salary, commissionPercentage) {
    super(name, salary)
    this.CommissionPercentage = commissionPercentage
  }

  CalculateSalary() {
    return this.Salary + this.Salary * (this.CommissionPercentage / 100)
  }

  DisplayInformations() {
    const salaryWithCommission = this.CalculateSalary()
    console.log(
      `Name: ${this.Name}, Salary: ${this.Salary}, Salary with commission: ${salaryWithCommission}, Commission Percentage: ${this.CommissionPercentage}%`
    )
  }
}

class Product {
  constructor(name, value) {
    this.Name = name
    this.Value = value
  }
}

class Sale {
  constructor(seller) {
    this.Seller = seller
    this.ProductList = []
    this.TotalValue = 0
  }

  AddProduct(name, value) {
    const newProduct = new Product(name, value)
    this.ProductList.push(newProduct)
  }

  CalculateTotal() {
    this.TotalValue = this.ProductList.reduce(
      (total, product) => total + product.Value,
      0
    )
  }

  FinalizeSale() {
    this.CalculateTotal()
    console.log(
      `Finalized sale - Seller: ${this.Seller.Name}, Total value: ${this.TotalValue}`
    )
  }
}

let employee = new Employee("João", 5600)
let manager = new Manager("Erandir", 15000, "Technology")

const seller = new Seller("Alice", 3000, 5)
const sale = new Sale(seller)
sale.AddProduct("Mouse", 234.98)
sale.AddProduct("Keyboard", 70.98)
sale.FinalizeSale()

manager.DisplayInformations()
seller.DisplayInformations()
