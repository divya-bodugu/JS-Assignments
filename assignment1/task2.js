"use strict";

const defaultSettings = {theme: "light",notifications: {email: true,sms: false}};

const userPreferences = {theme: "dark",notifications: {sms: true}};

const finalSettings = Object.assign({}, defaultSettings, userPreferences);


// Object.assign() performs only a shallow copy. Nested objects are not merged deeply;
// notifications object from userPreferences overwrites the notifications object from defaultSettings.
console.log(finalSettings);


// Merge nested notifications properly
const fixedSettings = Object.assign({},defaultSettings,userPreferences,
    {
        notifications: {...defaultSettings.notifications,...userPreferences.notifications}
    }
);
console.log(fixedSettings);


Object.freeze(fixedSettings);
console.log(fixedSettings);



try 
{
    fixedSettings.theme = "blue";
} 
catch (error) 
{
    console.log(error.type + ":" + error.message);
}


fixedSettings.notifications.sms = false;
// Object.freeze is shallow — it only locks the top-level properties, not nested objects.
console.log(fixedSettings.notifications);


// checking why it cant freeze the object - didnt change output
Object.freeze(fixedSettings.notifications);
Object.freeze(fixedSettings);
console.log(fixedSettings);