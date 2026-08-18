// object literals

const profile = { username:"arjun", password:"pass123"};
console.log(profile);



// //factory function

function createUser(username, password)
{
    return {
        username: username,
        login: function(input){
            return input === password;
        }
    }
}

const userData = [["neha", "abc123"],["ravi", "qwerty"],["sara", "hunter2"]];
const users=userData.map(([username, password]) => createUser(username, password));
console.log(users);
console.log(users[0].username, users[0].login("abc123"));
console.log(users[1].username, users[1].login("qwerty"));
console.log(users[2].username, users[2].login("wrong"));



//constructor function

function User(username, password) 
{
    this.username = username;
    this.password = password;
}

User.prototype.login = function(input) 
{
    return input === this.password;
};

const userData1 = [["neha", "abc123"],["ravi", "qwerty"],["sara", "hunter2"]];
const users1= userData1.map(([username, password]) => new User(username, password));

console.log(users1);

users1.forEach(user => {
    console.log(user.username, user.password, Object.getPrototypeOf(user) === User.prototype);
});

const user1 = users1[0];
console.log(user1.username);
console.log(user1.login("abc123"));
console.log(user1.login("wrong"));



//class

class User 
{
    constructor(username, password) 
    {
        this.username = username;
        this.password = password;
    }

    login(input)
    {
        return input === this.password;
    }

    static isValidUsername(name) 
    {
        return name.length >= 4;
    }
}

const userData2 = [["neha", "abc123"],["ravi", "qwerty"],["sara", "hunter2"]];
const users2 = userData2.map(([username, password]) => new User(username, password));
console.log(users2);

console.log(users2[0].login("abc123")); 
console.log(users2[1].login("wrong"));  

console.log(User.isValidUsername("neha"));
console.log(User.isValidUsername("raj"));  



//Try & Catch

class Sample 
{
    constructor(username, password) 
    {
        this.username = username;
        this.password = password;
    }
}

try 
{
    Sample("test", "1234");
} 
catch (error) 
{
    console.log(error.name + ": " + error.message);
}


//object summary

console.log("Object Literal: only one simple object at a time.");
console.log("Factory Function: create many similar objects.");
console.log("Constructor Function: many objects need to share the same method.");
console.log("ES6 Class: create objects in class.");

console.log("Factory-created users each get their own login copy because createUser() makes a new login function for every user.");
console.log("Constructor-function & class-created users share one login copy because login is stored once on the prototype and all users use the same method.");