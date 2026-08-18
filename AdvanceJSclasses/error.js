class AgeError extends Error{}
function checkAge(age){
    if (age < 18) {
        throw new AgeError("Age must be at least 18");
    }
    console.log("you can vote");
}


try{
    checkAge(20);
}catch(err){
    console.log("Error:", err.message);
}finally{
    console.log("program finished");
}