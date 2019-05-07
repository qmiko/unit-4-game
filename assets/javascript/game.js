$(document).ready(function () {

    var targetNumber = 77;
    var counter = 0;
    var numberOptions = [4, 3, 9, 11];
    var imageUrls = ["assets/images/bluecrystal.jpg", "assets/images/indigocrystal.jpg", "assets/images/redcrystal.jpg", "assets/images/whitecrystal.jpg"]
    var imageCrystal
    var wins = 0;
    var losses = 0;
      

    var resetGame = function(){
      counter = 0;
      targetNumber = Math.floor(Math.random()*77);
      $("#total").text(counter)
      $("#target").text(targetNumber);
      console.log(targetNumber);
    }
    resetGame();
    // console.log(imageObject)

    for (var i = 0; i < imageUrls.length; i++) {
        imageCrystal = $("<img>");
        imageCrystal.attr("src", imageUrls[i]);
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        console.log(imageUrls[i])
        imageCrystal.addClass("crystal-image");
        $("#crystals").append(imageCrystal);
        console.log(imageCrystal)
    }

    // $(imageObject).innerHTML


    $(".crystal-image").on("click" ,function(){

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;
        console.log(crystalValue)

        $("#total").text(counter)
      //variable to track wins and losses. present to user 
        if (counter === targetNumber) {
          wins = parseInt(wins);
          wins++;

          $("#wins").text(wins);
          $("#messages").text("You Win");
          resetGame();
        }
    
        else if (counter >= targetNumber) {
          losses = parseInt(losses);
          losses++;
          $("#losses").text(losses);
          $("#messages").text("You Lose by going over by " + Math.abs(targetNumber-counter) +" points")
          resetGame();

        }

    })    
})






























        // $("#crystal1").on("click", function(){

        //     var crystalValue = ($(this).attr("data-crystalValue"));

        //     crystalValue = parseInt(crystalValue);
        //     counter += crystalValue;

        //     alert("New Score: " + counter);

        //     if(counter === targetNumber){
        //         alert("You win!");
        //     }

        //     else if(counter >= targetNumber){
        //         alert("You lose");

        //     }

        // })

        // $("#crystal2").on("click", function(){
        //     var crystalValue = ($(this).attr("data-crystalValue"));
        //     crystalValue = parseInt(crystalValue);
        //     counter += crystalValue;
        //     console.log(crystalValue)

        //     alert("New Score" + counter);

        //     if(counter === targetNumber){
        //         alert("You Win!");
        //     }

        //     else if(counter >= targetNumber){
        //         alert("You lose");
        //     }
        // })

        // $("#crystal3").on("click", function(){
        //     var crystalValue = ($(this).attr("data-crystalValue"));
        //     crystalValue = parseInt(crystalValue);
        //     counter += crystalValue;

        //     alert("New Score" + counter);

        //     if(counter === targetNumber){
        //         alert("You Win!");
        //     }

        //     else if(counter >= targetNumber){
        //         alert("You lose");
        //     }
        // })

        // $("#crystal4").on("click", function(){
        //     var crystalValue = ($(this).attr("data-crystalValue"));
        //     crystalValue = parseInt(crystalValue);
        //     counter += crystalValue;

        //     alert("New Score" + counter);

        //     if(counter === targetNumber){
        //         alert("You Win!");
        //     }

        //     else if(counter >= targetNumber){
        //         alert("You lose");
        //     }
        // })

