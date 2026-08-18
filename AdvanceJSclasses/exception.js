process.on("uncaughtException", (err) =>{
    console.log("pizza manager:", err.message);
    console.log("dont worry, we will make another pizza");
});

function makePizza(){
    console.log("chef is making pizza");
    throw new Error("pizza got burnt");
}
console.log("customer placed an order");
makePizza();
console.log("Pizza Delivered");