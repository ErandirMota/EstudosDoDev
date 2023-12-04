class Immobile {
  Address
  ZipCode
  AreaInMeters
  #BathroomsNumber
  RoomsNumber
  PeopleLiving
  ImmobileValue

  constructor(address, zipCode, areaInMeters, bathroomsNumber, roomsNumber, peopleLiving, immobileValue) {
    this.Address = address;
    this.ZipCode = zipCode;
    this.AreaInMeters = areaInMeters;
    this.BathroomsNumber = bathroomsNumber;
    this.RoomsNumber = roomsNumber;
    this.PeopleLiving = peopleLiving;
    this.ImmobileValue = immobileValue;
  }

  addPerson(person) {
    this.PeopleLiving.push(person);
  }

  removePerson(person) {
    this.PeopleLiving = this.PeopleLiving.filter(p => p !== person);
  }
}

class Person {
  Name
  Cpf
  BirthData

  constructor(name, cpf, birthData) {
    this.Name = name;
    this.Cpf = cpf;
    this.BirthData = birthData;
  }
}

class House extends Immobile {
  constructor(address, zipCode, areaInMeters, bathroomsNumber, roomsNumber, peopleLiving, immobileValue, withYard) {
    super(address, zipCode, areaInMeters, bathroomsNumber, roomsNumber, peopleLiving, immobileValue)
    this.withYard = withYard;
  }

  CalculateValue() {
    if (this.withYard) {
      return this.ImmobileValue += this.ImmobileValue * 0.30;
    } else {
      return this.ImmobileValue
    }
  }
}

class Apartment extends Immobile {
  constructor(address, zipCode, areaInMeters, bathroomsNumber, roomsNumber, peopleLiving, immobileValue, apartmentFloor, condominiumValue) {
    super(address, zipCode, areaInMeters, bathroomsNumber, roomsNumber, peopleLiving, immobileValue);
    this.ApartmentFloor = apartmentFloor;
    this.CondominiumValue = condominiumValue;
  }

  AddPeople(person) {
    this.PeopleLiving.push(person)
  }

  RemovePeople(person) {
    this.PeopleLiving = this.PeopleLiving.filter((p) => p !== person)
  }
  CalculateValue() {
    this.ImmobileValue += this.CondominiumValue
    return this.ImmobileValue
  }
}

class Kitnet extends Immobile {
  constructor(address, zipCode, areaInMeters, bathroomsNumber, roomsNumber, peopleLiving, immobileValue) {
    super(address, zipCode, areaInMeters, bathroomsNumber, roomsNumber, peopleLiving, immobileValue);
  }

  CalculateValue() {
    return this.ImmobileValue;
  }
}

const person1 = new Person("John Doe", "123456789", "01/01/1990");
const house = new House("Rua A", "12345-678", 100, 2, 3, [person1], 200000, true);
house.addPerson(new Person("Jane Doe", "987654321", "02/02/1995"));
console.log(house.CalculateValue());
console.log(house.PeopleLiving);

