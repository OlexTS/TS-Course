"use strict";
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