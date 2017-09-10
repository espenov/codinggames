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

 function evalCard(card) {
    switch(card.charAt(0)) {
        case 'A': return 14;
        case 'J': return 11;
        case 'Q': return 12;
        case 'K': return 13;
        default: return parseInt(card);
    }    
}

 var n = parseInt(readline()); // the number of cards for player 1
 var deckA = [];
 var deckA_playedcards = [];
 for (var i = 0; i < n; i++) {
     var s = readline();
     deckA.push(s.substr(0,s.length-1));
 }
 
 var m = parseInt(readline()); // the number of cards for player 2
 var deckB = [];
 var deckB_playedcards = [];
 for (var i = 0; i < m; i++) {
    var s = readline();
    deckB.push(s.substr(0,s.length-1));
}

deckA.reverse();
deckB.reverse();

 // Write an action using print()
 // To debug: printErr('Debug messages...');
 var winner = '';
 var cardA, cardB;
 var rounds = 0;
 while (deckA.length>0 && deckB.length>0){
    // play card
    rounds +=1;
    cardA = deckA.pop();
    deckA_playedcards.push(cardA);

    cardB = deckB.pop();
    deckB_playedcards.push(cardB);

//    printErr(deckA.toString()+':'+cardA);
//    printErr(deckB.toString()+':'+cardB);
    printErr(cardA+':'+deckA.reverse().toString());
    printErr(cardB+':'+deckB.reverse().toString());

    
    if (evalCard(cardA)>evalCard(cardB) ) {// A wins the card
        // first move player 1 cards to the deck
        deckA = deckA_playedcards.splice(0,deckA_playedcards.length).concat(deckA);
        // then the won cards
        deckA = deckB_playedcards.splice(0,deckB_playedcards.length).concat(deckA);
        print('A wins');
    }
    else if (evalCard(cardA)<evalCard(cardB) ) {// B wins the card
        // first move player 1 cards to the deck
        deckB = deckA_playedcards.splice(0,deckA_playedcards.length).concat(deckB);
        // first move your own cards to the deck
        deckB = deckB_playedcards.splice(0,deckB_playedcards.length).concat(deckB);
        print('B wins');
    }
    else {
        // War: move 3 card to the playedcard deck
        deckA_playedcards = deckA_playedcards.concat(deckA.splice(deckA.length-3,deckA.length).reverse());
        deckB_playedcards = deckB_playedcards.concat(deckB.splice(deckB.length-3,deckB.length).reverse());
        // Out of cards during war = PAT
        if (deckA.length==0||deckB.length==0) {
            winner = 'PAT';
            break;
        }
        rounds -=1;
        printErr('War');
    }
    printErr('A:'+cardA+':'+deckA.reverse().toString());
    printErr('B:'+cardB+':'+deckB.reverse().toString());
    printErr('Ap:' + deckA_playedcards.reverse().toString());
    printErr('Bp:' + deckB_playedcards.reverse().toString());
    
    printErr(rounds);
    

    if (rounds%10==0)
        printErr(rounds);
    printErr('-----------');
    
}

if (deckA.length==0) winner = '2 ' + rounds;
if (deckB.length==0) winner = '1 ' + rounds;
    
print(winner);