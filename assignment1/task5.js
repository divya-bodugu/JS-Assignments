class User {
    static totalUsers = 0;

    constructor(username) {
        this.username = username;
        User.totalUsers++;
    }

    logout() {
        console.log(`${this.username} logged out`);
    }
}


class AdminUser extends User {
    #password;

    constructor(username, password) {
        super(username);
        this.#password = password;
    }

    login(attempt) {
        if (attempt === this.#password) {
            console.log("Access granted");
        } else {
            console.log("Access denied");
        }
    }

    get hasPassword() {
        return this.#password ? true : false;
    }

    logout() {
        super.logout();
        console.log("(admin session cleared)");
    }
}

class GuestUser extends User {
    constructor(username) {
        super(username);
    }

    logout() {
        super.logout();
        console.log("(guest data discarded)");
    }
}

const admin = new AdminUser("neha", "s3cret");
const guest = new GuestUser("visitor1");

admin.login("wrong");   // Access denied
admin.login("s3cret");  // Access granted

const sessions = [admin, guest];

for (const user of sessions) {
    user.logout();
}

console.log(User.totalUsers);

console.log(admin.hasPassword);

console.log(admin.hasPassword);
console.log(admin.hasPassword);


console.log(admin.hasPassword);



/*
Expected Output:
Access denied
Access granted
neha logged out
(admin session cleared)
visitor1 logged out
(guest data discarded)
2
true
true
true
true
*/
