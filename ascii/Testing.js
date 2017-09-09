function getIndex(c){
    var n = 'A'.charCodeAt(0);
    var m = c.toUpperCase().charCodeAt(0);
    if (m>90||m<65) { 
        return 26} 
    return m - 65;
}

function printStr(pStr,h)
{
    for (var y=0;y<h;y++){
        var s = '';
        for (var x=0;x<pStr.length;x++){
            s +=sT[y][getIndex(pStr.charAt(x))];
        }
        console.log(s);
    }
}
var L = 4; //parseInt(readline());
var H = 5; //parseInt(readline());
//var T = readline();
var sT= new Array();
var temp = '';
    var ROWs = [' #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ',
               '# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ',
               '### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ',
               '# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ',
               '# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  '];
for (var i = 0; i < H; i++) {
    var oA= new Array();
    var ROW=ROWs[i]
    for (var n=0;n<27;n++) {
        temp = ROW.substr(n*L,L);
        oA.push(temp);
    }    
    sT.push(oA);
}

printStr('abc&def@',H);