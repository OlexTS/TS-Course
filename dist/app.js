"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AddTax(taxPercent) {
    return function (_, _2, descriptor) {
        const method = descriptor.value;
        return {
            configurable: true,
            enumerable: false,
            get() {
                return (...args) => {
                    const result = method.apply(this, args);
                    return result + (result / 100 * taxPercent);
                };
            }
        };
    };
}
class Payment {
    pay(money) {
        return money;
    }
}
__decorate([
    AddTax(20)
], Payment.prototype, "pay", null);
const payment = new Payment();
console.log(payment.pay(100));
//# sourceMappingURL=app.js.map