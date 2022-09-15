const { writeFile, write } = require('fs');

const renderLC = license => `![${license}](https://img.shields.io/badge/LICENSE-${license}-blueviolet)`

const mdGen = (data) => {
  let output = '';

  output = `
# ${data.title} ${renderLC(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Description
${data.description} </div>

## Installation
${data.installation}


## Usage 
${data.usage}

## License
 This application is covered by the ${data.license} license.

## Contributing
${data.contributing}

## Tests 
${data.tests}

## Questions
 <p>If you have any questions email me: ${data.email}</p>
 <a href="https://www.github.com/${data.github}/" target="_blank">Github</a>



`;

  writeFile('./README.md', output, () => console.log('README.md was created or modified!!!'));
}

module.exports = mdGen;
