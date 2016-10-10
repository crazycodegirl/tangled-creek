$(document).ready(function(){



    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["Yes", "Probably So", "Quite Possibly", "Vision Hazy. Check back later", "Not Sure", "Better Not Tell You Now", "Probably Not", "Absolutely Not"];

    magic8Ball.askQuestion = function(question)
    {
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        var randomNumber = Math.random();

        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;

        var randomIndex = Math.floor(randomNumberForListOfAnswers);

        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text( answer );
        $("#answer").fadeIn(4000);

        console.log(question);
        console.log(answer);
    };
  $("#answer").hide();

var onClick = function() {

        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
        var question = prompt("ASK A YES/NO QUESTION!");
        magic8Ball.askQuestion(question);
        $("#8ball").effect("shake");

    };

    $("#questionButton").click( onClick );

});
