//        Task 5 — Flatten the Chaos


const deeplyNested = [1, [2, 3, [4, 5, [6, 7]]]];
const words = ["hello world", " javascript rocks", "flat map fun"];

// 1. flat() with no arguments only flattens one level.
// The default depth argument of flat() is 1, so it removes only the first layer of nesting and leaves deeper arrays untouched.
const partiallyFlattened = deeplyNested.flat();
console.log(partiallyFlattened);

const fullyFlattened = deeplyNested.flat(Infinity);
console.log(fullyFlattened);

// flatMap() removes one level of arrays. 
// split() creates only one level of words for each string.
// It would not work for deeplyNested because it has many levels of nested arrays.
const individualWords = words.flatMap(word => word.trim().toLowerCase().split(/\s+/));
console.log(individualWords);


/* 
arr.flatMap(fn) does the same thing as arr.map(fn).flat(1).
Both run the function on each item and then flatten the result by one level.
They are not always equivalent because flatMap() only flattens one level,
while map(fn).flat() can use a different depth like flat(2) or flat(Infinity).
flatMap() is usually more efficient because it combines mapping and flattening
in one step instead of creating an extra intermediate array.
*/