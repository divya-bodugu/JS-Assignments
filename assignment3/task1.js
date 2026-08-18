//       Task 1 — Destructuring Under Fire 


const config = {
  host: "localhost",
  port: 8080,
  db: { name: "orders", replica: null }
};

const {
  host,
  port: PORT,
  db: { name: dbName, replica = "primary" },
  timeout = 5000,
  region = "ap-south-1"
} = config;

const arr = [1, 2, , 4];
const [first, second, third = 99, fourth] = arr;

// Prediction: PORT = 8080, dbName = "orders", replica = null, timeout = 5000

console.log(PORT);
console.log(dbName);
console.log(replica);
console.log(timeout);
console.log(region);
console.log(arr);

/*
replica is null because default values only work when the value is undefined.
Since config.db.replica is set to null, JavaScript keeps null and ignores
"primary".
*/

/*
The array has an empty slot at index 2, so third becomes 99.
During destructuring, the empty slot is treated as undefined, so the default value third = 99 is used.
However, a normal lookup like arr[2] returns undefined because the index has no value stored in it.
*/