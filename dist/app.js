"use strict";
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
let age;
age = 50;
let names;
names = "Max";
let toggle;
toggle = true;
let empty;
let notInitialize;
empty = null;
let callback;
notInitialize = undefined;
callback = (a) => {
    return 100 + a;
};
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === "string") {
    str = some;
}
let person;
person = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
const page = {
    status: Status.READY,
};
if (page.status === Status.LOADING) {
    console.log("Page is loading");
}
if (page.status === Status.READY) {
    console.log("Page is ready");
}
