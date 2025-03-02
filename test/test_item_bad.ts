class Bird {
  fly() {
    console.log("I fly!");
  }
  name: string = "Pepper"
  static cook(bird: Bird) {
    console.log(`${bird.name} is cooked!`)
  }
}

class Duck extends Bird {
  walk() {
    console.log("I walk!");
  }
}

console.log(Duck.cook(new Duck()))