class Client {
  Name
  Cpf
  DateBirth

  constructor(name, cpf, dateBirth) {
    this.Name = name
    this.Cpf = cpf
    this.DateBirth = dateBirth
  }
}

class TravelPackage {
  constructor(totalValue) {
    this.TotalValue = totalValue
    this.OneWayTicket = oneWayAirfare
    this.ReturnTicket = returnAirfare
    this.Holder = clientHolder
  }
}

class Flight {
  constructor(
    company,
    number,
    date,
    hour,
    departureLocation,
    destinationLocation
  ) {
    this.Company = company
    this.Number = number
    this.Date = date
    this.Hour = hour
    this.DepartureLocation = departureLocation
    this.DestinationLocation = destinationLocation
  }
}

class Airfare {
  Seat
  FirstClass
  Value
  Passenger
  Flight

  constructor(seat, value) {
    this.Seat = seat
    this.FirstClass = false
    this.Value = value
    this.Passenger = passengerClient
    this.Flight = flightAirfare
  }

  CalculateValue() {
    if (this.FirstClass == true) {
      this.Value = this.Value * 0.5
    }
  }

  DisplaySummary() {
    console.log(
      `Passage in the name of ${this.Passenger.Name} in the seat ${this.Seat} of flight ${this.Flight}`
    )
  }
}

const clientHolder = new Client()
const oneWayAirfare = new Airfare()
const returnAirfare = new Airfare()
const passengerClient = new Client()
const flightAirfare = new Flight()
