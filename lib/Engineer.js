const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, gitUser) {
        super(name, id, email);
        this.gitUser = gitUser;
    }
    // methods
    getGitUser() {
        return this.gitUser;
    }

    getRole() {
        return "Engineer";
    }
}

// export
module.exports = Engineer;