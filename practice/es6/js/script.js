// // Global Scope
// var a = 1;
// let b = 2;
// const c = 3;


// console.log(`Global Scope: `, a, b, c);

// function test() {
//      var a = 4;
//      let b = 5;
//      const c = 6;
//      console.log(`Functions Scope: `, a, b, c);
// }

// test();

// console.log(`Global Scope: `, a, b, c);

// if (true) {
//      var a = 7;
//      let b = 8;
//      const c = 9;
//      console.log(`If Scope: `, a, b, c);
// }

// console.log(`Global Scope: `, a, b, c);


// for (let a = 0; a < 10; a++) {
//      console.log(`Loop: `, a);
// }


// console.log(`Global Scope: `, a, b, c);
// Normal Declaration
function saySomething(name) {
     console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function (name2) {
     console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
     console.log("I am " + name3);
}

let hello = name=>'hi '+name;


saySomething("Bohubrihi");
saySomething1("Simanta");
saySomething2("JavaScript");
console.log(hello('zayed'));

numbers = [1,3,5,11,5]
numbers.forEach(num => {
     console.log(num);
});
let squreNumber = numbers.map(num=>{
     return num+num;
})
console.log(squreNumber);
 // Template literals (ES6)
// Backtick ``
let name = "Rahim";
let age = "38";
let dob = "21 June, 1983";

console.log(`His name is ${name}
His age is ${age}
Date of Birth ${dob}`);

let a = 34
let b = 67
console.log(`${a} + ${b} = ${ a + b }`); 

//Array Destructuring
let [aa,bb,cc]= numbers;
console.log(aa,bb,cc);
var [aa1,,cc1]= numbers;
console.log(aa1, cc1);
// Swap Variables

let a1, b1;
a1 = 8;
b1 = 20;

// let temp = a;
// a = b;
// b = temp;

[a1, b1] = [b1, a1];


console.log(`a = ${a1} and b = ${b1}`);
// Object Destructing

let person = {
     firstName: "Fazle",
     lastName: "Rahat",
     dob: '09-27-1995'
}

// let fname = person.firstName,
// lname = person.lastName,
// dob = person.dob;
//let { firstName : fname, lastName, dob } = person;
//console.log(fname, lastName, dob);


function display({
     firstName,
     lastName,
     dob
}) {
     console.log(firstName, lastName, dob);
}

display(person);
 // Spread Operator ...
let str = "Bohubrihi";
let newStr = [...str];

//console.log(newStr);

let fruit1 = ["Apple", "Pine-apple", "Mango"];
let fruit2 = ["Orange", "Grape"];
let newFruit = "Jackfruit";

let newArr = [...fruit1, newFruit, ...fruit2];

//console.log(newArr);
// Spread on Object (ES8)
let person1 = {
    fname: "Simanta",
    lname: "Paul"
}

let newPerson = {
     ...person1,
     dob: "08-26-1995"
}
console.log(newPerson);
// Spread Operator ...

let numbers1 = [23, 1, 0, -1];

//console.log(Math.max(...numbers));

let person3 = ["Simanta", "Paul"]

let test = (fname, lname) => {
     console.log(`Hello ${fname} ${lname}`);
}

test(...person3);



// Rest Operator ...

let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits

// console.log(first);
// console.log(second);
// console.log(third);

let person4 = {
     fname: "Simanta",
     lname: "Paul",
     dob: "8-26-1995"
}

let {
     fname,
     ...lname
} = person4

// console.log(fname);
// console.log(lname);

let moreNum = [78, 1, 2, 5, 6];

let test1 = (name, ...numbers) => { // Rest
     console.log(name);
     console.log(numbers);
}

test1("Simanta", 67, 3, 3);
test1("Simanta", ...moreNum); // Spread 
 // Symbols
// let a = Symbol()

// let person = {
//     name: "Simanta",
//     age: 25,
//     [a]: "Hello World!"
// }


// console.log(person);
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));
// console.log(Object.keys(person));
// console.log(JSON.stringify(person));


// for (x in person) {
//     console.log(x);

// }

// let sym1 = Symbol("Hello");
// let sym2 = Symbol("Hello");

// console.log(sym1 == sym2);
// console.log(sym1);
// // Iterator
// let iterable = "Hello";
// iterable = [1, 2, 3, 4, 5, 5];
// // Symbol.iterator
// let iter = iterable[Symbol.iterator]();

// console.log(iter);

// console.log(iter.next());
// console.log(iter.next());

// console.log("Other Codes...");

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// // Custom Iterator
// function customIterator(arr) {
//      let i = 0;

//      return {
//           next: function () {
//                return i < arr.length ? {
//                     value: arr[i++],
//                     done: false
//                } : {
//                     value: undefined,
//                     done: true
//                };
//           }
//      };
// }

// let members = customIterator(names);

// console.log(members.next().value);
// console.log(members.next().value);
// console.log(members.next().value);
// console.log("Random codes...");
// console.log(members.next());
// console.log(members.next());



// Generators

function* genFunction() {
     console.log("I am some code");
     yield 1;
     return;
     console.log("I am some code");
     console.log("I am some code");
     console.log("I am some code");
     yield "Rahim";
     yield 4;
     yield "Karim";
     yield "Hello World";
}

let iter1 = genFunction();

console.log(iter1.next().value);
console.log(iter1.next().value);


// Promises
// Successful -> resolve
// Failed -> reject
let prom = new Promise((resolve, reject) => {
     let a;
     setTimeout(() => {
          a = 1 + 1;
          if (a == 2) {
               resolve('Success');
          } else {
               reject('Failed');
          }
     }, 4000);
})
// .then .catch
prom.then((message) => {
     console.log("I am from then " + message);
}).catch((message) => {
     console.log("I am from catch " + message);
})


console.log("I am after Promise");

// Example : Image File 
// fetch('https://jsonplaceholder.typicode.com/todos/')
//      .then(response => response.json())
//      .then(data => {console.log(data);});


// async await

async function geTodos() {
     let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
     let data  = await response.json();
     return data;
}

geTodos().then(res=>{
     console.log(res);
})
// Maps
let myMap = new Map(
     [
          ['first key', 10],
          ['second key', 'Bohubrihi']
     ]
);

// Add
myMap.set('third key', 'Hello Wolrd!');

//console.log(myMap.get('second key'));
//console.log(myMap.has('key'));
//console.log(myMap.size);

// Iterate

// for (let x of myMap) {
//     console.log(x);
// }

// for (let [x,y] of myMap) {
//     console.log(x, y);

// }

// for (let x of myMap.keys()) {
//     console.log(x);
// }

// for (let x of myMap.values()) {
//     console.log(x);
// }

// for (let x of myMap.entries()) {
//     console.log(x);
// }

// myMap.forEach((x, y) => {
//     console.log(x,y);

// })
//let arr = Array.from(myMap);
//let arr = Array.from(myMap.keys());
let arr = Array.from(myMap.values());
console.log(arr);
console.log(myMap);
for (x of myMap){
     console.log(x[1]);
}