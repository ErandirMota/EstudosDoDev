class Immobile {
  Address
  ZipCode
  AreaInMeters
  BathroomsNumber
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
  constructor(withYard) {
    this.withYard = true;
  }
}

class Apartment extends Immobile {
  ApartmentFloor
  CondominiumValue

  constructor(apartmentFloor, condominiumValue) {
    this.ApartmentFloor = apartmentFloor;
    this.CondominiumValue = condominiumValue;
  }

  AddPeople() {

  }

  RemovePeople() {

  }
}

class Kitnet extends Immobile {
  
}

