const userName = prompt('Please Enter Your Name: ');

if (userName === '' || userName === null){ // Gives a value of 'Your' if the user doesn't provide a name, either by subitting an empty prompt or cancalling the prompt
    document.getElementById('user-name').innerHTML = 'Your';
} else {
    document.getElementById('user-name').innerHTML = userName + '\'s';
}

function addTaskToList () {
    let newTask = document.getElementById('user-task').value;

    let taskList = document.getElementById('task-list');
    let newLi = document.createElement('li');

    newLi.appendChild(document.createTextNode(newTask + '<button class="delete-button">x</button>'));

    taskList.appendChild(newLi);
}

document.getElementById('submit-button').addEventListener('click', addTaskToList);