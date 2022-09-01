const { constructor } = require("typescript");

class Greeter {
  greeting: string;
  greeting2: string;
  greeting3: string;
  greeting4: string;

  constructor(
    message: string, message2: string,
              message3: string,
    message4: string
  ) {
    this.greeting = message;
    this.greeting2 = message2;
    this.greeting3 = message3;
    this.greeting4 = message4;
  }

  greet() {
    return (
      "Hello, " +
      this.greeting +
      this.greeting2 +
      this.greeting3 +
      this.greeting4
    );
  }
}

let greeter = new Greeter("world", "!", "!", "!");
