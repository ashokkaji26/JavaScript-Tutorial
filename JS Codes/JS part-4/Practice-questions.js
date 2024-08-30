// Q1. Take a number as input form user and print the table of that number.
// let num = prompt("Enter the number to print the table: ");
// num = parseInt(num);

// for(let i = num; i<=num*10; i+=num){
//     console.log(i);
// }


// ******************************** Q2. ******************************
// Q2. Create a movie guessing game using while loop.
// Method - 1
// const favMovie = "avatar";
// let guess = prompt("Guess my favourite movie: ");

// while((guess != favMovie) && (guess != "quit")){
//      guess = prompt("Wrong Guess!! Please try again.");
// }

// if(guess == favMovie){
//     console.log("Congrates! you guessed right.")
// }
// else{
//     console.log("you quit!");
// }

// *********************** Q2.Method-2 **************
// const favMovie = "avatar";
// let guess = prompt("Guess my favourite Movie: ");

// while(guess != favMovie){
//     if(guess == "quit"){
//         console.log("You quit!");
//         break;
//     }
//     guess = prompt("Wrong guess!. Please try again");
// }

// if(guess == favMovie){
//     console.log("Congrats! you guessed right.");
// }



// ************************************ Loops with Arrays ***************************************
// let furits = ["mango", "banana", "oragne", "litchi"];

// for(let i = 0; i<furits.length; i++){
//     console.log(i, furits[i]);
// }

// for(let i = furits.length-1; i>=0; i--){
//     console.log(i, furits[i]);
// }


// ************************************ Nested Loops with Nested Arrays ***************************
let heros = [ ["ironman", "thor", "spiderman"], ["superman", "wonder woman", "flash"]];

for(let i = 0; i<heros.length; i++){
    console.log(`List #${i}`);
    
    for(let j = 0; j<heros[i].length; j++){
        console.log(heros[i][j]);
    }
}

