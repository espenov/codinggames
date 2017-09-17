function getInput(fileName) {
    var fs = require('fs');
    var contents = fs.readFileSync(fileName, 'utf8');
    return contents.split('\r\n');
 }
 
var lineNumber = 0;
function readline() {return readlines[lineNumber++]; }
function print(s){console.log(s);}
function printErr(s){console.log(s);}

var readlines = getInput('war/input.txt');
 
 /////////// Support functions above //////////////
 var N = parseInt(readline());
 for (var i = 0; i < N; i++) {
     var telephone = readline();
 }
 
 // Write an action using print()
 // To debug: printErr('Debug messages...');
 
 
 // The number of elements (referencing a number) stored in the structure.
 print('number');