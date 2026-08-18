//     Task 4 — Partial Failure Report


function checkStation(name, willFail) {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (willFail) reject(new Error(`${name} is OFFLINE`));
else resolve(`${name} is OK`);
}, Math.random() * 1000);
});
}

const stations = [
checkStation("Chennai", false),
checkStation("Bangalore", true),
checkStation("Vijayawada", false),
checkStation("Nellore", true),
];

Promise.all(stations)
  .then((results) => {
    console.log("Station Results:", results);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });

Promise.allSettled(stations)
  .then((results) => {

    const summary = {
      okCount: 0,
      failedCount: 0,
      failedStations: []
    };

    results.forEach((result) => {
      if (result.status === "fulfilled") {
        summary.okCount++;
      } else {
        summary.failedCount++;
        summary.failedStations.push(result.reason.message);
      }
    });

    console.log(summary);
});

// Use Promise.all() when every promise must succeed;
// use Promise.allSettled() when you need the result of every promise, including failures.