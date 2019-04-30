var targetNumber = [];
var counter = 0;
var numberOptions = [4, 3, 9, 11];

for (var i = 0; i < numberOptions.length; i++){
    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("src", "https://www.shutterstock.com/image-photo/violet-crystal-stone-macro-mineral-purple-1320122969");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);

}
