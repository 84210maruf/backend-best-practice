//#### Basic ####
const country = "Bangladeshi";
console.log(country);
let rsName; //
rsName = 'BD'; //reasign
rsName = 101;
console.log(rsName);
function multiply(a, b) {
    return a * b;
}
console.log(multiply('10', 20)); //showing error
let fruits = ['apple', 'banana', 'orange'];
fruits.push(10); //showing error
console.log(fruits);
//#### Explicit and Union types ####
//normal veriable Type
let a;
let b;
let c; //c is a number or string
a = 'zidan';
b = 102;
c = 'zidan'; //OR
c = 102; //OR
c = true;
console.log(a, b, c);
// array variable Type
let arrS = []; //string array define
let arrN = []; //number array define
let arr = []; //string or number or boolian or object
arrS.push('zayan');
arrN.push(103);
arr.push('zayan'); //Or
arr.push(103); //Or
arr.push(false); //Or
arr.push({ name: 'Zohan', age: 5 });
console.log(arrS, arrN, arr);
//#### Object variable Type ####
let o; //without structure
let ob;
ob = {
    name: 'zannora',
    age: 1,
    isAdult: false
};
o = {
    name: 'zannora',
    age: 1,
    isAdult: false,
    obj: {
        m: 1,
        n: ['hallow', 100]
    }
};
o = [1, 2, 3]; //object type but alw array
console.log(o, ob);
//#### Dynamic Type ####
//normal veriable
let aa; //string,number,boolian type
//array
let arrr = []; //any type of arry
//object
let obj;
// FUNCTION itself type , parameter type, return type
//itself type
let f;
f = () => {
    console.log('hallo Func');
};
f();
// parameter type
let func = (a, b, c = 'Optinal parameter') => {
    console.log(`HALLOW ${a} and ${b} optional : ${c}`);
};
func('maruf', 104);
func('maruf', 104, 'BUBT');
// return type
let funcR = (a, b) => {
    return a + b;
};
console.log(funcR(10, 10) + 100);
const useDetails = (id, user) => {
    console.log(`User id Is ${id}, name is ${user.name} and age is ${user.age}`);
};
const user = (user) => {
    console.log(`name : ${user.name} age : ${user.age} `);
};
const userId = 101;
const sampleUser = { name: "Alice", age: 25 };
user(sampleUser);
useDetails(userId, sampleUser);
// Function Signature
let add;
add = (a, b) => { return (a + b); };
let userDetails;
userDetails = (id, user) => {
};
//#### Class Signature ####
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const masrafi = new Player('Masrafi', 34, 'Bangladesh');
const shakib = new Player('shakib', 38, 'BD');
console.log(masrafi.name);
shakib.play();
const players = []; //its a palyer type array
players.push(masrafi);
players.push(shakib);
console.log(players);
players[0].play();
//#### Access Modifire ####
class Player2 {
    constructor(n, a, c, g) {
        this.name = n;
        this.age = a;
        this.country = c;
        this.gender = g;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const musfiq = new Player2('Mushfiq', 34, 'Bangladesh', 'Male');
musfiq.name = 'rahman'; //reasignable
musfiq.age = 20; //not reasignable coz privet property
musfiq.country = 'England'; //not reasignable coz read-only property
console.log(musfiq); // value changed but not proper way
//also define class with access modifire as
class Player3 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const rubel = new Player3('rubel', 34, 'Bangladesh');
//module system
import { Player4 } from "./classes/Player4.js"; //Player4 is ts file from src/classes but hare use as js file
const rassel = new Player4('rassel', 34, 'Bangladesh');
console.log(rassel);
