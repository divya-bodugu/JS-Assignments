// function divya(msg){
//     console.log(msg);
// }
// function deepu(msg){
//     console.log(msg);
// }
// const students=["divya","deepu"];
// students.forEach(student=>student("tomorrow is a holiday"));

function divya(msg) {
    console.log("Divya:", msg);
}

function deepu(msg) {
    console.log("Deepu:", msg);
}

const students = [divya, deepu];



console.time("reduce");
students.reduce((acc, student) => {student("Tomorrow is a holiday");
    return acc;
}, null);
console.timeEnd("reduce");



console.time("for of");
for (const [index, student] of students.entries()) {
    student("Tomorrow is a holiday");
}
console.timeEnd("for of");



console.time("for in");
for (const index in students) {
    students[index]("Tomorrow is a holiday");
}
console.timeEnd("for in");



console.time("while");
let i = 0;
while (i < students.length) {
    students[i]("Tomorrow is a holiday");
    i++;
}
console.timeEnd("while");
