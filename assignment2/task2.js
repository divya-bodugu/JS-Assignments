//     Task 2 — Fix the Silent Race Condition



function stationOneWork() {
return new Promise((resolve) => {
setTimeout(() => resolve("n Parcel sorted at Station 1"), 1500);
});
}


function stationTwoWork(data) {
return new Promise((resolve) => {
setTimeout(() => resolve(`n Station 2 processed: ${data}`), 500);
});
}

// function runPipeline() {
// return Promise.resolve("n Parcel dispatched")
// .then((data) => {
// console.log("Step 1:", data);
// return stationOneWork(); // BUG: result is never returned or awaited
// })
// .then((data) => {
// console.log("Step 2:", data); // logs "undefined" instead of Station 1's result
// return stationTwoWork(data);
// })
// .then((finalData) => {
// console.log("Step 3:", finalData);
// });
// }

// runPipeline();

async function runPipeline() {
  const data = await Promise.resolve("Parcel dispatched");
  console.log("Step 1:", data);

  const station1 = await stationOneWork();
  console.log("Step 2:", station1);

  const finalData = await stationTwoWork(station1);
  console.log("Step 3:", finalData);
}

runPipeline();


// If we forget to return a Promise inside .then(), the next .then() does not wait.
// It runs immediately and gets undefined because no value was returned.
// JavaScript does not show an error because not returning a value is allowed.