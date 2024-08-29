
//Q1. Write a JavaScript program to get the first n elements of an array.[n can be any positive number].
//  let arr = [1,2,3,4,5,6];
//  let n =3;
//  let ans = arr.slice(0,n);
//  console.log(ans);



 //Q2. Write a javascript program to get the last n elements of an array.
//  let arr = [1,2,3,4,5,6];
//  let n =3;
//  let ans = arr.slice(arr.length-n);
//  console.log(ans);



//Q3. Write a javaScript program to check whether a string is blank or not.
// let str = prompt("Enter a string.");
// if(str.length == 0){
//     console.log("string is empty.");
// }
// else{
//     console.log("String is not empty.");
// }



//Q4. Write a javaScript program to test whether the character at the given index is lower case.
// let str = "Sachin";
// let idx = 3;
// if(str[idx] ==str[idx].toLowerCase()){
//     console.log("character is in lower case.");
// }
// else{
//     console.log("Character is not in lower case.");
// }



//Q5. Write a javaScript program to strip leading and trailing spaces from a string.
// let str = prompt("enter a string.");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

//Q6. Write a javaScript program to check if an element exists in an array or not.
let arr = ['a','b','c','d','e'];
let item = 'b';
if(arr.indexOf(item) != -1){
    console.log("element exists in array.");
}
else{
    console.log("element not present in array.");
}

  