// console.log(typeof 42);
// console.log(typeof "divya");
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof []);
// console.log(Array.isArray([]));

class ApiError extends Error {}
const err=new ApiError("failed");
// console.log(err instanceof ApiError);
// console.log(err instanceof Error);

function parseApiResult(data){
    if(data instanceof Error){
        throw data;
    }
    if(Array.isArray(data)){
        return data.map(parseApiResult);
    }
    if(data === null || typeof data !== "object"){
        return data;
    }
    return {...data, receivedAt: new Date()};
}

console.log(parseApiResult(42));
console.log(parseApiResult([1,"divya", null]));
console.log(parseApiResult({id:1, name:"divya"}));
