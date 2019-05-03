$(document).ready(function (){

    var targetNumber = [];
    var counter = 0;
    var numberOptions = [4, 3, 9, 11];
    var imageUrls = ["assets/images/bluecrystal.jpg", "assets/images/indigocrystal.jpg", "assets/images/redcrystal.jpg", "assets/images/whitecrystal.jpg" ]

    for (var i = 0; i < imageUrls.length; i++){
        var imageCrystal = $("<img>");

        imageCrystal.attr("src", imageUrls[i]);
        console.log(imageUrls[i])
        imageCrystal.addClass("crystal-image");

        $("#crystals").append(imageCrystal);

        
    }
    
        $("#crystal1").on("click", function(){
        
            var crystalValue = ($(this).attr("data-crystalValue"));
            
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
        
            alert("New Score: " + counter);
        
            if(counter === targetNumber){
                alert("You win!");
            }
        
            else if(counter >= targetNumber){
                alert("You lose");
        
            }
        
        })
        
        $("#crystal2").on("click", function(){
            var crystalValue = ($(this).attr("data-crystalValue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            console.log(crystalValue)
        
            alert("New Score" + counter);
        
            if(counter === targetNumber){
                alert("You Win!");
            }
        
            else if(counter >= targetNumber){
                alert("You lose");
            }
        })
        
        $("#crystal3").on("click", function(){
            var crystalValue = ($(this).attr("data-crystalValue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
        
            alert("New Score" + counter);
        
            if(counter === targetNumber){
                alert("You Win!");
            }
        
            else if(counter >= targetNumber){
                alert("You lose");
            }
        })
        
        $("#crystal4").on("click", function(){
            var crystalValue = ($(this).attr("data-crystalValue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
        
            alert("New Score" + counter);
        
            if(counter === targetNumber){
                alert("You Win!");
            }
        
            else if(counter >= targetNumber){
                alert("You lose");
            }
        })

})   
