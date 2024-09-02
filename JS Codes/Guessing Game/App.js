

// Task :- User enters a max number, & then tries to guess a random number between 1 to max.
// Hint :- Fastest way to guess the number is : Enter middle number.
//----------------------------------------------------------------------------------------------------------------------------------
//My Method 
// let max = prompt("Enter a number: ");

// let random = Math.floor(Math.random() * max) + 1;

// let guess = prompt(`Please guess a number between 1 & ${max}`);

// while(guess != random){
//     if(guess == "quit"){
//         console.log("Quitting Game!");
//         break;
//     }
//     console.log("Incorrect guess!");
//     guess = prompt(`Incorrect guess, Please guess again.`);

//     if(guess == random){
//         console.log(`Congratulations!, Correct guess!  Random no. was: ${random}`);
//         break;
//     }
//     else {
//         console.log("Invalid guess, Please enter a valid guess.");
//     }
// }

//----------------------------------------------------------------------------------------------------------------------------------
// Mam's method :- 

const max = prompt("Enter a max number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt(`guess the number between 1 & ${max}`);

while(true){
    if(guess == "quit"){
        console.log("Quitting Game!");
        break;
    }

    if(guess == random){
        console.log("Congrats! you are right, random no. was: ", random);
        break;
    }
    else if(guess < random){
        guess = prompt("hint: Your guess was smaller than the number, please try a larger number.");
    }
    else{
        guess = prompt("hint: Your guess was larger than the number, try a smaller number.");
    }
    
}

