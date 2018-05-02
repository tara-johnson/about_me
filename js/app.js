'use strict';

// Ask for user's name
var userName = prompt('Hey! What\'s your name!');

// Greet the user by name in an alert
alert('Hi, ' + userName + ', nice to meet you!');
// Log user greeting in console
console.log('The user said their name is ' + userName);

// Ask the first guessing game question in an alert
var answer1 = prompt('Do I have blue eyes?');

// Tell user if they are right or wrong
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
    // Wrong answer to Q1
    alert('Take another look. They\'re brown! :)');
    // Log wrong answer to Q1 in console
    console.log('The user got the wrong answer to Q1 (yes)');
} else {
    // Correct answer to Q1
    alert('That\'s right! My eyes are brown.');
    // Log correct answer to Q1 in console
    console.log('The user got the correct answer to Q1 (no)');
   
    // Tally +1 for correct answer

}

// Ask the second guessing game question in an alert
var answer2 = prompt('Am I from Seattle?');

// Tell user if they are right or wrong
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
    // Wrong answer to Q2
    alert('Nope. I grew up in Cleveland, Ohio. I\'ve been in Seattle for 12 years.');
    // Log wrong answer to Q2 in console
    console.log('The user got the wrong answer to Q2 (yes)');
} else {
    // Correct answer to Q2
    alert('You\'re right, I\'m not from Seattle! I grew up in Cleveland, Ohio.');
    // Log correct answer to Q2 in console
    console.log('The user got the correct answer to Q2 (no)');    

    // Tally +1 for correct answer

}

// Ask the third guessing game question in an alert
var answer3 = prompt('Have I lived in more than 3 states?');

// Tell user if they are right or wrong
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase () === 'y'){
    // Right answer to Q3
    alert('That\'s right, ' + userName + '. I\'ve lived in four states - Ohio, Michigan, New York, and Washington.');
    // Log correct answer to Q3 in console
    console.log('The user got the correct answer to Q3 (yes)');    

    // Tally +1 for correct answer

} else {
    // Wrong answer to Q3
    alert('Wrong! I\'ve lived in four states - Ohio, Michigan, New York, and Washington.');
    // Log wrong answer to Q3 in console
    console.log('The user got the wrong answer to Q3 (no)');
}

// Ask the fourth guessing game question in an alert
var answer4 = prompt('Do I have any pets?');

// Tell user if they are right or wrong
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
    // Wrong answer to Q4
    alert('Nope, no pets. I did have a fish named Taco once, though. \nI love tacos.');
    // Log wrong answer to Q4 in console
    console.log('The user got the wrong answer to Q4 (yes)');
} else {
    // Right answer to Q4
    alert('Right, no pets. I did have a fish named Taco once, though. \nI love tacos.');
    // Log correct answer to Q4 in console
    console.log('The user got the correct answer to Q4 (no)');

    // Tally +1 for correct answer    

}

// Ask the fifth guessing game question in an alert
var answer5 = prompt('Do I love tacos?');

// Tell user if they are right or wrong
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y'){
    // Right answer to Q5
    alert('I gave this one away. It\'s true, I love tacos.');
    // Log correct answer to Q5 in console
    console.log('The user got the correct answer to Q5 (yes)');

    // Tally +1 for correct answer

} else {
    // Wrong answer to Q5
    alert('C\'mon, I just told you. I LOVE tacos!');
    // Log wrong answer to Q5 in console
    console.log('The user got the wrong answer to Q5 (no)');
}

// Ask the sixth guessing game question in an alert

// Tell user if they are right or wrong
// If right move to next question
// Tally +1 for correct answer
// Else let user guess again (indicating too high or too low) for a total of four times


// Ask the seventh guessing game question in an alert

// Tell user if they are right or wrong
// If right show user all other choices as well
// Tally +1 for correct answer
// Else let user guess again for a total of six times

// Show user how many questions they got right and wrong