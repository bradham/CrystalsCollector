
//targetNumber is randomly generated between 19 and 120
var targetNumber = getRandomNum(120,19);
//Show the user the number that was selected
$("#number-to-guess").text(targetNumber);


//numberOptions array generates 4 random numbers between 1 and 12
var numberOptions = getRandomArray(12,1,4);
console.log("4 options: " + numberOptions);
// for (var i = 0;i < 4;i++) {
//     numberOptions[i] = getRandomNum(12,1);
//     console.log("Crystal " + i + " is " + numberOptions[i]);
// };
var totalScore = 0;
var wins = 0;
var losses = 0;
var imagesArr = ["assets/images/green_crystal.jpg", "assets/images/blue_crystal.jpg", "assets/images/red_crystal.jpg", "assets/images/yellow_crystal.jpg"]

//Create an image for each item in the array numberOptions 
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imagesArr[i]);

    //Assign each <img> a value from the numberOptions array.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    console.log("imageCrystal " + i + " has value " + numberOptions[i]);

    $("#crystals").append(imageCrystal);
}

//not needed because we now have crystalValue
//var increment = numberOptions[Math.round(Math.random())];


$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    console.log("crystalValue is: " + crystalValue);

    //Add the crystal's value to the total and display the total
    totalScore += crystalValue;
    console.log("totalScore variable is " + totalScore);
    $("#total-score").text(totalScore);

    if (totalScore === targetNumber) {
        console.log("You Win!");
        $("#wins-losses-message").text("You win!");
        wins++;
        $("#wins-total").text(wins);
        initializeGame();

    }

    else if (totalScore > targetNumber) {
        console.log("You Lose!");
        $("#wins-losses-message").text("You Lose!");
        losses++;
        $("#losses-total").text(losses);
        initializeGame();

    }
});

function initializeGame() {
    totalScore = 0;
    $("#total-score").text(totalScore);
    numberOptions = getRandomArray(12,1,4);
    targetNumber = getRandomNum(120,19);
    $("#number-to-guess").text(targetNumber);

}

function getRandomNum(max,min) {
    //found func to return number between range
    //https://stackoverflow.com/questions/22363616/generate-random-number-between-2-variables-jquery/22363927
    return (Math.floor(Math.random()*(max-min+1)+min));
}

function getRandomArray(max,min,length) {
    var arrRandom = [];
    for (var i = 0;i < length;i++) {
        arrRandom[i] = getRandomNum(max,min);
        console.log("Crystal " + i + " is " + arrRandom[i]);
    };
    return arrRandom;
}