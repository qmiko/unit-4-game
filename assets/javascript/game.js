var targetNumber = [];
var counter = 0;
var numberOptions = [4, 3, 9, 11];

for (var i = 0; i < numberOptions.length; i++){

    var imageCrystal = $("<img>");
    //HELP! how to source image thru machine? w da query
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

};

$("crystal-image").click(function(){

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    //note to self study JS assignment operators ie: +=
    counter += crystalValue;

    alert("New Score: " + counter);

    if(counter === targetNumber){
        alert("You win!");
    }

    else if(counter >= targetNumber){
        alert("You lose");

    }

});

