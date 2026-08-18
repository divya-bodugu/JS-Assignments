const defaultDish={spiceLevel:"medium", portion:"regular"};
const createChoice={spiceLevel:"extra hot", portion:"medium"};

const finalOrder=Object.assign({}, defaultDish, createChoice);

console.log(finalOrder);


// Object.freeze(finalOrder);
finalOrder.spiceLevel="mild";
console.log(finalOrder);

// Extractings data
// console.log(Object.keys(finalOrder));
// console.log(Object.keys(finalOrder));
console.log(Object.entries(finalOrder));

// Indexing
// console.log(Object.entries(finalOrder)[0]);
// console.log(Object.entries(finalOrder)[1]);
// console.log(Object.keys(finalOrder)[1]);
// console.log(Object.values(finalOrder)[0]);
