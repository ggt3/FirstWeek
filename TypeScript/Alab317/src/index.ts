class Vehicle {
    public status :`stopped` | `started` = 'stopped';
    public make:String;
    public model:string;
    public wheels:number;
  
    constructor(make:string, model:string, wheels:number) {

      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make:string, model:string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle:Vehicle) {
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  console.log(myBuick.model);
  


class NCycle<T> {

  public status :`stopped` | `started` = 'stopped';
  public make;
  public model;
  public wheels;

  constructor(make:T | [T], model:T| [any], wheels:number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
  print(index: number = 0):void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      if(this.make[index] && this.model[index]) {
        console.log(`This NCycles has a ${this.make} ${this.model} at ${index}`)
      } else {
        console.log(`This is a ${this.make} ${this.model} NCycle.`)

      }
    }
  }
  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i=0;i<Math.min(this.make.length, this.model.length); i++) {
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]}`)
      }
    }
  }
}

const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();