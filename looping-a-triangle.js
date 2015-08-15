/**********************************************

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

**********************************************/

// initialize a for loop with variable block = "#", check to see
// whether variable block's lengeth is less than 8, update variable
// block by adding one "#" each time the for loop is complete
// log results of block variable to console to create a right-
// angled triangle

for(block = "#"; block.length < 8; block += "#"){
	console.log(block);
}