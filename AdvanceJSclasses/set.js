//Remove Duplicates Values
const numbers=[2,6,6,3,4,4,5];
// const uniqueNumbers=[...new Set (numbers)];
const uniqueNumbers= new Set (numbers);
console.log("original", numbers);
console.log("uniquenumber:", uniqueNumbers);


//Add Values
const fruits=new Set();
fruits.add("Cherry");
fruits.add("Apple");
fruits.add("Cherry");
fruits.add("Guava")
console.log(fruits);


//has()
console.log(fruits.has("Cherry"));
console.log(fruits.has("Orange"));


//delete()
console.log(fruits.delete("Cherry"));
console.log(fruits);


//size()
console.log(fruits.size);


// loop through set
const colors= new Set(['white','blue','black','red' ]);
for (const color of colors){
    console.log(color);
}