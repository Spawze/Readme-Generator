const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = './output/README.md'
//All questions for the user
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
}, {
    type: "input",
    message: "Enter information on how to run tests on your project: ",
    name: "test"
},{
    type: "input",
    message: "Enter your GitHub username: ",
    name: "github"
},{
    type: "input",
    message: "Enter email address: ",
    name: "email"
},{
    type: "list",
    message: "Choose a license",
    name: "license",
    choices:['MIT','Apache LIcense 2.0','ISC',"No License"]
},{
    type: "input",
    message: "Enter your name for the license: ",
    name: "name"
},
{
    type: "input",
    message: "Enter the year for your license: ",
    name: "year"
},
//TODO: add badge for the license https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err) {console.log(err)}
        else{console.log("Success! Check the 'output' folder for your new README file!")}
    })
 }

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(fileName, generateMarkdown(data))
        })
}


init()