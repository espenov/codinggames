

function getInput(fileName) {
    var fs = require('fs');
    var contents = fs.readFileSync(fileName, 'utf8');
    return contents.split('\r\n');
 }
 
 var lineNumber = 0;
 function readline() {
     return readlines[lineNumber++];
 }
 
 function print(s){
     console.log(s);
 }
 
 var readlines = getInput('horserace/input.txt');
 
 /////////// Support functions above //////////////

 var N = parseInt(readline());
 var horses = [];
 for (var i = 0; i < N; i++) {
     var pi = parseInt(readline());
     horses.push(pi);
 }

horses.sort(function compareNumbers(a, b) {return a - b;});

var distance = 99999;

for (var m = 1; m < N; m++) {
    if ((horses[m] - horses[m-1])< distance){
        distance = horses[m] - horses[m-1];
    }
}
 
print(distance);