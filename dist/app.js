"use strict";
class House {
    constructor(street, type) {
        this.street = street;
        this.type = type;
        this.tenants = [];
    }
    showAddress() {
        console.log("Address " + this.street);
    }
    showType() {
        console.log("Type " + this.type);
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
class StoneHouse extends House {
    constructor(street, general) {
        super('stone', street);
        this.chargeOfTheHouse = general;
    }
    showAddress() {
        console.log("Address " + this.street);
    }
    showTenants() {
        console.log("General: " + this.chargeOfTheHouse);
        super.showTenants();
    }
}
const stoneHouse = new StoneHouse('Bezrucko', "Denis");
stoneHouse.addTenant('Sam');
stoneHouse.addTenant('Don');
stoneHouse.showTenants();
//# sourceMappingURL=app.js.map