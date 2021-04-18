// TODO: Include packages needed for this application
// const fs = require('fs');
const inquirer = require('inquirer');
const writeReadMe = require('./utils/writeReadMe.js')
//const fileTemplate = require('./src/readme-template.js');
const pageData = require('./src/readme-template.js');

//const readMePage = generateMarkdown(data, license);
// TODO: Create an array of questions for user input
// Arr of ? objects.. call questions in .prompt
// title of project  
const questions = [ 
  // user github account  
  {
    name: 'github',
    type: 'input',
    message: 'Please enter your GitHub username.',
    validate: userNameInput => {
      if (userNameInput) {
        return true;
      } else {
        console.log('Please enter your github username!')
      }
    }
  },
  // user email  
  {
    name: 'email',
    type: 'input',
    message: 'Please enter your email.'
  },
  // title of project  
    {
    name: 'title',
    type: 'input',
    message: "What is the project's title?",
    validate: projectTitle => {
      if (projectTitle) {
        return true;
      } else {
        console.log('Title Required!')
        return false;
      }
    }
  },
  // description of project
  {
    name: 'about',
    type: 'input',
    message: "Please enter a description of the project.",
    validate: about => {
      if (about) {
        return true;
      } else {
        console.log('Please enter a description of the project!');
        return false;
      }
    }
  },
  // installation
  {
    name: 'installation',
    type: 'input',
    message: 'Installation instructions?',
    default: '',
  },
  // usage/contributing
  {
    name: 'checkContributing',
    type: 'confirm',
    message: 'Would you like to add guidelines for contributing?',
    default: false
  },
  {
    name: 'contributing',
    type: 'input',
    message: 'What needs to be known about contributing to the project?',
    when: answers => answers.checkContributing === true, 
  },
  // languages used to write project
  {
    name: 'languages',
    type: 'checkbox',
    message: 'What did you build this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'] 
  },
  // license for project
  {
    name: 'license',
    type: 'list',
    message: 'Please select a license.',
    choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None'],
  
  },
  {
    name: 'copyrightHolder',
    type: 'input',
    message: 'Who is the copyright holder?',
    validate: copyrightHolder => {
      if (copyrightHolder) {
        return true;
      } else {
        console.log('Please enter the copyright holder!');
        return false;
      }
    },
    
  },
  // Who made it?
  {
    name: 'credits',
    type: 'input',
    message: 'Please enter all who contributed.'
  },
  // test
  {
    name: 'checkTest',
    type: 'confirm',
    message: 'Would you like to add information about tests for your project?',
    default: false,
  },
  {
    name: 'test',
    type: 'input',
    message: 'What command should be used to run tests?',
    when: answers => answers.checkTest === true,
  }

];


const mockAnswers = {
  
    github: 'Carrington13',
    email: 'caseyarrington13@gmail.com',
    title: 'ReadME generator',
    about: 'A node-powered app that generates a quality readme from user CL responses',
    installation: 'npm install',
    checkContributing: false,
    languages: [ 'JavaScript', 'ES6', 'Node' ],
    license: 'APACHE 2.0',
    copyrightHolder: 'Casey Arrington',
    credits: 'Casey Arrington, Initial Files/ Starter Code provided by Trilogy, All License Related Data/Code: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba',
    checkTest: false
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  // ask the questions
  .prompt(questions)
  // then get the answers
  .then(answers => { 
    console.log(answers);
    return pageData(answers);
  })
  .then(readMeData => {
     //console.log(readMeData);
     return writeReadMe(readMeData);
  })
  .catch(error => {
    if(error.isTTYError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log('Something else went wrong');
      console.log(error);
    }
  })
}

// Function call to initialize app
init();

