// prompt se hum user se value le sakte hain
let num1 = prompt("Enter Your First Value");
let num2 = prompt("Enter Your Second Value");

//string ko number convert kiya hai
num1 = Number(num1);
num2 = Number(num2);

//Addition
let sum = num1 + num2;

//Subtraction
let minus = num1 - num2;

//Multiplication
let multiply = num1 * num2;

//Division
let divide = num1 / num2;

//Answers
alert(
  "Addition : " +
    sum +
    "\n" +
    "Subtraction : " +
    minus +
    "\n" +
    "Multiplication : " +
    multiply +
    "\n" +
    "Division : " +
    divide
);
