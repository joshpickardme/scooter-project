class User {
  #loggedIn
  constructor(user, password, age) {
    this.user = user;
    this.password = password;
    this.age = age;
    this.#loggedIn = false;
  }
  checkLoggedIn() {
    return this.#loggedIn
  }
  login(password) {
      if(password === this.password) {
        this.#loggedIn = true
        console.log("user logged in")
      } else {
        throw new Error("Incorrect Password Entered")
      }
  }
  logout() {
    this.#loggedIn = false;
  }
}


const newUser = new User("Josh", "123", 21)



module.exports = User
