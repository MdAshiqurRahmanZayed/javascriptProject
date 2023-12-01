class UI {
     constructor() {
          this.profile = document.querySelector('#profile');
          this.repo = document.querySelector('#repo');
     }

     showProfile(user) {
          this.clearAlert();
          this.repo.innerHTML = "";
          this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
        `;
     }

     clearProfile() {
          this.profile.innerHTML = "";
          this.repo.innerHTML = "";
     }

     showAlert(message, className) {
          this.clearAlert();
          this.clearProfile();
          let div = document.createElement('div');
          div.className = className;
          div.appendChild(document.createTextNode(message));
          let container = document.querySelector('.searchContainer');
          let search = document.querySelector('.search');
          container.insertBefore(div, search);
          setTimeout(()=>{
               document.querySelector('.alert').remove()
          },3000)
     }

     clearAlert() {
          let currentAlert = document.querySelector('.alert');
          if (currentAlert) {
               currentAlert.remove();
          }
     }


    showRepository(repo) {

         const repoElement = document.querySelector('#repo');
          
         // Create a div to hold repository information
         const repoDiv = document.createElement('div');
         repoDiv.className = 'container'; // You can add a CSS class for styling

         // Create HTML content for the repository
         const repoHTML = `
         <div class="container p-2 rounded">
          <div class="card">
               <h5 class="card-header">${repo.full_name}</h5>
                    <div class="card-body">
                         <p>URL: <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></p>
                         <p>Created At: ${repo.created_at}</p>
                         <p>Updated At: ${repo.updated_at}</p>
                         <p>Topics: ${repo.topics.join(', ')}</p>
                         <p>Default Branch: ${repo.default_branch}</p>
                         <p>Forks Count: ${repo.forks_count}</p>
                         <p>Watchers Count: ${repo.watchers_count}</p>
                    </div>
               </div>
          </div>
        `;

         // Set the HTML content of the repoDiv
         repoDiv.innerHTML = repoHTML;
         // Append the repoDiv to the #repo element
         repoElement.appendChild(repoDiv);
    }
}