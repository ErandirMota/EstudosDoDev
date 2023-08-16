// INHERITANCE
// COMPOSITION
class Car {
  color
  year
  model

  turnOn() {
    console.log("Estou ligando!!");
  }
}

class Person {
  name
  age

  speak(text) {
    console.log(text);
  }
}

class Driver extends Person {
  car

  overtake() {
    console.log("Ultrapassei alguém hehe");
  }
}

let firstPerson = new Person();
firstPerson.name = "Andrew";
firstPerson.age = 12;
firstPerson.speak("Eu sou Andrew!");

let firstDriver = new Driver();
firstDriver.name = "Pedro";
firstDriver.age = 22;
firstDriver.speak("Eu sou o motorista Pedro");
firstDriver.overtake();