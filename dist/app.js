"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
function showFields(el) {
    if ('startDate' in el) {
        console.log(el.startDate);
    }
    if ('privileges' in el) {
        console.log(el.privileges);
    }
    console.log(el.name);
}
class Guy {
    constructor(name) {
        this.name = name;
    }
}
class Good extends Guy {
    advice() {
        console.log('advice');
    }
}
class Bad extends Guy {
    insult() {
        console.log('insult');
    }
}
const good = new Good('Yarik');
const bad = new Bad('Boban');
function guy(user) {
    if (user instanceof Good) {
        user.advice();
    }
    if (user instanceof Bad) {
        user.insult();
    }
}
const input = document.getElementById('num1');
if (input) {
    input.value;
    const newValue = input;
    newValue.value;
}
const user = {
    name: 'Luke'
};
(_a = user === null || user === void 0 ? void 0 : user.additionInfo) === null || _a === void 0 ? void 0 : _a.someInfo;
const userInput = null;
const store = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(store);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
let arr;
arr = ['arr', 1];
const promise = new Promise((resolve) => {
    resolve('string');
});
promise.then((data) => {
    console.log(data);
});
(() => {
    function promiseFoo() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'String2';
        });
    }
    promiseFoo().then((data) => {
        console.log(data);
    });
})();
function mergee(objA, objB) {
    return Object.assign({}, objA, objB);
}
const toMerge1 = {
    name: 'Max'
};
const toMerge2 = {
    age: 22
};
const mergeed = merge(toMerge1, toMerge2);
mergeed.name;
function getLength(str) {
    return str.length;
}
const obj = {
    length: 20
};
console.log(getLength(obj));
function extractValue(obj, key) {
    return obj[key];
}
const field = extractValue({ name: 'Bob' }, 'name');
class DataStore {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    getItem() {
        return this.data;
    }
}
const storeUsers = new DataStore();
storeUsers.addItem({ name: 'turbo' });
storeUsers.addItem({ name: 'turbo2' });
console.log(storeUsers.getItem());
const ageStore = new DataStore();
ageStore.addItem(10);
ageStore.addItem(11);
console.log(ageStore.getItem());
function createPerson(name) {
    const person = { name };
    person.age = 21;
    return person;
}
const pageAnnotation = {
    annotation: 'small page',
    pageNumber: 22
};
console.log(pageAnnotation);
function getPromise() {
    return new Promise((resolve) => {
        resolve(["Text", 50]);
    });
}
getPromise().then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged = merge({ auto: 'Renault' }, { model: 'Megane' });
console.log(merged);
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
const newPage = new Page({ title: 'Cat' });
newPage.pageInfo();
//# sourceMappingURL=app.js.map