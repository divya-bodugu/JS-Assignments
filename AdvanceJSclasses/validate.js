const dbEmployeeId=109;
const apiEmployeeId="109";

console.log(dbEmployeeId==apiEmployeeId);
console.log(dbEmployeeId===apiEmployeeId);
console.log(String(dbEmployeeId)===apiEmployeeId);


function validateMarks(marks){
    if(!marks){
        return "marks are required";
    }
    return "marks accepted";
}


function validateMarksFixed(marks){
    if(marks===undefined || marks===null){
        return "marks are required";
    }
    return "marks accepted";
}

console.log(validateMarks(undefined));
console.log(validateMarks(null));
console.log(validateMarks(0));
console.log(validateMarks(90));
console.log(validateMarksFixed(60));


function login(username){
    if(!username){
        return "username is required";
    }
    return `welcome ${username}`;
}

console.log(login());
console.log(login(" "));
console.log(login("divya"));
