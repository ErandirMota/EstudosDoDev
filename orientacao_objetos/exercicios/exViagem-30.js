class Client {
  Name
  Cpf
  DateBirth

  constructor(name, cpf, dateBirth) {
    this.Name = name;
    this.Cpf = cpf;
    this.DateBirth = dateBirth;
  }
}

class TravelPackage {
  constructor(totalValue, oneWayAirfare, returnAirfare, clientHolder) {
    this.TotalValue = totalValue;
    this.OneWayTicket = oneWayAirfare;
    this.ReturnTicket = returnAirfare;
    this.Holder = clientHolder;
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
    this.Company = company;
    this.Number = number;
    this.Date = date;
    this.Hour = hour;
    this.DepartureLocation = departureLocation;
    this.DestinationLocation = destinationLocation;
  }
}

class Airfare {

  constructor(seat, value, passengerClient, flightAirfare) {
    this.Seat = seat;
    this.FirstClass = false;
    this.Value = value;
    this.Passenger = passengerClient;
    this.Flight = flightAirfare;
  }

  CalculateValue() {
    if (this.FirstClass) {
      this.Value *= 0.5;
    }

    return this.Value;
  }

  DisplaySummary() {
    console.log(
      `Passage in the name of ${this.Passenger.Name} in the seat ${this.Seat} of flight ${this.Flight} bound for ${this.Flight.DestinationLocation}`
    );
  }
}

const clientHolder = new Client("John Doe", "123.456.789-00", "01/01/1990");
const oneWayAirfare = new Airfare("A1", 500, clientHolder, null);
const returnAirfare = new Airfare("B1", 400, clientHolder, null);
const passengerClient = new Client("Jane Doe", "987.654.321-00", "02/02/1995");
const flightAirfare = new Flight(
  "Airline",
  "FL123",
  "2023-08-01",
  "15:30",
  "CityA",
  "CityB"
);

oneWayAirfare.FirstClass = true;
console.log(oneWayAirfare.CalculateValue());

oneWayAirfare.Flight = flightAirfare;
oneWayAirfare.DisplaySummary();