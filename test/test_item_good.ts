class Bird {
  fly() {
    console.log("I fly!");
  }
  name: string = "Pepper"
}

class Duck extends Bird {
  walk() {
    console.log("I walk!");
  }
  override fly(): void {
    console.log("I fly higher!");
  }
}
