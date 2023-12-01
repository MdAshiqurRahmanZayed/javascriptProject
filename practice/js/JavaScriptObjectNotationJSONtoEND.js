var student = {
     name: "Rahim",
     age: 26,
     hometown: "Dhaka"
};

var student_json = JSON.stringify(student);

console.log(student_json);
var student_new = JSON.parse(student_json);
console.log(student_new);

// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
     "name": "Rahim",
     "age": 25,
     "hometown": "Dhaka",
     "married": false
};

var person2 = {
     name: "Karim",
     age: 35,
     hometown: "Chittagong",
     married: true
};
console.log(person2);
console.log(person1);
console.log(typeof(JSON.stringify(person1)));
console.log(JSON.parse(JSON.stringify(person1)));
console.log(typeof(JSON.parse(JSON.stringify(person1))));

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
     if (this.readyState == 4 && this.status == 200) {
          var data = this.responseText;
          // console.log(data);
          jsonData(data);
     }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(data) {
     // console.log(data);
     var js_obj = JSON.parse(data);
     // console.log(js_obj);
     for(x in js_obj.persons){
          // console.log(x);
          var persons = js_obj.persons;
          // console.log(persons[x]);
          for( i in persons[x]){
               console.log(x,persons[x][i]);
          }
     }
}