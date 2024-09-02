
//----------------------------------------------------- Q1. --------------------------------------------------------------------------
// Create a function that returns the sum of numbers from 1 to n.
// let num = prompt("Enter a number.");
// let sum = 0;

// function sum1to10(n) {
//     for(let i = 1; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }
// sum1to10(num);

// console.log(sum);

//----------------------------------------------------- Q2. ------------------------------------------------------------------------
// Create a funtion that returns the concatenation of all strings in an array.
let str = ["hi", "hello", "bye", "!"];
let result = "";

function concat(str) {
 
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

concat(str);
console.log(result);