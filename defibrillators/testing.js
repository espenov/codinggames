

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
 
 var readlines = getInput('defibrillators/input.txt');
 
 /////////// Support functions above //////////////

 var LON = parseFloat(readline().replace(',','.'));
 var LAT = parseFloat(readline().replace(',','.'));
 var N = parseInt(readline());
 var distance = 99999999;
 var defibMinName = 0;
 for (var i = 0; i < N; i++) {
     var DEFIB = readline().split(';');
     var defibLON = parseFloat(DEFIB[4].replace(',','.'));
     var defibLAT = parseFloat(DEFIB[5].replace(',','.'));
     var x = (LON - defibLON)* Math.cos((LAT + defibLAT)/2);
     var y = (LAT - defibLAT);
     var d = Math.sqrt(x*x + y*y) * 6371;
     if (d<distance) {
         distance = d;
         defibMinName = DEFIB[1];

     }
    }
print(defibMinName);
    
 // Write an action using print()
 // To debug: printErr('Debug messages...');