                       // ************************ Practice Question - 6 ***********************************

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
// function oddOrEvenFactory(request) {
//     if(request == "odd"){
//         return function(n) {
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request == "even"){
//         let even = function(n){
//             console.log(n%2==0);
//         }
//         return even;
//     }
//     else{
//         console.log("Wrong request");
//     }
// }

// let request = "odd";
// let odd = oddOrEvenFactory(request);
// odd(9);



//----------------------------------------------------- Q7. --------------------------------------------------------------------------
//Q. Create methods inside a object, and use those methods.

// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }

// console.log(calculator.add);
// console.log(calculator.sub(1,4));


// Method shorthand 
// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;
//     }
// }

// console.log(calculator.add);
// console.log(calculator.add(18,3));


//----------------------------------------------------- Q8. --------------------------------------------------------------------------
//Q. Write a JS function to generate a random number within a range(start,end).

// let start = 5;
// let end = 10;
// function randomNo(start,end){
//     let diff =  end - start;
//     let random = Math.floor(Math.random() * diff) + start;  // it will generate random no. between 5-9.
//     console.log(random);
// }

// console.log(randomNo(start,end));

//----------------------------------------------------- Q9. --------------------------------------------------------------------------
//Q. Write a JS function that accepts a list of country names as input and returns the longest country name as output.

// let country = ["india", "pakistan", "nepal","United States of America"];

// function longestCountry(country){
//     let ansIdx = 0;

//     for(let i = 0; i< country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;

//         if (currLen > ansLen){
//             ansIdx = i
//         }

//     }
//     return country[ansIdx];
// }

// console.log(longestCountry(country));


//----------------------------------------------------- Q10. --------------------------------------------------------------------------
//Q. Write a JS functin to count the no. of vowels in string arguement.

// let string = "apnacollege";

// function countVowels(str) {
//     let count = 0;

//     for(let i = 0; i<str.length; i++){
//                                         if(str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" ||  str.charAt(i) == "o" || str.charAt(i) == "u") {
//                                                                                                                                                                          count++;
//     }
//     }
//     return count;

//     console.log(count);
// }


//----------------------------------------------------- Q11. --------------------------------------------------------------------------
//Q. Write a JS function to extract unique characters from a string.
// let string = "apnacollege";

// function getUnique(str) {
//     let ans = "";

//     for(let i = 0; i<str.length; i++){
//         let currChar = str[i];

//         if(ans.indexOf(currChar)== -1) {   // if current character is not added then add it in ans.
//             ans += currChar;
//         }
//     }
//     return ans;

// }

// console.log(getUnique(string));

//----------------------------------------------------- Q12. --------------------------------------------------------------------------
//Q. Write a JS function that returns array elements larger than a number.

let arr = [8, 9, 10, 1,2,3,4,5,6,7];
let num = 5;

// elements larger than a number num;
function getElements(arr,num){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]> num){
            console.log(arr[i]);
        }
    }
}

console.log(getElements(arr,num));
