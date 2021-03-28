// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Please provide a Table of Contents for this project."
    },

    {
        type: "input",
        name: "Description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "Installation Instructions",
        message: "Please provide instructions for how this application is to be installed."
    },
    {
        type: "input",
        name: "Usage Information",
        message: "Please provide information on how users should be using this application."
    },
    {
        type: "input",
        name: "Contribution Guidelines",
        message: "Please provide any contribution guidelines you wish to be included"
    },
    {
        type: "input",
        name: "Test Instructions",
        message: "Please provide test instructions for your application."
    }
];



// TODO: Create a function to write README file



// fs.appendFile('README.md', `${process.argv[2]}\n`
// );

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const markDown = generateMarkdown(response);

            // ?console.log("logged")
            // : console.log('error')
            // fs.appendFile(`README.md', response`)
            writeToFile('README.me', markDown)

        })
}

// Function call to initialize app
init();
