/**********************************************

Write a program that uses console.log to print all the numbers from 1 to 100, 
with several exceptions. For numbers divisible by 3, print "Fizz" instead of 
the number, for numbers divisible by 5 (and not 3), print "Buzz" instead of 
the number, and for numbers divisibile by both 3 AND 5, print "FizzBuzz"

**********************************************/

// initialize a for loop with variable num = 1; check to see
// whether variable num is less than or equal to 100, update variable
// num by one each time the for loop is complete.
// create if statement within for loop that checks to see whether
// num is evenly divisible by both 3 AND 5. if it is, log "FizzBuzz" to 
// the console; if num isn't evenly divisible by both 3 AND 5, check to see 
// whether it is divisible by only 3. if it is, log "Fizz" to the console;
// if num isn't evenly divisible by 3 AND 5 or only 3, check to see whether it
// evenly divisible by 5. if it is, log "Buzz" to the console. If num is not
// evenly divisible by 3 and 5, 3, or 5, log the value of num to the console.


for (num = 1; num <= 100; num++) {
	if ((num % 3 === 0) && (num % 5 === 0)) {
		console.log("FizzBuzz");
	} else if (num % 3 === 0) {
		console.log("Fizz");
	} else if (num % 5 === 0) {
		console.log("Buzz");
	} else {
		console.log(num);
	}
}