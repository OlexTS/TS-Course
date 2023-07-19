"use strict";
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 28) {
            throw new Error('Pilot is too young');
        }
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
    flyMessage() {
        console.log('The plain is flying. Have a nice flight!');
    }
}
class Plane {
    sitInPlane(pilot) {
        this.pilot = pilot;
    }
}
class Boing extends Plane {
    startEngine() {
        if (!this.pilot) {
            throw new Error('Here is no pilot in the cabin');
        }
        console.log('Turbines start working');
        this.pilot.flyMessage();
        return true;
    }
}
class Terrorist {
    bluff(phrase) {
        console.log(phrase);
    }
    flyMessage() {
        console.log('Your plane is under our control. We demand 100 million dollars or we will kill all hostages');
    }
}
const boing = new Boing();
const pilot = new Pilot('Sam', 28);
pilot.greet('Hello. I am a captain');
boing.sitInPlane(pilot);
boing.startEngine();
//# sourceMappingURL=app.js.map