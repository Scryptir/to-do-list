const userName = prompt('Please Enter Your Name: ');

if (userName === '' || userName === null){ // Gives a value of 'Your' if the user doesn't provide a name, either by subitting an empty prompt or cancalling the prompt
    document.getElementById('user-name').innerHTML = 'Your';
} else {
    document.getElementById('user-name').innerHTML = userName + '\'s';
}