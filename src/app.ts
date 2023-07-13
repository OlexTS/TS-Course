/*
  |==============================
  | TYPESCRIPT: Lesson1
  |==============================
*/
// export {};
const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
  
});

/*
  |==============================
  | Lesson2
  |==============================
*/

let age: number;
age = 50;  
let names: string;
names = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
let notInitialize: undefined;
empty = null;
let callback: (a: number) => number;
notInitialize = undefined;
callback = (a) => {
  return 100 + a;
};

let anything: any;
anything = -20; 
anything = "Text";
anything = {};

let some: unknown;
some = "Text";
let str: string;
if (typeof some === "string") {
  str = some;
}

let person: [string, number];
person = ["Max", 21];

enum Status {
  LOADING,
  READY,
}
const page = {
  status: Status.READY,
};
if (page.status === Status.LOADING) {
  console.log("Page is loading");
}
if (page.status === Status.READY) {
  console.log("Page is ready");
}

// let status: string | number;
// let status2: "enable" | "disable";
// function showMessage(message: string) {
//   console.log(message);
// }

// function calc(num1: number, num2: number) {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

type page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {    
    createAt: Date;
    updateAt: Date;
  };
};

// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2:  page = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
// page2.details = {createAt: new Date, updateAt: new Date}