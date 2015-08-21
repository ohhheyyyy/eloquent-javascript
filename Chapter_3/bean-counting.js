/**********************************************

Write a function countBs that takes a string as 
its only argument and returns a number that 
indicates how many uppercase “B” characters are 
in the string.


Next write a function called countChar that behaves 
like countBs, except it takes a second argument that 
indicates the character that is to be counted (rather 
than counting only uppercase “B” characters). Rewrite 
countBs to make use of this new function.

**********************************************/

function countBs(aString) {
	var countedBean = 0;
	for (var i = 0; i < aString.length; i++) {
		if (aString.charAt(i) == "B")
			countedBean ++;
	}
	return countedBean;
}

function countChar(aString, findChar) {
	var countCharacters = 0;
	for(var i = 0; i < aString.length; i++) {
		if(aString.charAt(i) == findChar)
			countCharacters++;
	}

	return countCharacters;
}

console.log(countBs("BBC News Boi"));
console.log(countChar("aaaabbbcc", "a"));

