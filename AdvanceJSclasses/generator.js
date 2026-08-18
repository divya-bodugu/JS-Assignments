// const Numbers = [2,3,4,5];
// console.log(Numbers);

function* numbers(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const iterator=numbers();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());