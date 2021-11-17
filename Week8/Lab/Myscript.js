function findWinner(){
    
    event.preventDefault();
    console.log("At least something is working");
    var userInput = document.getElementById("userGuess").value; 
    var machineInput = Math.floor(Math.random() * 3);
    var result = "Error";
   

    if (userInput == machineInput) {

        result = "Draw";
       
    }

    else if (userInput == 0 && machineInput == 1) {

        result = "You Lose";

    }

    else if (userInput == 0 && machineInput == 2) {

        result = "You Win";
    }

    else if (userInput == 1 && machineInput == 0) {

        result = "You Win";
    } else if (userInput == 1 && machineInput == 2) {

        result = "You Lose";
    }

    else if (userInput == 2 && machineInput == 1) {

        result = "You win";
    }

    else if (userInput == 2 && machineInput == 0) {

        result = "You lose";
    }

    else {

        result = "Error 2";

    }
    console.log(machineInput);
    document.getElementById("placeholder").innerHTML = result;


}

    


   
   
   
   /*function findWinner(){
    Event.preventDefault();
    console.log("At least something is working");
    var userInput = 0;
    var machineInput = 0;
     var result = "Error";
   
   if (userInput == machineInput) {
    result = win;
     

   }else{

    document.getElemenetById("placeholder").innerHTML = "fuck you";
   }
      
   
}
*/