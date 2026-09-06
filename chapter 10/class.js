class Car {
    constructor(brand) {
        this.brand = brand;
        console.log("car created");
    }

    start() {
        console.log("starting.....");
    }

    move() {
        console.log("moving......");
    }

    stop() {
        console.log("stoping...");
    }

    display() {
        console.log(this.brand);
    }
}

let toyota = new Car("Toyota");
toyota.display();
