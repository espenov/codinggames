function getInput(fileName) {
    var fs = require('fs');
    var fN = require('path').dirname(require.main.filename) + '/' +fileName;
    var contents = fs.readFileSync(fN, 'utf8');
    return contents.split('\r\n');
 }
 
var lineNumber = 0;
function readline() {return readlines[lineNumber++]; }
function print(s){console.log(s);}
function printErr(s){console.log(s);}

var readlines = getInput('input.txt');
 
 /////////// Support functions above //////////////

 function Node(digit,name) {
     this.digit = digit;
     this.name = name;
     this.children = [];
 }

 function Tree(data) {
    this.baseNodes = new Array();
    this.noOfItems = 0;
    this.add = function (tNumber)   {   
        var firstNum = tNumber.charAt(0);
        if (typeof this.baseNodes[firstNum] == 'undefined') {
            this.baseNodes[firstNum] = new Node(firstNum,tNumber.toString().substring(0,0)); 
            this.noOfItems += 1;
        }
        var currentNode = this.baseNodes[firstNum];
        for (let i=1; i<tNumber.length;i++) {
            var thisDigit = tNumber.charAt(i)
            if (typeof currentNode[thisDigit] == 'undefined') {
                currentNode[thisDigit] = new Node(thisDigit,tNumber.toString().substring(0,i)); 
                this.noOfItems += 1;
            }
            currentNode =  currentNode[thisDigit];   
            //
        }
    }    
}
    

 var tree = new Tree();
 var N = parseInt(readline());
 for (var i = 0; i < N; i++) {
     var telephone = readline();
     tree.add(telephone);
 }
 
 // Write an action using print()
 // To debug: printErr('Debug messages...');
 
 print (tree.noOfItems);

 // The number of elements (referencing a number) stored in the structure.
 //print('number');

 // populate
 // loop over no of digits in number
 // start by root
