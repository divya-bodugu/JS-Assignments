console.log("restaurant opens");

setInterval(() => {console.log("Customer enters restaurant");},1000);

setTimeout(() => {console.log("order the pizza order");},2000);

Promise.resolve("Veg Pizza")

    .then((order) => {
        console.log("Chef take order: Preparing",order);
        return order; 
    })

    .then((order) => {
        console.log("delivered order to customer");
        throw new Error("overburned the pizza"); 
    })

    .catch((err) => {
        console.log("Error caught", err.message);
        console.log("make a refreshment pizza to custoimer");
    })

    .finally(() => {
        console.log("Order process complete.");
    })
