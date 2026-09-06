class parent{
    constructor(){
        console.log("hello");
    }
    hi(){
        console.log("hi");
    }
    how(){
        console.log("how are you? ");
    }
}

class child extends parent{
    constructor(){
        super()
        console.log("guys");
    }
    car(){
        console.log(" i am riding a car");

    }
}

let a = new child();
a.hi();
a.how();
a.car();
