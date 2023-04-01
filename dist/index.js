"use strict";
//VEHICLE RENTAL SYSTEM
//STEP 1
class Vehicle {
    //INITIALIZING MEMBERS
    //STEP 2 & 3
    constructor(_make, _model, _year, _rented = false) {
        this._make = _make;
        this._model = _model;
        this._year = _year;
        this._rented = _rented;
    }
    //getters methods to access members
    //STEP 4
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    //MUTATOR(SETTER) METHOD FOR RENTED MEMBER
    //STEP 5
    set rented(rente) {
        this._rented = rente;
    }
    //STEP 7
    rent() {
        if (this.rented) {
            return "NOT AVAILABLE, ALREADY RENTED";
        }
        this.rented = true;
        return "RENTED NOW";
    }
    return() {
        if (this.rented) {
            this.rented = false;
            return "WAS RENTED NOW RETURNED";
        }
        return "AVAILABLE, NOT RENTED YET";
    }
}
//STEP 8 AND 9
class Car extends Vehicle {
    constructor(make, model, year, _type, _engineSize, _enginePower) {
        super(make, model, year, false);
        this._type = _type;
        this._engineSize = _engineSize;
        this._enginePower = _enginePower;
    }
    rentalRate() {
        if (this._type.toLowerCase() === "suv") {
            return 8000.0;
        }
        else if (this._type.toLowerCase() === "hatchback") {
            return 6000.0;
        }
        else if (this._type.toLowerCase() === "sedan") {
            return 5000.0;
        }
        else if (this._type.toLowerCase() === "crossover") {
            return 9000.0;
        }
        else {
            return 4000.0;
        }
    }
    //GETTERS
    get type() {
        return this._type;
    }
    get engineSize() {
        return this._engineSize;
    }
    get enginePower() {
        return this._enginePower;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, _wheeler) {
        super(make, model, year, false);
        this._wheeler = _wheeler;
    }
    rentalRate() {
        if (this._wheeler === 6) {
            return 8000.0;
        }
        else if (this._wheeler === 4) {
            return 6000.0;
        }
        else if (this._wheeler === 8) {
            return 9000.0;
        }
        else if (this._wheeler === 12) {
            return 10000.0;
        }
        else {
            return 4000.0;
        }
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, year, _look, _engineType) {
        super(make, model, year, false);
        this._look = _look;
        this._engineType = _engineType;
    }
    rentalRate() {
        if (this._look.toLowerCase() === "standard") {
            return 4000.0;
        }
        else if (this._look.toLowerCase() === "dual-purpose") {
            return 6000.0;
        }
        else if (this._look.toLowerCase() === "off-road") {
            return 5000.0;
        }
        else if (this._look.toLowerCase() === "sports") {
            return 9000.0;
        }
        else if (this._look.toLowerCase() === "touring") {
            return 10000.0;
        }
        else if (this._look.toLowerCase() === "cruiser") {
            return 9500.0;
        }
        else {
            return 3000.0;
        }
    }
    //getters 
    get look() {
        return this._look;
    }
    get engineType() {
        return this._engineType;
    }
}
//STEP 10
const car1 = new Car("KIA", "SPORTAGE", 2020, "suv", 1999, 140);
const bike1 = new MotorCycle("YAMAHA", "KAWASAKI NINJA", 2022, "SPORTS", "4-stroke Parallel Twin");
const truck1 = new Truck("HONDA", "RIDGELINE", 2023, 4);
console.log(car1.make + " " + car1.model + " HAS RENTAL RATE: " + car1.rentalRate());
console.log("\n car1.rent() :" + car1.rent());
console.log("\n car1.return() :" + car1.return());
console.log("\n\n" + bike1.make + " " + bike1.model + " HAS RENTAL RATE: " + bike1.rentalRate());
console.log("\n bike1.rent() :" + bike1.rent());
console.log("\n bike1.return() :" + bike1.return());
console.log("\n\n" + truck1.make + " " + truck1.model + " HAS RENTAL RATE: " + truck1.rentalRate());
console.log("\n truck1.rent(): " + truck1.rent());
console.log("\n truck1.return(): " + truck1.return());
//# sourceMappingURL=index.js.map