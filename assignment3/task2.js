//        Task 2 — The Mutation Trap


const platformArrivals = ["Chennai Exp", "Nellore Local", "Bangalore SF", "Vijayawada Pass"];
function getSortedBoard(trains) {
return [...trains].sort();
}
const sortedBoard = getSortedBoard(platformArrivals);
console.log("Sorted board:", sortedBoard);
console.log("Original array:", platformArrivals);

/*
platformArrivals changes because sort() modifies the original array.
The function gets the same array, not a copy, so both variables show the
same sorted result.
*/

//reverse() → mutates the original array
const reversedBoard = [...platformArrivals].reverse();
console.log("Reversed board:", reversedBoard);
console.log("Original array:", platformArrivals);

// slice() - returns a new array, does not change original
const slicedTrains = platformArrivals.slice(0, 2);
console.log("slice:", slicedTrains);
console.log("original:", platformArrivals);

// splice() - mutates original array
const splicedTrains = platformArrivals.splice(1, 1);
console.log("splice removed:", splicedTrains);
console.log("original:", platformArrivals);

// concat() - returns a new array, does not change original
const concatTrains = platformArrivals.concat("Hyderabad Exp");
console.log("concat:", concatTrains);
console.log("original:", platformArrivals);

// map() - returns a new array, does not change original
const mappedTrains = platformArrivals.map(train => train.toUpperCase());
console.log("map:", mappedTrains);
console.log("original:", platformArrivals);


// last two arrivals
const lastTwoArrivals = platformArrivals.slice(-2);
console.log(lastTwoArrivals);