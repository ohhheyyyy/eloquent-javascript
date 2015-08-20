/**********************************************

Define a recursive function isEven that tests 
whether a number is even or odd by using % 2. 
The function should accept a number parameter 
and return a Boolean.

**********************************************/

function isEven(N) {
  if (N % 2 === 0) {
  	return(true);
  } else if (N % 2 === 1) {
  	return(false);
  } else if (N < 0) {
  	return(isEven(-N));
  } else  {
  	return(isEven(N - 2));
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));