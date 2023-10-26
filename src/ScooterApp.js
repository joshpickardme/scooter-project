const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      Fells_Point: [],
      Pulaski_Industrial_Area: [],
      Charles_Village: [],
      Mondawin: [],
      Hampden: [],
      Roland_Park: [],
      Morgan_State_University: []
    },
    this.registeredUsers = {

    }
  }
  registerUser(username, password, age) {

    // Check if user is already registered
    for(const key in this.registeredUsers) {
      if(username == key) {
        throw new Error("Already registered")
      }
    }

    // Check if user age < 18
    if(age < 18) {
      throw new Error("User is too young to register")
    }

    // Register User
    const user = new User(username, password, age)
    this.registeredUsers[username] = user
  }
}

const app = new ScooterApp()

module.exports = ScooterApp
