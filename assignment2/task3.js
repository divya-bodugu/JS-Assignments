//        Task 3 — Timeout Race


function unreliableServer(delayMs, label) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Response from ${label}`), delayMs);
  });
}

function withTimeout(promise, ms) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Timeout"));
    }, ms);
  });

  return Promise.race([promise, timeoutPromise]);
}

withTimeout(unreliableServer(3000, "Server A"), 1000)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

withTimeout(unreliableServer(500, "Server B"), 1000)
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));
 

/*

Promise.race() only checks which promise finishes first.
It does NOT stop the other promises.

- Server A takes 3 seconds to respond.
- Timeout promise fails after 1 second.

The timeout promise finishes first, so Promise.race() returns the timeout error.
But Server A is still running in the background.

After 3 seconds, Server A will still finish because it was never stopped.

If we want to stop an ongoing task (like a network request), we need tools
like AbortController with fetch().
*/