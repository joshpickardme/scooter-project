// Requirements
const ScooterApp = require('./ScooterApp.js')
const chalk = require("chalk")
const prompt = require('prompt-sync')();

const app = new ScooterApp;
var userVar;

function preloadingData() {
    // Registering Admin
    app.registerUser("admin", "admin", 100)

    // Creating Scooters
    app.createScooter("Fells_Point");
    app.createScooter("Fells_Point");
    app.createScooter("Fells_Point");
    app.createScooter("Roland_Park");
    app.createScooter("Roland_Park");
    app.createScooter("Roland_Park");
    app.createScooter("Roland_Park");
    app.createScooter("Roland_Park");
    app.createScooter("Roland_Park");
    app.createScooter("Hampden");
    app.createScooter("Hampden");
    app.createScooter("Mondawin");
    app.createScooter("Mondawin");
    app.createScooter("Mondawin");
    app.createScooter("Mondawin");
    app.createScooter("Charles_Village");
    app.createScooter("Charles_Village");
    app.createScooter("Charles_Village");
    app.createScooter("Charles_Village");
}




preloadingData()

function rentingScooter(scooter) {
    console.clear()
    console.log(chalk.blue.bold.underline("Renting Scooter"))
    console.log(`Scooter ID: ${scooter.serial}`)
    console.log(`Time Elapsed: 1m`)
    console.log(`Remaining Charge: ${scooter.charge}`)
    console.log(`User Authorised: ${scooter.user.user}`)
    console.log(" ")
    console.log(chalk.blue.bold("0)"), "Dock Scooter")
    console.log(chalk.blue.bold("1)"), "Abandon Scooter (coming soon)")
    console.log(" ")
    let option = prompt(chalk.green("Option number: "))
    if(option == "0") {
        console.log(" ")
        console.log(chalk.blue.bold.underline("Stations Available: "))
        for(const key in app.stations) {
            console.log(`${key}`)
        }
        console.log(" ")
        let option = prompt(chalk.green("Enter station to dock: "))
        console.log(app.dockScooter(scooter, option))
    } else {
        throw new Error("AHH")
    }
}


function rentScooter() {
    console.clear()
    console.log(chalk.blue.bold.underline("Rent Scooter Options"))
    console.log(" ")
    for(const key in app.stations) {
        console.log(`${key} (${app.stations[key].length} Scooters Available)`)
    }
    console.log(" ")
    let option = prompt(chalk.green("Enter station name to rent: "))
    const scooter = app.rentScooter(option, userVar)
    rentingScooter(scooter)
    

}

function dockScooter() {

}

function userOptions() {
    console.clear()
    console.log(chalk.blue.bold.underline("User Options"))
    console.log(`Welcome, ${userVar.user}`)
    console.log(" ")
    console.log(chalk.blue.bold("0)"), "Rent A Scooter")
    console.log(chalk.blue.bold("1)"), "Order History (Coming Soon)")
    console.log(chalk.blue.bold("2)"), "Quit")
    console.log(" ")
    let option = prompt(chalk.green("Option number: "))
    switch(option) {
        case "0":
            rentScooter();
            break;
        case "1":
            break;
        case "2":
            break;
        default:
            break
    }
}

function userLogin() {
    console.clear()
    console.log(chalk.blue.bold.underline("Login"))
    console.log(" ")
    let username = prompt(chalk.green("Enter username: "))
    let password = prompt(chalk.green("Enter password: "))
    app.loginUser(username, password)
    userVar = app.registeredUsers[username];
    userOptions()
}

function userCreateAccount() {
    console.clear()
    console.log(chalk.blue.bold.underline("Create an account"))
    console.log(" ")
    let username = prompt(chalk.green("Enter username: "))
    let password = prompt(chalk.green("Enter password: "))
    let age = Number(prompt(chalk.green("Enter your age: ")))
    app.registerUser(username, password, age)
    userLogin()
}

function userTestOptions() {
    console.clear()
    console.log(chalk.blue.bold.underline("Login or create an account"))
    console.log(" ")
    console.log(chalk.blue.bold("0)"), "Login")
    console.log(chalk.blue.bold("1)"), "Create an account")
    console.log(chalk.blue.bold("2)"), "Quit")
    console.log(" ")
    let option = prompt(chalk.green("Option number: "))
    switch(option) {
        case "0":
            userLogin();
            break;
        case "1":
            userCreateAccount();
            break;
        case "2":
            break;
        default:
            break
    }
}



function welcome() {
    console.clear()
    console.log(chalk.blue.bold.underline("Scooters Admin Console"))
    console.log(" ")
    console.log(chalk.blue.bold("0)"), "User Test")
    console.log(chalk.blue.bold("1)"), "View Admin Options")
    console.log(chalk.blue.bold("2)"), "Quit")
    console.log(" ")
    let option = prompt(chalk.green("Option number: "))

    switch(option) {
        case "0":
            userTestOptions()
            break;
        case "1":
            options();
            break;
        case "2":
            break;
        default:
            break
    }
}

welcome();