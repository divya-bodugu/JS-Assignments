//        Task 1 — Predict the Exact Output


console.log("A. Station Master starts duty");

setTimeout(() => console.log("B. Late train arrives"), 0);

const announce = setInterval(() => {console.log("C. Repeated announcement");}, 100);

Promise.resolve()
.then(() => console.log("D. Microtask 1"))
.then(() => console.log("E. Microtask 2"));

setTimeout(() => {console.log("F. Clearing announcements");clearInterval(announce);}, 250);

console.log("G. Station Master ends duty");


// A. Station Master starts duty
// G. Station Master ends duty
// D. Microtask 1
// E. Microtask 2
// B. Late train arrives

//Output matched exactly like predicted, so no corrections were needed.

// "G" prints before "D" and "E" because it is normal (synchronous) code and runs immediately.
// "D" and "E" are Promise callbacks (microtasks), so they run after all synchronous code finishes.
// "B" is inside setTimeout(), so it runs after the microtasks, even with a 0 ms delay.

// setInterval() runs the callback every 100 ms until it is stopped.
// "C" keeps printing because the interval repeats automatically.
// clearInterval(announce) stops the interval.
// Without clearInterval(), the interval would keep running, so the Node.js program would never stop by itself.