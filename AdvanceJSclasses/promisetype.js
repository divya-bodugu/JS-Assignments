// // Promise.all()
// //wait for all promises to succeed
const fruits1=Promise.resolve("Apple");
const fruits2=Promise.resolve("Banana");
const fruits3=Promise.resolve("Cherry");

Promise.all([fruits1,fruits2,fruits3])
    .then((result)=>{
        console.log("promise.all:", result);
    })
    .catch((err) => {
        console.log("failed:", err.message);
    })
    
    .finally(() => {
        console.log("Operation done.");
    });



// // //promise.allsettled()
// // //returns the result of all promises
// // //success or failure

Promise.allSettled([fruits1,fruits2])
    .then((result)=>{
        console.log("promise.allSettled:", result);
        throw new Error(" result not found")
    })
    .catch((err) => {
        console.log("failed:", err.message);
    })
    
    .finally(() => {
        console.log("Operation done.");
    });



// //promise.race()
// //returns the first promise to finish 

const fast=new Promise((resolve)=>
    setTimeout(()=>resolve("fast"),1000));

const slow=new Promise((resolve)=>
    setTimeout(()=>resolve("slow"),5000));

Promise.race([fast,slow])
    .then((result)=>{
        console.log("promise.race:", result);
    })
    .catch((error) => {
        console.log("All failed:", error.errors);
    })
    
    .finally(() => {
        console.log("Operation done.");
    });



// //promise.any()
// //returns the any promise which is succeed at first
Promise.any([fruits1,fruits2,fruits3])
    .then((result)=>{
        console.log("promise.any:", result);
        throw new Error("results not found");
    })

    .catch((error) => {
        console.log("All failed:", error.message);
    })
    
    .finally(() => {
        console.log("Operation done.");
    });
