function gradCalc() {
    event.preventDefault();
    var grades = [document.getElementById("subNum").value]
    console.log(grades);


    for (i = 1; i <= document.getElementById("subNum").value; i++) {

        var score = prompt("Enter Score for Subject" + " " + i);
        
        console.log(grades[i]);
        if (score >=1 && score <40) {

            alert("You have failed this exam")


        }
        else if (score >= 40 && score < 50) {
            alert("You have received an E")

        }

        else if (score >= 50 && score < 60) {
            alert("You have received a D")

        }

        else if (score >= 60 && score < 70) {
            alert("You have received a C")

        }
        else if (score >= 70 && score < 80) {
            alert("You have received a B")

        }
        else if (score >= 80 && score < 90) {
            alert("You have received an A")

        }
        else if (score >= 90 && score <= 100) {
            alert("You have received a A+")

        }

        else if(score === null){
            return;
        }



    }




}















