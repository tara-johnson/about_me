'use strict';

// Ask for user's name
var userName = prompt('Hey! What is your name!');

// Greet the user by name in an alert
alert('Hi, ' + userName + ', thanks for stopping by!');

// Log that to the console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question
var answer1 = prompt('Do I have blue eyes?');

// Tell user if they are right or wrong
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
    // Wrong answer to Q1
    alert('Take another look. They\'re brown! :)');
    console.log('The user got the wrong answer to Q1 (yes)');
} else {
    // Right answer to Q1
    alert('That\'s right!');
    console.log('The user got the correct answer to Q1 (no)');
}

// Ask the second guessing game question
var answer2 = prompt('Am I from Seattle?');

// Tell user if they are right or wrong
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
    // Wrong answer to Q2
    alert('Nope. I grew up in Cleveland, Ohio. \nI\'ve been in Seattle for 12 years though!');
    console.log('The user got the wrong answer to Q2 (yes)');
} else {
    // Right answer to Q2
    alert('That\'s right! I grew up in Cleveland, Ohio.');
    console.log('The user got the correct answer to Q2 (no)');    
}

// Ask the third guessing game question
var answer3 = prompt('Have I lived in more than 3 states?');

// Tell user if they are right or wrong
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase () === 'y'){
    // Right answer to Q3
    alert('It\s true, ' + userName + '! I\'ve lived in Ohio, Michigan, New York, and Washington.');
    console.log('The user got the correct answer to Q3 (yes)');    
} else {
    // Wrong answer to Q3
    alert('Wrong! Close though. I\'ve lived in four states - Ohio, Michigan, New York, and Washington.');
    console.log('The user got the wrong answer to Q3 (no)');
}

// Ask the fourth guessing game question
var answer4 = prompt('Do I have any pets?');

// Tell user if they are right or wrong
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
    // Wrong answer to Q4
    alert('Nope, no pets. I did have a fish named Taco once, though. I love tacos.');
    console.log('The user got the wrong answer to Q4 (yes)');
} else {
    // Right answer to Q4
    alert('Right. No pets. I did have a fish named Taco once, though. I love tacos.');
    console.log('The user got the correct answer to Q4 (no)');
}

// Ask the fifth guessing game question
var answer5 = prompt('Do I love tacos?');

// Tell user if they are right or wrong
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y'){
    // Right answer to Q5
    alert('I gave this one away. It\'s true, I love tacos.');
    console.log('The user got the correct answer to Q5 (yes)');
} else {
    // Wrong answer to Q5
    alert('C\'mon, I just told you. I LOVE tacos!');
    console.log('The user got the wrong answer to Q5 (no)');
}