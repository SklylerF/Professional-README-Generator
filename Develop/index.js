// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
    const userQuestions = inquirer.prompt([
      {
        type: 'input',
        message: "what's the title for your project?",
        name: "title",
        //Ensures the user has included a title for their README
        validate: userTitle => {
          if (userTitle) {
            return true;
          } else {
            console.log("Project title is required!")
            return false;
          }
        }
      },
      {
        type: 'input',
        message: "Give your project a description:",
        name: 'description'
      },
      {
        type: 'input',
        message: "How to install your project?",
        name: 'installation'
      },
      {
        type: 'input',
        message: "What is the usage for this project?",
        name: 'usage'
      },
      {
        type: 'input',
        message: 'what is your aplication contributing to?',
        name: 'contribution'
      },
      {
        type: "checkbox",
        message: "choose your licenses if any.",
        name: 'licenses',
        choices: ["Apache", "GNU", "ISC", "MIT", "OBSD", "Public Domain (No license)"]
      },
      {
        type: 'input',
        message: 'what are the test instructions?',
        name: 'tests',
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: 'github',
      },
      {
        type: "input",
        message: "What is your email?",
        name: 'email',
      },
    ])
    return userQuestions
  }
//   writes in read me 
function writeToFile(readMe) {
    return new Promise((resolve, reject) => {
      //Generates README into the 'generated' folder
      fs.writeFile("./generated/README.md", readMe, err => {
        if (err) {
          console.log("Error writing to file");
          reject(err);
          return;
        }
        resolve()
      })
    })
  };

  questions()
//   generates the mark down 
.then(data => {
    return generateMarkdown(data)
  })
//   creates README
.then(readMe => {
    writeToFile(readMe);
    console.log("README successfully generated!");
  })
//   errors 
.catch(err => {
    console.log(err)
  })