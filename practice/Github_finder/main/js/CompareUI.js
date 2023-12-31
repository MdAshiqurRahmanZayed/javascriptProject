class UI {
     constructor() {
          this.profile1 = document.querySelector('#profile1');
          this.profile2 = document.querySelector('#profile2');
     }

     showProfile1(user) {
          this.clearAlert();
          this.profile1.innerHTML = `
        <div class="card card-body mb-3">
          <div class="container">
               <img class="img-fluid mb-2"  src="${user.avatar_url}">
               <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="container">  
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
        `;
     }
     showProfile2(user) {
          this.clearAlert();
          this.profile2.innerHTML = `
        <div class="card card-body mb-3">
          <div class="container">
               <img class="img-fluid mb-2"  src="${user.avatar_url}">
               <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="container">  
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
        `;
     }

     clearProfile() {
          this.profile1.innerHTML = "";
          this.profile2.innerHTML = "";
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
          setTimeout(() => {
               document.querySelector('.alert').remove()
          }, 3000)
     }

     clearAlert() {
          let currentAlert = document.querySelector('.alert');
          if (currentAlert) {
               currentAlert.remove();
          }
     }
}