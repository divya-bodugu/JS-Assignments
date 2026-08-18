//       Task 6 — Async Generator Ticket Counter


async function* issueTickets(count) {
  for (let i = 1; i <= count; i++) {
    await new Promise(resolve => setTimeout(resolve, 500));
    yield `🎫 Ticket #${i} issued`;
  }
}

(async () => {
  const generator = issueTickets(4);

  const first = await generator.next();
  console.log(first);

  const second = await generator.next();
  console.log(second);
})();

// Normal function* .next() gives the result directly:

// Async function* .next() gives a Promise first,
// because it may need to wait for something.
// We use await to get the final result:
