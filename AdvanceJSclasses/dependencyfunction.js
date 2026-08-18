function add2(num){
    console.log("add2 received:", num);
    return num+2;
}

function multiplyBy3(num){
    console.log("multiplyBy3 received:", num);
    return num*3;
}
const result = multiplyBy3(add2(5));
console.log("result:", result);