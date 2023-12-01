let val;
val = this;
val = window;
val = window.document;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

links = document.links;

let linkArr = Array.from(links);

linkArr.forEach(function (link) {
    console.log(link.getAttribute('href'));
});

console.log(links);
console.log(val);

// Getting element
let title = document.getElementById('document-title');
console.log(title);


//Changing style
document.getElementById('document-title').style.background = '#333';
document.getElementById('document-title').style.color = '#fff';
document.getElementById('document-title').style.padding = '10px';
document.getElementById('document-title').style.display = 'block';

//Changing content
document.getElementById('document-title').
textContent = 'First title';
document.getElementById('document-title').
innerHTML = 'New First title';


title.innerHTML = "Updated title"

let QTitle = document.querySelector('#document-title')
QTitle.innerHTML = "testing";

QTitle = document.querySelector('h3').style.background = "red";
QTitle = document.querySelector('ol')
QTitle = document.querySelector('ol li')
QTitle = document.querySelector('ul li')
QTitle = document.querySelector('li:last-child')
QTitle = document.querySelector('li:nth-child(1)').innerHTML = "Test"


console.log(QTitle);



//DOM Selector (Multiple Elements)
// Multiselector 
// document.getElementsByClassName()
let list = document.getElementsByClassName('sample-class');
list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = 'Hello World!';
//console.log(list[0]);

// document.getElementsByTagName()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');

let lis = Array.from(list);
lis.forEach(function (item) {
    //console.log(item);
});

// document.querySelectorAll()
// id -> #
// classname -> .
// tagname -> nothing

list = document.querySelectorAll('ol li');
list.forEach(function (item) {
    //console.log(item);
});

let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEve = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (item) {
    item.style.background = 'grey';
    item.style.color = 'white';
});

liEve.forEach(function (item) {
    item.style.background = 'red';
    item.style.color = 'white';
});


console.log(list);

// Traversing the DOM
list = document.querySelector('ul');
listItem = document.querySelector('ul li:first-child');

val = list;
val = listItem;

// Get Child Nodes
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype
val = list.childNodes;

val = list.children;
val = list.children[1];
list.children[0].textContent = "Hello";
val = list.children[1].children[0];
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

val = document.querySelector('ul li:last-child');
val = val.previousSibling;
val = val.previousElementSibling;

console.log(val);
// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');

// Add Id and Class
olItem.className = "a new another-class";
olItem.id = "new-element";

// Add Attribute
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('JavaScript'));
document.querySelector('ol').appendChild(olItem);
//console.log(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);

// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
//parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);


// Remove element

lis = document.querySelectorAll('li');
list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[7]);

//
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
val = list.hasAttribute('title');
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);

//console.log(link); 

// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp

// Event Listener

// document.querySelector('.container-btn').addEventListener('mousemove', message);
// document.querySelector('.container-btn').style.background = "red";

// function message(e) {
//         let val = e;
//         val = e.target; // this
//         val = e.target.id;

//         val = e.timeStamp;
//         val = e.type;

//         val = e.clientY;
//         val = e.clientX;

//         val = e.offsetY;
//         val = e.offsetX;
//         val = this
//         this.style.background = `#${e.offsetX}`;
//         console.log(val);
//         console.log(e.offsetX);
//         console.log(val);
// }

// let btn = document.querySelector('#sample-btn');
// btn.addEventListener('click',message);

// console.log(btn);


document.querySelector('.sample-class-form').addEventListener
('focus', test);
document.querySelector('.sample-class-form').addEventListener
('keyup', test2);

function test(e) {
    this.style.background = 'pink';
    console.log("Focused");
}
function test2(e) {
    // this.style.background = 'pink';
    // console.log("Focused");
    // console.log(this.value);
    document.querySelector('#demo').innerHTML = this.value;
    document.get
}

console.log("Before Error!");

try {
    test();
    // undefined.test();
} catch (err) {
    console.log(err);
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("I am inside finally!");
}

console.log("After Error!");


// Error Handling

let a = 100;

try {
    if (a > 15) throw "Too Big";
    else if (a < 5) throw "Too small";
} catch (err) {
    console.log(err);
}

///https://www.w3schools.com/jsref/jsref_obj_error.asp 

let re ;
re = /hello/i;
console.log(re);
console.log(re.source);
str = "Hellow World";
let result = re.exec(str);
console.log(result); 

str = "Again Hello World Hello";
let newString = str.replace(re, 'Hi');
console.log(newString);