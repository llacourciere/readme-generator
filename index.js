const { prompt } = require('inquirer');
const { questions, mdGen } = require('./utils');

prompt(questions).then(mdGen);