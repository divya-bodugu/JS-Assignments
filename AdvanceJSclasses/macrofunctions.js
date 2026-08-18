console.log("employee details");
function getEmployee()
{
    return new Promise((resolve) =>{
        setTimeout(()=> resolve({id:101}),1000);
    });
}

function getLocation(employeeId)
{
    return new Promise((resolve) =>{
        setTimeout(()=> resolve({location:"Nellore"}),1000);
    });  
}

getEmployee()
.then((employee)=>{
    console.log("Employee found");
    console.log(employee);
    return getLocation(employee)
})

.then((location)=>{
    console.log("location found");
    console.log(location);
    //throw new Error("location not found");
})

.catch((err)=>{
    console.log("error", err.message);
    
})

.finally(()=>{
    console.log("process completed");
})