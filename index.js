const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./src/questions");

function getEngineer() {
    inquirer.prompt(questions.empQuestions)
    .then((data) => {
        inquirer.prompt(questions.engQuestion)
        .then((engData) => {
            const engineer = new Engineer(
            );
            employees.push(engineer);
            chooseEmployee();
        });
    });
}

main ()