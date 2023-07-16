"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(name, key) {
        this.name = name;
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(tenant) {
        if (!this.door) {
            throw new Error("The door is block");
        }
        console.log(`${tenant.name} is at home`);
        this.tenants.push(tenant);
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('This key is wrong');
        }
        console.log('The door is open');
        return this.door = true;
    }
}
const key = new Key();
const person = new Person('Luke', key);
const person2 = new Person('Jack', key);
const myHouse = new MyHouse(key);
myHouse.openDoor(person.getKey());
myHouse.openDoor(person2.getKey());
myHouse.comeIn(person);
myHouse.comeIn(person2);
//# sourceMappingURL=app.js.map