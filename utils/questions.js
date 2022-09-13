const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installations are required?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of this project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does the project have?',
        choices: ['MIT', 'ISC', 'Apache', 'none'],
        default: 'none'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'List any contributors'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What type of testing is required?'
    },
    {
        type: 'input',
        name: 'email',
        message: ' What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    }
];

module.exports = questions;