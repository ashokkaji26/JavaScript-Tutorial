//**************************** Example - 2 **************************************** */

// console.log("Hello World!");
// let a = 5;
// let b = 10;
// console.log("sum is:", a + b);

// let pencilPrice = 10;   let penPrice = 20;
// console.log("The total price is: ", penPrice + pencilPrice, "Rupees.");
// let output = "The total price is: " + (penPrice + pencilPrice) + "Rupees.";
// console.log(` The total price is: ${penPrice + pencilPrice}     Rupees.`);
// console.log(output);


// *************************** example - 2 *****************************************
// let size = "XL";

// if(size ==="XL"){
//     console.log("Price is Rs. 250");
// }
// else if(size ==="L"){
//     console.log("Price is Rs. 200");
// }
// else if(size ==="M"){
//     console.log("Price is Rs. 100");
// }
// else{
//     console.log("Price is Rs. 50");
// }

// *************************** example - 3 nested if-else *****************************************
// let marks = 95;
// if (marks>=33) {
//     console.log("Pass");
//     if(marks >= 80){
//         console.log("Grade : A+");
//     }else{
//         console.log("Grade: A");
//     }
// }
// else{
//     console.log("Fail!");
// }

// *************************** example - 4 nested if-else *****************************************

// Q. A good string is a string that starts with "a", and has length > 3. Write a program to find if a string is good or not??
//  a = "\u0061".

let str = "antman";
if(str.length>3 && str[0]=== 'a'){
    console.log("It is a good string.");
}else {
    console.log("It is not a good string.");
}
