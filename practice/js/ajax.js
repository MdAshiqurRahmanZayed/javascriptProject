// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML
// Get data without loading the page

document.getElementById('get_data').
     addEventListener('click',loadData);

// function loadData() {
//      // Create XHR Object (Xml Http Request)

//      let xhr = new XMLHttpRequest();
//      // console.log(xhr);
//      //Open
//      xhr.open('GET','data.txt',true);
//      xhr.onload = function () {
//          // HTTP statuses
//          // 200: "OK"
//          // 403: "Forbidden"
//          // 404: "Not Found"
//          if (this.status === 200) {
//              document.getElementById('output').innerHTML = this.responseText
//          }
//      }

//          //xhr.onreadystatechange = function () {
//          //     // readyState Values
//          //     // 0: request not initialized
//          //     // 1: server connection established
//          //     // 2: request received
//          //     // 3: processing request
//          //     // 4: request finished and response is ready
//          //     //console.log(this.readyState);
//          //     if (this.status === 200 && this.readyState === 4) {
//          //         console.log(this.responseText);
//          //     }
//          // }

//      xhr.send();

//      console.log(xhr);

// }


// https://api.chucknorris.io/jokes/random
// API
// RESTful API
function loadData(e) {
     let number = document.getElementById('numberJokes').value;
     console.log(number);
     let xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
     let jokes  = [];
     xhr.onprogress = function () {
          document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
     }

     xhr.onload =function () {
          if (this.status===200) {
               let data =JSON.parse( this.responseText);

               console.log( data);
               for (let index = 0; index < number; index++) {
                    jokes.push(data[index]);
                    
               }
               let output = "<ol>";
               jokes.forEach(function (item) {
                    // console.log(item.body);
                    output += `<li>${item.body}</li>`
               });
               output += "</ol>";
               // let joke = data[0];
               // console.log(jokes);
               document.getElementById('output').innerHTML = output;

          }
     } 
     xhr.send ()
     
}
// // http://www.icndb.com/api/
// // API
// // RESTful API

// document.getElementById('get_data').addEventListener('click', loadJokes);

// function loadJokes(e) {
//      let number = document.getElementById('numberJokes').value;
//      //console.log(number);
//      let xhr = new XMLHttpRequest();

//      xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//      xhr.onprogress = function () {
//           document.getElementById('output').innerHTML = "<h3>Loading......</h3>";
//      }

//      xhr.onload = function () {
//           if (this.status === 200) {
//                let data = JSON.parse(this.responseText);
//                let jokes = data.value;
//                let output = "<ol>";

//                jokes.forEach(function (item) {
//                     //console.log(item.joke);
//                     output += `<li>${item.joke}</li>`;
//                });
//                output += "</ol>";

//                document.getElementById('output').innerHTML = output;
//                //console.log(jokes);
//                //console.log(data);
//           }
//      }

//      xhr.send();
// }