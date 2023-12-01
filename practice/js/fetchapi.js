// Callback Function 

// setTimeout(function(){
//     console.log("Hello World!");
// }, 5000);

// let persons = [
//     {firstName: "Simanta", lastName: "Paul"},
//     {firstName: "Fazle", lastName: "Rahat"}
// ]
// function createPerson(person) {
//    setTimeout(function() {
//        persons.push(person);
//    }, 4000); 
// }

// function getPerson() {
//      setTimeout(function () {
//           let output = '';
//           persons.forEach(function(person) {
//                output += `<li>${person.firstName} ${person.lastName}</li>`;
//           });
//           document.getElementById('output').innerHTML = output;
//      },1000)
// }
// createPerson({
//      firstName: "Rony",
//      lastName: "Chy"
// }, getPerson);
// getPerson();

// orginal callback

// let persons = [{
//           firstName: "Simanta",
//           lastName: "Paul"
//      },
//      {
//           firstName: "Fazle",
//           lastName: "Rahat"
//      }
// ]

// function createPerson(person,callback) {
//      setTimeout(function () {
//           persons.push(person);
//           callback();
//      }, 2000);
     
// }

// function getPerson() {
//      setTimeout(function () {
//           let output = '';
//           persons.forEach(function (person) {
//                output += `<li>${person.firstName} ${person.lastName}</li>`;
//           });
//           document.getElementById('output').innerHTML = output;
//      }, 500)
// }
// createPerson({
//      firstName: "Rony",
//      lastName: "Chy"
// }, getPerson);
// Promises
// .then
let persons = [{
          firstName: "Simanta",
          lastName: "Paul"
     },
     {
          firstName: "Fazle",
          lastName: "Rahat"
     }
]

function createPerson(person) {
     let prom = new Promise(function (resolve, reject) {
          persons.push(person);
          let error = false;

          if (!error) {
               resolve();
          } else {
               reject('Error!: Something Wrong!');
          }

     });
     return prom;
}

function getPerson() {
     setTimeout(function () {
          let output = '';
          persons.forEach(function (person) {
               output += `<li>${person.firstName} ${person.lastName}</li>`
          });
          document.getElementById('output').innerHTML = output;
     }, 500);
}

createPerson({
          firstName: "Rony",
          lastName: "Chy"
     })
     .then(getPerson)
     .catch(function (err) {
          console.log(err);
     });


document.getElementById('get_data')
     .addEventListener('click',getData);

// function getData() {
//      let url = 'https://api.chucknorris.io/jokes/random';
//      fetch(url)
//      .then(function (res) {
//           // console.log(res.json());
//           return res.json();
//      })
//      .then(function (data) {
//           console.log(data);
//      })
//      .catch(function (err) {
//           console.log(err);
//      })
// }
function getData() {
     let url = 'https://api.chucknorris.io/jokes/random';
     fetch(url)
     .then(res=>res.json())
     .then(data => {
          console.log(data);
          // let value = typeof(data);
          document.getElementById('output_joke').innerHTML = `<h3>${data.value}</h3>`
          console.log(data.value);
     })
     .catch(err => err);
}
function getJoke(e) {
     
}