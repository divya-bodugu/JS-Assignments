//        Task 4 — Short-Circuit Surprise


const emptyQueue = [];
const ticketPrices = [120, 85, 300, 60];

// Prediction:
//  true
//  false

console.log(emptyQueue.every(price => price > 0));
console.log(emptyQueue.some(price => price > 0));

/*
every() checks if ALL items pass the condition.
Since the array is empty, there are no items that fail the condition,so it returns true. 

some() checks if AT LEAST ONE item passes the condition.
An empty array has no items, so there is no matching item.Therefore, it returns false.
*/


//some() stops calling the callback as soon as it finds a match.
const hasExpensiveTicket = ticketPrices.some(price => {
  console.log("some() checking:", price);
  return price > 250;
});
console.log(hasExpensiveTicket);

//every() stops as soon as ONE element fails the condition.
const allTicketsAbove50 = ticketPrices.every(price => {
  console.log("every() checking:", price);
  return price > 100;
});
console.log(allTicketsAbove50);

//find() stops searching as soon as it finds a match, while filter() checks every element and creates a new array unnecessarily.
const firstExpensiveTicket = ticketPrices.find(price => price > 250);
console.log(firstExpensiveTicket);