// Temporary Reference of Instructions
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README




// TODO: Include packages needed for this application
const fs = require('fs');
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
    validate: projectAbout => {
      if (projectAbout) {
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
    name: 'contributing',
    type: 'input',
    message: 'What needs to be known about contributing to the project?',
    default: '',
  },
  // languages used to write project
  {
    name: 'languages',
    type: 'checkbox',
    message: 'What did you use to build this project? (Select All That Apply)',
    choices: ['HTML', 'CSS', 'JavaScript', 'SQL', 'node.js', 'jQuery', 'bootstrap', 'Ruby', 'Python']
  },
  // license for project
  {
    name: 'license',
    type: 'list',
    message: 'Please select a license.',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    default: 'None',
  },
  // Who made it?
  {
    name: 'credits',
    type: 'input',
    message: 'Please enter all who contributed.'
  },
  // test
  {
    name: 'test',
    type: 'input',
    message: 'What command should be used to run tests?',
    default: '',
  }

];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   // const generatePage = require('./src/page-template.js');

// // const pageHTML = generatePage(name, github);
// return new Promise((resolve, reject) => {
//   fs.writeFile('./dist/readme.md', fileContent, err => {
//     // if theres an error, reject the promise and send the error to the promises catch method
//     if (err) {
//       reject(err);
//       // return out of te function here to make sure the promise doesnt accidentally execute the resolve function as well
//       return;
//     }

//     // if everything went well, resolve the promise and send the successful data to the .then method
//     resolve({
//         ok: true,
//         message: 'File created!'
//     });
//   });    
// });
// }

const mockAnswers = {
  github: 'carrington13',
  email: 'caseyarrington13@gmail.com',
  title: 'README-Generator',
  about: 'Create a quality README file for your project from the command line',
  installation: 'Run npm install',
  contributing: 'Be respectful',
  languages: [ 'JavaScript', 'node.js' ],
  license: 'APACHE 2.0',
  credits: 'Starter Code/initial files provided by Trilogy Education. The rest by: Casey Arrington',
  test: 'No Tests'
}

// TODO: Create a function to initialize app
// function init() {
//   inquirer
//   // ask the questions
//   .prompt(questions)
//   // then get the answers
//   //.then(dataResponse => {
//   .then(mockAnswers => {  
//   //console.log(dataResponse);
//     return generateMarkdown(mockAnswers);
//   })
//   .then(readMeData => {
//      //console.log(readMeData);
//      return generateReadMe(readMeData);
//   })
//   .catch(error => {
//     if(error.isTTYError) {
//       console.log("Prompt couldn't be rendered in the current environment");
//     } else {
//       console.log('Something else went wrong');
//       console.log(error);
//     }
//   })
//}

// Function call to initialize app
//init();

writeReadMe(
  pageData(mockAnswers)
)