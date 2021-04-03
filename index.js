const fs = require("fs");
const inquirer = require("inquirer");
const createTeam = require("./src/template");

// Array of questions for the user
const  manQuestions = [
    // Manager questions
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
    type: "input",
    message: "What is the employees office number?",
    name: "officeNumber"
},
{
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, I'm all done"],
    name: "Role"
},
]

const internQuestions = [
    // Intern Questions
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
    type: "input",
    message: "What is the employees school?",
    name: "school"
},
{
    type: "list",
    message: "Would you like to add another employee?",
    choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, I'm all done"],
    name: "Role"
}
]

const engineerQuestions = [
    // Engineer Questions
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
        type: "input",
        message: "What is the employees Github?",
        name: "Github"
    },
    {
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, I'm all done"],
        name: "Role"
    },
]