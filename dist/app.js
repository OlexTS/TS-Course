"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registeredValidator = {};
function Required(target, propName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propName]: ['required'] });
}
function PositiveNumber(target, propName) {
    registeredValidator[target.constructor.name] = Object.assign(Object.assign({}, registeredValidator[target.constructor.name]), { [propName]: ['positive'] });
}
function validation(obj) {
    const objectValidation = registeredValidator[obj.constructor.name];
    if (!objectValidation) {
        return true;
    }
    let isValid = true;
    for (const prop in objectValidation) {
        for (const validProp of objectValidation[prop]) {
            switch (validProp) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
}
__decorate([
    Required
], Person.prototype, "name", void 0);
__decorate([
    PositiveNumber
], Person.prototype, "age", void 0);
const person = new Person('Max', -32);
if (!validation(person)) {
    console.log('Not valid');
}
else {
    console.log('Valid');
}
//# sourceMappingURL=app.js.map