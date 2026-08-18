"use strict";

class Account 
{
    constructor(username) 
    {
        this.username = username;
        this._failedAttempts = 0;
        this._isLoggedIn = false;
    }


    login(password, correctPassword) 
    {
        if (this._failedAttempts >= 3) 
        {
            console.log("Account locked");
            return;
        }

        if (password !== correctPassword) 
        {
            this._failedAttempts++;
            console.log("Incorrect password");

            if (this._failedAttempts >= 3)
            {
                console.log("Account locked");
            }
        } 
        else 
        {
            this._isLoggedIn = true;
            this._failedAttempts = 0;
            console.log("Login successful");
        }
    }


    set failedAttempts(value) 
    {
        if (value < 0) 
        {
            console.log("Failed attempts cannot be negative");            
            return;
        }
        this._failedAttempts = value;
    }


    get status() 
    {
        if (this._failedAttempts >= 3) 
        {
            return "Locked";
        }
        return this._isLoggedIn ? "Logged in" : "Logged out";
    }

}

try 
{
    acc.status = "Logged in";
}
catch (error) 
{
    console.log("Error:", error.message);
}


const acc = new Account("divya");

//login
acc.login("1111", "1234"); 
acc.login("1234", "1234"); 
acc.login("3333", "1234"); 
acc.login("9999", "1234");
acc.login("9999", "1234"); 
acc.login("1234", "1234"); 

//setter
acc.failedAttempts = 2;
console.log(acc._failedAttempts);
acc.failedAttempts = -1;
console.log(acc._failedAttempts);

//getter
console.log(acc.status);
acc._isLoggedIn = false;
console.log(acc.status);
acc._failedAttempts = 4;
console.log(acc.status);

//status
console.log("Current status:", acc.status);