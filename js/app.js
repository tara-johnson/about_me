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

//create function for first question
function firstQuestion (){
// Tell user if they are right or wrong
if (answer1.toLowerCase() === 'yes' || answer1.toLowerCase() === 'y'){
    // Wrong answer to Q1
    alert('Take another look. They\'re brown! :)');

    // Log wrong answer to Q1 in console
    console.log('The user got the wrong answer to Q1 (yes)');

} else (answer1.toLowerCase() === 'no' || answer1.toLowerCase() === 'n');{
    // Correct answer to Q1
    alert('That\'s right! My eyes are brown.');

    // Log correct answer to Q1 in console
    console.log('The user got the correct answer to Q1 (no)');
    
    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');
    } 
// else {
    //     // Add force to answer question
    //     while (answer1 === ''){
        //         answer1 = prompt('At least take a guess.');
        //     }
        // }
}

//ask first question
firstQuestion();

// Ask the second guessing game question in an alert
var answer2 = prompt('Am I from Seattle?');

//create function for second question
function secondQuestion(){

// Tell user if they are right or wrong
if (answer2.toLowerCase() === 'yes' || answer2.toLowerCase() === 'y'){
    // Wrong answer to Q2
    alert('Nope. I grew up in Cleveland, Ohio.');

    // Log wrong answer to Q2 in console
    console.log('The user got the wrong answer to Q2 (yes)');

} else (answer2.toLowerCase() === 'no' || answer2.toLowerCase() === 'n');{
    // Correct answer to Q2
    alert('You\'re right, I\'m not from Seattle! I grew up in Cleveland, Ohio.');

    // Log correct answer to Q2 in console
    console.log('The user got the correct answer to Q2 (no)');    

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} 
// else {
    //     // Add force to answer question
    //     while (answer2 === ''){
        //         answer2 = prompt('At least take a guess!');
        //     }
        // }
        
        // Ask the third guessing game question in an alert
    }

secondQuestion();

var answer3 = prompt('Have I lived in more than 3 states?');


//create funtion for third question
function thirdQuestion(){
        
// Tell user if they are right or wrong
if (answer3.toLowerCase() === 'yes' || answer3.toLowerCase () === 'y'){
    // Right answer to Q3
    alert('That\'s right, ' + userName + '. I\'ve lived in four states. More on that later.');
    
    // Log correct answer to Q3 in console
    console.log('The user got the correct answer to Q3 (yes)');    

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else (answer3.toLowerCase() === 'no' || answer3.toLowerCase() === 'n');{
    // Wrong answer to Q3
    alert('Wrong! I\'ve lived in four states. More on that later.');
    
    // Log wrong answer to Q3 in console
    console.log('The user got the wrong answer to Q3 (no)');

} 
// else {
//     // Add force to answer question
//     while (answer3 === ''){
//         answer3 = prompt('At least take a guess!');
//     }
// }
}


thirdQuestion();

// Ask the fourth guessing game question in an alert
var answer4 = prompt('Do I have any pets?');

//create function for fourth question
function fourthQuestion(){

// Tell user if they are right or wrong
if (answer4.toLowerCase() === 'yes' || answer4.toLowerCase() === 'y'){
    // Wrong answer to Q4
    alert('Nope, no pets. I did have a fish named Taco once, though. \nI love tacos.');
    
    // Log wrong answer to Q4 in console
    console.log('The user got the wrong answer to Q4 (yes)');

} else (answer4.toLowerCase() === 'no' || answer4.toLowerCase() === 'n');{
    // Right answer to Q4
    alert('Right, no pets. I did have a fish named Taco once, though. \nI love tacos.');

    // Log correct answer to Q4 in console
    console.log('The user got the correct answer to Q4 (no)');

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');   

} 
// else {
//     // Add force to answer question
//     while (answer4 === ''){
//         answer4 = prompt('At least take a guess!');
//     }
// }
}


fourthQuestion();
// Ask the fifth guessing game question in an alert
var answer5 = prompt('Do I love tacos?');


//create function for fifth question
function fifthQuestion(){

// Tell user if they are right or wrong
if (answer5.toLowerCase() === 'yes' || answer5.toLowerCase() === 'y'){
    // Right answer to Q5
    alert('I gave this one away. It\'s true, I love tacos.');

    // Log correct answer to Q5 in console
    console.log('The user got the correct answer to Q5 (yes)');

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else (answer5.toLowerCase() === 'no' || answer5.toLowerCase() === 'n');{
    // Wrong answer to Q5
    alert('C\'mon, I just told you. I LOVE tacos!');

    // Log wrong answer to Q5 in console
    console.log('The user got the wrong answer to Q5 (no)');

}
// else {
//     // Add force to answer question
//     while (answer5 === ''){
//         answer5 = prompt('At least take a guess!');
//     }
// }
}

fifthQuestion();


// Ask the sixth guessing game question in an alert
var answer6 = prompt('How many years have I lived in Seattle');


function sixthQuestion(){
// Tell user if they are right or wrong

if (answer6 === '12'){
    // Right answer to Q6
    alert('You got it! I\'ve lived in Seattle for 12 years.');

    // Tally +1 for correct answer
    correctAnswer++;
    console.log('The user has answered ' + correctAnswer + ' questions correctly.');

} else {
    // Wrong answer to Q6. Allow user to guess 4 times.
    var counterQ6 = 0;
    while (counterQ6 < 3 && answer6 !== '12'){
        // Answer is more than 12
        if (answer6 > 12){
            answer6 = prompt('Not quite that long. Hmm. Guess again.');
            counterQ6++;
            console.log(counterQ6);
        
        // Answer is less than 12    
        } else {
            (answer6 < 12)
            answer6 = prompt('A little longer than that. Take another stab at it.');
            counterQ6++;
            console.log(counterQ6);
        }
    }
}
}

sixthQuestion();

// Variables for guessing states I've live in question
var state = ['michigan', 'new york']
var maxGuessQ7 = 6;
var wrongGuess = 0;

// Create function for guessing states I've lived in
function guessState(){
    while (wrongGuess < maxGuessQ7){
        var answer7 = prompt('What states, other than Ohio and Washington, have I lived in?');
        if (state.includes(answer7) === true){
            alert('That\'s right! I\'ve lived in Ohio, Michigan, New York, and Washington.');
            break;
        } else if (answer7 === ('ohio') || answer7 === ('washington')) {
            alert('No, no... not Ohio or Washington. Take another stab at it.');
            wrongGuess++;
        } else {
            alert('Nope, I haven\'t live in ' + answer7 + ' . Take another guess.');
            wrongGuess++;
            }
        }
    if (wrongGuess >= maxGuessQ7){
    alert('Oh no! You\'ve used all your guesses. And since you asked, I\'ve lived in Ohio, Michigan, New York, and Washington.');
    }
}

// Call function for guessing states I've lived in question
guessState();

// Show user how many questions they got right
var endGame = alert('Thanks for getting to know me, ' + userName + '. You got ' + correctAnswer + ' out of 7 questions correct!');
console.log('Game over. The user got ' + correctAnswer + ' out of 7 questions correct.');