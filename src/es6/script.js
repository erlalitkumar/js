// new es6 class syntax
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  // static mehtod
  static count() {

  }
  // method
  register() {
    console.log(`${this.username} is now registerd`);
  }
}
// const bob = new User('bob', 'bob@gmail.com', '1234');
// bob.register();

// inheritance in es6
class Member extends User {
  constructor(username, email, password, memberpackage) {
    super(username, email, password);
    this.package = memberpackage;
  }

  getpackage() {
    console.log(`${this.username}is subscribed to the ${this.package}`);
  }
}

const mike = new Member('mike', 'mike@gmail', '1234', 'standard');
mike.getpackage();
mike.register();

const theString = 'Hello, my name is Jhon and I loveJavaScript';

// startsWith()
// endsWith()
// includes()

// console.log(theString.startsWith('Hello'));
// console.log(theString.endsWith('JavaScript'));
console.log(theString.includes('love'));

// default params
// function greet($greeting = 'He there!') {
//   console.log($greeting);
// }

// greet();


const args = [1, 2, 3];
const args2 = [6, 7, 8];
function test() {
  console.log(args);
}
// spread operator or in java vararg
test(...args, ...args2);

