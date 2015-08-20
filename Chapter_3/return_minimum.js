/**********************************************

Write a function min that takes two arguments and 
returns their minimum. Essentially, mimic the standard
function Math.min that returns its smallest argument.

**********************************************/

// declare a function called min that accepts two parameters

function min(num1, num2) {

// initialize if loop that checks various values of arguments –
// if 1st argument is greater than 2nd argument, return 2nd argument	

  if (num1 > num2) {
  	return (num2);

// if 1st argument is less than 2nd argument, return 1st argument

  } else if (num1 < num2) {
    return (num1);

// if 1st argument and 2nd argument are neither greater than or less than
// one another, return the string saying they are equal.

  } else {
  	return ("The numbers are equal.");
  }
}

// log results to console
console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(2, 2));