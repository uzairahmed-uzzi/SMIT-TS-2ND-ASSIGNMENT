//VEHICLE RENTAL SYSTEM


//STEP 1
abstract class Vehicle
{

    //INITIALIZING MEMBERS
    //STEP 2 & 3
    constructor(
        private _make:string,
        private _model:string,
        private _year:number,
        private _rented:boolean=false
    ){}
    //getters methods to access members
    //STEP 4
    get make():string{
        return this._make;
    }
    get model():string{
        return this._model;
    }
    get year():number{
        return this._year;
    }
    get rented():boolean{
        return this._rented;
    }
    //MUTATOR(SETTER) METHOD FOR RENTED MEMBER
    //STEP 5
    set rented(rented:boolean){
        this._rented=rented;
    }
    //STEP 6
    abstract rentalRate ():number;
    //STEP 7
    rent(){
        if(this.rented){
            return"NOT AVAILABLE, ALREADY RENTED";
        }
        this.rented=true;
        return "RENTED NOW";
    }
    return(){
        if(this.rented){
            this.rented=false;
            return"WAS RENTED NOW RETURNED";
        }
        return"AVAILABLE, NOT RENTED YET";
    }

}
//STEP 8 AND 9
class Car extends Vehicle{
    constructor(make:string,model:string,year:number,private _type:string,private _engineSize:number,private _enginePower:number){
            super(make,model,year,false);
            
        }
        rentalRate ()  : number {
            if(this._type.toLowerCase()==="suv")
            {return 8000.0}
            else if(this._type.toLowerCase()==="hatchback")
            {return 6000.0}
            else if(this._type.toLowerCase()==="sedan")
            {return 5000.0}
            else if(this._type.toLowerCase()==="crossover")
            {return 9000.0} 
            else
            {
                return 4000.0
            }
        }
        //GETTERS
        get type():string{
            return this._type;
        }
        get engineSize():number{
            return this._engineSize;
        }
        get enginePower():number{
            return this._enginePower;
        }
}
class Truck extends Vehicle{
    constructor(make:string,model:string,year:number,private _wheeler:number){
            super(make,model,year,false);
            
        }
        rentalRate ()  : number {
            if(this._wheeler===6)
            {return 8000.0}
            else if(this._wheeler===4)
            {return 6000.0}
            else if(this._wheeler===8)
            {return 9000.0}
            else if(this._wheeler===12)
            {return 10000.0} 
            else
            {
                return 4000.0
            }
        }
}

class MotorCycle extends Vehicle{
    constructor(make:string,model:string,year:number,private _look:string,private _engineType:string){
            super(make,model,year,false);
            
    }
        rentalRate ()  : number {
            if(this._look.toLowerCase()==="standard")
            {return 4000.0}
            else if(this._look.toLowerCase()==="dual-purpose")
            {return 6000.0}
            else if(this._look.toLowerCase()==="off-road")
            {return 5000.0}
            else if(this._look.toLowerCase()==="sports")
            {return 9000.0} 
            else if(this._look.toLowerCase()==="touring")
            {return 10000.0} 
            else if(this._look.toLowerCase()==="cruiser")
            {return 9500.0} 
            else
            {
                return 3000.0
            }
        }
        //getters 
        get look():string{
            return this._look;
        }
        get engineType():string{
            return this._engineType;
        }

}
//STEP 10
//CREATING INSTANCES OF ALL CHILD CLASSES

const car=new Car("KIA","SPORTAGE",2020,"suv",1999,140);
const bike=new MotorCycle("YAMAHA","KAWASAKI NINJA",2022,"SPORTS","4-stroke Parallel Twin");
const truck=new Truck("HONDA","RIDGELINE",2023,4);


//EXECUTING RENT AND RETURN  METHODS OF CAR
console.log(car.make+" "+car.model+" HAS RENTAL RATE: "+car.rentalRate());
console.log("\n car.rent() :"+car.rent());
console.log("\n car.return() :"+car.return());

//EXECUTING RENT AND RETURN  METHODS OF BIKE
console.log("\n\n"+bike.make+" "+bike.model+" HAS RENTAL RATE: "+bike.rentalRate());
console.log("\n bike.rent() :"+bike.rent());
console.log("\n bike.return() :"+bike.return());

//EXECUTING RENT AND RETURN  METHODS OF TRUCK
console.log("\n\n"+truck.make+" "+truck.model+" HAS RENTAL RATE: "+truck.rentalRate());
console.log("\n truck.rent(): "+truck.rent());
console.log("\n truck.return(): "+truck.return());

