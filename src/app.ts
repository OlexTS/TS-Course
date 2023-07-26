/*
  |==============================
  | TYPESCRIPT: Lesson1
  |==============================
*/
// export {};
// const button = document.querySelector("button")! as HTMLButtonElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));

// });

/*
  |==============================
  | Lesson2
  |==============================
*/

// let age: number;
// age = 50;
// let names: string;
// names = "Max";
// let toggle: boolean;
// toggle = true;
// let empty: null;
// let notInitialize: undefined;
// empty = null;
// let callback: (a: number) => number;
// notInitialize = undefined;
// callback = (a) => {
//   return 100 + a;
// };

// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};

// let some: unknown;
// some = "Text";
// let str: string;
// if (typeof some === "string") {
//   str = some;
// }

// let person: [string, number];
// person = ["Max", 21];

// enum Status {
//   LOADING,
//   READY,
// }
// const page = {
//   status: Status.READY,
// };
// if (page.status === Status.LOADING) {
//   console.log("Page is loading");
// }
// if (page.status === Status.READY) {
//   console.log("Page is ready");
// }

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

// type page = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

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

/*
  |==============================
  | Lesson 4 Practice
  |==============================
*/

// class House {
//   street: string;

//   constructor(n: string) {
//     this.street = n;
//   }

//   showAddress(this: House, add: string): void {
//     console.log("Address " + this.street + add);

//   }
// }

// const house = new House('Soborna');
// const copyHouse = { showAddress: house.showAddress, street: 'New address ' };
// copyHouse.showAddress('string')

// class House {

//   private tenants: string[]=[]

//   constructor(private street: string, public readonly type: string) {

//   }

//   public showAddress(this: House): void {
//     console.log("Address " + this.street);
//   }

//   public showType(this: House): void {
//     console.log("Type " + this.type);
//   }

//   public addTenant(tenant: string): void {
//     this.tenants.push(tenant)
//   }

//   public showTenants(): void {
//     console.log(this.tenants);

//   }
// }

// const house = new House("Soborna", "Wooden");
// house.addTenant('Jack')
// house.addTenant('Luke')
// house.showTenants()
// house.showType()
// console.log(house.type);

// class House {
//   private tenants: string[] = []

//   constructor(protected street: string, public readonly type: string) {
//   }

//   public showAddress(this: House): void {
//     console.log("Address " + this.street);
//   }

//   public showType(this: House): void {
//     console.log("Type " + this.type);
//   }

//   public addTenant(tenant: string): void {
//     this.tenants.push(tenant)
//   }

//   public showTenants(): void {
//     console.log(this.tenants);

//   }
// }

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;
//   constructor(street: string, general: string) {
//     super('stone', street)
//     this.chargeOfTheHouse = general;
//   }

//   public showAddress(): void {
//     console.log("Address " + this.street);
//   }

//   public showTenants(): void {
//     console.log("General: " + this.chargeOfTheHouse)

//     super.showTenants()
//   }
// }

// const stoneHouse = new StoneHouse('Bezrucko', "Denis");
// stoneHouse.addTenant('Sam');
// stoneHouse.addTenant('Don')
// stoneHouse.showTenants();

// abstract class Plane {
//   protected pilotInCabine = false;

//   public sitInPlane() {
//     this.pilotInCabine = true;
//   }

//   public abstract startEngine(): string;

// }

// class Maize extends Plane {
//   public startEngine() {
//     return 'ta-ta-ta-ta'
//   }
// }

// class Boing extends Plane {
//   public startEngine() {
//     return 'Wuuuuuuuuuu'
//   }
// }

// const maize = new Maize()
// const boing = new Boing()

// maize.sitInPlane();
// boing.sitInPlane();

// console.log(maize.startEngine())
// console.log(boing.startEngine())

// interface IPerson {
//  readonly name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public readonly name: string, public age: number) {
//     this.checkAge()
//    }
//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error ('Pilot is too young')
//     }
//   }

//   public greet(phrase: string): void {
//       console.log(phrase + ' ' + this.name);
//   }

//   public flyMessage(): void {
//     console.log('The plain is flying. Have a nice flight!');

//   }
// }

// abstract class Plane {
//   protected pilot?: IPilot;

//   public sitInPlane(pilot: IPilot) {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;

// }

// class Boing extends Plane {
//   public startEngine() {
//     if (!this.pilot) {
//       throw new Error('Here is no pilot in the cabin')
//     }
//     console.log('Turbines start working');
//     this.pilot.flyMessage()

//     return true
//   }
// }

// class Terrorist implements IPilot {
//   public bluff(phrase: string): void {
//     console.log(phrase);

//   }
//   public flyMessage(): void {
//     console.log('Your plane is under our control. We demand 100 million dollars or we will kill all hostages');
// }
// }

// const boing = new Boing()
// const pilot = new Pilot('Sam', 28);
// pilot.greet('Hello. I am a captain');
// boing.sitInPlane(pilot);
// boing.startEngine()

// const pilot = new Terrorist();
// boing.sitInPlane(pilot);
// pilot.bluff('Attention')
// boing.startEngine();

// type addFunction = (n1: number, n2: number) => number;

// interface addFunction{ (n1: number, n2: number): number}

// const foo: addFunction = (n1: number, n2: number)=>{
//   return n1+n2
// }

/*
  |==============================
  | Lesson 4 Homework
  |==============================
*/
// class Key {
//   private signature: number;

//   constructor() {
//     this.signature = Math.random();
//   }

//   getSignature(): number {
//     return this.signature;
//   }
// }

// class Person {
//   constructor(public name: string, private key: Key) {}
//   getKey(): Key {
//     return this.key;
//   }
// }

// abstract class House {
//   protected door = false;
//   protected tenants: Person[] = [];

//   constructor(protected key: Key) {}

//   comeIn(tenant: Person) {
//     if (!this.door) {
//       throw new Error("The door is block");
//     }
//     console.log(`${tenant.name} is at home`);

//     this.tenants.push(tenant);
//   }

//   abstract openDoor(key: Key): boolean;
// }

// class MyHouse extends House {
//   openDoor(key: Key) {
//     if (key.getSignature() !== this.key.getSignature()) {
//       throw new Error("This key is wrong");
//     }
//     console.log("The door is open");

//     return (this.door = true);
//   }
// }

// const key = new Key();

// const person = new Person("Luke", key);
// const person2 = new Person("Jack", key);
// const myHouse = new MyHouse(key);

// myHouse.openDoor(person.getKey());
// myHouse.openDoor(person2.getKey());
// myHouse.comeIn(person);
// myHouse.comeIn(person2);


/*
  |==============================
  | Lesson 5 Practice
  |==============================
*/

// type Admin = {
//   name: string,
//   privileges: string[]
// }

// type User = {
//   name: string;
//   startDate: Date;
// }

// type AdminUser = Admin & User

// const user: AdminUser = {
//   name: 'jack', privileges: ['first', 'second'], startDate: new Date
// }
// console.log(user);


// interface Admin  {
//   name: string,
//   privileges: string[]
// }

// interface User {
//   name: string;
//   startDate: Date;
// }

// interface AdminUser extends Admin, User{ }


// type ComplexType = string | number
// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString()
//   }
//   return a+b
// }


interface Admin  {
  name: string,
  privileges: string[]
}

interface User {
  name: string;
  startDate: Date; 
}

type AdminOrUser = Admin | User;
function showFields(el: AdminOrUser) {
  if ('startDate' in el) {
    console.log(el.startDate);
  }
  if ('privileges' in el) {
    console.log(el.privileges);
  }
  console.log(el.name);
  
}


abstract class Guy {
  constructor(public name: string){}
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

function guy(user: Guy) {
  if (user instanceof Good) {
    user.advice()
  }
  if (user instanceof Bad) {
    user.insult()
  }
}


const input = document.getElementById('num1')
if (input){
  (input as HTMLInputElement).value
  const newValue = input as HTMLInputElement;
  newValue.value
}



// interface IPerson {
//   name: string;
//   age: number,
//   [x: string]: string | number;
// }

// const user: IPerson = {
//   name: 'Jack',
//   age: 35,
//   gender: 'Man',
//   country: 'United States',
  
// }


interface IPerson {
  name: string;
  additionInfo?: {
    someInfo: string
  }
}

const user: IPerson = {
  name: 'Luke'
}

user?.additionInfo?.someInfo



const userInput = null;
const store = userInput ?? 'DEFAULT'
console.log(store);


function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string | number, b: string | number){
  if (typeof a === 'string' || typeof b === 'string') {
   return a.toString()+b.toString()
  }
  return a + b;
}


let arr: (string | number)[];
arr = ['arr', 1];
const promise: Promise<string> = new Promise((resolve) => {
  resolve('string')
});
 
promise.then((data) => {
  console.log(data);
  });

(() => {
  async function promiseFoo(): Promise<string> {
    return 'String2'
  }
  promiseFoo().then((data) => {
      console.log(data);
      
  })
})();

// type Person = {
//   name: string
// }
// type additionFields = {
//   age: number
// }
// function mergee<T, U>(objA: T, objB: U){
//   return Object.assign({}, objA, objB);
// }
// const toMerge1 = {
//   name: 'Max'
// }
// const toMerge2 = {
//   age: 22
// }
// const mergeed = merge<Person, additionFields>(toMerge1, toMerge2);
// mergeed.name


function mergee<T extends object, U extends object>(objA: T, objB: U){
  return Object.assign({}, objA, objB);
}
const toMerge1 = {
  name: 'Max'
}
const toMerge2 = {
  age: 22
}
const mergeed = merge(toMerge1, toMerge2);
mergeed.name


interface ILength {
  length: number
}
function getLength <T extends ILength>(str: T): number {
  return str.length
}
const obj = {
  length: 20
}
console.log(getLength(obj));


function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key]
}
const field = extractValue({ name: 'Bob' }, 'name')


class DataStore<T>{
  private data: T[] = []
  addItem(item: T): void{
    this.data.push(item)
  }
  getItem(): T[]{
    return this.data
  }
}
interface IPerson {
  name: string
}
const storeUsers = new DataStore<IPerson>()
storeUsers.addItem({name: 'turbo'})
storeUsers.addItem({name: 'turbo2'})
console.log(storeUsers.getItem());

const ageStore = new DataStore<number>();
ageStore.addItem(10)
ageStore.addItem(11)
console.log(ageStore.getItem());



interface IUser {
  name: string;
  age: number;
}
function createPerson(name: string): IUser {
  const person: Partial<IUser> = {name};
  person.age = 21;
  return person as IUser
}



// const arr1: Readonly<string[]> = ['one', 'two', 'three']
// arr1.push('four')
// console.log(arr1);

// interface IUser1{
//   name: string
// }

// const obj1: Readonly<IPerson> = {
//   name: 'Osaka'
// }
// obj1.name = 'Osaka1'



interface IPage {
  title: string;
  annotation: string;
  pageNumber: number;
}
const pageAnnotation: Pick<IPage, 'annotation' | 'pageNumber'> = {
  annotation: 'small page',
  pageNumber: 22
}
console.log(pageAnnotation);


/*
  |==============================
  | Lesson 5 Homework
  |==============================
*/

function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}


function merge<T extends object, U extends object >(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged = merge({ auto: 'Renault' }, { model: 'Megane' })
console.log(merged);



class Component<T> {
  constructor (public props:T) {

  }
}

interface IProps {
  title: string,
}

class Page extends Component<IProps>{
  pageInfo () {
    console.log(this.props.title);
  }
}

const newPage = new Page({ title: 'Cat' });
newPage.pageInfo()
