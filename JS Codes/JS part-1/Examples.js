//---------------------------------------------------------- Example-1 ----------------------------------------------------------------------------

// console.log("Hello World!");
// let a = 5;
// let b = 10;
// console.log("sum is:", a + b);

// let pencilPrice = 10;   let penPrice = 20;
// console.log("The total price is: ", penPrice + pencilPrice, "Rupees.");
// let output = "The total price is: " + (penPrice + pencilPrice) + "Rupees.";
// console.log(` The total price is: ${penPrice + pencilPrice}     Rupees.`);
// console.log(output);


//---------------------------------------------------------- Example-2 --------------------------------------------------------------
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

//---------------------------------------------------------- Example-3 Nested if-else --------------------------------------------------------------

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


//---------------------------------------------------------- Example-4 Nested If-else --------------------------------------------------------------

// Q. A good string is a string that starts with "a", and has length > 3. Write a program to find if a string is good or not??

// let str = "apple";
// if(str.length>3 && str[0]=== 'a'){
//     console.log("It is a good string.");
// }else {
//     console.log("It is not a good string.");
// }


//---------------------------------------------------------- Example-5 Switch Statement --------------------------------------------------------------

// let string = "AC";

// switch(string) {
//     case "light": 
//     console.log("Light is on.");
//     break;
//     case "AC": 
//     console.log("AC is on.");
//     break;
//     case "fan": 
//     console.log("Fan is on.");
//     break;
//     default:
//         console.log("Electricity is not available right now.");
// }


//---------------------------------------------------------- Example-6 --------------------------------------------------------------

// Q. Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.

//  let day = 2;
//  switch(day) {
//     case 1:
//         console.log("Monday.");
//         break;
//     case 2:
//         console.log("Tuesday.");
//         break;
//     case 3:
//         console.log("Wednesday.");
//         break;
//     case 4:
//         console.log("Thursday.");
//         break;
//     case 5:
//         console.log("Friday.");
//         break;
//     case 6:
//         console.log("Saturday.");
//         break;
//     default:
//         console.log("Sunday.");

//  }


//---------------------------------------------------------- Example-7 Alert & Prompt --------------------------------------------------------------
// *************************** example - 7 alert and prompt *****************************************
// let firstName = prompt("Enter your firstName: ");
// let lastName = prompt("Enter your lastName: ");
// let msg = `Welcome ${firstName + lastName}!`
// console.log(msg);

// console.error("This is an error message!");
// console.warn("This is a warn message!");