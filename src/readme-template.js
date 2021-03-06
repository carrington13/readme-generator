// ----------------------------------------------------
// Source for All License Data/Code
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// ----------------------------------------------------

const licenseObjArr = [
  // MIT LICENSE OBJECT
  {
    name: 'MIT',
    badge: `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`,
    link: `[Read More About MIT Here](https://opensource.org/licenses/MIT)`,
 },
  // APACHE 2.0 LICENSE OBJECT
  {
    name: 'APACHE 2.0',
    badge: `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`,
    link: `[Read More About APACHE 2.0 Here](https://opensource.org/licenses/Apache-2.0)`,
  },
  // BSD 3.0 LICENSE OBJECT
  {
    name: 'BSD 3',
    badge: `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`,
    link: `[Read More About BSD 3 Here](https://opensource.org/licenses/BSD-3-Clause)`,
  }
]


function renderLicenseBadge(license) {
  licenseObj = licenseObjArr.filter( object => object.name === license); 
  if (licenseObj === false || licenseObj === 'None') {

    return ``
  }

  return `${licenseObj[0].badge}`
}


function renderLicenseLink(license) {
  licenseObj = licenseObjArr.filter( object => object.name === license); 
  if (licenseObj === false || licenseObj === 'None') {

    return ``
  }

  return `${licenseObj[0].link}`
}

function renderLicenseSection(data) {
  if (data.license === 'MIT') {
    return `
## License
Copyright ${new Date().getFullYear()} ${data.copyrightHolder}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`
  } else if (data.license === 'BSD 3') {
    return `
## License
Copyright ${new Date().getFullYear()} ${data.copyrightHolder}

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

    `
  } else if(data.license === 'APACHE 2.0') {
    return `
## License
Copyright ${new Date().getFullYear()} ${data.copyrightHolder}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`    
  }

return ''

}











function checkContributing( usage ) {
  if (usage.checkContributing === false) {
    return ``
  } 

  return `
#### Contributing
${usage.contributing}
  `
}

function checkTest( usage ) {
  if (usage.checkTest === false) {
    return ``
  }

  return `
#### Tests
${usage.test}
  `
}










module.exports = data => {
  const {title, license, copyrightHolder ,installation, credits, ...usage} = data;
  const licenseData = {license: license, copyrightHolder: copyrightHolder};

  return `
# ${title}

${renderLicenseBadge(license)}

### Table Of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation
${installation}


## Usage

### Description
${usage.about}

### Languages
${usage.languages}

${checkContributing(usage)}

${checkTest(usage)}

### Questions
##### GitHub
[${usage.github}](https://github.com/${usage.github})
##### Email
${usage.email}




## Credits
${credits}



${renderLicenseSection(licenseData)}
${renderLicenseLink(license)}
`;
}
