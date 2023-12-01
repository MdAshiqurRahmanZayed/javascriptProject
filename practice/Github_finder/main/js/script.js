let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();



searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
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
                    ui.showProfile(data);
                }
            })
        fetch(url + '/repos')
        .then(result=>result.json())
        .then(repos=>{
            // console.log(data);
            repos.forEach( repo=> {
                ui.showRepository(repo);
                // console.log(repo.html_url);
                // console.log(repo.full_name);
                // console.log(repo.created_at);
                // console.log(repo.updated_at);
                // console.log(repo.topics);
                // console.log(repo.default_branch);
                // console.log(repo.forks_count);
                // console.log(repo.watchers_count);
            });
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});