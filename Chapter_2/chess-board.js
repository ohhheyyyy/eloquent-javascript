/**********************************************

Write a program that creates a string that represents an 8×8 
grid, using newline characters to separate lines. At each position 
of the grid there is either a space or a “#” character. The 
characters should form a chess board.

**********************************************/


var size = 8;
var line = '';
 
for(var i = 0; i < size / 2; i++){
  line += '# ';
}

for(i = 0; i < size; i ++){
  if(i % 2 === 0){ //if i is an even row then add a space
    console.log(' ' + line);
  }
  else{
    console.log(line);
  }
}


// var size = 8;

// var board = "";

// for (var y = 0; y < size; y++) {
//   for (var x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0)
//       board += " ";
//     else
//       board += "#";
//   }
//   board += "\n";
// }

// console.log(board);