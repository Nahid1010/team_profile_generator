// imports
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./src/question.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// HTML Generation
const generateHTML = require("./src/genHTML");

// employee array
const employees = [];

// Engineer
function getEngineer() {
    inquirer.prompt(questions.empQuestions)
    .then((data) => {
        inquirer.prompt(questions.engQuestion)
        .then((engData) => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                engData.gituser
            );
            employees.push(engineer);
            chooseEmployee();
        });
    });
}
// Intern
function getIntern() {
    inquirer.prompt(questions.empQuestions)
    .then((data) => {
        inquirer.prompt(questions.internQuestion)
        .then((internData) => {
            const intern = new Intern(
                data.name,
                data.id,
                data.email,
                internData.school
            );
            employees.push(intern);
            chooseEmployee();
        });
    });   
}
main ()