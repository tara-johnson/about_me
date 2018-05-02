'use strict';

// Variable to tally correct answers
var correctAnswer = '0'

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

} else if (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n'){
    // Correct answer to Q1
    alert('That\'s right! My eyes are brown.');

    // Log correct answer to Q1 in console
    console.log('The user got the correct answer to Q1 (no)');
    
    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else {
    // Add force to answer question
    while (answer1 === ''){
        answer1 = prompt('At least take a guess.');
    }
}

// Ask the second guessing game question in an alert
var answer2 = prompt('Am I from Seattle?');

// Tell user if they are right or wrong
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
    // Wrong answer to Q2
    alert('Nope. I grew up in Cleveland, Ohio.');

    // Log wrong answer to Q2 in console
    console.log('The user got the wrong answer to Q2 (yes)');

} else if (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n'){
    // Correct answer to Q2
    alert('You\'re right, I\'m not from Seattle! I grew up in Cleveland, Ohio.');

    // Log correct answer to Q2 in console
    console.log('The user got the correct answer to Q2 (no)');    

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else {
    // Add force to answer question
    while (answer2 === ''){
        answer2 = prompt('At least take a guess!');
    }
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
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else if (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n'){
    // Wrong answer to Q3
    alert('Wrong! I\'ve lived in four states - Ohio, Michigan, New York, and Washington.');
    
    // Log wrong answer to Q3 in console
    console.log('The user got the wrong answer to Q3 (no)');

} else {
    // Add force to answer question
    while (answer3 === ''){
        answer3 = prompt('At least take a guess!');
    }
}

// Ask the fourth guessing game question in an alert
var answer4 = prompt('Do I have any pets?');

// Tell user if they are right or wrong
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
    // Wrong answer to Q4
    alert('Nope, no pets. I did have a fish named Taco once, though. \nI love tacos.');
    
    // Log wrong answer to Q4 in console
    console.log('The user got the wrong answer to Q4 (yes)');

} else if (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n'){
    // Right answer to Q4
    alert('Right, no pets. I did have a fish named Taco once, though. \nI love tacos.');

    // Log correct answer to Q4 in console
    console.log('The user got the correct answer to Q4 (no)');

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');   

} else {
    // Add force to answer question
    while (answer4 === ''){
        answer4 = prompt('At least take a guess!');
    }
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
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else if (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n'){
    // Wrong answer to Q5
    alert('C\'mon, I just told you. I LOVE tacos!');

    // Log wrong answer to Q5 in console
    console.log('The user got the wrong answer to Q5 (no)');

} else {
    // Add force to answer question
    while (answer5 === ''){
        answer5 = prompt('At least take a guess!');
    }
}

// Ask the sixth guessing game question in an alert
var answer6 = prompt('How many years have I lived in Seattle');

// Tell user if they are right or wrong

if (answer6 === '12'){
    // Right answer to Q6
    alert('You got it! I\'ve lived in Seattle for 12 years.');

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else {
    // Wrong answer to Q6. Allow user to guess 4 times.
    var counter = 0;
    while (counter < 3 && answer6 !== '12'){
        // Answer is more than 12
        if (answer6 > 12){
            answer6 = prompt('Not quite that long.Hmm. Guess again.');
            counter++;
        
        // Answer is less than 12    
        } else {
            (answer6 < 12)
            answer6 = prompt('A little longer than that. Take another stab at it.');
            counter++;
        }
    }
}

// Ask the seventh guessing game question in an alert

// Tell user if they are right or wrong
// If right show user all other choices as well
// Tally +1 for correct answer
// Else let user guess again for a total of six times


// Show user how many questions they got right
var endGame = alert('Thanks for getting to know me, ' + userName + '. You got ' + counter + ' out of 7 questions correct!');
console.log('Game over. The user got ' + counter + ' out of 7 questions correct.');