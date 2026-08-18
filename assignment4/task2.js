// function compoistion

const pipe = (...fns) => (value) =>
  fns.reduce((acc, fn) => fn(acc), value);

const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const addStatus = name => ({name, status: "Available"});

const processProduct = pipe(
  trim,
  toLower,
  capitalize,
  addStatus
);

const result = processProduct("   LAPTOP   ");
console.log(result);