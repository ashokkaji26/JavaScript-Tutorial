
//----------------------------------------------------- Q1. --------------------------------------------------------------------------
//Q. Create a function that returns the sum of numbers from 1 to n.
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
//Q. Create a funtion that returns the concatenation of all strings in an array.
// let str = ["hi", "hello", "bye", "!"];
// let result = "";

// function concat(str) {
 
//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// }

// concat(str);
// console.log(result);


//----------------------------------------------------- Q3. --------------------------------------------------------------------------
//Q. Guess the output of below code.

// let greet = "hello";

// function outerGreet() {
//     let greet = "Namaste";
//     console.log(greet);

//     function innerGreet() {
//         console.log(greet);
//     }
// }

// console.log(greet);
// outerGreet();


//----------------------------------------------------- Q4. --------------------------------------------------------------------------
//Q. Create a function expression and change its value.

// let sum = function(a,b) {
//     return a+b;
// }

// sum = function(){
//     console.log("hlw");
// }
// console.log(sum);



//----------------------------------------------------- Q5. --------------------------------------------------------------------------
//Q. Create a higher order function and call it.

// function multipleGreet(func, count){     // higher order function.
//     for(let i = 1; i<=count; i++){
//         func();
//     }
// }

// let greet = function(){           // fucntion expression.
//     console.log("hello");
// }

// multipleGreet(greet, 10);       // function calling.


//----------------------------------------------------- Q6. --------------------------------------------------------------------------
//Q. Create a higher oder function which returns a function and call returned function.
function oddOrEvenFactory(request) {
    if(request == "odd"){
        return function(n) {
            console.log(!(n%2==0));
        }
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2==0);
        }
        return even;
    }
    else{
        console.log("Wrong request");
    }
}

let request = "odd";
let odd = oddOrEvenFactory(request);
odd(9);