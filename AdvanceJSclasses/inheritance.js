class Car{
    constructor(brand){
        this.brand = brand;
    }
    start(){
        console.log("stock availability");
    }
    stop(){
        console.log("stock not available");
    }
}
const c= new Car("Audi");
console.log(c);
//c.start();
//c.stop();


class Toyota extends Car{
    constructor(){
        super("Toyota"); 
    }
}
const t = new Toyota();
console.log(t);
t.start();
t.stop();



class Honda extends Car{
    constructor(){
        super("Honda");
    }
}
const h = new Honda();
console.log(h);
h.start();
h.stop();

