
//targetNumber is randomly generated between 19 and 120
var targetNumber = getRandomNum(120,19);
//Show the user the number that was selected
$("#number-to-guess").text(targetNumber);

//numberOptions array generates 4 random numbers between 1 and 12
var numberOptions = getRandomArray(12,1,4);
//For debugging:
//console.log("4 options: " + numberOptions);

var totalScore = 0;
var wins = 0;
var losses = 0;
var imagesArr = ["assets/images/green_crystal.jpg", "assets/images/blue_crystal.jpg", "assets/images/red_crystal.jpg", "assets/images/yellow_crystal.jpg"]

//Start page showing 0 for wins, losses, and total score
$("#post-win").text(" " + wins);
$("#post-loss").text(" " + losses);
$("#total-score").text(totalScore);

//Create image elements and set data-crystalvalue to each random number in the array numberOptions 
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", imagesArr[i]);

    //Add id so that initialize() can target and change random crystal value
    imageCrystal.attr("id", ("crystal" + i));

    //Assign each <img> a value from the numberOptions array.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    //For debugging:
    //console.log("imageCrystal " + i + " has value " + numberOptions[i]);
    
    $("#crystals").append(imageCrystal);
}

$(".crystal-image").on("click", function () {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //For debugging:
    //console.log("crystalValue is: " + crystalValue);

    //Add the crystal's value to the total and display the total
    totalScore += crystalValue;
    //For debugging:
    //console.log("totalScore variable is " + totalScore);
    $("#total-score").text(totalScore);

    if (totalScore === targetNumber) {
        $("#wins-losses-message").text("You win!");
        wins++;
        $("#post-win").text(wins);
        initializeGame();
    }

    else if (totalScore > targetNumber) {
        $("#wins-losses-message").text("You Lose!");
        losses++;
        $("#post-loss").text(losses);
        initializeGame();

    }
});

function initializeGame() {
    totalScore = 0;
    $("#total-score").text(totalScore);
    numberOptions = getRandomArray(12,1,4);
    targetNumber = getRandomNum(120,19);
    $("#number-to-guess").text(targetNumber);

    //Re-initialize each img element value with a new random crystal value.
    for (var i = 0; i < numberOptions.length; i++) {
        $("#crystal" + i).attr("data-crystalvalue", numberOptions[i])
        //For Debugging:
        //console.log("New crystal " + i + " value is: " + numberOptions[i]);
    }

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
        //For Debugging:
        //console.log("Crystal " + i + " is " + arrRandom[i]);
    };
    return arrRandom;
}