const sessionHandler = {
    role: "guest",

    login: function () {
        return `${this.username} logged in as ${this.role}`;
    },

    logout: function () {
        return `${this.username} logged out`;
    }
};



const user1 = Object.create(sessionHandler);
user1.username = "arjun";


const user2 = Object.create(sessionHandler);
user2.username = "sara";
user2.role = "admin";


console.log(user1.login()); 
console.log(user2.login());

/*
user1 uses the prototype's role ("guest") because it has no own role property.
user2 uses its own role ("admin"), which overrides the prototype's role.
*/


sessionHandler.role = "member"; // changed the prototype role
console.log(user1.login());
console.log(user2.login());


console.log(Object.keys(user1));
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(user1)));


/*
login() and logout() are stored once in sessionHandler and shared by all users.
In the factory-function pattern, each user gets its own separate copy of login() and logout(), which uses more memory.
*/
