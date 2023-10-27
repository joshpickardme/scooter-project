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
  loginUser(username, password) {
    // Checks if username is registered
    if(this.registeredUsers[username]) {
      this.registeredUsers[username].login(password)
    } else {
      throw new Error("User does not exist.")
    }
  }
  logoutUser(username) {
    if(this.registeredUsers[username]) {
      this.registeredUsers[username].logout()
    } else {
      throw new Error("User does not exist.")
    }
  }
  createScooter(station) {
    // If station doesn't exist
    if(!this.stations[station]) throw new Error("Station does not exist.")

    // If station exists
    const scooter = new Scooter
    scooter.station = station;
    this.stations[station].push(scooter)
    console.log(`Created new scooter at: ${station}`)
    return scooter
  }
  dockScooter(scooter, station) {

    // If scooter is at a station
    if(scooter.station != null) throw new Error("Scooter is already at a station")

    for(const key in this.stations) {
      if(key === station) {
        this.stations[key].push(scooter)
        scooter.dock(station)
        return `You have successfully docked the scooter at ${station}`
      }
    }
    throw new Error("Scooter cannot be found")
  }
  rentScooter(station, user) {
    // Check if station exists
    if(!this.stations[station]) throw new Error("Station does not exist.")

    // Check if it has scooters
    if(this.stations[station].length == 0) throw new Error("Station has no scooters")

    // Checks out scooter
    const scooter = this.stations[station][0];
    this.stations[station].shift() // Removes scooter from station
    scooter.rent(user)
    return scooter

  }
}

const app = new ScooterApp()

app.registerUser("Josh", "123", 21)
app.loginUser("Josh", "123")
app.createScooter("Roland_Park")
let scooter = app.rentScooter("Roland_Park", app.registeredUsers.Josh)

console.log(app.registeredUsers.Josh)
console.log(scooter)

app.dockScooter(scooter, "Mondawin")

console.table(app.stations)
console.table(scooter)

module.exports = ScooterApp
