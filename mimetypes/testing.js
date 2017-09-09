

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

var readlines = getInput('mimetypes/input.txt');

/////////// Support functions above //////////////

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.

var mimeArray = new Array();
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var EXT = inputs[0].toLowerCase(); // file extension
    var MT = inputs[1]; // MIME type.
    mimeArray.push([EXT,MT]);
}
for (var i = 0; i < Q; i++) {
    var FNAME = readline(); // One file name per line.
    var fileExt = FNAME.toString().toLowerCase().substring(FNAME.lastIndexOf('.')+1,FNAME.length);
    var b = mimeArray.filter(n=> n[0] == fileExt);
    var s = 'UNKNOWN';
    if (b.length>0&&fileExt.length!=FNAME.length)
        s = b[0][1];
    print(s);
}

// Write an action using print()
// To debug: printErr('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
//print('UNKNOWN');

