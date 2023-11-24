class Client {
  #name
  #cpf
  #dateBirth

  constructor(name, cpf, dateBirth) {
    this.#name = name;
    this.#cpf = cpf;
    this.#dateBirth = dateBirth;
  }
}

class TravelPackage {
  #totalValue
  #oneWayTicket
  #returnTicket
  #holder

  constructor(totalValue, oneWayAirfare, returnAirfare, clientHolder) {
    this.#totalValue = totalValue;
    this.#oneWayTicket = oneWayAirfare;
    this.#returnTicket = returnAirfare;
    this.#holder = clientHolder;
  }
}

class Flight {
  #company
  #number
  #date
  #hour
  #departureLocation
  #destinationLocation

  constructor(
    company,
    number,
    date,
    hour,
    departureLocation,
    destinationLocation
  ) {
    this.#company = company;
    this.#number = number;
    this.#date = date;
    this.#hour = hour;
    this.#departureLocation = departureLocation;
    this.#destinationLocation = destinationLocation;
  }
}

class Airfare {
  #seat
  #firstClass
  #value
  #passenger
  #flight

  constructor(seat, value, passengerClient, flightAirfare) {
    this.#seat = seat;
    this.#firstClass = false;
    this.#value = value;
    this.#passenger = passengerClient;
    this.#flight = flightAirfare;
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