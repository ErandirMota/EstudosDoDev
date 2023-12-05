class Client {
  #Name
  #Cpf
  #BirthDate

  constructor(name, cpf, birthDate) {
    this.#Name = name;
    this.#Cpf = cpf;
    this.#BirthDate = birthDate;
  }

  getClient() {

  }

  setClient() {

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

  getClient() {}

  setClient() {}
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

  getClient() {}

  setClient() {}
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

  getClient() {}

  setClient() {}

  calculateValue() {
    if (this.FirstClass) {
      return this.Value + this.Value * 0.5
    } else {
      return this.Value
    }
  }

  displaySummary() {
    console.log(
      `Passage in the name of ${this.Passenger.Name} in seat ${this.Seat} of the flight ${this.Flight.Number} to destination ${this.Flight.Destination}`
    )
  }
}

const client1 = new Client('João', '002.050.534-43', '05/11/1998');
const flight1 = new Flight("GOL", 2, "10/05/2023", "23:50", "Brasilia", "Guarulhos");
const airfare1 = new Airfare(43, true, 1200, client1, flight1);
const travelPackage1 = new TravelPackage(client1, airfare1, airfare1);
console.log(airfare1.calculateValue());
airfare1.displaySummary();