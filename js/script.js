let from = document.getElementById('taskform');
let tasks = document.getElementById('tasks');
let removeall = document.getElementById('removeall');


from.addEventListener('submit', addTask);

tasks.addEventListener('click' , removeTask);

removeall.addEventListener('click' , removeAllTasks);

function addTask(t){
    t.preventDefault();
    
    let newTask = document.getElementById('newtask').value;
    let addnewTask =document.createTextNode(newTask);
    
    let li = document.createElement('li');
    li.id = "taskname";
    li.className = 'task-name';
    li.appendChild(addnewTask);
    
    let delTask = document.createElement('button');
    let delBtn = document.createTextNode('x');
    delTask.className = "btn btn-delete";
    delTask.appendChild(delBtn);

    li.appendChild(delTask);
    tasks.appendChild(li);
 
} // End of add Task

function removeTask(r){
    r.preventDefault();
    //let li = document.querySelectorAll('ul li');

    if(r.target.classList.contains('btn-delete')) {
      
            if(confirm('Are you sure you want to delete the task')){
   
                let litask = r.target.parentElement;
                tasks.removeChild(litask);
      
            } // End of Delete task confirmation.
       
    }// End of if to target button with class name

}// End of Remove Task

function removeAllTasks(a)
{   
    let litasks = document.querySelectorAll('ul li');
    
    Array.from(litasks).forEach(function(litasks){
        //console.log(litasks);
        tasks.removeChild(litasks);

    });


    // for (let i = 0; i < litasks.length; i++){
    //     console.log(litasks[i]);
    //     tasks.removeChild(litasks[i]);
        
    // }

} // End of function Remove All Tasks


/************************************/
// let items = document.getElementsByClassName('items-list');
//console.log(items);

// items[1].innerHTML = "\u2713 <del>Hello task 2</del> <span id=\"items-cross\">x</span>";
// items[1].style.backgroundColor = '#06707e';
// items[1].style.color = '#fff';
// console.log(items[1]);

// for (var i =0; i<items.length; i++) {
//     items[i].style.backgroundColor = '#f81111';

// }
/************************************* */

