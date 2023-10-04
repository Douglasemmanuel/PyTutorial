"use strict"
let operator = prompt("enter the operator you want to use to perform calculation")
let num1 = Number(prompt("enter the first number:"));
let num2 = Number(prompt("enter the second number:"));
let result;
if(operator =='+'){alert("the result is " + (result=num1+num2));}
else if(operator =='-'){alert("the result is " + (result=num1-num2));}
else if(operator =='*'){alert("the result is " + (result=num1*num2));}
else if(operator =='/'){alert("the result is " + (result=num1/num2));}
else if(operator =='^'){alert("the result is " + (result=num1**num2));}
else {alert("operator does not exist on this calculator");}


let num=prompt("input a number");
if (Number(num)%2 ==0){alert("the number is an even number");}
else {alert("the number is and odd number");}
 



