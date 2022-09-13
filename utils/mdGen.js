const { writeFile, write } = require('fs');

const renderLC = license => `![${license}](https://img.shields.io/badge/LICENSE-${license}-blueviolet)`

const mdGen = (data) => {
  let output = '';

  output = `
# ${data.title} ${renderLC(data.license)}

<a name="desc"></a>
## 1. Description: 
${data.description}

<a name="install"></a>
### 2. Installation: 
${data.installation}

<a name="usage"></a>
### 3. Usage: 
${data.usage}

<a name="contrib"></a>
### 4. Contributing: 
${data.contributing}

<a name="test"></a>
### 5. Tests: 
${data.tests}

<a name="ques"></a>
#### 6. Questions: 
 <p>If you have any questions email me: ${data.email}</p>
  <a href="https://www.github.com/${data.github}/" target="_blank">Github</a>

  1. [ Description ](#desc)
  2. [ Installation ] (#install)
  3. [ Usage ](#usage)
  4. [ Contributing ] (#contrib)
  5. [ Tests ] (#test)
  6. [ Questions ] (#ques)




`;

  writeFile('./README.md', output, () => console.log('README.md was created or modified!!!'));
}

module.exports = mdGen;
