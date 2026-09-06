const Abhinav = {
    name: "Abhinav",
    mark: 21,
    getmark() {
        console.log(this.mark);
    }
};

const displayMark ={
    getmark(){
        alert(this.mark);

    }
}


const s1 = {
    mark:12,

}

const s2 = {
    mark:14,

}

const s3 = {
    mark:15,
    getmark(){
        console.log("33");
    }

}

const s4 = {
    mark:16,

}

const s5 = {
    mark:17,

}

s1.__proto__ = displayMark;
s3.__proto__ = displayMark;
s2.__proto__ = displayMark;
s4.__proto__ = displayMark;
s5.__proto__ = displayMark;