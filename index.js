const fs = require("fs");
const inquirer = require("inquirer");
const createTeam = require("./src/template");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

// const writeFileAsync = util.promisify(fs.writeFile);

const employeeList = [];

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
];

const intQuestions = [
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
];

const engQuestions = [
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
];

// function to start whole process
function promptMgr() {
    inquirer.prompt(manQuestions)
    .then(data => {
       console.log(data);
       employeeList[0] = new Manager(data.name, data.id, data.email, data.officeNumber);
        if (data.role == "Yes, add an Engineer") {
            promptEng();
        }
        else if (data.role == "Yes, add an Intern") {
            promptInt();
        }
        else {
            writeData()
        }
            // prompt engineer function
    });
}


function promptEng() {
inquirer.prompt(engQuestions)
    .then(data => {
       console.log(data);
       employeeList[employeeList.length] = new Engineer(data.name, data.id, data.email, data.github);
        if (data.role == "Yes, add an Engineer") {
            // prompt engineer function
            promptEng();
        }
    });
}

function promptInt() {
inquirer.prompt(intQuestions)
    .then(data => {
        console.log(data);
        employeeList[employeeList.length] = new Intern(data.name, data.id, data.email, data.school);
         if (data.role === "Yes, add an Intern")
            // prompt Intern function
            promptInt();
    });
}

function writeData() {
    let content = createTeam(employeeList);
    let template = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${content}
    </body>
    </html>
    `
    fs.writeFile("./dist/index.html", template,  function(err) {
        if (err){
            throw new console.error("There was an error in writing.");
        }
        else{
            console.log("success");
        }
    });
}
// called function to start entire process
promptMgr();