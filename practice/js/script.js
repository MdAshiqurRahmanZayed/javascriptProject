// document.write(" i am zayed|||");
// const root = document.getElementById("root");
// root.innerHTML = "ssss";
// // window.alert("i am learning javascript") 
// console.log("sadas");
// var name = prompt("Enter your name?")
// console.log(name);
// document.write(name);

// var temp = prompt("Enter a celcius number.");
// const result = ((9/5)*temp) + 32;
// alert("Fahrenheit: " + result + " Degree");
// console.log("Task Complete");
var x;
x = 3.141;
x = 34;
x = 123e5; // 123 * 10 ** 5
x = 123e-5; // 123 * 10 ** -5

// Numbers takes 64 bits

// + can be used for both addition and conatenation
"34" + "45" // will be string
34 + "45" // will be string
"34" + 45 // will be string
"The result is " + 34 + 45
34 + 45 + "is the result"
34 + 45 + "13"

//Numeric Strings
"25"-"5"
"25"/"5" // result 10
"25"*"5"
"25"%"5"
"25"+"5" //exception

//Infinity
var num = Infinity;
25/0 // will get Infinity


//Hexa Decimal Numbers
var x = 0xBB

x.toString() // Returns number as string

x.toString(16);

var x = 3.1416;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

var x = "123"
parseInt(x);
x = "123.45"
parseFloat(x);

isNaN(x);

"Hello World"
'Hello World'
"Hello  World"

//Concatenation
"Hello" + "World"


var x = "Hello World";

//Length of String
x.length; //It is a property

//Indexing
"Hello World"[0]
"Hello World"[3]
x = "Hello World";
x[0]
x[3]

//Immutable
x[1]
x[1] = "5"
x[1]


// return a new string, doesn't change x
//These are methods
x.slice(1, 5);
x.slice(-6, -1);
x.substr(3, 2); // 2nd parameter means the length
x.replace("Hello", "World");
x.toUpperCase();
x.toLowerCase();
x.concat("1", "2");
x.trim();

10 > 9 
-1 > 2
"Hello" == "Hello"
var x = "Hello";
var y = Boolean(x);

x = null
y = Boolean(x);

x = 10 / "H";
Boolean(x);

var myVar;
Boolean(x);

 //Collection of items
countries = ["Bangladesh", "USA", "UK"]

countries[0]
countries[1]

country = countries[0]
country

//Mutable
countries[0] = "Poland"
countries
countries.length;
countries[countries.length] = "Norway"

//Push and Pop
countries.push("China"); // return length
countries.pop() // returns length
countries.push("Japan", "Srilanka");
countries.shift() //returns the shifted
countries.unshift("Germany") // returns length


//Empty array
var numbers;
numbers = []
numbers.push(1)
numbers.push(78)
numbers.push("One")

x = "Bangladesh"
var y = x.split("")
x = "Bangladesh is a country"
y = x.split("")
y = x.split("n")
z = x.split(" ")
x = "Bangladesh, China, Finland"
y = x.split(",")

z.toString()
z.join("/")

x.concat(z, y);

countries.sort()
countries.reverse()
student = {
     name: "Rahim",
     age: 25,
     hometown: "Dhaka"
}
student["name"]
student.name


student = {}
student["name"] = "Rahim"


// delete simanta.name

// Template literals (ES6)
// Backtick ``
// let name = "Rahim";
// let age = "38";
// let bob = "21 June, 1983";

// console.log(`His name is ${name}
// His age is ${age}
// Date of Birth ${bob}`);

// let a = 34
// let b = 67
// console.log(`${a} + ${b} = ${ a + b }`);

// // Switch
// console.log("Select an option:na. Option 1 nb. Option 2 nc. Option 3 ");

// choice = prompt();

// var text;

// switch (choice) {
//      case "a": //if(choice=="a")
//           text = "Option 1 Selected!";
//           break;
//      case "b":
//           text = "Option 2 Selected!";
//           break;
//      case "c":
//           text = "Option 3 Selected!";
//           break;
//      default: //else
//           text = "No option is selected!";
//           break;
// }

// console.log(text);
// var number = prompt("What is your number?");
// number = parseInt(number);
// var grade;

// if (number <= 100 && number >= 80) {
//      grade = "A+";
// } else if (number < 80 && number >= 70) {
//      grade = "A";
// } else if (number < 70 && number >= 60) {
//      grade = "A-";
// } else if (number < 60 && number >= 50) {
//      grade = "B";
// } else if (number < 50 && number >= 40) {
//      grade = "C";
// } else if (number < 40 && number >= 33) {
//      grade = "D";
// } else if (number < 30 && number >= 0) {
//      grade = "F";
// } else {
//      grade = "Invalid Input!";
// }

// console.log("Your Grade: " + grade); 

// console.log("Select an Option: n1. Add n2. Subtractn3. Multiply n4. Divide");

// var num1 = prompt("Enter First Number: ");
// var num2 = prompt("Enter Second Number: ");
// var option = prompt("Choose an operation: ");
// var result = null;

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// option = parseInt(option);

// var num1Con = isNaN(num1);
// var num2Con = isNaN(num2);
// var optionCon = isNaN(option);

// if (num1Con || num2Con || optionCon) {
//      console.log("Invalid Input!");
// } else {
//      switch (option) {
//           case 1:
//                result = num1 + num2;
//                break;
//           case 2:
//                result = num1 - num2;
//                break;
//           case 3:
//                result = num1 * num2;
//                break;
//           case 4:
//                result = num1 / num2;
//                break;
//           default:
//                break;
//      }

//      if (result == null) {
//           console.log("No Result!");
//      } else {
//           console.log("Result: " + result);
//      }
// }


// //while loop

// // Print 1 to 10

// // sum of 1 to 10

// var i = 1;

// var sum = 0;

// var product = 1;

// // 1 + 2 + 3 + 4 + 5.....

// // 1 * 2 * 3 * 4 * 5....




// while (i <= 10) { //console.log(i);

// sum = sum + i;

// product = product * i;

// i++; }




// //console.log("Out of the loop");

// console.log("Result: " + sum);

// console.log("Product: " + product);

// // while loop
// var i = 1; // initialization

// while (i <= 5) { //condition
//      console.log(i);
//      i++; //update
// }

// console.log("End of while loop!")
// console.log("Start of for loop!");
// // for loop

// for (var j = 1; j <= 5; j++) {
//      console.log(j);
// }

// for (var k = 5; k >= 1; k--) {
//      console.log(k);
// }

// break 

// for (var i = 1; i <= 5; i++) {
//      if (i == 3) {
//           break;
//      }
//      console.log(i);
// }



// // continue

// for (var i = 1; i <= 10; i++) {
//      if (i % 2 == 1) {
//           continue;
//      }
//      console.log(i);
// }

// String and array
// let name1 = "I am learning Javascript!";
// let food = ["Cake", "Chocolate", "Ice Cream"];
// let len = food.length;

// for (var i = 0; i < len; i++) {
//      console.log(`Index : ${i}`);
//      console.log(food[i]);
// }

// // For-in string/array/object
// // For-of string/array
// let name2 = "I am learning Javascript!";
// let food2 = ["Cake", "Chocolate", "Ice Cream"];

// //object doesn't have index
// let person = {
//      name2: "Shakib Al Hasan",
//      profession: "Cricketer",
//      team: "Bangladesh",
//      age: 33,
// }

// // We will get index
// for (var x in name) {
//      console.log(`index ${x} and item ${ name[x] }`);
// }


// // We will get items/values
// for (var x of name) {
//      console.log(x);
// }

// // We will get indexes
// for (var y in food2) {
//      console.log(`Index: ${y}; and item: ${food2[y]}`);
// }

// // We will get items
// for (var y of food2) {
//      console.log(y);
// }


// // For-in with objects
// for (var x in person) {
//      console.log(`Property: ${x}
//     Value: ${person[x] }`);
// }

// For-of won't work for objects 



// Functions
// Built in Functions
//alert();
//console.log();

// User Defined Functions

// Declaration of function

//Execution of Function
// saySomething();
// //console.log("--------");




// function saySomething() {
//      console.log("Hello!");
//      console.log("I am learning Javascript!");
//      console.log("Bohubrihi");
// }

// // FUnction parameter/argument

// function saySomenthing(fname = "Fazle", lname = "Rahat") {
//      console.log(`Hello ${ fname } ${ lname }!`);
// }

// //alert("Hello");
// //let val = "Simanta";
// let firstname = "Simanta";
// let lastname = "Paul";

// saySomenthing(firstname, lastname);


// function addNum(a = 0, b = 0) {
//      console.log(a + b);
// }

// addNum(4, 5);
// addNum(3.6, 2.3);

// // Normal Declaration
// function saySomething(name) {
//      console.log('Hello ' + name);
// }

// // Function Expression

// let saySomething1 = function (name2) {
//      console.log('Hello ' + name2);
// }

// // Arrow Function (ES6)

// let saySomething2 = (name3) => {
//      console.log("I am " + name3);
// }
// saySomething("Bohubrihi");
// saySomething1("Simanta");
// saySomething2("JavaScript");
// Array iteration using forEach

// var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
// var numbers = [1, 32, 31, 2];
// let printEverything = function (item, i, abc) {
//      console.log(`Index : ${i} and Item ${item}`);
//      console.log(abc);
// }

// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array
// foods.forEach(printEverything);

// // Array iteration using Mapping

// var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
// var numbers = [1, 32, 31, 2];


// function addSomething(item) {
//      return `${item} is a Food`;
// }

// let arr_res = foods.map(addSomething);
// let arr_square = numbers.map(function (item) {
//      return item * item;
// })

// console.log(arr_res);
// console.log(arr_square);

// // Object Method
// let person = {
//      firstname: "Fazle",
//      lastname: "Rahat",
//      dob: "9-10-1995", //number, string, date, array, object

//      fullname: function () { //Method
//           return `${this.firstname} ${this.lastname}`;
//      }

// }

// console.log(person.firstname);
// console.log(person.fullname());
// let val;
// let str = "Bohubrihi";
// console.log(str.length);
// console.log(str.split());
//  // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(23.5);
// val = Math.ceil(3.2);
// val = Math.floor(3.9);
// val = Math.sqrt(81);
// val = Math.abs(-56);
// val = Math.pow(2, 8);
// val = Math.min(2,3,1,0,-8);
// val = Math.max(-1,2,4,5);
// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);



// console.log(val);


// Date Object
// let val;
// let today = new Date();

// val = today;
// val = today.toString();

// let birthday = new Date('11-2-1995 8:25:00');
// birthday = new Date('November 2 1995');
// birthday = new Date('11/2/1995');
// val = birthday;
// val = today.getMonth(); // Start from 0
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();
// timestamp -> amount of time past since Jan 1st 1970

// birthday.setMonth(0);
// birthday.setDate(12);
// birthday.setFullYear(1996);
// birthday.setHours(3);

// console.log(val);
// console.log(birthday);

//  // Global Scope
// var a = 1;
// let b = 2;
// const c = 3;


// console.log(`Global Scope: `, a, b, c);

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`Functions Scope: `, a, b ,c);
// }

// test();

// console.log(`Global Scope: `, a, b, c);

// if (true) {
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log(`If Scope: ` , a, b, c);
// }

// console.log(`Global Scope: `, a, b, c);


// for (let a = 0; a <10; a ++) {
//     console.log(`Loop: `, a);
// }


// console.log(`Global Scope: `, a, b, c);


// Class(ES6) 
// Class is a template for creating objects
// Class(ES6) 
// Class is a template for creating objects
// class Person {
//      constructor(fname, lname, birthday) {
//           this.firstname = fname;
//           this.lastname = lname;
//           const [month, day, year] = birthday.split('-');
//           this.dob = new Date(`${year}-${month}-${day}`);
//           this.currentYear = new Date().getFullYear();
//           // console.log(this.currentYear);
//      }

//      calculateAge() {
//           const birthYear = this.dob.getFullYear();
//           const age = this.currentYear - birthYear;
//           return age;
//      }

//      fullname() {
//           console.log(this.firstname, this.lastname);
//      }
// }


// let person1 = new Person("Fazle", "Rahat", "11-13-1988");
// let person2 = new Person("Moinul", "Islam", "02-11-1991");
// let person3 = new Person("Rony", "Chy", "01-17-1996");

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());

// console.log(person1.fullname());
// console.log(person2.fullname());
// console.log(person3.fullname());



// Sub Class
// Inheritance

// class Person { //Base Class
//      constructor(fname, lname) {
//           this.firstname = fname;
//           this.lastname = lname;
//      }

//      greeting() {
//           return `Hello ${this.firstname} ${this.lastname}!`;
//      }
//      fullname() {
//                return `${this.firstname} ${this.lastname}`;
//           }
//      // Static Function
//      static test(){
//           console.log("this is testing static");
//      }
// }

// class Customer extends Person { //Sub Class
//      constructor(fname, lname, phone, memberShip) {
//           super(fname, lname);

//           this.phone = phone;
//           this.memberShip = memberShip;
//      }

//      fullname() {
//           return `${this.firstname} ${this.lastname}`;
//      }
// }

// let person1 = new Person("Fazle", "Rahat");
// console.log(person1);
// console.log(person1.greeting());
// console.log(person1.fullname());
// console.log(Person.test());

// let customer1 = new Customer("Rony", "Chy", "017777778888", "1234");
// console.log(customer1);
// console.log(customer1.greeting());
// console.log(customer1.fullname());




