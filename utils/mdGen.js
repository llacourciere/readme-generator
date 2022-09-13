const { writeFile, write } = require('fs');

const renderLC = license => `![${license}](https://img.shields.io/badge/LICENSE-${license}-blueviolet)`

const mdGen = (data) => {
  let output = '';

  output = `
# ${data.title}

## Description ${data.description}
${renderLC(data.license)}

`;

  writeFile('./README.md',output, ()=>console.log('READM.md was created or modified!!!'));
}

module.exports = mdGen;