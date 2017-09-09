var L = 4; //parseInt(readline());
var H = 5; //parseInt(readline());
//var T = readline();
var sT= new Array();
var temp = '';
    var ROW = [' #  ##   ## ##  ### ###  ## # # ###  ## # # #   # # ###  #  ##   #  ##   ## ### # # # # # # # # # # ### ### ',
               '# # # # #   # # #   #   #   # #  #    # # # #   ### # # # # # # # # # # #    #  # # # # # # # # # #   #   # ',
               '### ##  #   # # ##  ##  # # ###  #    # ##  #   ### # # # # ##  # # ##   #   #  # # # # ###  #   #   #   ## ',
               '# # # # #   # # #   #   # # # #  #  # # # # #   # # # # # # #    ## # #   #  #  # # # # ### # #  #  #       ',
               '# # ##   ## ##  ### #    ## # # ###  #  # # ### # # # #  #  #     # # # ##   #  ###  #  # # # #  #  ###  #  '];
for (var i = 0; i < H; i++) {
    var oA= new Array();
    for (var n=0;n<26;n++) {
        temp = ROW[i].substr(n*L,L);
        oA.push(temp);
    }    
    sT.push(oA);
}
console.log(sT[0][4]);
console.log(sT[1][4]);
console.log(sT[2][4]);
console.log(sT[3][4]);
console.log(sT[4][4]);
