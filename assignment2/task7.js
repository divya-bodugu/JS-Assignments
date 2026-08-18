//        Task 7 — Trick Questions (Answer as Comments)


/*
The 3 chained .then() calls run first.

.then() callbacks are handled by the Promise microtask queue, while setTimeout(fn, 0) is placed in the task (macrotask) queue.

JS runs all microtasks before moving to the next task. So even though setTimeout has a delay of 0 ms, the Promise .then()
callbacks get executed first.

*/



/*
await only pauses the current async function,not the whole JavaScript engine.
Other code can continue running while the async function is waiting.
*/



/*
The loop gets the Promise object, not the final value.

A normal for loop does not wait for promises to finish.
we need to use await to get the actual result from the Promise.
*/


/*
In Promise.allSettled(), the status field can have two values:

1. "fulfilled" → it has a "value" field with the successful result.
2. "rejected" → it has a "reason" field with the error message.

*/