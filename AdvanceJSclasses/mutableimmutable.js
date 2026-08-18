// // mutable - modifies the original array

// let fruits1 =['apple','banana'];
// console.log("before",fruits1);

// fruits1.push("mango");
// console.log("after", fruits1);


//immutable - creates a new array and does not modify the original array

let fruits2=['apple','cherry'];
console.log("Original", fruits2);

fruits2.push("mango");
console.log("after", fruits2);

let newFruits = [...fruits2, "orange"];
console.log("new", newFruits);
