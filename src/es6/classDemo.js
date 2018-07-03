class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  register() {
    console.log(`${this.username} is now registerd`);
  }
}
// const bob = new User('bob', 'bob@gmail.com', '1234');
// bob.register();

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
