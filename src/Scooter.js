class Scooter{
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    this.charge = 100
    this.isBroken = false

    Scooter.nextSerial++
  }
  rent(user) {
    if(this.charge > 20 || this.isBroken) {
      console.log(`Scooter checked out from ${this.station}`)
      this.station = null;
      this.user = user;
    } else {
      if(this.charge <= 20) {
        throw new Error("Scooter needs to be charged.")
      } else {
        throw new Error("Scooter needs to be repaired.")
      }
    }
  }
  dock(station) {
    this.user = null
    this.station = station
  }
  recharge() {
    if(this.station) {
      // Make this work later on.
      this.charge = 100;
    } else {
      throw new Error("Scooter must be at a station to recharge.")
    }
  }
  requestRepair() {
    if(this.station) {
      if(this.isBroken) {
        // Make this work later on.
        this.isBroken = false;
      } else {
        throw new Error("Scooter must be broken to begin repairs.")
      }
    } else {
      throw new Error("Scooter must be at a station to be repaired")
    }
  }
}

module.exports = Scooter
