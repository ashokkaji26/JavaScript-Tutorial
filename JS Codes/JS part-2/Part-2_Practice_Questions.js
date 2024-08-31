//---------------------------------------------------------- Q1. --------------------------------------------------------------

// Q1. Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
// let num = 143;
// if(num%10==0){
//     console.log("good");
// }
// else{
//     console.log("bad");
// }

//---------------------------------------------------------- Q2. --------------------------------------------------------------

// let fullName = prompt("Enter your fullName: ");
// let age = prompt("Enter your age: ");
// alert(`${fullName} is ${age} years old.`);

//---------------------------------------------------------- Q3. --------------------------------------------------------------
// Q3. 
// let quarter = 1;
// switch(quarter){
//     case 1:
//         console.log("Months in Quarter1 :January,February,March");
//         break;
//     case 2:
//         console.log("months in quarter2 :April, May, June");
//         break;
//     case 3:
//         console.log("Months in Quarter3 :July, August, September");
//         break;
//     case 4:
//         console.log("Months in Quarter4: October, November, December");
//         break;
//     default :
//         console.log("Not valid quarter.");
// }


//---------------------------------------------------------- Q4. --------------------------------------------------------------
//Q4. 
// let str = "Antman";
// if((str[0]==='A' || str[0]==='a') && str.length>5){
//     console.log("Golden string.");
// }
// else{
//     console.log("not a golden string.");
// }


//---------------------------------------------------------- Q5. --------------------------------------------------------------
//Q5. 
// let num1 = "32";
// let num2 = "47852";
 
// if( num1[num1.length-1]== 2  &&  num2[num2.length-1]== 2 ){
//     console.log("last digits are same.");
// }
// else{
//     console.log("last digits are not same");
// }


//---------------------------------------------------------- Q6. --------------------------------------------------------------
//Q6. WAP to find the largest of three numbers.
// M-1
// let num1 = 40;
// let num2 = 200;
// let num3 = 30;

// if(num1>num2 && num1>num3){
//     console.log(`${num1} is greatest.`);
// }
// else if(num2>num1 && num2>num3){
//     console.log(`${num2} is greatest.`);
// }
// else if(num3>num1 && num3>num2){
//     console.log(`${num3} is greatest.`);
// }
// else{
//     console.log("invalid number.");
// }

//M2. 
let a = 5;
let b = 20;
let c = 15;

if(a>b){
    if(a>c){
        console.log(a, "is greatest.");
    }
    else{
        console.log(c, " is greatest.");
    }
}
else{
    if(b>c){
        console.log(b, "is greatest.");
    }
    else{
        console.log(c, "is greatest.");
    }
}

//--------------------------------------------------------------------------------------------------------------------------------