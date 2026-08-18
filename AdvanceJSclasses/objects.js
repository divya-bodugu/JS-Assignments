//object literals

const dish = { name:"Pasta", price:250};
console.log(dish);



//factory function

function createDish(name, price)
{
    return { price, name};
}
const dishMenu=[["Pizza", 300], ["Burger", 150],["Noodles", 200]];

const dishData=dishMenu.map(([name, price]) => createDish(name, price));
console.log(dishData);



//constructor function

function dishMenu1(name, price){
    this.name=name;
    this.price=price;
}
const dishes=[["Pizza", 300], ["Burger", 150],["Noodles", 200]];

const dishData1=dishes.map(([name, price]) => new dishMenu1(name, price));
console.log(dishData1);



//class

class Dish{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
}
const dishMenu2=[["Pizza", 300], ["Burger", 150],["Noodles", 200]];

const dishData2=dishMenu2.map(([name, price]) => new Dish(name, price));
console.log(dishData2);



//object summary
console.log("Object literals are used to create the single object at a time");
console.log("Factory functions are used to create multiple objects with the same structure");
console.log ("constructor functions are used to create mutliple objects withe same the structure by using new keyword");
console.log("classe are used to create multiple objects with the same structure by using new keyword and class syntax");