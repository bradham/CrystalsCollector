
//To do: targetNumber needs to be randomly generated between 19 and 120
var targetNumber = 53;
//Show the user the number that was selected
$("#number-to-guess").text(targetNumber);

var totalScore = 0;
//To do: numberOptions needs to be generated between 1 and 12
var numberOptions = [10, 5, 3, 7];
var wins = 0;
var losses = 0;

//Create an image for each item in the array numberOptions 
for (var i = 0; i < numberOptions.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", "assets/images/green_crystal.jpg");

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

}