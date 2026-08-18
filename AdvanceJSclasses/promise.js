const employees = [
    { id: 101, name:"Divya", location: "Nellore" },
    { id: 102, name:"Jashwitha",location: "Hyderabad" },
    { id: 103, name:"Deepika", location: "Chennai" },
    { id: 104, name:"Nikitha", location: "Bangalore" }
];

function getData(employeeId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const employee = employees.find(emp => emp.id === employeeId);

            if (employee) {
                resolve(employee.location);
                resolve(employee.name);
            } 
            else {
                reject("Employee ID not found");
            }
        }, 1000);
    });
}


getData()
{
    Promise.resolve(102)
    .then(employee => {
        console.log(employee);
    })

    .then(location => {
        console.log("Location:", location);
    })

    .then(name => {
        console.log("Name:", name);
    })

    // .then(({ name, location }) => {
    //     console.log("Name:", name);
    //     console.log("Location:", location);
    // })

    .catch(error => {
        console.log(error);
    })

    .finally(()=>{
        console.log("process completed");
    })

}