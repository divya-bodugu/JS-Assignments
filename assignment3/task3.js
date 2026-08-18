//         Task 3 — Reduce Rebuilt


const orders = [
{ id: 1, amount: 250, status: "paid" },
{ id: 2, amount: 400, status: "pending" },
{ id: 3, amount: 150, status: "paid" },
];

function myMap(array, fn) {
  return array.reduce((res, curr, item) => {
    res.push(fn(curr, item));
    return res;
  }, []);
}

function myFilter(array, fn) {
  return array.reduce((res, curr, item) => {
    if (fn(curr, item)) {
      res.push(curr);
    }
    return res;
  }, []);
}

const paidOrders = myFilter(orders, order => order.status === "paid");
console.log(paidOrders);

const paidAmounts = myMap(paidOrders, order => order.amount);
console.log(paidAmounts);

const totalPaid = paidAmounts.reduce((sum, amount) => sum + amount,0);
console.log(totalPaid); 

const result = orders.reduce((sum, order) => sum + order.amount,0);
console.log(result);

/*
reduce() is risky without an initial value.
It takes the first array item as the starting value, so here `sum` becomes the first order object instead of a number.

Then it tries to add the next amount to an object, causing the wrong result.
If the array is empty, reduce() will throw an error.
*/



/* 
reduce() MUST be given an initial value when the accumulator's type is different from the array element type, 
when the array may be empty, or when you need a specific starting state.

[10, 20, 30].reduce((sum, n) => sum + n)
Here the first element (10) is already a valid initial accumulator value (a number).
*/