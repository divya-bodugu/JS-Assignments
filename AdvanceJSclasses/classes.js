class Car{
    constructor(brand){
        this.brand = brand;
        this.speed=0;
        this.colour="white"; // stored value
    }
    
    //setter -> runs when assigning a value
    set speed(value)
    {
        if(value<0 || value>120)
        {
            console.log("Speed must be between 0 and 120");
        }
        if(typeof value !== "number")
        {
            console.log("Speed must be a number");
            return;
        }
        this._speed = value;
    }
    // getter -> runs when reading a value
    get speed(){
        return this._speed;
    }


    
    set colour(value)
    {
        if(value === "pink")
        {
            console.log("Pink is not allowed");
            return;
        }

        if(typeof value !== "string")
        {
            console.log("colour must be a string");
            return;
        }
        this._colour = value;
    }
    get colour(){
        return this._colour;
    }

}



const car = new Car("BMW");
car.speed = 100;
car.colour="pink";
console.log(car.colour)
console.log(car);
console.log(car.speed);


