const inputBox = document.getElementById('input-box');
const list = document.getElementById('task');


function AddTask(){
    if(inputBox.value === '') {
        alert('You mast add a task..');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        //add span to delete tasks

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    //empty input
    inputBox.value = "";
    //save tasks
    saveTask();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
});

//stock tasks

function saveTask(){
    localStorage.setItem("tasks" , list.innerHTML);
}

function showTasks(){
    list.innerHTML= localStorage.getItem("tasks");
}

showTasks();

function DisplayTime() { 
    var month = new Array ("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août","septembre", "octobre", "novembre", "décembre");
    today   = new Date(); 
    jour = today.getDate(); 
    mois = today.getMonth();
    hours   = today.getHours(); 
    minutes = today.getMinutes(); 
    timeValue = hours; 
    //If the number of minutes is less than 10, then we add a 0 in front
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes; 
    document.getElementById("timeNow").innerHTML = 'le '+ jour + ' '+month[mois]+', '+' il est ' + timeValue;
    //Recursive call to the DisplayTime() function after one second (1000 milliseconds). This updates the displayed time every second.
    timerID = setTimeout("DisplayTime()",1000); 
    timerRunning = true; 
  }