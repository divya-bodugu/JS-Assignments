//        Task 5 — First Success Wins



const mirror1 = new Promise((_, reject) => setTimeout(() => reject("Mirror 1 down"), 200));
const mirror2 = new Promise((resolve) => setTimeout(() => resolve("Mirror 2 OK"), 800));
const mirror3 = new Promise((_, reject) => setTimeout(() => reject("Mirror 3 down"), 400));

Promise.race([mirror1, mirror2, mirror3])
  .then(result => console.log(result))
  .catch(error => console.log(error));

Promise.any([mirror1, mirror2, mirror3])
  .then(result => console.log(result))
  .catch(error => console.error(error));

const mirror4 = new Promise((_, reject) =>setTimeout(() => reject("Mirror 4 down"), 600));

async function checkMirrors() {
  try {
    const result = await Promise.any([
      mirror1,
      mirror2,
      mirror3,
      mirror4,
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
    console.log(error.errors); 
  }
}
checkMirrors();