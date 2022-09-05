const { constructor } = require("typescript");

class Greeter {
  greeting: string;
  greeting2: string;

  constructor(message: string, message2: string) {
    this.greeting = message;
    this.greeting2 = message2;
  }

  greet() {
    return "Hello, " + this.greeting + this.greeting2;
  }
}

let greeter = new Greeter("world", "!");

export class TestClass {
  constructor(api: A, config: C, config: d, config: e, config: f) {}
}
