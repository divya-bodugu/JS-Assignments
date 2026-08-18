//BUIT-IN

// MAP() => create a new array by modifying every element
// FILTER()=> create a new array with Element that satisfy the condition
// REDUCE()=> combine all elements in single value
// FOREACH()=> executes a function for every element (doesn't return new array)
// FIND()=> to perfom any operation first we need to check that particular details available or not
// find returns the first element which matches the condition
// SOME()=>any one element satisfy the condtion can returns true if not false
// EVERY()=> Returns true if all elements match
// INCLUDES()=> check whether value exists
// REVERSE()=> Reverses every element in the array
// SLICE()=> returns part of an array(original remains unchanged)
// CONCAT()=> combines array
// SORT() => sorts the elements in that particular array
// JOIN() => convert array into string


const prices=[20, 10, 8, 40, 20, 60];
const morePrices=[50,60];

const hike= prices.map((price)=>price*10);
const affordable=prices.filter((price)=> price < 30);
const total=prices.reduce((sum, price)=> sum+price,10);

prices.forEach((price)=>{console.log("price", price)});

const firstExpensive = prices.find((price)=> price<30);
console.log(firstExpensive);

const hasExpensive = prices.some((price)=> price<10);
console.log(hasExpensive);

const allaffordable=prices.every((price)=>price>100);
console.log(allaffordable);

console.log("prices:",prices);
console.log("hike",hike);
console.log("affordable",affordable);
console.log("total", total);

console.log(prices.includes(20));
console.log(prices.includes(200));

const reversed=[...prices].reverse();
console.log(reversed);

const reverses=prices.reverse();
console.log(reverses);

const firstTwo=prices.slice(-3, -1);
console.log(firstTwo);

const combined=prices.concat(morePrices);
console.log(combined);

const sorted=prices.sort((a,b)=> a-b);
console.log(sorted);

console.log(prices.join(","));
console.log(prices.join("-"));


