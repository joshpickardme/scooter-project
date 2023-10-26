// Requirements
const ScooterApp = require('./ScooterApp.js')
const chalk = require("chalk")
const prompt = require('prompt-sync')();











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
            viewDrawersOption()
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