let searchBtn1 = document.querySelector('#searchBtn1');
let searchBtn2 = document.querySelector('#searchBtn2');
let searchUser1 = document.querySelector('#searchUser1');
let searchUser2 = document.querySelector('#searchUser2');
let ui = new UI();



searchBtn1.addEventListener('click', (e) => {
     let userText = searchUser1.value;
     if (userText != '') {
          // Fetch API
          let url = `https://api.github.com/users/${userText}`;
          fetch(url)
               .then(result => result.json())
               .then(data => {
                    //console.log(data);
                    if (data.message == 'Not Found') {
                         // Show Alert
                         ui.showAlert("User not Found!", "alert alert-danger");
                    } else {
                         //Show Profile
                         ui.showProfile1(data);
                    }
               })
               
     } else {
          // Clear Profile
          ui.clearProfile();
     }
});


searchBtn2.addEventListener('click', (e) => {
     let userText = searchUser2.value;
     if (userText != '') {
          // Fetch API
          let url = `https://api.github.com/users/${userText}`;
          fetch(url)
               .then(result => result.json())
               .then(data => {
                    //console.log(data);
                    if (data.message == 'Not Found') {
                         // Show Alert
                         ui.showAlert("User not Found!", "alert alert-danger");
                    } else {
                         //Show Profile
                         ui.showProfile2(data);
                    }1
               })
               
     } else {
          // Clear Profile
          ui.clearProfile();
     }
});