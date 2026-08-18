console.log("train journey begin"); 
setInterval(() => { 
    console.log("Train annocement for every second"); 
}, 2000); 

setTimeout(() => { 
    console.log("Train started green signal"); 
}, 1000); 


Promise.resolve("chennai parcel")

    .then((parcel) => { 
        console.log("train journey started", parcel); 
        console.log("parcel destination changed to banglore"); 
        return "banglore parcel"; 
    })

    .then((parcel) => { 
        console.log("train journey started", parcel); 
        console.log("train engine failed"); 
        throw new Error("train engine is failed"); 
    })

    .catch((err) => {
        console.log("engine repaired", err.message); 
    })
    
    .finally(() => { 
        console.log("reached destination"); 
    })




