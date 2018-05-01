'use strict';

// Ask for user's name
var userName = prompt('Hi! What is your name!');

// Greet the user by name in an alert
alert('Hey, ' + userName + ', thanks for stopping by!');

// Log that to the console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question
var answer1 = prompt('Do I have blue eyes?');

// User guesses "yes/no" or "Y/N"
// if (condition is true) {
// do this stuff
// } else {
// do this stuff
//}

// Tell user if they are right or wrong
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
    // right answer
    alert('Take another look. They\'re brown! :) \n\nLet\'s try another one.');
    console.log('The user got the correct answer to Q1 (yes)');
//    var moreAboutMe = prompt('Are you ready to learn more about me?');
//    if (moreAboutMe.toLowerCase() === 'yes' || moreAboutMe.toLocaleLowerCase() === 'y'){
//        }

} else {
    // wrong answer
    alert('That\'s right! \n\nLet\'s try another one.');
    console.log('The user got the wrong answer to Q1 (no)');
}

// Ask the second question
var answer2 = prompt('');

// User guesses "yes/no" or "Y/N"

// if (condition is true) {
// do this stuff
// } else {
// do this stuff
// }