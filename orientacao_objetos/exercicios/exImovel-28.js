class Immobile {

  constructor(address, zipCode, areaInMeters, bathroomsNumbers, roomNumbers, immobileValue) {
    this.Address = address;
    this.ZipCode = zipCode;
    this.AreaInMeters = areaInMeters;
    this.BathroomsNumbers = bathroomsNumbers;
    this.RoomNumbers = roomNumbers;
    this.PeopleLiveInImmobile = [];
    this.ImmobileValue = immobileValue;
  }

  AddPerson(person) {
    this.PeopleLiveInImmobile.push(person);
  }

  RemovePerson(person) {
    const index = this.PeopleLiveInImmobile.indexOf(person);
    if (index !== -1) {
      this.PeopleLiveInImmobile.splice(index, 1);
    }
  }

  CalculateValue() {
    return this.ImmobileValue;
  }
}

class Person {

  constructor(name, cpf, birthDate) {
    this.Name = name;
    this.Cpf = cpf;
    this.BirthDate = birthDate;
  }
}

class House extends Immobile {
  constructor(address, zipCode, areaInMeters, roomNumbers, immobileValue, withYard) {
    super(address, zipCode, areaInMeters, roomNumbers, immobileValue);
    this.WithYard = withYard;
  }

  CalculateValue() {
    let value = super.CalculateValue();

    if (this.WithYard) {
      value += value * 0.3;
    }

    return value;
  }
}


class Apartment extends Immobile {
  constructor(address, zipCode, areaInMeters, roomNumbers, immobileValue, floor, condominiumValue) {
    super(address, zipCode, areaInMeters, roomNumbers, immobileValue);
    this.Floor = floor;
    this.CondominiumValue = condominiumValue;
  }

  CalculateValue() {
    return super.CalculateValue() + this.CondominiumValue;
  }
}

class Kitnet extends Immobile {
  constructor(address, zipCode, areaInMeters, roomNumbers, immobileValue) {
    super(address, zipCode, areaInMeters, roomNumbers, immobileValue)
  }
}

const person1 = new Person("John Doe", "123.456.789-00", "01/01/1990")
const person2 = new Person("Jane Doe", "987.654.321-00", "02/02/1995")

const house = new House("123 Main St", "12345-678", 150, 3, 200000, true)
const apartment = new Apartment(
  "456 Oak St",
  "56789-012",
  100,
  2,
  150000,
  5,
  300
)
const kitnet = new Kitnet("789 Pine St", "90123-456", 50, 1, 80000);

house.AddPerson(person1);
house.AddPerson(person2);
house.RemovePerson(person1);

console.log(house.CalculateValue());
console.log(apartment.CalculateValue());
console.log(kitnet.CalculateValue());