//pure function - i/p and o/p are same for same i/p
function add(a,b){
    return a+b;
}
console.log(add(3,4));
console.log(add(3,4));
console.log(add(3,4));



//impure function - uses external variable and changes the output for same i/p
let count=0;
function addition(a,b){
    count++;
    return a+b+count;
}
console.log(addition(3,4));
console.log(addition(3,4));
console.log(addition(3,4));