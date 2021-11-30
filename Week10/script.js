function arrayFill() {
    event.preventDefault();
// Populating array with random variable

    var arrayLength = (document.getElementById("subNum").value) - 1;

    var numArray = new Array(arrayLength);

    var i = 0;

    for (i = 0; i <= arrayLength; i++) {
        numArray[i] = Math.floor(Math.random() * 11);
    }


    //Maths Calculations

    var sumTotal = 0;
    var mean = 0;

    for (i = 0; i <= arrayLength; i++) {

        sumTotal = sumTotal + numArray[i];

    }
    console.log(arrayLength);
    var mean = sumTotal / (arrayLength + 1);
    var meanFinal = mean.toFixed(2);

    alert("This is your array: " + numArray);
    alert("The is the sum of your array: " + sumTotal);
    alert("This is the mean of your array: " + meanFinal);









}


