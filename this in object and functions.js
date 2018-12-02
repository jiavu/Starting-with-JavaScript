/* ///////////////////////////// */
// this. in object and functions //
/* ///////////////////////////// */

let iAmObject = {
    func1() {
        window.alert("Wuhuuu");
    },

    func2 : function() {
        window.alert("Wuaahahaaa");
    },

    func3() {
        this.func1();
    },

    func4() {
        this.func2();
    }
};


iAmObject.newFunc1 = function() {
    this.func1();
}


iAmObject.newFunc2 = function() {
    this.func2();
}

iAmObject.newFunc3 = () => {
    this.func1();
    this.func2();
}

/////////////////////

const slotMachine = {

    prize : "nothing",

    reset() {
        this.check();
    },

    check() {
        console.log("I made it.");
    }
}