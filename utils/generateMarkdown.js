// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    //![Crates.io](https://img.shields.io/crates/l/will98nicholson)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(data) {
//     if (data.license === 'Apache License 2.0')
//         return "![Crates.io](https://img.shields.io/crates/l/will98nicholson)"
//     else if (data.license === 'MIT')
//         return "![GitHub](https://img.shields.io/github/license/will98nicholson/GenREADME)"
//     else return "no license"
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `##${data.title}

    ## Table of Contents:
    - [Description](#Description)\n
    - [Installation](#Installation)\n
    - [Usage information](#Usage-Information)\n
    - [Contributors](#Contributors)\n
    - [Test Instructions](#Test-Instructions)\n
    - [Questions](#Questions)\n

    ## Description

    ${data.Description}
    
    ## Installation 

    ${data.Installation}

    ## Usage Information

    ${data.Usage}

    ## Contributing

    ${data.Contribution}

    ## Test Instructions 

    ${data.Tests}

    ## Questions

    Github : https://github.com/${data.questions}

    Additional questions? You can reach me at:

    ${data.Email}


    

`;
}

module.exports = generateMarkdown;
//module.exports = renderLicenseLink;