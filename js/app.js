'use strict';

// Ask for user's name
var userName = prompt('Hi! What is your name!');

// Greet the user by name in an alert
alert('Hi, ' + userName + ', thanks for stopping by!');

// Log that to the console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?');

// User guesses "yes/no" or "Y/N"

// if (condition is true) {
// do this stuff
// } else {
// do this stuff
//}

// Tell user if they are right or wrong
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
    // right answer
    alert('You got it right!!!');
    console.log('The user got the correct answer to Q1 (yes)');
} else {
    // wrong answer
    alert('FAIL');
    console.log('The user got the wrong answer to Q1 (no)');
}

// Next question