function fetchUser(){
    return new Promise((resolve, reject) => {
        console.log("fetching user");
        
        setTimeout(()=>{
            reject(new Error("server is down"));
        },2000);
        
    });
}

async function getUser(){
    try{
        console.log("inside try block");
        const user=await fetchUser();
        console.log("user", user);
    }catch(err){
        console.log("Inside catch block");
        console.log("Error:", err.message);
    }finally{
        console.log("Inside finally block");
        console.log("Request Finished");
    }
}

console.log("program started");
getUser();
console.log("program finished");