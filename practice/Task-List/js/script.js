// Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

//Define event listener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeList);
clearBtn.addEventListener('click', clearList);
filter.addEventListener('keyup', filterList);
document.addEventListener('DOMContentLoaded',geTasks);
// console.log(taskInput.value);


// define function and add task
function addTask(e) {
     if (taskInput.value === '') {
          alert('Add a task');
     } else {
          //create li element
          let li = document.createElement('li');
          li.appendChild(document.createTextNode(taskInput.value +
               ' '));
          let link = document.createElement('a');
          link.setAttribute('href', '#');
          link.innerHTML = 'x';
          li.appendChild(link);
          taskList.appendChild(li);

          storeTaskInLocalStorage(taskInput.value);
          // console.log(taskInput.value);
          taskInput.value = '';
     }
     e.preventDefault();
     // console.log(taskInput.value);
}


//remove task
function removeList(e) {
     if (e.target.hasAttribute('href')) {
          if (confirm("Are you sure?")) {
               let ele = e.target.parentElement;
               // console.log(ele);
               ele.remove();
               removeTaskLIST(ele);
          }
     }
}


// clear list
function clearList(e) {
     // if (confirm("Are you sure?")) {
     //      taskList.innerHTML = "";
     // }
     if (confirm("Are you sure?")) {
          while (taskList.firstChild) {
               taskList.removeChild(taskList.firstChild);
          }
     }
     localStorage.clear()
}

// filter task list
function filterList(e) {
     let text = e.target.value.toLowerCase();
     // console.log(text);
     document.querySelectorAll('li').forEach(task=>{
          let item = task.firstChild.textContent;
          if (item.toLowerCase().indexOf(text) != -1) {
               task.style.display = 'block';
          }
          else{
               task.style.display = 'none';
          }
          // console.log(item);
     });
}

function storeTaskInLocalStorage(task) {
     let tasks ;
     if (localStorage.getItem('tasks')===null) {
          tasks=[];
     }else{
          tasks = JSON.parse(localStorage.getItem('tasks'));
     }
     tasks.push(task);
     // console.log(tasks);
     localStorage.setItem('tasks',JSON.stringify(tasks));
}


function geTasks() {
     let tasks;
     if (localStorage.getItem('tasks') === null) {
          tasks = [];
     } else {
          tasks = JSON.parse(localStorage.getItem('tasks'));
     }
     // console.log(tasks[0]);
     tasks.forEach(task=>{
          //create li element
          let li = document.createElement('li');
          li.appendChild(document.createTextNode(task+
               ' '));
          let link = document.createElement('a');
          link.setAttribute('href', '#');
          link.innerHTML = 'x';
          li.appendChild(link);
          taskList.appendChild(li);

     })
}

function removeTaskLIST(taskItem) {
     let tasks;
     if (localStorage.getItem('tasks') === null) {
          tasks = [];
     } else {
          tasks = JSON.parse(localStorage.getItem('tasks'));
     }
     let li = taskItem;
     li.removeChild(li.lastChild);

     tasks.forEach((task,index)=>{
          if(li.textContent.trim()===task){
               tasks.splice(index,1);
          }
     })
     localStorage.setItem('tasks',JSON.stringify(tasks))
}