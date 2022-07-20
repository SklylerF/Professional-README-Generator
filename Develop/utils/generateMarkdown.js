// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license = license.map(badge => {
    if (badge !== "Public Domain (No license)") {
      return `![License](https://img.shields.io/static/v1?label=License&message="${badge}&color=BLUE)`
    }
  })
  return license.join(" ")
}

function renderListObject(licenseObject) {
  licenseObject = licenseObject.map(item => "* " + item)
  return licenseObject.join(" \n")
}

//Generates a README using info from index.js
function generateMarkdown(data) {
  //changes values 
  const {title, description, installation, usage, contribution, licenses, tests, github, email} = data;

  //Returns the completed README
  return `
  
# ${title}

${renderLicenseBadge(licenses)}

## Description
${description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Licenses
This project falls under the following license(s): \n
${renderListObject(licenses)}

## Contribution
${contribution}

## Tests
${tests}

## Questions
If you have any questions, please contact me below: \n

Github: [${github}](https://github.com/${github}) \n
Email: ${email}
`;
}


module.exports = generateMarkdown;