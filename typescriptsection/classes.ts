class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string){
        super(color);//ref to the contstructor of the father
    }

    drive(): void {
        console.log('vroom');
    }

    startDeivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'Blue');
car.startDeivingProcess();
console.log(car.color);