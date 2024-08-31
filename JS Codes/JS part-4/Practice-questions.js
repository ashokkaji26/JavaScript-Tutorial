
//------------------------------------------------------------ Q1.-------------------------------------------------------------------------
// Q1. Take a number as input form user and print the table of that number.
// let num = prompt("Enter the number to print the table: ");
// num = parseInt(num);

// for(let i = num; i<=num*10; i+=num){
//     console.log(i);
// }


// ------------------------------------------------------------ Q2.-------------------------------------------------------------------------
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


//--------------------------------------------------------- Loops with Arrays -----------------------------------------------------------------------------
// let furits = ["mango", "banana", "oragne", "litchi"];

// for(let i = 0; i<furits.length; i++){
//     console.log(i, furits[i]);
// }

// for(let i = furits.length-1; i>=0; i--){
//     console.log(i, furits[i]);
// }



//----------------------------------------------------- Nested Loops with Nested Arrays ----------------------------------------------------------------------------
// let heros = [ ["ironman", "thor", "spiderman"], ["superman", "wonder woman", "flash"]];

// for(let i = 0; i<heros.length; i++){
//     console.log(`List #${i}`);
    
//     for(let j = 0; j<heros[i].length; j++){
//         console.log(heros[i][j]);
//     }
// }



// ------------------------------------------------------ For of Loop --------------------------------------------------------------------------------
//  let fruits = ["mango", "orange", "Litchi", "banana"];
//  for(fruit of fruits){
//         console.log(fruit);
//  }

//  for(char of "ApnaCollege"){
//     console.log(char);
//  }


// ------------------------------------------------------ Nested For of Loop --------------------------------------------------------------------------------
// let heros = [ ["ironman", "thor", "spiderman"], ["wonder woman", "superman", "flash"]];
// for(List of heros){
//     for(hero of List){
//         console.log(hero);
//     }
// }





// ***************************************** Practice Question Part-4 *****************************************************************

// ----------------------------------------------------- Q1. ---------------------------------------------------------------------------------
// Q1. Write JS program to delete all occurences of element 'num' in a given array.

// Methode-1

// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;
// console.log(arr);
// arr.shift();
// arr.shift();
// arr.unshift(1);
// arr.pop();
// arr.pop();
// arr.push(3);
// console.log(arr);

// Method-2

//  let arr = [1,2,3,4,5,6,2,3];
//  let num = 3;

//  for(let i = 0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
//  }

//  console.log(arr);


// ------------------------------------------------------------- Q2. -------------------------------------------------------------------------
//Q2. Write a javaScript program to find no. of digits in a number.

// Method-1
// let num = prompt("Enter a number: ");
// let length = num.length;
// console.log(length);

//Method-2
// let num = 123445679;
// let count = 0;
// let copy = num;
//  while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
//  }
//  console.log(count);


// ------------------------------------------------------------- Q3. ---------------------------------------------------------------------

//Q3. Write a JS program to find sum of digits of a number.
// let num = 12343215678;
// let sum = 0;
// let copy = num;

// while(copy>0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);



// ------------------------------------------------------------- Q4. -----------------------------------------------------------------
// Q4. Print the factorial of a number.
// 5! = 1 * 2 * 3 * 4 * 5
// let n = 5;
// let factorial = 1;

// for(let i = 1; i<=n; i++){
//     factorial *= i; 
// }
// console.log(`Factorial of ${n} is : `, factorial);

// ------------------------------------------------------------- Q5. -----------------------------------------------------------------
// Q5. Find the largest number in an array with only positive numbers.
let arr = [1,2,4,3,5,6,8,7,10];
let largest = 0;

for(let i = 0; i<arr.length; i++){
    if(largest<arr[i]){
        largest = arr[i];
    }
}
console.log(largest);





