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
            return"ALREADY RENTED";
        }
        this.rented=true;
        return "RENTED NOW";
    }
    return(){
        if(this.rented){
            this.rented=false;
            return"WAS RENTED";
        }
        return"NOT RENTED YET";
    }

}
//STEP 8 AND 9
class Car extends Vehicle{
    constructor(make:string,model:string,year:number,public type:string){
            super(make,model,year,false);
            
        }
        rentalRate ()  : number {
            if(this.type.toLowerCase()==="suv")
            {return 80.0}
            else if(this.type.toLowerCase()==="hatchback")
            {return 60.0}
            else if(this.type.toLowerCase()==="sedan")
            {return 50.0}
            else if(this.type.toLowerCase()==="crossover")
            {return 90.0} 
            else
            {
                return 40.0
            }
        }
}
class Truck extends Vehicle{
    constructor(make:string,model:string,year:number,public wheeler:number){
            super(make,model,year,false);
            
        }
        rentalRate ()  : number {
            if(this.wheeler===6)
            {return 80.0}
            else if(this.wheeler===4)
            {return 60.0}
            else if(this.wheeler===8)
            {return 90.0}
            else if(this.wheeler===12)
            {return 100.0} 
            else
            {
                return 40.0
            }
        }
}

class MotorCycle extends Vehicle{
    constructor(make:string,model:string,year:number,public type:string){
            super(make,model,year,false);
            
    }
        rentalRate ()  : number {
            if(this.type.toLowerCase()==="standard")
            {return 40.0}
            else if(this.type.toLowerCase()==="dual-purpose")
            {return 60.0}
            else if(this.type.toLowerCase()==="off-road")
            {return 50.0}
            else if(this.type.toLowerCase()==="sports")
            {return 90.0} 
            else if(this.type.toLowerCase()==="touring")
            {return 100.0} 
            else if(this.type.toLowerCase()==="cruiser")
            {return 95.0} 
            else
            {
                return 30.0
            }
        }
}
//STEP 10

const car1=new Car("KIA","SPORTAGE",2020,"suv");
console.log(car1.make+" "+car1.model+" IS RENTED OR NOT: "+car1.rented+"  RENTAL RATE: "+car1.rentalRate());
console.log(car1.rent());
console.log(car1.make+" "+car1.model+" IS RENTED OR NOT: "+car1.rented);
console.log(car1.return());
console.log(car1.make+" "+car1.model+" IS RENTED OR NOT: "+car1.rented);



const bike1=new MotorCycle("YAMAHA","KAWASAKI NINJA",2022,"SPORTS");
console.log(bike1.make+" "+bike1.model+" IS RENTED OR NOT: "+bike1.rented+"  RENTAL RATE: "+bike1.rentalRate());
console.log(bike1.rent());
console.log(bike1.make+" "+bike1.model+" IS RENTED OR NOT: "+bike1.rented);
console.log(bike1.return());
console.log(bike1.make+" "+bike1.model+" IS RENTED OR NOT: "+bike1.rented);



const truck1=new Truck("HONDA","RIDGELINE",2023,4);
console.log(truck1.make+" "+truck1.model+" IS RENTED OR NOT: "+truck1.rented+"  RENTAL RATE: "+truck1.rentalRate());
console.log(truck1.rent());
console.log(truck1.make+" "+truck1.model+" IS RENTED OR NOT: "+truck1.rented);
console.log(truck1.return());
console.log(truck1.make+" "+truck1.model+" IS RENTED OR NOT: "+truck1.rented);
