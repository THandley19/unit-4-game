var numberOptions = [];
var targetNumber = Math.floor(Math.random() * 120) + 19;
var wins = 0;
var losses = 0;
var counter = 0;

  $("#number-to-guess").text(targetNumber);
  $("#total-wins").text(wins);
  $("#total-losses").text(losses);


  function randomnum () {
      for (let i = 0; i < 4; i++) {
        var rand = (Math.floor(Math.random() * 12) + 1)
        var hold = rand.toString()
        numberOptions.push(hold)
      }
  } 
  randomnum()

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  function resetgame() {
    randomnum();
    targetNumber = Math.floor(Math.random() * 120) + 19; 
    counter = 0;
    $("#number-to-guess, #total-score").empty();
    $("#number-to-guess").text(targetNumber);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    $("#total-score").text(counter);

    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === targetNumber) {
      alert("You win!");
      wins++;
      $("#total-wins").text(wins);
      resetgame();
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
      losses++;
      $("#total-losses").text(losses);
      resetgame();
    }



});