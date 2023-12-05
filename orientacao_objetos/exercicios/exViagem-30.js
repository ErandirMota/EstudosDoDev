class Client {
  #Name
  #Cpf
  #BirthDate

  constructor(name, cpf, birthDate) {
    this.#Name = name;
    this.#Cpf = cpf;
    this.#BirthDate = birthDate;
  }

  getName() {
    return this.#Name;
  }

  setName(value) {
    if (value.length <= 50) {
      this.#Name = value;
    } else {
      console.log("Error: Name must have at most 50 characters.");
    }
  }

  getCpf() {
    return this.#Cpf;
  }

  setCpf(value) {
    if (value.length <= 11) {
      this.#Cpf = value;
    } else {
      console.log("Error: CPF must have at most 11 characters.");
    }
  }

  getBirthDate() {
    return this.#BirthDate;
  }

  setBirthDate(value) {
    this.#BirthDate = value;
  }
}
class TravelPackage {
  #CustomerHolder
  #OnewayAirTicket
  #ReturnAirTicket
  #TotalValue

  constructor(passenger, oneWayAirTicket, returnAirTicket, totalValue) {
    this.#CustomerHolder = passenger
    this.#OnewayAirTicket = oneWayAirTicket
    this.#ReturnAirTicket = returnAirTicket
    this.#TotalValue = totalValue
  }

  getCustomerHolder() {
    return this.#CustomerHolder;
  }
  
  setCustomerHolder(value) {
    this.#CustomerHolder = value;
  }

  getOneWayAirTicket() {
    return this.#OnewayAirTicket;
  }

  setOneWayAirTicket(value) {
    this.#OnewayAirTicket = value;
  }

  getReturnAirTicket() {
    return this.#ReturnAirTicket;
  }

  setReturnAirTicket(value) {
    this.#ReturnAirTicket = value;
  }

  getTotalValue() {
    return this.#TotalValue;
  }

  setTotalValue(value) {
    this.#TotalValue = value;
  }
}

class Flight {
  #Company
  #Number
  #Date
  #Hour
  #DepartureLocation
  #Destination

  constructor(company, number, date, hour, departureLocation, destination) {
    this.#Company = company
    this.#Number = number
    this.#Date = date
    this.#Hour = hour
    this.#DepartureLocation = departureLocation
    this.#Destination = destination
  }

  getCompany() {
    return this.#Company;
  }

  setCompany(value) {
    this.#Company = value;
  }

  getNumber() {
    return this.#Number;
  }

  setNumber(value) {
    this.#Number = value;
  }

  getDate() {
    return this.#Date;
  }

  setDate(value) {
    this.#Date = value;
  }

  getHour() {
    return this.#Hour;
  }

  setHour(value) {
    this.#Hour = value;
  }

  getDepartureLocation() {
    return this.#DepartureLocation;
  }

  setDepartureLocation(value) {
    this.#DepartureLocation = value;
  }

  getDestination() {
    return this.#Destination;
  }

  setDestination(value) {
    this.#Destination = value;
  }
}

class Airfare {
  #Seat
  #FirstClass = true
  #Value
  #Passenger
  #Flight

  constructor(seat, firstClass, value, passenger, flight) {
    this.#Seat = seat
    this.#FirstClass = firstClass
    this.#Value = value
    this.#Passenger = passenger
    this.#Flight = flight
  }

  getSeat() {
    return this.#Seat;
  }

  setSeat(value) {
    this.#Seat = value;
  }

  getFirstClass() {
    return this.#FirstClass;
  }

  setFirstClass(value) {
    if (typeof value === 'boolean') {
      this.#FirstClass = value;
    } else {
      console.log("Error: FirstClass must be a boolean value.")
    }
  }

  getValue() {
    return this.#Value;
  }

  setValue(newValue) {
    if (newValue > 0) {
      this.#Value = newValue;
    } else {
      console.log("Error: Value must be greater than zero.");
    }
  }

  calculateValue() {
    if (this.#FirstClass) {
      return this.#Value + this.#Value * 0.5
    } else {
      return this.#Value
    }
  }

  displaySummary() {
    console.log(
      `Passage in the name of ${this.#Passenger.getName()} in seat ${this.#Seat} of the flight ${this.#Flight.getNumber()} to destination ${this.#Flight.getDestination()}`
    )
  }
}

const client1 = new Client('João', '002.050.534-43', '05/11/1998');
const flight1 = new Flight("GOL", 2, "10/05/2023", "23:50", "Brasilia", "Guarulhos");
const airfare1 = new Airfare(43, true, 1200, client1, flight1);
const travelPackage1 = new TravelPackage(client1, airfare1, airfare1);
console.log(airfare1.calculateValue());
airfare1.displaySummary();