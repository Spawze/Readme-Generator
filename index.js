// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = './output/README.md'
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "Enter the title of your project: ",
    name: "title"
}, {
    type: "input",
    message: "Enter the description for your project: ",
    name: "description"
}, {
    type: "input",
    message: "Enter your installation instructions: ",
    name: "instructions"
}, {
    type: "input",
    message: "Enter the usage information for your project: ",
    name: "usage"
}, {
    type: "input",
    message: "Enter the contribution guidelines for your project: ",
    name: "contribution"
},{
    type: "list",
    message: "Choose a license",
    name: "license",
    choices:['MIT','Apache LIcense 2.0','ISC',"No License"]
},{
    type: "input",
    message: "Enter your name for the license",
    name: "name"
},
{
    type: "input",
    message: "Enter the year for your license",
    name: "year"
},
];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err) {console.log(err)}
        else{console.log("Success")}
    })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(fileName, generateMarkdown(data))
        })
}


init()