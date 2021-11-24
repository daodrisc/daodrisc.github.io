function bottles() {

    var disp = [];
   
    var j = 99;
   
    for (i = 99; i >= 0; i--) {

        if (j > 0) {
            disp[i] = String(i + " Bottles of beer on the wall, " + i + " bottles of beer," + "<br />" +
                " Take one down and pass it around, " + (j = j - 1) + " bottles of beer on the wall." + "<br />" + "<br />") ;
                
        }
        else {


            disp[i] = "No more bottles of beer on the wall!"
        }


    }

    var songOrder = disp.reverse();
    document.getElementById("lyrics").innerHTML = songOrder.join('');
}



