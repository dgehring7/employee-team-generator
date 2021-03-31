const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// Array of questions for the user
const  questions = [
{
    type: "input",
    message: "What is the employees name?",
    name: "name" 
},
{
    type: "input",
    message: "What is the employees ID number?",
    name: "number"
},
{
    type: "input",
    message: "What is the employees email?",
    name: "email"
},
{
    type: "list",
    message: "What is the employees role?",
    choices: ["Manager", "Engineer", "Intern"],
    name: "Role"
}
]