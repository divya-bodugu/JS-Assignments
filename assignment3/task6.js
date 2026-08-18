//      Task 6 — Form Validator Rebuild


const fields = [
  { name: "email", value: "a@b.com", valid: true },
  { name: "age", value: 0, valid: true },
  { name: "password", value: "", valid: false },
];


const canSubmit = fields.every(({ valid }) => valid);
const hasErrors = fields.some(({ valid }) => !valid);
const firstInvalid = fields.find(({ valid }) => !valid);

fields.forEach(({ name, value, valid }) => {
  console.log(name, value, valid);
});
console.log(canSubmit);    
console.log(hasErrors);    
console.log(firstInvalid); 

const hasValues = fields.every(({ value }) => value);
console.log(hasValues);


// JavaScript treats 0 as a falsy value.
// The age field is 0, but it is still a valid input. Empty string ("") and 0 can fail a truthy check even when the field is valid.
// We should check the valid flag instead of the actual value

const correctCheck = fields.every(({ valid }) => valid);
console.log(correctCheck);


const firstInvalidName = fields.find(({ valid }) => !valid)?.name;
console.log(firstInvalidName);



const summary = {
  canSubmit: fields.every(({ valid }) => valid),
  invalidFieldNames: fields
    .filter(({ valid }) => !valid)
    .map(({ name }) => name),
};

console.log(summary);

// Output:
// {
//   canSubmit: false,
//   invalidFieldNames: ["password"]
// }