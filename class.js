'use strict'

class Car
{
    constructor(name)
    {
        this.name=name;
    }
    static hello(car)
    {
        return "Hello "+car.name;
    }
}

const myCar=new Car("Ford");
console.log(Car.hello(myCar))

const newCar=new Car("tesla")
console.log(Car.hello(newCar))