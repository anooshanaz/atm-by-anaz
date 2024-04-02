#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000;
let myPin = 14224;
console.log(chalk.yellow("welcome to atm machine"));
console.log(chalk.green(`your current account balance is ${myBalance}`));
let remainingbalance

let password = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "please enter your pin"
    }
])
if(password.pin === myPin) {
    console.log(chalk.blueBright("Authentication is sucessfull"))
}else{
    console.log(chalk.blueBright("you enter a invalid pin"))
}

let performOperation = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "kidly select on option",
        choices: ["withdraw", "checkbalane","exit"]
    }
])
if(performOperation.operation === "withdraw") {
    let withdraw = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            message: "choose an amount or choose other",
            choices: [1000,2000,5000,10000,'other']
        }
    ]);
    if(withdraw.amount === "other") {
        let otheramount = await inquirer.prompt([
            {
                name: "other",
                type: "number",
                message: "enter your amount:"
            }
        ]);
    if(otheramount.other > myBalance) {
    console.log(chalk.red("insuficiant balance"));
    console.log(chalk.yellow("thank you for using atm machine"));
    }
    }
}
